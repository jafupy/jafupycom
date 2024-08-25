<script lang="ts">
	import { cn } from '$lib';

	let { class: className = '', children }: { class?: string; children: () => any } = $props();
</script>

<article
	class={cn(
		'not-prose border-grey-500/25 relative w-full overflow-hidden rounded-xl border p-6 shadow-md',
		className,
	)}
>
	{@render children()}
</article>
