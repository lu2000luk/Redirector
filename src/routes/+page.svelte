<script>
    let loadingState = "Loading...";
</script>

<svelte:head>
    <title>{loadingState}</title>
</svelte:head>

<div class="w-full h-full flex justify-center items-center">
    <div class="py-12 cursor-pointer px-10 shadow-xl rounded-xl card flex justify-center text-white text-xl">
        {loadingState}
    </div>
</div>