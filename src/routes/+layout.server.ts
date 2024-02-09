/**
 * This load function only runs on the server.
 *
 * It is exposing the server supabase session so that it can be used
 * in the +layout.ts for initializing the client supabase session during SSR.
 */
export const load = async ({ locals: { session } }) => {
    return {
        session,
    };
}
