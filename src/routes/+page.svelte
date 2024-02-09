<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
    $: ({ supabase, session } = data);

    const handleSignUp = () => {
        supabase.auth
            .signUp({
                email: 'first@account.com',
                password: '123123',
            })
            .then(console.log)
            .catch(console.error);

        supabase.auth
            .signUp({
                email: 'second@account.com',
                password: '123123',
            })
            .then(console.log)
            .catch(console.error);
    };

    const handleSignIn = (account: string) => () => {
        supabase.auth
            .signInWithPassword({
                email: `${account}@account.com`,
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
                >Create test accounts</button
            >
            <button class="btn variant-filled-primary" on:click={handleSignIn('first')}
                >Sign in to first account</button
            >
            <button class="btn variant-filled-primary" on:click={handleSignIn('second')}
                >Sign in to second account</button
            >
        {/if}
    </div>

    <p class="mt-8 mb-1">Navigation:</p>
    <i
        >The tables are set up in a way that the first account only has access to the first 2
        tables, and the second account - to the last 2 tables.</i
    >
    <div class="flex gap-2">
        <a href="/default/second/third" class="anchor">/default/second/third</a>
        <p>- default loading (waterfall on BE and FE)</p>
    </div>
    <div class="flex gap-2">
        <a href="/with-server/second/third" class="anchor">/with-server/second/third</a>
        <p>- <code>+layout.server.ts</code> added to each load function, removes waterfalls</p>
    </div>
</div>
