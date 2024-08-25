<script lang="ts">
	import { cn } from '$lib';

	let { class: className = '', children }: { class?: string; children: () => any } = $props();
</script>

<span class={cn('text-grey-500 text-sm', className)}>{@render children()}</span>
