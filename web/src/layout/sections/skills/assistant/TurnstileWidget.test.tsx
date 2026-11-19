import {act, createRef} from 'react';
import {cleanup, render, waitFor} from '@testing-library/react';
import {afterEach, describe, expect, test, vi} from 'vitest';
import {
    TurnstileWidget,
    type TurnstileWidgetHandle,
} from './TurnstileWidget';

describe('TurnstileWidget', () => {
    afterEach(() => {
        cleanup();
        delete window.turnstile;
        vi.restoreAllMocks();
    });

    test('runs only when requested, returns one token, and resets to idle', async () => {
        let options: TurnstileRenderOptions | undefined;
        const turnstile: TurnstileApi = {
            render: vi.fn((_container, renderOptions) => {
                options = renderOptions;
                return 'widget-1';
            }),
            execute: vi.fn(),
            reset: vi.fn(),
            remove: vi.fn(),
        };
        window.turnstile = turnstile;

        const onVerified = vi.fn();
        const onStatusChange = vi.fn();
        const onInteractionChange = vi.fn();
        const widgetRef = createRef<TurnstileWidgetHandle>();

        const view = render(
            <TurnstileWidget
                ref={widgetRef}
                siteKey="test-site-key"
                onVerified={onVerified}
                onStatusChange={onStatusChange}
                onInteractionChange={onInteractionChange}
            />,
        );

        await waitFor(() => {
            expect(turnstile.render).toHaveBeenCalledTimes(1);
        });

        expect(options?.action).toBe('portfolio_chat');
        expect(options?.appearance).toBe('interaction-only');
        expect(options?.execution).toBe('execute');
        expect(options?.['response-field']).toBe(false);
        expect(onStatusChange).toHaveBeenLastCalledWith('idle');
        expect(turnstile.execute).not.toHaveBeenCalled();

        act(() => {
            widgetRef.current?.requestToken();
        });

        expect(onStatusChange).toHaveBeenLastCalledWith('checking');
        expect(turnstile.reset).toHaveBeenCalledWith('widget-1');
        expect(turnstile.execute).toHaveBeenCalledWith('widget-1');

        act(() => {
            options?.['before-interactive-callback']();
        });
        expect(onInteractionChange).toHaveBeenLastCalledWith(true);

        act(() => {
            options?.['after-interactive-callback']();
        });
        expect(onInteractionChange).toHaveBeenLastCalledWith(false);

        act(() => {
            options?.callback('verified-token');
        });

        expect(onVerified).toHaveBeenCalledTimes(1);
        expect(onVerified).toHaveBeenCalledWith('verified-token');
        expect(onStatusChange).toHaveBeenLastCalledWith('ready');

        act(() => {
            widgetRef.current?.reset();
        });

        expect(turnstile.reset).toHaveBeenCalledTimes(2);
        expect(onStatusChange).toHaveBeenLastCalledWith('idle');

        act(() => {
            options?.['expired-callback']();
        });

        expect(turnstile.reset).toHaveBeenCalledTimes(3);
        expect(onStatusChange).toHaveBeenLastCalledWith('idle');
        expect(turnstile.execute).toHaveBeenCalledTimes(1);

        view.unmount();
        expect(turnstile.remove).toHaveBeenCalledWith('widget-1');
    });

    test('fails closed when the site key is missing', async () => {
        const onStatusChange = vi.fn();

        render(
            <TurnstileWidget
                siteKey=""
                onVerified={vi.fn()}
                onStatusChange={onStatusChange}
                onInteractionChange={vi.fn()}
            />,
        );

        await waitFor(() => {
            expect(onStatusChange).toHaveBeenLastCalledWith('error');
        });
    });
});
