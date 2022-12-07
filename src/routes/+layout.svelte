<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="p-4 text-gray-900 dark:text-white bg-white dark:bg-gray-900">
	<slot />
	<Footer />
</div>
