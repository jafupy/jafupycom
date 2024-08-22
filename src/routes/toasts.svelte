<script lang="ts" context="module">
	import { cn } from '$lib';
	import { createToaster, melt } from '@melt-ui/svelte';
	import { X } from 'lucide-svelte';
	import { fly, scale } from 'svelte/transition';
	export type ToastData = {
		title: string;
		description: string;
		variant: 'success' | 'error' | 'warning' | 'info';
	};

	const {
		elements: { content, title, description, close },
		helpers,
		states: { toasts },
		actions: { portal },
	} = createToaster<ToastData>({ closeDelay: 60 * 60 * 1000 * 24 * 7 });

	export const newToast = (data: ToastData) => {
		helpers.addToast({ data });
	};

	const styles = {
		success: 'border-lush-400 hover:border-lush-300',
		error: 'border-well-red-400 hover:border-well-red-300',
		warning: 'border-pottery-400 hover:border-pottery-300',
		info: 'border-cold-stone-100/10 hover:border-cold-stone-100/20',
	};
</script>

<div
	use:portal
	class="group fixed bottom-4 right-4 z-50 flex flex-col-reverse p-4 transition-all hover:gap-2"
>
	{#each $toasts.slice(0, 3).reverse() as { id, data }, index (id)}
		<div
			in:fly={{ y: 20, duration: 300, delay: index * 100 }}
			out:fly={{ x: 20, duration: 300, delay: index * 100 }}
			use:melt={$content(id)}
			class={cn(
				'group-[item] -mt-16 flex flex-col items-center rounded-xl border bg-cold-stone-950/20 p-4 text-sm shadow-md backdrop-blur-md transition-all group-hover:mt-2 group-hover:scale-100 group-hover:opacity-100',
				styles[data.variant],
				['', 'scale-90 opacity-90', 'scale-[0.8] opacity-80', 'scale-[0.7] opacity-25'][index],
			)}
			data-variant={data.variant}
			style="z-index: {50 - index}"
			data-id={index.toString()}
		>
			<div class="flex w-full items-center">
				<h3 use:melt={$title(id)}>
					{data.title}
				</h3>
				<button use:melt={$close(id)} aria-label="close notification" class="ml-auto block">
					<X class="h-4 w-4" />
				</button>
			</div>
			<div use:melt={$description(id)}>
				{data.description}
			</div>
		</div>
	{/each}
</div>
