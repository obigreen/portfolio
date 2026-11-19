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

    test('renders explicitly, refreshes expired tokens, and cleans up', async () => {
        let options: TurnstileRenderOptions | undefined;
        const turnstile: TurnstileApi = {
            render: vi.fn((_container, renderOptions) => {
                options = renderOptions;
                return 'widget-1';
            }),
            reset: vi.fn(),
            remove: vi.fn(),
        };
        window.turnstile = turnstile;

        const onTokenChange = vi.fn();
        const onStatusChange = vi.fn();
        const onInteractionChange = vi.fn();
        const widgetRef = createRef<TurnstileWidgetHandle>();

        const view = render(
            <TurnstileWidget
                ref={widgetRef}
                siteKey="test-site-key"
                onTokenChange={onTokenChange}
                onStatusChange={onStatusChange}
                onInteractionChange={onInteractionChange}
            />,
        );

        await waitFor(() => {
            expect(turnstile.render).toHaveBeenCalledTimes(1);
        });

        expect(options?.action).toBe('portfolio_chat');
        expect(options?.appearance).toBe('interaction-only');
        expect(options?.['response-field']).toBe(false);

        act(() => {
            options?.callback('verified-token');
        });

        expect(onTokenChange).toHaveBeenLastCalledWith('verified-token');
        expect(onStatusChange).toHaveBeenLastCalledWith('ready');

        act(() => {
            options?.['expired-callback']();
        });

        expect(onTokenChange).toHaveBeenLastCalledWith(null);
        expect(onStatusChange).toHaveBeenLastCalledWith('checking');
        expect(turnstile.reset).toHaveBeenCalledWith('widget-1');

        act(() => {
            widgetRef.current?.reset();
        });

        expect(turnstile.reset).toHaveBeenCalledTimes(2);

        view.unmount();
        expect(turnstile.remove).toHaveBeenCalledWith('widget-1');
    });

    test('fails closed when the site key is missing', async () => {
        const onStatusChange = vi.fn();

        render(
            <TurnstileWidget
                siteKey=""
                onTokenChange={vi.fn()}
                onStatusChange={onStatusChange}
                onInteractionChange={vi.fn()}
            />,
        );

        await waitFor(() => {
            expect(onStatusChange).toHaveBeenLastCalledWith('error');
        });
    });
});
