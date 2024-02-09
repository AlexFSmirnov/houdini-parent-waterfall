import { createBrowserClient, isBrowser, parse } from '@supabase/ssr';
import type { LayoutLoad } from './$types';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { browser } from '$app/environment';
import { cache } from '$houdini';

/**
 * This load function initially executes on the server, and then on the client.
 *
 * Just like the HTML components in a +layout.svelte file are accessible to all
 * child pages, the data returned from this load function is accessible in all
 * child pages inside the PageData.
 *
 * The load function gets a `data` object as an argument, which contains the
 * return value from +layout.server.ts
 */
export const load = (async ({ fetch, data, depends }) => {
    // This will ensure the function reruns when 'supabase:auth' is invalidated
    // (check the root +layout.svelte)
    depends('supabase:auth');

    // This is a client instance of the supabase client, will be mainly used by the browser.
    const supabase = createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: { fetch },
        cookies: {
            get: (key) => {
                // If the function is executed on the server, we are getting the session
                // that was passed from +layout.server.ts
                if (!isBrowser()) {
                    return JSON.stringify(data.session);
                }

                // If we are in the browser, we are using actual cookies for authentication.
                const cookie = parse(document.cookie);
                return cookie[key];
            },
        },
    });

    // The session will contain the information about the current logged in user.
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (browser && !session) {
        cache.reset();
    }

    return {
        supabase,
        session,
    };
}) satisfies LayoutLoad;
