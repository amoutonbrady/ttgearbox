<script>
	import { _ } from 'svelte-i18n';
	export let scrollPosition = 0;

	let open = false;
	let headerHeight = 0;

	$: scrollStart = scrollPosition > headerHeight;
</script>

<header
	class="sticky top-0 right-0 w-full text-gray-900 z-40 md:flex md:justify-end"
	bind:clientHeight="{headerHeight}"
>
	<div class="relative px-4 py-3 flex justify-end z-20 bg-gray-100 md:hidden">
		<button
			id="menubutton"
			name="menubutton"
			type="menu"
			on:click="{() => (open = !open)}"
			aria-controls="menu"
			aria-haspopup="true"
			aria-expanded="{open}"
		>
			<span class="sr-only">{$_('header.menu.button')}</span>
			<svg class="fill-current h-8 w-8" viewBox="0 0 24 24">
				<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
			</svg>
		</button>
	</div>

	<nav
		class="absolute md:relative left-0 z-10 p-4 w-full bg-gray-100 border-t
		border-gray-300"
		class:open
	>
		<ul
			id="menu"
			class="container text-center md:flex md:justify-end md:px-4
			md:mx-auto"
			role="menu"
			tabindex="-1"
			aria-labelledby="menubutton"
		>
			<li class="mt-2 md:mt-0 md:ml-4">
				<a
					class="hover:underline"
					on:click="{() => (open = false)}"
					href="#about"
				>
					{$_('header.menu.about')}
				</a>
			</li>
			<li class="mt-2 md:mt-0 md:ml-4">
				<a
					class="hover:underline"
					on:click="{() => (open = false)}"
					href="#services"
				>
					{$_('header.menu.services')}
				</a>
			</li>
			<li class="mt-2 md:mt-0 md:ml-4">
				<a
					class="hover:underline"
					on:click="{() => (open = false)}"
					href="#testimonies"
				>
					{$_('header.menu.testimonies')}
				</a>
			</li>
			<li class="mt-2 md:mt-0 md:ml-4">
				<a
					class="hover:underline"
					on:click="{() => (open = false)}"
					rel="prefetch"
					href="offers"
				>
					{$_('header.menu.offers')}
				</a>
			</li>
			<li class="mt-2 md:mt-0 md:ml-4">
				<a
					class="hover:underline"
					on:click="{() => (open = false)}"
					href="#contact"
				>
					{$_('header.menu.contact')}
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	nav {
		top: 100%;
		transform: translateY(-100%);
		transition: transform 300ms ease-in-out;
	}

	nav.open {
		transform: translateY(0);
	}

	@media (min-width: 768px) {
		nav {
			transform: translateY(0);
		}
	}
</style>
