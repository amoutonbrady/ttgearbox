<script>
	import ServiceCard from '../components/ServiceCard.svelte';
	import FormInput from '../components/FormInput.svelte';
	import FormSelect from '../components/FormSelect.svelte';
	import FormTextArea from '../components/FormTextArea.svelte';
	import { scroll } from '../stores/scroll.js';

	const form = {
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
	};
</script>

<style>
	.layer::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.65);
		/* background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0)); */
		z-index: 20;
	}

	.service-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
		grid-gap: 0.75rem;
	}

	.form-col-2 {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.form-col-2 {
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 0.75rem;
		}
	}
</style>

<svelte:head>
	<title>TT Gearbox</title>
	<meta
		name="description"
		content="Startup basée à Paris spécialisé dans l’accompagnement
		d’importation de véhicule RHD provenant du Royaume-uni."
	/>

	<!-- Facebook -->
	<meta property="og:url" content="https://ttgearbox.com" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="TT Gearbox - Importation véhicule RHD" />
	<meta
		property="og:image"
		content="https://ttgearbox.com/images/about.jpg"
	/>
	<meta
		property="og:image:alt"
		content="A london street with an english bus on the side"
	/>
	<meta
		property="og:description"
		content="Startup basée à Paris spécialisé dans l’accompagnement
		d’importation de véhicule RHD provenant du Royaume-uni."
	/>
	<meta
		property="og:site_name"
		content="TT Gearbox - Importation véhicule RHD"
	/>
	<meta property="og:locale" content="fr_FR" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<!-- <meta name="twitter:site" content="@site_account"> -->
	<meta name="twitter:creator" content="@wbsdgcjfhd" />
	<meta name="twitter:url" content="https://ttgearbox.com" />
	<meta
		name="twitter:title"
		content="TT Gearbox - Importation véhicule RHD"
	/>
	<meta
		name="twitter:description"
		content="Startup basée à Paris spécialisé dans l’accompagnement
		d’importation de véhicule RHD provenant du Royaume-uni."
	/>
	<meta
		name="twitter:image"
		content="https://ttgearbox.com/images/about.jpg"
	/>
	<meta
		name="twitter:image:alt"
		content="A london street with an english bus on the side"
	/>
</svelte:head>

<section
	class="min-h-screen bg-gray-200 relative text-gray-100 overflow-hidden"
	id="home"
>
	<div
		class="layer fixed top-0 left-0 w-full h-full z-10 flex items-center
		justify-center"
	>
		<picture>
			<source srcset="/images/home.webp" type="image/webp" />
			<source srcset="/images/home.jpg" type="image/jpeg" />
			<img
				class="absolute object-cover h-full w-full bottom-0 left-0"
				src="/images/home.jpg"
				alt="Home Background Cover"
			/>
		</picture>

		<div
			class="mx-auto mt-32 px-4 flex flex-col items-center relative z-30"
		>
			<h1 class="sr-only">Page d'accueil de TT Gearbox</h1>
			<p class="text-2xl md:text-3xl font-semibold text-center">
				<span>
					Vous avez pour objectif d'acquerir un nouveau véhicule à un
					prix raisonable ?
				</span>
				<br />
				<span>
					Ne cherchez plus ! Grâce à TT Gearbox votre souhait se
					réalisera.
				</span>
			</p>

			<p class="text-xl mt-10 text-center md:text-2xl md:mt-4">
				Importer votre futur véhicule du Royaume-Uni
			</p>

			<a
				href="#services"
				class="px-8 py-2 uppercase tracking-wide font-bold border
				border-gray-100 rounded inline-block mt-16 hover:bg-gray-100
				hover:text-gray-900 focus:border-blue-300 focus:bg-gray-100
				focus:text-gray-900"
				style="transition: all 300ms ease-in-out"
			>
				Découvrir
			</a>
		</div>

	</div>
</section>

<section
	class="layer min-h-screen bg-gray-200 relative flex items-center
	text-gray-100 overflow-hidden"
	id="about"
>
	<picture>
		<source srcset="/images/about.webp" type="image/webp" />
		<source srcset="/images/about.jpg" type="image/jpeg" />
		<img
			class="absolute object-cover h-full w-full bottom-0 left-0 z-10"
			src="/images/about.jpg"
			alt="About Background Cover"
		/>
	</picture>
	<div class="container mx-auto px-4 py-20">
		<div class="max-w-3xl relative z-30">
			<h2 class="text-5xl font-bold leading-tight font-display">
				TT Gearbox
			</h2>

			<p class="text-xl md:text-2xl mt-4">
				Startup basée à Paris spécialisé dans l’accompagnement
				d’importation de véhicule RHD provenant du Royaume-uni.
				<br />
				Qu’est-ce qu’une RHD ? Ce terme signifie en anglais Right Hand
				Drive (Volant à droite), il s’agit donc d’un véhicule ayant le
				volant du côté droit.
			</p>
			<p class="text-xl md:text-2xl mt-4">
				Nous avons pour but de permettre à tous de pouvoir acquérir un
				véhicule à moindre coût !
				<br />
				Notre objectif est de pouvoir faire en sorte que le véhicule de
				vos rêves se retrouve dans votre garage.
			</p>

			<p class="text-xl md:text-2xl mt-4">
				Faire appel à TT Gearbox, c’est faire appel à une équipe
				sérieuse et à votre écoute.
				<br />
				De plus, nous nous adaptons à nos clients et nous sommes là pour
				vous accompagner.
			</p>

			<a
				href="#services"
				class="px-8 py-2 uppercase tracking-wide font-bold border
				border-gray-100 rounded inline-block mt-16 hover:bg-gray-100
				hover:text-gray-900 focus:border-blue-300 focus:bg-gray-100
				focus:text-gray-900"
				style="transition: all 300ms ease-in-out"
			>
				Plus d'informations
			</a>
		</div>
	</div>
</section>

<section
	class="layer min-h-screen bg-gray-200 relative flex items-center
	text-gray-100 overflow-hidden"
	id="services"
>
	<picture>
		<source srcset="/images/services.webp" type="image/webp" />
		<source srcset="/images/services.jpg" type="image/jpeg" />
		<img
			class="absolute object-cover h-full w-full bottom-0 left-0 z-10"
			src="/images/services.jpg"
			alt="Services Background Cover"
		/>
	</picture>
	<div class="container mx-auto px-4 py-20 relative z-30">
		<h2 class="text-5xl font-bold leading-tight font-display">
			Nos services
		</h2>

		<p class="text-xl md:text-2xl mt-4">
			Nous allons vous faire gagner du temps
		</p>

		<div class="service-grid mt-16">
			<ServiceCard title="Recherche">
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
				Présent à Paris ainsi qu’au Royaume-Uni, nous échangeons avec
				nos différents partenaires sur place pour vous aider à trouver
				le véhicule qui correspond à vos critères et surtout à votre
				budget.
			</ServiceCard>
			<ServiceCard title="Inspection">
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
				Vous avez trouvé un véhicule qui vous convient ? Vous souhaitez
				être sur avant de l’acquérir vous-même? Aucun soucis, notre
				équipe se charge d’inspecter le véhicule pour vous.
			</ServiceCard>
			<ServiceCard title="Importation">
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
				Votre choix est fait ? Tout d’abord, bravo ! Maintenant, nous
				nous chargeons de rapatrier votre véhicule jusqu’à votre
				domicile en moins de 72h* avec les documents nécessaires à son
				immatriculation en France.
			</ServiceCard>
			<ServiceCard title="Immatriculation">
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
				Votre nouvelle voiture est enfin chez vous, félicitations ! Vous
				désirez être aidé sur les démarches administratives à faire pour
				l’immatriculer en France ? Aucun soucis, on s’en occupe pour
				vous.
			</ServiceCard>
			<ServiceCard title="Vendre">
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
				Quoi de mieux que de vendre son RHD à une personne qui en
				cherche une ? Grâce à notre site 100% RHD, vous pouvez céder
				votre ancienne RHD entre particulier et cela de manière
				totalement GRATUITE !
			</ServiceCard>

		</div>
	</div>
</section>

<section class="relative z-20 bg-gray-100" id="contact">
	<div class="container mx-auto px-4 py-20 ">
		<h2
			class="text-5xl font-bold leading-tight font-display md:text-center"
		>
			Nous contacter
		</h2>

		<p class="text-xl md:text-2xl mt-4 max-w-2xl">
			Vous hésitez à faire le grand saut ? N'hésitez pas à nous contacter
			pour un accompagnement ou un conseil personnalisé durant
			l’importation de votre nouveau véhicule provenant d’Angleterre. Un
			devis vous sera envoyé par mail à l’adresse indiqué dans le
			formulaire ci dessous.
		</p>

		<form
			data-netlify="true"
			name="contact"
			method="POST"
			class="max-w-2xl mx-auto mt-8"
		>
			<fieldset class="mt-10">
				<legend class="font-bold uppercase text-sm tracking-wide">
					Informations sur le véhicule
				</legend>
				<div class="form-col-2 mt-4">
					<FormInput
						bind:value="{form.car.brand}"
						label="Marque du véhicule"
					/>
					<FormInput
						bind:value="{form.car.model}"
						label="Modèle du véhicule"
					/>
					<FormInput
						bind:value="{form.car.maxKm}"
						label="Kilométrage maximum exigé"
					/>

					<FormSelect
						bind:value="{form.car.motorization}"
						label="Motorisation :"
					>
						<option>Essence</option>
						<option>Diesel</option>
						<option>Electrique</option>
						<option>Hybride</option>
						<option>Autre</option>
					</FormSelect>

					<FormInput
						bind:value="{form.car.doors}"
						type="number"
						label="Nombre de porte"
					/>

					<FormSelect
						bind:value="{form.car.carType}"
						label="Boite de vitesse :"
					>
						<option>Automatique</option>
						<option>Manuel</option>
					</FormSelect>
				</div>
			</fieldset>

			<FormTextArea
				className="mt-4"
				bind:value="{form.comment}"
				name="comment"
				label="Commentaire"
			/>

			<fieldset class="mt-8">
				<legend class="font-bold uppercase text-sm tracking-wide">
					Informations personnelles
				</legend>
				<div class="form-col-2 mt-4">
					<FormInput
						bind:value="{form.firstname}"
						label="Nom"
						name="firstname"
						required="{true}"
					/>
					<FormInput
						bind:value="{form.lastname}"
						label="Prénom"
						name="lastname"
						required="{true}"
					/>
					<FormInput
						bind:value="{form.email}"
						type="email"
						label="Email"
						name="email"
						required="{true}"
					/>
					<FormInput
						bind:value="{form.phone}"
						type="tel"
						name="phone"
						label="Téléphone"
						required="{true}"
					/>
					<FormInput
						bind:value="{form.address.line1}"
						label="Adresse"
						name="address"
						required="{true}"
					/>
					<FormInput
						bind:value="{form.address.zip}"
						label="Code Postal"
						name="zip"
						required="{true}"
					/>

					<FormSelect
						bind:value="{form.motive}"
						label="Votre demande concerne :"
						name="motive"
						required="{true}"
					>
						<option>Recherche</option>
						<option>Import</option>
						<option>Vente</option>
						<option>Aide</option>
						<option>Inspection</option>
					</FormSelect>
				</div>
			</fieldset>

			<button
				type="submit"
				class="px-8 py-2 uppercase tracking-wide font-bold border
				border-gray-800 rounded inline-block mt-16 hover:bg-gray-800
				hover:text-gray-100"
				style="transition: all 300ms ease-in-out"
			>
				Envoyer ma demande
			</button>
		</form>
	</div>
</section>
