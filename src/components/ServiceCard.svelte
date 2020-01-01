<script>
	import { _ } from 'svelte-i18n';
	import { ChevronDownIcon } from '@/icons';
	export let title = '';
	export let className = '';
	export let link = '/#contact';
</script>

<article
	class="flex items-center shadow text-gray-100 rounded relative px-6 py-4 {className}"
>
	<slot name="icon" />

	<div class="flex-1 ml-6">
		<h3
			class="text-center text-3xl leading-tight flex items-center
			font-display font-bold"
		>
			{title}
		</h3>

		<p class="mt-4">
			<slot />
		</p>
	</div>

	<div class="w-32 ml-6 flex flex-col items-center justify-center">
		<slot name="price" />
		<a
			href="{link}"
			class="mt-4 text-6xl inline-block p-2 rounded-full border-2
			border-red-500 text-red-500 leading-none hover:bg-red-500
			hover:text-gray-100 focus:border-2 focus:border-blue-600
			focus:bg-red-500 focus:text-gray-100"
			style="transition: all 300ms ease-in-out"
		>
			<span class="sr-only">{$_('home.services.link')}</span>
			<ChevronDownIcon className="fill-current h-8 w-8" />
		</a>
	</div>
</article>
