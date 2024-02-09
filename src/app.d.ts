import { SupabaseClient, Session as SupabaseSession } from '@supabase/supabase-js';

// and what to do when importing types
declare global {
    namespace App {
        interface Session extends SupabaseSession {}
        interface Locals {
            supabase: SupabaseClient;
        }
        interface PageData {
            session: SupabaseSession | null;
        }
        // interface Error {}
        // interface Platform {}
    }
}
