import {act} from 'react';
import {cleanup, fireEvent, render, screen, waitFor} from '@testing-library/react';
import {afterEach, beforeEach, describe, expect, test, vi} from 'vitest';

const assistantStreamMocks = vi.hoisted(() => ({
    isAbortError: vi.fn(() => false),
    streamAssistantResponse: vi.fn(),
}));

vi.mock('./assistantStream', () => assistantStreamMocks);

import {Assistant} from './Assistant';

describe('Assistant Turnstile submission flow', () => {
    let turnstileOptions: TurnstileRenderOptions | undefined;
    let turnstile: TurnstileApi;

    beforeEach(() => {
        turnstileOptions = undefined;
        turnstile = {
            render: vi.fn((_container, options) => {
                turnstileOptions = options;
                return 'assistant-widget';
            }),
            execute: vi.fn(),
            reset: vi.fn(),
            remove: vi.fn(),
        };
        window.turnstile = turnstile;

        assistantStreamMocks.streamAssistantResponse.mockImplementation(
            async (
                _prompt: string,
                _turnstileToken: string,
                _signal: AbortSignal,
                appendText: (text: string) => void,
            ) => {
                appendText('Готовый ответ');
            },
        );
    });

    afterEach(() => {
        cleanup();
        delete window.turnstile;
        vi.clearAllMocks();
    });

    test('verifies only on submit and automatically sends the pending prompt once', async () => {
        render(<Assistant/>);

        await waitFor(() => {
            expect(turnstile.render).toHaveBeenCalledTimes(1);
        });

        const input = screen.getByLabelText('Вопрос ассистенту') as HTMLTextAreaElement;
        const output = screen.getByLabelText('Ответ ассистента') as HTMLTextAreaElement;

        fireEvent.change(input, {target: {value: 'Первый вопрос'}});

        const submitButton = screen.getByRole('button', {name: 'Enter'}) as HTMLButtonElement;
        expect(submitButton.disabled).toBe(false);
        expect(turnstile.execute).not.toHaveBeenCalled();
        expect(assistantStreamMocks.streamAssistantResponse).not.toHaveBeenCalled();

        fireEvent.click(submitButton);

        expect(submitButton.textContent).toBe('Enter');
        expect(submitButton.disabled).toBe(true);
        expect(input.disabled).toBe(true);
        expect(turnstile.execute).toHaveBeenCalledTimes(1);
        expect(turnstile.execute).toHaveBeenCalledWith('assistant-widget');
        expect(assistantStreamMocks.streamAssistantResponse).not.toHaveBeenCalled();

        act(() => {
            turnstileOptions?.callback('fresh-token');
            turnstileOptions?.callback('replayed-token');
        });

        await waitFor(() => {
            expect(assistantStreamMocks.streamAssistantResponse).toHaveBeenCalledTimes(1);
        });
        expect(assistantStreamMocks.streamAssistantResponse).toHaveBeenCalledWith(
            'Первый вопрос',
            'fresh-token',
            expect.any(AbortSignal),
            expect.any(Function),
        );

        await waitFor(() => {
            expect(output.value).toBe('Готовый ответ');
            expect(input.value).toBe('');
        });
        expect((screen.getByRole('button', {name: 'Enter'}) as HTMLButtonElement).disabled).toBe(true);
        expect(turnstile.execute).toHaveBeenCalledTimes(1);

        fireEvent.change(input, {target: {value: 'Второй вопрос'}});

        expect((screen.getByRole('button', {name: 'Enter'}) as HTMLButtonElement).disabled).toBe(false);
        expect(turnstile.execute).toHaveBeenCalledTimes(1);

        fireEvent.click(screen.getByRole('button', {name: 'Enter'}));

        expect(turnstile.execute).toHaveBeenCalledTimes(2);
        expect(assistantStreamMocks.streamAssistantResponse).toHaveBeenCalledTimes(1);
    });
});
