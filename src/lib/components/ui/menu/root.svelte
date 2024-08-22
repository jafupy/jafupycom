<script lang="ts">
	import { cn } from '$lib';

	let { class: className = '', children }: { class?: string; children: () => any } = $props();
</script>

<article
	class={cn(
		'not-prose relative w-full overflow-hidden rounded-xl border border-cold-stone-500/25 p-6 shadow-md',
		className,
	)}
>
	{@render children()}
</article>
