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
	class="rounded bg-white shadow px-4 py-3 flex flex-col max-w-sm border-2 {primary && color === 'green' ? 'border-green-300' : primary && color === 'red' ? 'border-red-300' : primary && color === 'blue' ? 'border-blue-300' : primary && color === 'purple' ? 'border-purple-300' : 'border-transparent'}
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
		class="mt-auto uppercase px-4 py-3 font-bold leading-tight {color === 'green' ? 'bg-green-300' : color === 'red' ? 'bg-red-300' : color === 'blue' ? 'bg-blue-300' : color === 'purple' ? 'bg-purple-300' : 'bg-transparent'}
		{color === 'green' ? 'text-green-900' : color === 'red' ? 'text-red-900' : color === 'blue' ? 'text-blue-900' : color === 'purple' ? 'text-purple-900' : 'text-gray-900'}
		text-center rounded shadow hover:shadow-md"
		on:click="{() => dispatch('submit', { price, title })}"
	>
		{button}
	</button>
</div>
