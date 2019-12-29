<script context="module">
	import { register, waitLocale } from 'svelte-i18n';

	register('fr', () => import('@/langs/fr/home'));

	export const preload = async () => waitLocale();
</script>

<script>
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';

	import {
		ServiceCard,
		FormInput,
		FormSelect,
		FormTextArea,
	} from '@/components';

	const initForm = () => ({
		firstname: '',
		lastname: '',
		motive: '',
		email: '',
		phone: '',
		address: {
			line1: '',
			line2: '',
			zip: '',
		},
		car: {
			brand: '',
			model: '',
			maxKm: '',
			motorization: '',
			doors: '',
			carType: '',
		},
		comment: '',
	});

	let step = 1;
	let loading = false;
	let success;
	let form = initForm();
	let formEl;
	let submitEl;

	const validateStep = () => {
		const valid = formEl.checkValidity();

		if (!valid) {
			submitEl.click();
			return;
		}
		step++;
	};

	const submit = async () => {
		try {
			loading = true;
			const ky = (await import('ky')).default;
			const parsed = await ky
				.post('/.netlify/functions/mail', { json: form })
				.json();
			success = true;
		} catch (e) {
			success = false;
		} finally {
			step = 1;
			form = initForm();
			loading = false;
		}
	};
</script>

<svelte:head>
	<title>{$_('home.seo.title')}</title>
	<meta name="description" content="{$_('home.seo.description')}" />

	<!-- Facebook -->
	<meta property="og:url" content="https://ttgearbox.com" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{$_('home.seo.title')}" />
	<meta
		property="og:image"
		content="https://ttgearbox.com/images/about.jpg"
	/>
	<meta property="og:image:alt" content="{$_('home.seo.altImg')}" />
	<meta property="og:description" content="{$_('home.seo.description')}." />
	<meta property="og:site_name" content="{$_('home.seo.title')}" />
	<meta property="og:locale" content="fr_FR" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<!-- <meta name="twitter:site" content="@site_account"> -->
	<meta name="twitter:creator" content="@wbsdgcjfhd" />
	<meta name="twitter:url" content="https://ttgearbox.com" />
	<meta name="twitter:title" content="{$_('home.seo.title')}" />
	<meta name="twitter:description" content="{$_('home.seo.description')}." />
	<meta
		name="twitter:image"
		content="https://ttgearbox.com/images/about.jpg"
	/>
	<meta name="twitter:image:alt" content="{$_('home.seo.altImg')}" />
</svelte:head>

<section
	class="md:min-h-screen bg-gray-900 relative text-gray-100 md:text-gray-800
	overflow-hidden"
	id="home"
>
	<div class="md:fixed top-0 left-0 w-full h-full">
		<picture>
			<source srcset="/images/about-test.webp" type="image/webp" />
			<source srcset="/images/about-test.jpg" type="image/jpeg" />
			<img
				class="blur absolute object-cover object-right-bottom h-full
				w-full bottom-0 left-0"
				src="/images/about-test.jpg"
				alt="{$_('home.intro.altCover')}"
			/>
		</picture>

		<div
			class="px-4 flex flex-col justify-center relative z-20
			md:bg-gray-100 md:text-gray-800 md:w-1/2 md:h-full"
		>
			<div class="max-w-xl mx-auto my-12 py-12 md:p-0 md:-mt-12">
				<h1
					class="text-4xl md:text-6xl uppercase tracking-wide
					font-thin"
				>
					{$_('title')}
				</h1>

				<p class="text-xl md:text-2xl mt-4 max-w-xl mx-auto">
					{$_('home.intro.p1')}
				</p>
				<p class="text-xl md:text-2xl mt-4 max-w-xl mx-auto">
					{$_('home.intro.p2')}
				</p>

				<div class="flex mt-16 ">
					<a
						href="#about"
						class="px-8 py-3 uppercase tracking-wide font-bold
						border-2 border-gray-100 md:border-gray-900 rounded
						inline-block md:hover:bg-gray-900 hover:bg-gray-100
						md:hover:text-gray-100 hover:text-gray-900
						focus:border-blue-300 md:focus:bg-gray-900
						focus:bg-gray-100 md:focus:text-gray-100
						focus:text-gray-900"
						style="transition: all 300ms ease-in-out"
					>
						{$_('home.intro.cta1')}
					</a>
					<a
						href="#contact"
						class="px-8 py-3 uppercase tracking-wide font-bold
						border-2 border-gray-900 rounded inline-block
						hover:bg-gray-900 hover:text-gray-100
						focus:border-blue-300 focus:bg-gray-900
						focus:text-gray-100 ml-4 hidden lg:block"
						style="transition: all 300ms ease-in-out"
					>
						{$_('home.intro.cta2')}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section
	class="min-h-screen bg-white relative text-gray-100 overflow-hidden"
	id="about"
>
	<picture>
		<source srcset="/images/home-test.webp" type="image/webp" />
		<source srcset="/images/home-test.jpg" type="image/jpeg" />
		<img
			class="about absolute object-cover object-bottom w-full md:w-1/2
			bottom-0 left-0 z-10"
			src="/images/home-test.jpg"
			alt="{$_('home.about.altCover')}"
		/>
	</picture>
	<div class="container flex justify-end mx-auto px-4">
		<div
			class="md:max-w-2xl relative z-30 bg-white text-gray-800 p-6 pt-4
			rounded-sm md:mr-6 md:mt-20 mt-6"
		>
			<h2
				class="text-3xl md:text-5xl font-bold leading-tight font-display"
			>
				{$_('home.about.title')}
			</h2>

			<p class="text-lg md:text-xl mt-4">
				<span>{$_('home.about.p1_part1')}</span>
				<abbr
					style="cursor: help"
					title="{$_('home.about.rhd_definition')}"
				>
					RHD
				</abbr>
				<span>{$_('home.about.p1_part2')}</span>
			</p>
			<p class="text-lg md:text-xl mt-4">
				<span>{$_('home.about.p2_part1')}</span>
				<dfn id="def-rhd" class="italic">Right Hand Drive</dfn>
				<span>{$_('home.about.p2_part2')}</span>
			</p>
			<p class="text-lg md:text-xl mt-4">{$_('home.about.p3')}</p>

			<p class="text-lg md:text-xl mt-4">{$_('home.about.p4')}</p>

			<a
				href="#services"
				class="px-8 py-3 uppercase tracking-wide font-bold border-2
				border-gray-900 rounded inline-block mt-12 text-gray-900
				hover:bg-gray-900 hover:text-gray-100 focus:border-blue-300
				focus:bg-gray-900 focus:text-gray-100"
				style="transition: all 300ms ease-in-out"
			>
				{$_('home.about.cta')}
			</a>
		</div>
	</div>
</section>

<section class="bg-gray-200 relative z-30" id="services">
	<div class="container mx-auto px-4 relative z-30">
		<!-- <h2 class="text-5xl font-bold leading-tight font-display">
			{$_('home.services.title')}
		</h2>

		<p class="text-xl md:text-2xl mt-4">{$_('home.services.subtitle')}</p> -->

		<div class="service-grid max-w-3xl py-16 mx-auto">
			<ServiceCard
				title="{$_('home.services.s1.title')}"
				column="right"
				style="grid-column-start: 2; grid-row-start: 1"
			>
				<svg
					class="fill-current h-6 w-6"
					viewBox="0 0 24 24"
					slot="icon"
				>
					<path
						d="M10,13C9.65,13.59 9.36,14.24 9.19,14.93C6.5,15.16
						3.9,16.42 3.9,17V18.1H9.2C9.37,18.78 9.65,19.42
						10,20H2V17C2,14.34 7.33,13 10,13M10,4A4,4 0 0,1
						14,8C14,8.91 13.69,9.75 13.18,10.43C12.32,10.75
						11.55,11.26 10.91,11.9L10,12A4,4 0 0,1 6,8A4,4 0 0,1
						10,4M10,5.9A2.1,2.1 0 0,0 7.9,8A2.1,2.1 0 0,0
						10,10.1A2.1,2.1 0 0,0 12.1,8A2.1,2.1 0 0,0
						10,5.9M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21
						19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75
						16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12
						15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0
						15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14Z"
					></path>
				</svg>
				{$_('home.services.s1.text')}
			</ServiceCard>
			<ServiceCard
				title="{$_('home.services.s2.title')}"
				column="left"
				negative="{true}"
				style="grid-column-start: 1; grid-row-start: 2"
			>
				<svg
					class="fill-current h-6 w-6"
					viewBox="0 0 24 24"
					slot="icon"
				>
					<path
						d="M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4M20 3C21.1 3 22
						3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6
						17V5C6 3.9 6.9 3 8 3H11.18C11.6 1.84 12.7 1 14 1C15.3 1
						16.4 1.84 16.82 3H20M14 3C13.45 3 13 3.45 13 4C13 4.55
						13.45 5 14 5C14.55 5 15 4.55 15 4C15 3.45 14.55 3 14
						3M10 7V5H8V17H20V5H18V7H10Z"
					></path>
				</svg>
				{$_('home.services.s2.text')}
			</ServiceCard>
			<ServiceCard
				title="{$_('home.services.s3.title')}"
				column="right"
				negative="{true}"
				style="grid-column-start: 2; grid-row-start: 3"
			>
				<svg
					class="fill-current h-6 w-6"
					viewBox="0 0 24 24"
					slot="icon"
				>
					<path
						d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1
						16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1
						19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1
						5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5
						0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5
						17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0
						4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0
						0,0 21,20V12L18.92,6Z"
					></path>
				</svg>
				{$_('home.services.s3.text')}
			</ServiceCard>
			<ServiceCard
				title="{$_('home.services.s4.title')}"
				column="left"
				negative="{true}"
				style="grid-column-start: 1; grid-row-start: 4"
			>
				<svg
					class="fill-current h-6 w-6"
					viewBox="0 0 24 24"
					slot="icon"
				>
					<path
						d="M20.5,14.5V16H19V14.5H20.5M18.5,9.5H17V9A3,3 0 0,1
						20,6A3,3 0 0,1 23,9C23,9.97 22.5,10.88
						21.71,11.41L21.41,11.6C20.84,12 20.5,12.61
						20.5,13.3V13.5H19V13.3C19,12.11 19.6,11
						20.59,10.35L20.88,10.16C21.27,9.9 21.5,9.47
						21.5,9A1.5,1.5 0 0,0 20,7.5A1.5,1.5 0 0,0
						18.5,9V9.5M9,13C11.67,13 17,14.34 17,17V20H1V17C1,14.34
						6.33,13 9,13M9,4A4,4 0 0,1 13,8A4,4 0 0,1 9,12A4,4 0 0,1
						5,8A4,4 0 0,1 9,4M9,14.9C6.03,14.9 2.9,16.36
						2.9,17V18.1H15.1V17C15.1,16.36 11.97,14.9
						9,14.9M9,5.9A2.1,2.1 0 0,0 6.9,8A2.1,2.1 0 0,0
						9,10.1A2.1,2.1 0 0,0 11.1,8A2.1,2.1 0 0,0 9,5.9Z"
					></path>
				</svg>
				{$_('home.services.s4.text')}
			</ServiceCard>
			<ServiceCard
				title="{$_('home.services.s5.title')}"
				column="right"
				negative="{true}"
				style="grid-column-start: 2; grid-row-start: 5"
			>
				<svg
					class="fill-current h-6 w-6"
					viewBox="0 0 24 24"
					slot="icon"
				>
					<path
						d="M11 6H14L17.29 2.7A1 1 0 0 1 18.71 2.7L21.29 5.29A1 1
						0 0 1 21.29 6.7L19 9H11V11A1 1 0 0 1 10 12A1 1 0 0 1 9
						11V8A2 2 0 0 1 11 6M5 11V15L2.71 17.29A1 1 0 0 0 2.71
						18.7L5.29 21.29A1 1 0 0 0 6.71 21.29L11 17H15A1 1 0 0 0
						16 16V15H17A1 1 0 0 0 18 14V13H19A1 1 0 0 0 20
						12V11H13V12A2 2 0 0 1 11 14H9A2 2 0 0 1 7 12V9Z"
					></path>
				</svg>
				{$_('home.services.s5.text')}
			</ServiceCard>

		</div>
	</div>
</section>

<section class="relative z-20 bg-gray-100 text-gray-800" id="contact">
	<div class="max-w-2xl mx-auto px-4 py-20 ">
		<h2 class="text-5xl font-bold leading-tight font-display">
			{$_('home.contact.title')}
		</h2>

		<p class="text-xl md:text-2xl mt-4">{$_('home.contact.p1')}</p>

		<form
			name="contact"
			on:submit|preventDefault="{submit}"
			class="mt-8 flex flex-col"
			bind:this="{formEl}"
		>
			{#if typeof success === 'boolean' && success}
				<p
					class="p-6 text-center bg-green-200 text-green-800 rounded
					mb-6"
				>
					Email envoyé avec succès
				</p>
			{:else if typeof success === 'boolean' && !success}
				<p class="p-6 text-center bg-red-200 text-red-800 rounded mb-6">
					Une erreur est survenue
				</p>
			{/if}

			{#if step === 1}
				<fieldset class="mt-10">
					<legend class="font-bold uppercase text-sm tracking-wide">
						{$_('home.contact.form.title1')}
					</legend>
					<div class="form-col-2 mt-4">
						<FormInput
							bind:value="{form.car.brand}"
							name="brand"
							required="{true}"
							label="{$_('home.contact.form.brand')}"
						/>
						<FormInput
							bind:value="{form.car.model}"
							name="model"
							required="{true}"
							label="{$_('home.contact.form.model')}"
						/>
						<FormInput
							bind:value="{form.car.maxKm}"
							name="maxKm"
							required="{true}"
							label="{$_('home.contact.form.maxKm')}"
						/>

						<FormSelect
							bind:value="{form.car.motorization}"
							name="motorization"
							required="{true}"
							label="{$_('home.contact.form.motorization.label')}"
						>
							<option>
								{$_('home.contact.form.motorization.opt1')}
							</option>
							<option>
								{$_('home.contact.form.motorization.opt2')}
							</option>
							<option>
								{$_('home.contact.form.motorization.opt3')}
							</option>
							<option>
								{$_('home.contact.form.motorization.opt4')}
							</option>
							<option>
								{$_('home.contact.form.motorization.opt5')}
							</option>
						</FormSelect>

						<FormInput
							bind:value="{form.car.doors}"
							name="doors"
							required="{true}"
							type="number"
							label="{$_('home.contact.form.doors')}"
						/>

						<FormSelect
							bind:value="{form.car.carType}"
							required="{true}"
							name="carType"
							label="{$_('home.contact.form.carType.label')}"
						>
							<option>
								{$_('home.contact.form.carType.opt1')}
							</option>
							<option>
								{$_('home.contact.form.carType.opt2')}
							</option>
						</FormSelect>

						<FormTextArea
							className="span-2"
							bind:value="{form.comment}"
							name="comment"
							label="{$_('home.contact.form.comment')}"
						/>
					</div>
				</fieldset>
			{:else}
				<fieldset class="mt-8">
					<legend class="font-bold uppercase text-sm tracking-wide">
						{$_('home.contact.form.title2')}
					</legend>
					<div class="form-col-2 mt-4">
						<FormInput
							bind:value="{form.firstname}"
							label="{$_('home.contact.form.firstname')}"
							name="firstname"
							required="{true}"
						/>
						<FormInput
							bind:value="{form.lastname}"
							label="{$_('home.contact.form.lastname')}"
							name="lastname"
							required="{true}"
						/>
						<FormInput
							bind:value="{form.email}"
							type="email"
							label="{$_('home.contact.form.email')}"
							name="email"
							required="{true}"
						/>
						<FormInput
							bind:value="{form.phone}"
							type="tel"
							name="phone"
							label="{$_('home.contact.form.phone')}"
							required="{true}"
						/>
						<FormInput
							bind:value="{form.address.line1}"
							label="{$_('home.contact.form.address')}"
							name="address"
							required="{true}"
						/>
						<FormInput
							bind:value="{form.address.zip}"
							label="{$_('home.contact.form.zip')}"
							name="zip"
							required="{true}"
						/>

						<FormSelect
							bind:value="{form.motive}"
							label="{$_('home.contact.form.motive.label')}"
							name="motive"
							required="{true}"
						>
							<option>
								{$_('home.contact.form.motive.opt1')}
							</option>
							<option>
								{$_('home.contact.form.motive.opt2')}
							</option>
							<option>
								{$_('home.contact.form.motive.opt3')}
							</option>
							<option>
								{$_('home.contact.form.motive.opt4')}
							</option>
							<option>
								{$_('home.contact.form.motive.opt5')}
							</option>
						</FormSelect>
					</div>
				</fieldset>
			{/if}

			{#if step === 1}
				<button
					type="button"
					on:click|preventDefault="{validateStep}"
					class="px-8 py-2 uppercase tracking-wide font-bold border
					border-gray-800 rounded inline-block mt-16 hover:bg-gray-800
					hover:text-gray-100 ml-auto"
					style="transition: all 300ms ease-in-out"
					disabled="{loading}"
				>
					{$_('home.contact.form.next')}
				</button>
				<button
					bind:this="{submitEl}"
					type="submit"
					class="hidden"
				></button>
			{:else}
				<div class="flex flex-col md:flex-row justify-between mt-16">
					<button
						type="button"
						on:click|preventDefault="{() => step--}"
						class="px-8 py-2 uppercase tracking-wide font-bold
						border border-gray-800 rounded inline-block
						hover:bg-gray-800 hover:text-gray-100"
						style="transition: all 300ms ease-in-out"
						disabled="{loading}"
					>
						{$_('home.contact.form.previous')}
					</button>
					<button
						type="submit"
						class="px-8 py-2 uppercase tracking-wide font-bold
						border border-gray-800 rounded inline-block
						hover:bg-gray-800 hover:text-gray-100 mt-4 md:mt-0"
						style="transition: all 300ms ease-in-out"
						disabled="{loading}"
					>
						{$_('home.contact.form.submit')}
					</button>
				</div>
			{/if}
		</form>
	</div>
</section>

<style>
	.service-grid {
		display: flex;
		flex-flow: column nowrap;
	}

	.service-grid::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 2px;
		left: calc(50% - 1px);
		top: 0;
		background: transparent;
	}

	.form-col-2 {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1.5rem;
	}

	:global(.span-2) {
		grid-column: span 1;
	}

	.blur {
		filter: blur(30px);
	}

	.about {
		height: 50%;
	}

	@media (min-width: 768px) {
		.service-grid {
			display: grid;
			grid-template-columns: repeat(2, minmax(275px, 1fr));
			grid-column-gap: 6rem;
		}

		.service-grid::after {
			background: #718096;
		}

		.form-col-2 {
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 0.75rem;
		}

		:global(.span-2) {
			grid-column: span 2;
		}

		.about {
			height: 75%;
		}

		.blur {
			filter: blur(0);
		}
	}
</style>
