<script context="module">
	import { register, waitLocale } from 'svelte-i18n';

	register('fr', () => import('@/langs/fr/offers'));

	export const preload = async () => waitLocale();
</script>

<script>
	import { _ } from 'svelte-i18n';
	import { GoodDeal, Offer } from '@/components';
	import { CheckMarkIcon } from '@/icons';
	import { notification, STATUS } from '@/stores';

	let success = null;

	const pay = async ({ detail: json }) => {
		const errorText =
			'Une erreur est surevenue. Merci de bien vouloir rééssayer. Si le problème persiste, veuillez contacter notre service.';
		try {
			const ky = (await import('ky')).default;
			const stripe = Stripe('pk_test_9TNrpWqhmsCrdi4XS089IH1J00Ml8MYBOX');

			const { session } = await ky
				.post('/.netlify/functions/payment', { json })
				.json();

			stripe
				.redirectToCheckout({
					sessionId: session.id,
				})
				.then(result => {
					// If `redirectToCheckout` fails due to a browser or network
					// error, display the localized error message to your customer
					// using `result.error.message`.
					console.error(result);
					notification.show({
						status: STATUS.ERROR,
						text: result.error.message,
						duration: 20000,
					});
				});

			success = true;
		} catch (e) {
			notification.show({
				status: STATUS.ERROR,
				text: errorText,
				duration: 20000,
			});
			success = false;
		}
	};
</script>

<main class="overflow-hidden">
	<section class="container mx-auto p-4 mt-12">
		<a class="hidden" href="success">Route to success page</a>
		<h1 class="text-5xl text-center font-bold text-gray-900">
			{$_('offers.title')}
		</h1>

		<div class="grid mt-10">
			<Offer
				price="{29.99}"
				title="{$_('offers.section1.offer1.title')}"
				button="{$_('offers.button')}"
				color="green"
				on:submit="{pay}"
			>
				<p class="text-gray-700">{$_('offers.section1.offer1.text')}</p>
				<ul class="text-gray-700 mb-6 mt-4">
					<li class="flex items-center text-left">
						<CheckMarkIcon
							className="h-4 fill-current text-green-300"
						/>
						<span class="ml-4">
							{$_('offers.section1.offer1.l1')}
						</span>
					</li>
					<li class="flex items-center text-left">
						<CheckMarkIcon
							className="h-4 fill-current text-green-300"
						/>
						<span class="ml-4">
							{$_('offers.section1.offer1.l2')}
						</span>
					</li>
					<li class="flex items-center text-left">
						<CheckMarkIcon
							className="h-4 fill-current text-green-300"
						/>
						<span class="ml-4">
							{$_('offers.section1.offer1.l3')}
						</span>
					</li>
				</ul>
			</Offer>

			<Offer
				price="{49.99}"
				title="{$_('offers.section1.offer2.title')}"
				button="{$_('offers.button')}"
				color="red"
				on:submit="{pay}"
				primary="{true}"
			>
				<p class="text-gray-700">
					<span>{$_('offers.allPerks')}</span>
					<strong class="underline">
						{$_('offers.section1.offer1.title')}
					</strong>
					<span>{$_('offers.plus')}</span>
				</p>
				<ul class="text-gray-700 mb-6 mt-4">
					<li class="flex items-center text-left">
						<CheckMarkIcon
							className="h-4 fill-current text-red-300"
						/>
						<span class="ml-4">
							{$_('offers.section1.offer2.l1')}
						</span>
					</li>
					<li class="flex items-center text-left">
						<CheckMarkIcon
							className="h-4 fill-current text-red-300"
						/>
						<span class="ml-4">
							{$_('offers.section1.offer2.l2')}
						</span>
					</li>
					<li class="flex items-center text-left">
						<CheckMarkIcon
							className="h-4 fill-current text-red-300"
						/>
						<span class="ml-4">
							{$_('offers.section1.offer2.l3')}
						</span>
					</li>
				</ul>
			</Offer>

			<Offer
				price="{59.99}"
				title="{$_('offers.section1.offer3.title')}"
				button="{$_('offers.button')}"
				color="purple"
				on:submit="{pay}"
			>
				<p class="text-gray-700">
					<span>{$_('offers.allPerks')}</span>
					<strong class="underline">
						{$_('offers.section1.offer2.title')}
					</strong>
					<span>{$_('offers.plus')}</span>
				</p>
				<ul class="text-gray-700 mb-6 mt-4">
					<li class="flex items-center text-left">
						<CheckMarkIcon
							className="h-4 fill-current text-purple-300"
						/>
						<span class="ml-4">
							{$_('offers.section1.offer2.l1')}
						</span>
					</li>
				</ul>
			</Offer>
		</div>
	</section>

	<section class="container mx-auto p-4 my-24">
		<h2 class="text-4xl text-center font-bold text-gray-800">
			{$_('offers.section2.title')}
		</h2>

		<div class="grid mt-10">
			<GoodDeal
				title="{$_('offers.section2.offer1.title')}"
				color="blue"
				on:submit="{pay}"
				price="{14.99}"
				button="{$_('offers.button')}"
			>
				{$_('offers.section2.offer1.description')}
			</GoodDeal>

			<GoodDeal
				title="{$_('offers.section2.offer2.title')}"
				color="blue"
				on:submit="{pay}"
				price="{14.99}"
				button="{$_('offers.button')}"
			>
				{$_('offers.section2.offer2.description')}
			</GoodDeal>

			<GoodDeal
				title="{$_('offers.section2.offer3.title')}"
				color="blue"
				on:submit="{pay}"
				price="{9.99}"
				button="{$_('offers.button')}"
			>
				{$_('offers.section2.offer3.description')}
			</GoodDeal>

			<GoodDeal
				title="{$_('offers.section2.offer4.title')}"
				color="blue"
				on:submit="{pay}"
				price="{3.99}"
				button="{$_('offers.button')}"
			>
				{$_('offers.section2.offer4.description')}
			</GoodDeal>
		</div>
	</section>
</main>

<style>
	.grid {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
		grid-gap: 1rem;
	}
</style>
