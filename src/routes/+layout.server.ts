import type { LayoutServerLoad } from './$types';

/**
 * This load function only runs on the server.
 *
 * It is exposing the server supabase session so that it can be used
 * in the +layout.ts for initializing the client supabase session during SSR.
 */
export const load = (async ({ locals: { supabase } }) => {
    const {
        data: { session },
    } = await supabase.auth.getSession();

    return {
        session,
    };
}) satisfies LayoutServerLoad;
