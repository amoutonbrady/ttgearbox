<script>
	import Offer from './Offer.svelte';

	export let color;
	export let price;
	export let title;
	export let button;
	export let className = '';
</script>

<article class="flex flex-col {className}">
	<Offer on:submit {color} {price} {title} {button} className="text-center" />
	<p class="mt-6 text-gray-700 whitespace-pre-line">
		<slot />
	</p>
</article>
