<script lang="ts">
    export let data;
    $: ({
        WithServerFirstLayoutQuery,
        WithServerSecondLayoutQuery,
        WithServerThirdLayoutQuery,
        WithServerThirdPageQuery,
    } = data);
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
    <h3 class="h3 mt-2">WithServer third page</h3>
    <p>
        This approach adds a <code>+layout.server.ts</code> or <code>+page.server.ts</code> to each
        load function, passing the session from <code>event.locals</code> into
        <code>event.data</code>. This removes both waterfalls on the BE and on the FE.
    </p>
    <p>This still doesn't fix the client-side session updates.</p>
    <a href="/" class="anchor">Back to main page</a>

    <div class="flex gap-2 mt-8">
        <p>First layout result:</p>
        <code
            >{JSON.stringify(
                $WithServerFirstLayoutQuery.errors || $WithServerFirstLayoutQuery.data,
            )}</code
        >
    </div>

    <div class="flex gap-2 mt-4">
        <p>Second layout result:</p>
        <code
            >{JSON.stringify(
                $WithServerSecondLayoutQuery.errors || $WithServerSecondLayoutQuery.data,
            )}</code
        >
    </div>

    <div class="flex gap-2 mt-4">
        <p>Third layout result:</p>
        <code
            >{JSON.stringify(
                $WithServerThirdLayoutQuery.errors || $WithServerThirdLayoutQuery.data,
            )}</code
        >
    </div>

    <div class="flex gap-2 mt-4">
        <p>Third page result:</p>
        <code
            >{JSON.stringify(
                $WithServerThirdPageQuery.errors || $WithServerThirdPageQuery.data,
            )}</code
        >
    </div>
</div>
