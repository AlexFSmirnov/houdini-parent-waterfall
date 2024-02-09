<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
    $: ({ supabase, session } = data);

    const handleSignUp = () => {
        supabase.auth
            .signUp({
                email: 'test@account.com',
                password: '123123',
            })
            .then(console.log)
            .catch(console.error);
    };

    const handleSignIn = () => {
        supabase.auth
            .signInWithPassword({
                email: 'test@account.com',
                password: '123123',
            })
            .then(console.log)
            .catch(console.error);
    };
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
    <h3 class="h3 mt-2">Houdini <code>await parent()</code> waterfall</h3>

    <p class="mt-8 mb-1">Account management:</p>
    <div class="flex gap-2 items-center">
        {#if session}
            <p>Logged in as {session.user.email}</p>
            <button
                class="btn variant-primary text-error-500"
                on:click={() => supabase.auth.signOut()}>Sign out</button
            >
        {:else}
            <button class="btn variant-outline-primary" on:click={handleSignUp}
                >Create test account</button
            >
            <button class="btn variant-filled-primary" on:click={handleSignIn}
                >Sign in to test account</button
            >
        {/if}
    </div>

    <p class="mt-8 mb-1">Navigation:</p>
    <div class="flex gap-2">
        <a href="/default/second/third" class="anchor">/default/second/third</a>
        <p>- default loading (waterfall on BE and FE)</p>
    </div>
    <div class="flex gap-2">
        <a href="/with-server/second/third" class="anchor">/with-server/second/third</a>
        <p>- <code>+layout.server.ts</code> added to each load function, removes waterfall on BE</p>
    </div>
</div>
