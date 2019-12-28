<script context="module">
	import { register, waitLocale } from 'svelte-i18n';

	register('fr', () => import('@/langs/fr/common'));

	export const preload = async () => waitLocale();
</script>

<script>
	import { scroll } from '@/stores/scroll';
	import { AppHeader } from '@/components';

	const currentYear = new Date().getFullYear();
	const test = () => console.log('hi');
</script>

<svelte:window bind:scrollY="{$scroll}" />

<AppHeader scrollPosition="{$scroll}" />

<main>
	<slot />
</main>

<footer class="bg-gray-900 text-gray-100 relative z-20" on:introstart="{test}">
	<p
		class="container mx-auto px-4 py-8 font-bold text-sm uppercase
		tracking-wide text-right"
	>
		&copy; 2019-{currentYear} TT Gearbox.
	</p>
</footer>
