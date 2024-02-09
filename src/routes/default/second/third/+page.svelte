<script lang="ts">
    export let data;
    $: ({
        DefaultFirstLayoutQuery,
        DefaultSecondLayoutQuery,
        DefaultThirdLayoutQuery,
        DefaultThirdPageQuery,
    } = data);
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
    <h3 class="h3 mt-2">Default third page</h3>
    <p>
        Default loading behaviour in all layouts, should cause a waterfall of requests on both BE
        and FE.
    </p>
    <p>
        This also doesn't work with client-side updates to the session - if you sign in to a test
        account on the main page and then navigate here without refreshing, the queries will not be
        authorized.
    </p>
    <a href="/" class="anchor">Back to main page</a>

    <div class="flex gap-2 mt-8">
        <p>First layout result:</p>
        <code
            >{JSON.stringify(
                $DefaultFirstLayoutQuery.errors || $DefaultFirstLayoutQuery.data,
            )}</code
        >
    </div>

    <div class="flex gap-2 mt-4">
        <p>Second layout result:</p>
        <code
            >{JSON.stringify(
                $DefaultSecondLayoutQuery.errors || $DefaultSecondLayoutQuery.data,
            )}</code
        >
    </div>

    <div class="flex gap-2 mt-4">
        <p>Third layout result:</p>
        <code
            >{JSON.stringify(
                $DefaultThirdLayoutQuery.errors || $DefaultThirdLayoutQuery.data,
            )}</code
        >
    </div>

    <div class="flex gap-2 mt-4">
        <p>Third page result:</p>
        <code>{JSON.stringify($DefaultThirdPageQuery.errors || $DefaultThirdPageQuery.data)}</code>
    </div>
</div>
