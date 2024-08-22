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

<button {...props} class={cn('w-full ', className)}>
	{@render children()}
	<Icon class="ml-auto h-4 w-4" />
</button>
