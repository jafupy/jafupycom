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

	let {
		elements: { content, title, description, close },
		helpers,
		states: { toasts },
		actions: { portal },
	} = createToaster<ToastData>({ closeDelay: 5 * 1000, hover: 'pause-all' }); // 5 sec

	export const newToast = (data: ToastData) => {
		helpers.addToast({ data });
	};

	const styles = {
		success: 'border-green-400 hover:border-green-300',
		error: 'border-red-400 hover:border-red-300',
		warning: 'border-yellow-400 hover:border-yellow-300',
		info: 'border-neutral-100/10 hover:border-neutral-100/20',
	};
</script>

<div
	use:portal
	class="group fixed bottom-4 right-4 z-50 flex flex-col-reverse p-4 transition-all hover:gap-2"
>
	{#each $toasts.slice().reverse() as { id, data }, index (id)}
		<div
			in:fly={{ y: 20, duration: 300, delay: index * 100 }}
			out:fly={{
				x: 20,
				duration: 300,
				delay: 300 - index * 100,
			}}
			use:melt={$content(id)}
			class={cn(
				'group-[item] max-w-screen -mt-16 flex w-80 flex-col rounded-xl border bg-neutral-950/20 p-4 text-sm shadow-md backdrop-blur-md transition-all group-hover:mt-2 group-hover:scale-100 group-hover:opacity-100',
				styles[data.variant],
				[
					'',
					'scale-90 opacity-90',
					'scale-[0.8] opacity-80',
					'scale-[0.7] opacity-25',
					'scale-[0] opacity-0',
				][index > 3 ? 4 : index],
			)}
			data-variant={data.variant}
			style="z-index: {50 - index}"
			data-id={index.toString()}
		>
			<div class="flex w-full items-center">
				<h3 class="font-semibold" use:melt={$title(id)}>
					{data.title}
				</h3>
				<button
					use:melt={$close(id)}
					aria-label="close notification"
					class="ml-auto block hover:-rotate-12"
				>
					<X class="h-4 w-4" />
				</button>
			</div>
			<div class="text-sm" use:melt={$description(id)}>
				{data.description}
			</div>
		</div>
	{/each}
</div>
