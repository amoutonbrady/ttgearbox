<script>
	import { scroll } from '../stores/scroll.js';
	import AppHeader from '../components/AppHeader.svelte';

	const currentYear = new Date().getFullYear();
</script>

<svelte:window bind:scrollY="{$scroll}" />

<AppHeader scrollPosition="{$scroll}" />

<main>
	<slot />
</main>

<footer class="bg-gray-900 text-gray-100 relative z-20">
	<p
		class="container mx-auto px-4 py-8 font-bold text-sm uppercase
		tracking-wide text-right"
	>
		&copy; 2019-{currentYear} TT Gearbox.
	</p>
</footer>