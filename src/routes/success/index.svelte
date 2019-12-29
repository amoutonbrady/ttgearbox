<script>
	import { CheckMarkIcon } from '@/icons';
</script>

<div class="h-screen container mx-auto p-4 relative">

	<h1
		class="flex justify-center items-center text-5xl px-6 py-4 relative z-20
		rounded text-green-500"
	>
		<CheckMarkIcon className="fill-current h-12" />
		<span class="ml-6">Paiement enregistré avec succés !</span>
	</h1>
	<img
		class="block absolute w-full h-full object-cover top-0 left-0 z-10"
		src="/images/success.svg"
		alt="success illustration"
	/>

</div>
