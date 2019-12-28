<script>
	import { _ } from 'svelte-i18n';
	import { ChevronDownIcon } from '@/icons';
	export let title = '';
	export let style = '';
	export let column = 'right';
	export let negative = false;
</script>

<article
	class="flex flex-col bg-gray-100 shadow text-gray-900 rounded relative {column}"
	class:md:-mt-16="{negative}"
	class:mt-10="{negative}"
	{style}
>
	<header class="flex items-center">
		<div
			class="rounded-br rounded-tl p-5 bg-red-400 text-gray-100 flex
			items-center justify-center"
		>
			<slot name="icon" />
		</div>

		<p
			class="text-center text-3xl leading-tight flex items-center
			font-display font-bold ml-6"
		>
			{title}
		</p>
	</header>

	<p class="p-6">
		<slot />
	</p>

	<a
		href="#contact"
		class="text-6xl inline-block p-2 rounded-full border-2 border-red-500
		text-red-500 m-6 ml-auto leading-none md:mt-auto hover:bg-red-500
		hover:text-gray-100 focus:border-2 focus:border-blue-600
		focus:bg-red-500 focus:text-gray-100"
		style="transition: all 300ms ease-in-out"
	>
		<span class="sr-only">{$_('home.services.link')}</span>
		<ChevronDownIcon className="fill-current h-8 w-8" />
	</a>
</article>

<style>
	.left::before,
	.right::before {
		content: '';
		position: absolute;
		top: calc(50% - 1px);
		height: 2px;
		width: 3rem;
		background: transparent;
	}

	.left::before {
		left: 100%;
	}

	.right::before {
		right: 100%;
	}

	@media (min-width: 768px) {
		.left::before,
		.right::before {
			background: #718096;
		}
	}
</style>
