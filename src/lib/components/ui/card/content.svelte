<script lang="ts">
	import { cn } from '$lib';

	let { class: className = '', children }: { class?: string; children: () => any } = $props();
</script>

<div
	class={cn(
		'prose-cold-stone prose prose-invert h-full max-h-[200px] overflow-y-scroll text-sm',
		className,
	)}
>
	{@render children()}
</div>
