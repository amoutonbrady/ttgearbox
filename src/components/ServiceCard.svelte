<script>
	export let title = '';
</script>

<article
	class="flex flex-col bg-gray-100 shadow text-gray-900 rounded relative"
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
		<svg class="fill-current h-8 w-8" viewBox="0 0 24 24">
			<path
				d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
			></path>
		</svg>
	</a>
</article>
