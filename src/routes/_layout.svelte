<script context="module">
	import { register, waitLocale } from 'svelte-i18n';

	register('fr', () => import('@/langs/fr/common'));

	export const preload = async () => waitLocale();
</script>

<script>
	import { onMount } from 'svelte';
	import { scroll } from '@/stores';
	import { AppHeader, Notification } from '@/components';

	const currentYear = new Date().getFullYear();
</script>

<svelte:window bind:scrollY="{$scroll}" />

<AppHeader scrollPosition="{$scroll}" />

<main class="overflow-hidden">
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

<Notification />
