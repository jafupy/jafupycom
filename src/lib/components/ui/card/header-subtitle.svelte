<script lang="ts">
	import { cn } from '$lib';

	let { class: className = '', children }: { class?: string; children: () => any } = $props();
</script>

<span class={cn('text-sm text-cold-stone-500', className)}>{@render children()}</span>
