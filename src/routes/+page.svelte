<script>
    let loadingState = "Loading...";
</script>

<svelte:head>
    <title>{loadingState}</title>
</svelte:head>

<div class="w-full h-full flex justify-center items-center bg-slate-950">
    <div class="py-5 px-10 shadow-xl rounded-xl bg-slate-800 flex justify-center text-white text-xl">
        {loadingState}
    </div>
</div>