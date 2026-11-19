/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL?: string;
    readonly VITE_TURNSTILE_SITE_KEY?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

type TurnstileRenderOptions = {
    sitekey: string;
    action: string;
    theme: 'auto' | 'light' | 'dark';
    size: 'normal' | 'compact' | 'flexible';
    appearance: 'always' | 'execute' | 'interaction-only';
    'response-field': boolean;
    callback: (token: string) => void;
    'error-callback': (errorCode: string) => boolean | void;
    'expired-callback': () => void;
    'timeout-callback': () => void;
    'before-interactive-callback': () => void;
    'after-interactive-callback': () => void;
    'unsupported-callback': () => void;
};

type TurnstileApi = {
    render: (
        container: HTMLElement | string,
        options: TurnstileRenderOptions,
    ) => string;
    reset: (widgetId?: string) => void;
    remove: (widgetId: string) => void;
};

interface Window {
    turnstile?: TurnstileApi;
}

declare module "swiper/css";
declare module "swiper/css/autoplay";
