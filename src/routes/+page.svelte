<script lang="ts">
    import { browser } from "$app/environment";
    export let data;
    let loadingState = "Loading...";

    if (data.error && browser) {
        loadingState = data.error;
    } else {
        let redirectEndpoint = data.redirect;
        if (!redirectEndpoint) {
            redirectEndpoint = "";
            if (browser) {redirectEndpoint = window.location.href;}
            loadingState = "Error!";
        } else {
            loadingState = "Redirecting...";

            if (browser) {
                window.location.href = redirectEndpoint;
            }
        }
    }


</script>

<svelte:head>
    <title>{loadingState}</title>
</svelte:head>

<div class="w-full h-full flex justify-center items-center">
    <div class="py-12 cursor-pointer px-10 shadow-xl rounded-xl card flex justify-center text-white text-xl">
        {loadingState}
    </div>
</div>
