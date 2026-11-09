const API_URL: string = import.meta.env.VITE_API_URL;
const CHARACTER_DELAY_MS = 12;
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const DEFAULT_REQUEST_ERROR = 'Не удалось получить ответ ассистента.';

type AssistantStreamEvent =
    | {type: 'delta'; delta: string}
    | {type: 'done'}
    | {type: 'error'; error: string};

const isRecord = (value: unknown): value is Record<string, unknown> => {
    return typeof value === 'object' && value !== null;
};

const parseAssistantStreamEvent = (line: string): AssistantStreamEvent => {
    let value: unknown;

    try {
        value = JSON.parse(line);
    } catch {
        throw new Error('Сервер вернул некорректный поток данных.');
    }

    if (!isRecord(value)) {
        throw new Error('Сервер вернул некорректный поток данных.');
    }

    if (value.type === 'delta' && typeof value.delta === 'string') {
        return {type: 'delta', delta: value.delta};
    }

    if (value.type === 'done') {
        return {type: 'done'};
    }

    if (value.type === 'error' && typeof value.error === 'string') {
        return {type: 'error', error: value.error};
    }

    throw new Error('Сервер вернул неизвестное потоковое событие.');
};

const getResponseErrorMessage = async (response: Response) => {
    try {
        const data: unknown = await response.json();

        if (isRecord(data) && typeof data.error === 'string') {
            return data.error;
        }
    } catch {
        return DEFAULT_REQUEST_ERROR;
    }

    return DEFAULT_REQUEST_ERROR;
};

const createAbortError = () => {
    return new DOMException('Request aborted', 'AbortError');
};

const waitForNextCharacter = (signal: AbortSignal) => {
    if (signal.aborted) {
        return Promise.reject(createAbortError());
    }

    return new Promise<void>((resolve, reject) => {
        const handleAbort = () => {
            window.clearTimeout(timeoutId);
            reject(createAbortError());
        };

        const timeoutId = window.setTimeout(() => {
            signal.removeEventListener('abort', handleAbort);
            resolve();
        }, CHARACTER_DELAY_MS);

        signal.addEventListener('abort', handleAbort, {once: true});
    });
};

const renderTextDelta = async (
    delta: string,
    appendText: (text: string) => void,
    signal: AbortSignal,
    animateCharacters: boolean,
) => {
    if (!animateCharacters) {
        appendText(delta);
        return;
    }

    for (const character of Array.from(delta)) {
        if (signal.aborted) {
            throw createAbortError();
        }

        appendText(character);
        await waitForNextCharacter(signal);
    }
};

export const streamAssistantResponse = async (
    prompt: string,
    signal: AbortSignal,
    appendText: (text: string) => void,
) => {
    const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        credentials: 'include',
        signal,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({prompt}),
    });

    if (!response.ok) {
        throw new Error(await getResponseErrorMessage(response));
    }

    if (!response.body) {
        throw new Error('Браузер не поддерживает потоковый ответ.');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    const animateCharacters = !window.matchMedia(REDUCED_MOTION_QUERY).matches;
    let buffer = '';
    let streamCompleted = false;

    const processLine = async (line: string) => {
        if (!line.trim()) {
            return;
        }

        const event = parseAssistantStreamEvent(line);

        if (event.type === 'delta') {
            await renderTextDelta(
                event.delta,
                appendText,
                signal,
                animateCharacters,
            );
            return;
        }

        if (event.type === 'error') {
            throw new Error(event.error);
        }

        streamCompleted = true;
    };

    try {
        while (true) {
            const {done, value} = await reader.read();

            if (done) {
                buffer += decoder.decode();
                break;
            }

            buffer += decoder.decode(value, {stream: true});
            const lines = buffer.split('\n');
            buffer = lines.pop() ?? '';

            for (const line of lines) {
                await processLine(line);
            }
        }

        if (buffer.trim()) {
            await processLine(buffer);
        }

        if (!streamCompleted) {
            throw new Error('Соединение с ассистентом было прервано.');
        }
    } catch (error) {
        await reader.cancel().catch(() => undefined);
        throw error;
    } finally {
        reader.releaseLock();
    }
};

export const isAbortError = (error: unknown) => {
    return error instanceof DOMException && error.name === 'AbortError';
};
