<script lang="ts">
	import { cn } from '$lib';
	import { Tag } from 'lucide-svelte';

	let {
		class: className = '',
		icon: Icon = Tag,
		children,
	}: { class?: string; icon?: typeof Tag | false; children: () => any } = $props();
</script>

<span
	class={cn(
		'border-grey-100/10 group inline-flex items-center rounded-md border px-2 py-1 text-xs font-semibold',
		className,
	)}
>
	{#if Icon}
		<Icon stroke-width={1} class="text-grey-500 mr-2 h-4 w-4 group-hover:-rotate-12" />
	{/if}
	{@render children()}
</span>
