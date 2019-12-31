<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { notification, STATUS } from '@/stores';

	const figureOutThatFckingColor = status => {
		switch (status) {
			case STATUS.SUCCESS:
				return 'bg-green-300 text-green-900 border-green-900';
			case STATUS.ERROR:
				return 'bg-red-300 text-red-900 border-red-900';
			case STATUS.WARNING:
				return 'bg-orange-300 text-orange-900 border-orange-900';
			case STATUS.INFO:
			default:
				return 'bg-blue-300 text-blue-900 border-blue-900';
		}
	};

	$: statusClass = figureOutThatFckingColor($notification.status);
</script>

{#if $notification.show}
	<div
		in:fade
		out:fade
		class="bottom-0 right-0 m-4 fixed px-4 py-3 shadow-lg rounded max-w-md
		border-2 text-lg z-50 {statusClass}"
	>
		<p>{$notification.text}</p>
	</div>
{/if}
