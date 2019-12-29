<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let color;
	export let price;
	export let title;
	export let button;
	export let primary = false;
	export let className = '';
</script>

<div
	class="rounded bg-white shadow px-4 py-3 flex flex-col max-w-sm {primary ? `border-2 border-${color}-300` : ''}
	{className}"
>
	<p
		class="text-gray-800 font-semibold leading-tight p-1 uppercase text-sm
		tracking-tight rounded"
	>
		{title}
	</p>
	<p class="my-6 text-4xl leading-none bold text-black">{price}€</p>

	<slot />

	<button
		type="button"
		class="mt-auto uppercase px-4 py-3 font-bold leading-tight bg-{color}-300
		text-{color}-900 text-center rounded shadow hover:shadow-md"
		on:click="{() => dispatch('submit', { price, title })}"
	>
		{button}
	</button>
</div>
