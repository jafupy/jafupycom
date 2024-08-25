<script lang="ts">
	import { cn } from '$lib';
	import type { BoxSelect } from 'lucide-svelte';

	let {
		children,
		class: className = '',
		Icon,
		...props
	}: { children: () => any; class?: string; Icon: typeof BoxSelect } = $props();
</script>

<button
	{...props}
	class={cn(
		'hover:border-grey-100/10 active:bg-grey-100/10 relative flex w-full items-center justify-end overflow-hidden rounded border border-transparent px-2 py-1.5  text-sm',
		className,
	)}
>
	{@render children()}
	<Icon class="ml-auto h-4 w-4" />
</button>
