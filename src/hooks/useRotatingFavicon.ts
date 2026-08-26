import {useEffect} from "react";
import {
    createRandomQueue,
    prepareFaviconUrls,
} from "../utils/favicon/faviconUtils";
import type {FaviconSource} from "../utils/favicon/faviconUtils";

type UseRotatingFaviconOptions = {
    icons: readonly FaviconSource[];
    spriteUrl: string;
    viewBox: string;
    intervalMs?: number;
};

const DEFAULT_INTERVAL_MS = 4000;
const FAVICON_SELECTOR = 'link[rel~="icon"]';

export const useRotatingFavicon = ({
    icons,
    spriteUrl,
    viewBox,
    intervalMs = DEFAULT_INTERVAL_MS,
}: UseRotatingFaviconOptions) => {
    useEffect(() => {
        const favicon = document.querySelector<HTMLLinkElement>(FAVICON_SELECTOR);

        if (!favicon || icons.length === 0 || intervalMs <= 0) {
            return;
        }

        const originalHref = favicon.getAttribute("href");
        const abortController = new AbortController();
        let isActive = true;
        let intervalId: number | null = null;
        let objectUrls: string[] = [];
        let removeVisibilityListener = () => {};

        const stopRotation = () => {
            if (intervalId !== null) {
                window.clearInterval(intervalId);
                intervalId = null;
            }
        };

        const initialize = async () => {
            const prepared = await prepareFaviconUrls({
                icons,
                spriteUrl,
                viewBox,
                signal: abortController.signal,
            });

            if (!isActive) {
                prepared.objectUrls.forEach((url) => URL.revokeObjectURL(url));
                return;
            }

            objectUrls = prepared.objectUrls;

            if (prepared.urls.length === 0) {
                return;
            }

            let queue: string[] = [];
            let previousUrl: string | undefined;

            const showNextFavicon = () => {
                if (queue.length === 0) {
                    queue = createRandomQueue(prepared.urls, previousUrl);
                }

                const nextUrl = queue.shift();

                if (!nextUrl) {
                    return;
                }

                favicon.href = nextUrl;
                previousUrl = nextUrl;
            };

            const startRotation = () => {
                if (prepared.urls.length > 1 && !document.hidden && intervalId === null) {
                    intervalId = window.setInterval(showNextFavicon, intervalMs);
                }
            };

            const handleVisibilityChange = () => {
                stopRotation();

                if (!document.hidden) {
                    showNextFavicon();
                    startRotation();
                }
            };

            showNextFavicon();
            startRotation();
            document.addEventListener("visibilitychange", handleVisibilityChange);
            removeVisibilityListener = () => {
                document.removeEventListener("visibilitychange", handleVisibilityChange);
            };
        };

        initialize().catch((error: unknown) => {
            const isAbortError = error instanceof Error && error.name === "AbortError";

            if (!isAbortError && process.env.NODE_ENV === "development") {
                console.warn("Dynamic favicon initialization failed.", error);
            }
        });

        return () => {
            isActive = false;
            abortController.abort();
            stopRotation();
            removeVisibilityListener();

            if (originalHref === null) {
                favicon.removeAttribute("href");
            } else {
                favicon.setAttribute("href", originalHref);
            }

            objectUrls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [icons, intervalMs, spriteUrl, viewBox]);
};
