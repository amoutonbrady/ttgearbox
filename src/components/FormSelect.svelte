<script>
	export let value = '';
	export let type = 'text';
	export let label = undefined;
	export let name = undefined;
	export let className = '';
	export let required = false;
	export let id =
		'_' +
		Math.random()
			.toString(36)
			.substr(2, 9);

	const handleChange = e => {
		value = e.target.value;
	};
</script>

<style>
	select:invalid {
		border-color: #f56565;
	}
</style>

<div class="flex flex-col {className}">
	{#if label}
		<label for="{id}" class="cursor-pointer">{label}</label>
	{/if}

	<select
		{value}
		{id}
		{type}
		{name}
		{required}
		class="px-8 py-4 border border-gray-600 rounded text-gray-800 text-lg"
		class:mt-2="{!!label}"
	>
		<slot />
	</select>
</div>
