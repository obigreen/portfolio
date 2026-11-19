import {
    useCallback,
    useEffect,
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

type TurnstileWidgetProps = {
    siteKey: string;
    active: boolean;
    onTokenChange: (token: string | null) => void;
    onStatusChange: (status: 'checking' | 'ready' | 'error') => void;
    onInteractionChange: (isInteractive: boolean) => void;
};

export const TurnstileWidget = ({
    siteKey,
    active,
    onTokenChange,
    onStatusChange,
    onInteractionChange,
}: TurnstileWidgetProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const widgetIdRef = useRef<string | null>(null);
    const activeRef = useRef(active);

    const markAsChecking = useCallback(() => {
        onTokenChange(null);
        onStatusChange('checking');
        onInteractionChange(false);
    }, [onInteractionChange, onStatusChange, onTokenChange]);

    const resetRenderedWidget = useCallback(() => {
        const widgetId = widgetIdRef.current;

        if (widgetId && window.turnstile) {
            window.turnstile.reset(widgetId);
        }
    }, []);

    const executeRenderedWidget = useCallback(() => {
        const widgetId = widgetIdRef.current;

        if (widgetId && window.turnstile) {
            window.turnstile.execute(widgetId);
        }
    }, []);

    const startChallenge = useCallback(() => {
        markAsChecking();
        executeRenderedWidget();
    }, [executeRenderedWidget, markAsChecking]);

    useEffect(() => {
        activeRef.current = active;

        if (!siteKey) {
            return;
        }

        if (active) {
            startChallenge();
            return;
        }

        markAsChecking();
        resetRenderedWidget();
    }, [active, markAsChecking, resetRenderedWidget, siteKey, startChallenge]);

    useEffect(() => {
        let disposed = false;

        onTokenChange(null);
        onStatusChange('checking');

        if (!siteKey) {
            onStatusChange('error');
            return;
        }

        void loadTurnstile()
            .then((turnstile) => {
                if (disposed || !containerRef.current) {
                    return;
                }

                widgetIdRef.current = turnstile.render(containerRef.current, {
                    sitekey: siteKey,
                    action: TURNSTILE_ACTION,
                    theme: 'dark',
                    size: 'flexible',
                    appearance: 'interaction-only',
                    execution: 'execute',
                    'response-field': false,
                    callback: (token) => {
                        onTokenChange(token);
                        onStatusChange('ready');
                        onInteractionChange(false);
                    },
                    'error-callback': () => {
                        onTokenChange(null);
                        onStatusChange('error');
                        onInteractionChange(false);
                        return true;
                    },
                    'expired-callback': () => {
                        markAsChecking();
                        resetRenderedWidget();

                        if (activeRef.current) {
                            executeRenderedWidget();
                        }
                    },
                    'timeout-callback': () => {
                        markAsChecking();
                    },
                    'before-interactive-callback': () => {
                        onInteractionChange(true);
                    },
                    'after-interactive-callback': () => {
                        onInteractionChange(false);
                    },
                    'unsupported-callback': () => {
                        onTokenChange(null);
                        onStatusChange('error');
                        onInteractionChange(false);
                    },
                });

                if (activeRef.current) {
                    startChallenge();
                }
            })
            .catch(() => {
                if (!disposed) {
                    onStatusChange('error');
                }
            });

        return () => {
            disposed = true;

            const widgetId = widgetIdRef.current;
            widgetIdRef.current = null;

            if (widgetId && window.turnstile) {
                window.turnstile.remove(widgetId);
            }
        };
    }, [
        executeRenderedWidget,
        markAsChecking,
        onInteractionChange,
        onStatusChange,
        onTokenChange,
        resetRenderedWidget,
        siteKey,
        startChallenge,
    ]);

    return <div ref={containerRef}/>;
};
