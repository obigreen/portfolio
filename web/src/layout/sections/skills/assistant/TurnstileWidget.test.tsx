import {act} from 'react';
import {cleanup, render, waitFor} from '@testing-library/react';
import {afterEach, describe, expect, test, vi} from 'vitest';
import {TurnstileWidget} from './TurnstileWidget';

describe('TurnstileWidget', () => {
    afterEach(() => {
        cleanup();
        delete window.turnstile;
        vi.restoreAllMocks();
    });

    test('runs only while the form is active, refreshes expired tokens, and cleans up', async () => {
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

        const onTokenChange = vi.fn();
        const onStatusChange = vi.fn();
        const onInteractionChange = vi.fn();
        const view = render(
            <TurnstileWidget
                siteKey="test-site-key"
                active={false}
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
        expect(options?.execution).toBe('execute');
        expect(options?.['response-field']).toBe(false);
        expect(turnstile.execute).not.toHaveBeenCalled();

        view.rerender(
            <TurnstileWidget
                siteKey="test-site-key"
                active
                onTokenChange={onTokenChange}
                onStatusChange={onStatusChange}
                onInteractionChange={onInteractionChange}
            />,
        );

        expect(turnstile.execute).toHaveBeenCalledWith('widget-1');

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
        expect(turnstile.execute).toHaveBeenCalledTimes(2);

        view.rerender(
            <TurnstileWidget
                siteKey="test-site-key"
                active={false}
                onTokenChange={onTokenChange}
                onStatusChange={onStatusChange}
                onInteractionChange={onInteractionChange}
            />,
        );

        expect(turnstile.reset).toHaveBeenCalledTimes(2);

        view.unmount();
        expect(turnstile.remove).toHaveBeenCalledWith('widget-1');
    });

    test('fails closed when the site key is missing', async () => {
        const onStatusChange = vi.fn();

        const view = render(
            <TurnstileWidget
                siteKey=""
                active={false}
                onTokenChange={vi.fn()}
                onStatusChange={onStatusChange}
                onInteractionChange={vi.fn()}
            />,
        );

        await waitFor(() => {
            expect(onStatusChange).toHaveBeenLastCalledWith('error');
        });

        view.rerender(
            <TurnstileWidget
                siteKey=""
                active
                onTokenChange={vi.fn()}
                onStatusChange={onStatusChange}
                onInteractionChange={vi.fn()}
            />,
        );

        expect(onStatusChange).toHaveBeenLastCalledWith('error');
    });
});
