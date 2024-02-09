import type { Handle } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { setSession } from '$houdini';

export const handle: Handle = async ({ event, resolve }) => {
    // We are attaching a server supabase client to the event object,
    // so that it will be usable in all server code (see +layout.server.ts).
    event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            get: event.cookies.get,
            set: event.cookies.set,
            remove: event.cookies.delete,
        },
    });

    const {
        data: { session },
    } = await event.locals.supabase.auth.getSession();

    event.locals.session = session;

    // Attaching the access token to the houdini session
    if (session) {
        setSession(event, session);
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range';
        },
    });
};
