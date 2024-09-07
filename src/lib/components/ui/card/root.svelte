<script lang="ts">
	import { cn } from '$lib';

	let { class: className = '', children }: { class?: string; children: () => any } = $props();
</script>

<div
	class={cn(
		'not-prose relative w-full max-w-[350px] overflow-hidden rounded-xl border border-grey-500/25 p-6 shadow-md',
		className,
	)}
>
	{@render children()}
</div>
