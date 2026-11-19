import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react';

const TURNSTILE_SCRIPT_ID = 'cloudflare-turnstile-script';
const TURNSTILE_SCRIPT_URL =
    'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
const TURNSTILE_ACTION = 'portfolio_chat';
const TURNSTILE_SCRIPT_TIMEOUT_MS = 10_000;

let turnstileScriptPromise: Promise<TurnstileApi> | null = null;

const getLoadedTurnstile = () => {
    return window.turnstile ?? null;
};

const loadTurnstile = () => {
    const loadedTurnstile = getLoadedTurnstile();

    if (loadedTurnstile) {
        return Promise.resolve(loadedTurnstile);
    }

    if (turnstileScriptPromise) {
        return turnstileScriptPromise;
    }

    turnstileScriptPromise = new Promise<TurnstileApi>((resolve, reject) => {
        let timeoutId: number | null = null;
        let script: HTMLScriptElement;

        const cleanup = () => {
            script.removeEventListener('load', finishLoading);
            script.removeEventListener('error', failLoading);

            if (timeoutId !== null) {
                window.clearTimeout(timeoutId);
            }
        };

        const finishLoading = () => {
            const turnstile = getLoadedTurnstile();

            if (turnstile) {
                cleanup();
                resolve(turnstile);
                return;
            }

            cleanup();
            turnstileScriptPromise = null;
            reject(new Error('Cloudflare Turnstile API is unavailable'));
        };

        const failLoading = () => {
            cleanup();
            turnstileScriptPromise = null;
            script.remove();
            reject(new Error('Cloudflare Turnstile script failed to load'));
        };

        const existingScript = document.getElementById(
            TURNSTILE_SCRIPT_ID,
        ) as HTMLScriptElement | null;

        if (existingScript) {
            script = existingScript;
        } else {
            script = document.createElement('script');
            script.id = TURNSTILE_SCRIPT_ID;
            script.src = TURNSTILE_SCRIPT_URL;
            script.async = true;
            script.defer = true;
        }

        script.addEventListener('load', finishLoading, {once: true});
        script.addEventListener('error', failLoading, {once: true});

        timeoutId = window.setTimeout(failLoading, TURNSTILE_SCRIPT_TIMEOUT_MS);

        if (!existingScript) {
            document.head.append(script);
        }
    });

    return turnstileScriptPromise;
};

export type TurnstileStatus = 'idle' | 'checking' | 'ready' | 'error';

export type TurnstileWidgetHandle = {
    requestToken: () => void;
    reset: () => void;
};

type TurnstileWidgetProps = {
    siteKey: string;
    onVerified: (token: string) => void;
    onStatusChange: (status: TurnstileStatus) => void;
    onInteractionChange: (isInteractive: boolean) => void;
};

export const TurnstileWidget = forwardRef<
    TurnstileWidgetHandle,
    TurnstileWidgetProps
>(({
    siteKey,
    onVerified,
    onStatusChange,
    onInteractionChange,
}, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const widgetIdRef = useRef<string | null>(null);
    const pendingExecutionRef = useRef(false);

    const markAsIdle = useCallback(() => {
        onStatusChange('idle');
        onInteractionChange(false);
    }, [onInteractionChange, onStatusChange]);

    const resetRenderedWidget = useCallback(() => {
        const widgetId = widgetIdRef.current;

        if (widgetId && window.turnstile) {
            window.turnstile.reset(widgetId);
        }
    }, []);

    const requestToken = useCallback(() => {
        pendingExecutionRef.current = true;
        onStatusChange('checking');
        onInteractionChange(false);

        const widgetId = widgetIdRef.current;

        if (widgetId && window.turnstile) {
            window.turnstile.reset(widgetId);
            window.turnstile.execute(widgetId);
        }
    }, [onInteractionChange, onStatusChange]);

    const reset = useCallback(() => {
        pendingExecutionRef.current = false;
        resetRenderedWidget();
        markAsIdle();
    }, [markAsIdle, resetRenderedWidget]);

    useImperativeHandle(ref, () => ({
        requestToken,
        reset,
    }), [requestToken, reset]);

    useEffect(() => {
        let disposed = false;

        markAsIdle();

        if (!siteKey) {
            onStatusChange('error');
            return;
        }

        void loadTurnstile()
            .then((turnstile) => {
                if (disposed || !containerRef.current) {
                    return;
                }

                const widgetId = turnstile.render(containerRef.current, {
                    sitekey: siteKey,
                    action: TURNSTILE_ACTION,
                    theme: 'dark',
                    size: 'flexible',
                    appearance: 'interaction-only',
                    execution: 'execute',
                    'response-field': false,
                    callback: (token) => {
                        pendingExecutionRef.current = false;
                        onStatusChange('ready');
                        onInteractionChange(false);
                        onVerified(token);
                    },
                    'error-callback': () => {
                        pendingExecutionRef.current = false;
                        onStatusChange('error');
                        onInteractionChange(false);
                        return true;
                    },
                    'expired-callback': () => {
                        pendingExecutionRef.current = false;
                        resetRenderedWidget();
                        markAsIdle();
                    },
                    'timeout-callback': () => {
                        pendingExecutionRef.current = false;
                        resetRenderedWidget();
                        markAsIdle();
                    },
                    'before-interactive-callback': () => {
                        onInteractionChange(true);
                    },
                    'after-interactive-callback': () => {
                        onInteractionChange(false);
                    },
                    'unsupported-callback': () => {
                        pendingExecutionRef.current = false;
                        onStatusChange('error');
                        onInteractionChange(false);
                    },
                });
                widgetIdRef.current = widgetId;

                if (pendingExecutionRef.current) {
                    turnstile.execute(widgetId);
                }
            })
            .catch(() => {
                if (!disposed) {
                    onStatusChange('error');
                }
            });

        return () => {
            disposed = true;
            pendingExecutionRef.current = false;

            const widgetId = widgetIdRef.current;
            widgetIdRef.current = null;

            if (widgetId && window.turnstile) {
                window.turnstile.remove(widgetId);
            }
        };
    }, [
        markAsIdle,
        onInteractionChange,
        onStatusChange,
        onVerified,
        resetRenderedWidget,
        siteKey,
    ]);

    return <div ref={containerRef}/>;
});

TurnstileWidget.displayName = 'TurnstileWidget';
