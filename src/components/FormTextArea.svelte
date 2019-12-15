<script>
	export let value = '';
	export let label = undefined;
	export let name = undefined;
	export let className = '';
	export let required = false;
	export let maxlength = 200;
	export let id =
		'_' +
		Math.random()
			.toString(36)
			.substr(2, 9);

	const handleInput = e => {
		value = e.target.value;
	};
</script>

<div class="flex flex-col {className}">
	{#if label}
		<label for="{id}" class="cursor-pointer">{label}</label>
	{/if}

	<textarea
		{value}
		{id}
		{name}
		{required}
		{maxlength}
		class="px-8 py-4 border border-gray-600 rounded text-gray-800 text-lg"
		class:mt-2="{!!label}"
		on:input="{handleInput}"
	></textarea>
</div>
