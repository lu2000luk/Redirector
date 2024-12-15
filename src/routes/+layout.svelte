<script>
	import '../app.css';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';

    onMount(() => {
        if (browser) {
            injectAnalytics();
        }
    });
</script>

<slot></slot>
