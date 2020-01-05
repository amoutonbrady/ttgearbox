<script>
	import { _ } from 'svelte-i18n';
	import { ChevronDownIcon } from '@/icons';
	export let title = '';
	export let className = '';
	export let link = '/#contact';
</script>

<article
	class="flex flex-col md:flex-row items-center shadow rounded relative p-6
	md:py-4 {className}"
>
	<slot name="icon" />

	<div class="flex-1 md:ml-6">
		<h3 class="text-xl md:text-3xl leading-tight font-display font-bold">
			{title}
		</h3>

		<p class="mt-4">
			<slot />
		</p>
	</div>

	<div
		class="w-32 md:ml-6 flex md:flex-col items-center justify-end
		md:justify-center w-full md:w-auto mt-6 md:mt-0"
	>
		<slot name="price" />
		<a
			href="{link}"
			class="md:mt-4 text-6xl inline-block p-2 rounded-full border-2
			border-red-500 text-red-500 leading-none hover:bg-red-500
			hover:text-gray-100 focus:border-2 focus:border-blue-600
			focus:bg-red-500 focus:text-gray-100 ml-4 md:ml-0"
			style="transition: all 300ms ease-in-out"
		>
			<span class="sr-only">{$_('home.services.link')}</span>
			<ChevronDownIcon className="fill-current h-8 w-8" />
		</a>
	</div>
</article>
