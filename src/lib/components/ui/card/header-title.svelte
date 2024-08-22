<script lang="ts">
	import { cn } from '$lib';

	let {
		class: className = '',
		children,
		...props
	}: { class?: string; children: () => any } = $props();
</script>

<h3 class={cn('text-lg font-semibold leading-none tracking-tight', className)}>
	{@render children()}
</h3>
