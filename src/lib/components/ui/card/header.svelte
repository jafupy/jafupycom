<script lang="ts">
	import { cn } from '$lib';
	import { BoxSelect } from 'lucide-svelte';
	import type { SvelteComponent } from 'svelte';

	let {
		icon: Icon = BoxSelect,
		iconColor = 'text-old-rose',
		children,
	}: {
		iconColor?: string;
		icon: typeof BoxSelect | string | false;
		children: () => any;
	} = $props();
</script>

<div class="flex flex-row pb-2">
	<div class="mr-2 flex flex-col gap-2">
		{@render children()}
	</div>
	{#if Icon}
		<div
			class="border-grey-100/10 text-grey-50 hover:border-grey-100/20 group ml-auto flex aspect-square h-fit w-fit items-center justify-center rounded-md border p-2 shadow-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 disabled:pointer-events-none disabled:opacity-50"
		>
			{#if typeof Icon === 'string'}
				<img src={Icon} alt="Icon" class="h-4 w-4" />
			{:else}
				<Icon class={cn('h-4 w-4 group-hover:-rotate-12', iconColor)} />
			{/if}
		</div>
	{/if}
</div>
