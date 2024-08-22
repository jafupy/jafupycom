<script>
	import Pencil from 'lucide-svelte/icons/newspaper';
	import Card, { C } from '$lib/components/ui/card';
	import { CheckCircle2, CircleX, Paintbrush } from 'lucide-svelte';
	import { cn } from '$lib';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected },
	} = createAccordion({});
</script>

<div class="not-prose grid grid-cols-7 items-center justify-center gap-4">
	<!-- Card -->
	<Card class="relative col-span-3 overflow-visible">
		<CheckCircle2 stroke-width={1} class="absolute -right-2 -top-2 h-6 w-6 text-lush-400" />
		<C.Header icon={Pencil}>
			<C.H.Title>Card</C.H.Title>
			<C.H.Description>A card with a title and description.</C.H.Description>
		</C.Header>
		<C.Content>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</C.Content>
		<C.Footer>
			<button
				class="ml-auto inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-cold-stone-50 px-4 py-2 text-sm font-medium text-cold-stone-950 shadow-md hover:bg-cold-stone-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lavendar-400 disabled:pointer-events-none disabled:opacity-50"
				>Button</button
			>
		</C.Footer>
	</Card>
	<Card class="relative col-span-4 row-span-4 overflow-visible">
		<CircleX stroke-width={1} class="absolute -right-2 -top-2 h-6 w-6 text-well-red-400" />
		<C.Header icon={Paintbrush}>
			<C.H.Title>Colour Scheme</C.H.Title>
			<C.H.Description>The UI colours for this website.</C.H.Description>
		</C.Header>
		<C.Content class="">
			<div {...$root}>
				<div use:melt={$item('Cold Stone')}>
					<h4 use:melt={$trigger}>Cold Stone</h4>
					<div class="grid grid-cols-4 gap-2" use:melt={$content}>
						{#each ['bg-cold-stone-950', 'bg-cold-stone-900', 'bg-cold-stone-800', 'bg-cold-stone-700', 'bg-cold-stone-600', 'bg-cold-stone-500', 'bg-cold-stone-400', 'bg-cold-stone-300', 'bg-cold-stone-200', 'bg-cold-stone-100', 'bg-cold-stone-50'] as color}
							<div
								class={cn(
									'rounded-md border border-cold-stone-100/10  px-4 py-2',
									color,
									parseInt(color.replace('bg-cold-stone-', '')) < 500 ? 'text-cold-stone-950' : '',
								)}
							>
								#{color.replace('bg-cold-stone-', '')}
							</div>
						{/each}
					</div>
				</div>
				<h4>Prussian Blue</h4>
				<div class="grid grid-cols-4 gap-2">
					{#each ['bg-prussian-blue-800', 'bg-prussian-blue-700', 'bg-prussian-blue-600', 'bg-prussian-blue-500', 'bg-prussian-blue-400', 'bg-prussian-blue-300', 'bg-prussian-blue-200'] as color}
						<div
							class={cn(
								'rounded-md border border-cold-stone-100/10  px-4 py-2',
								color,
								parseInt(color.replace('bg-prussian-blue-', '')) < 500 ? 'text-cold-stone-950' : '',
							)}
						>
							#{color.replace('bg-prussian-blue-', '')}
						</div>
					{/each}
				</div>
				<h4>Old Rose</h4>
				<div class="grid grid-cols-4 gap-2">
					{#each ['bg-old-rose-800', 'bg-old-rose-700', 'bg-old-rose-600', 'bg-old-rose-500', 'bg-old-rose-400', 'bg-old-rose-300', 'bg-old-rose-200'] as color}
						<div
							class={cn(
								'rounded-md border border-cold-stone-100/10  px-4 py-2',
								color,
								parseInt(color.replace('bg-old-rose-', '')) < 500 ? 'text-cold-stone-950' : '',
							)}
						>
							#{color.replace('bg-old-rose-', '')}
						</div>
					{/each}
				</div>
				<h4>Well Red</h4>
				<div class="grid grid-cols-4 gap-2">
					{#each ['bg-well-red-800', 'bg-well-red-700', 'bg-well-red-600', 'bg-well-red-500', 'bg-well-red-400', 'bg-well-red-300', 'bg-well-red-200'] as color}
						<div
							class={cn(
								'rounded-md border border-cold-stone-100/10  px-4 py-2',
								color,
								parseInt(color.replace('bg-well-red-', '')) < 500 ? 'text-cold-stone-950' : '',
							)}
						>
							#{color.replace('bg-well-red-', '')}
						</div>
					{/each}
				</div>
				<h4>Lush</h4>
				<div class="grid grid-cols-4 gap-2">
					{#each ['bg-lush-800', 'bg-lush-700', 'bg-lush-600', 'bg-lush-500', 'bg-lush-400', 'bg-lush-300', 'bg-lush-200'] as color}
						<div
							class={cn(
								'rounded-md border border-cold-stone-100/10  px-4 py-2',
								color,
								parseInt(color.replace('bg-lush-', '')) < 500 ? 'text-cold-stone-950' : '',
							)}
						>
							#{color.replace('bg-lush-', '')}
						</div>
					{/each}
				</div>
				<h4>Cold Stone</h4>
				<div class="grid grid-cols-4 gap-2">
					{#each ['bg-cold-stone-950', 'bg-cold-stone-900', 'bg-cold-stone-800', 'bg-cold-stone-700', 'bg-cold-stone-600', 'bg-cold-stone-500', 'bg-cold-stone-400', 'bg-cold-stone-300', 'bg-cold-stone-200', 'bg-cold-stone-100'] as color}
						<div class={cn('rounded-md border border-cold-stone-100/10  px-4 py-2', color)}>
							#{color.replace('bg-cold-stone-', '')}
						</div>
					{/each}
				</div>
				<h4>Cold Stone</h4>
				<div class="grid grid-cols-4 gap-2">
					{#each ['bg-cold-stone-950', 'bg-cold-stone-900', 'bg-cold-stone-800', 'bg-cold-stone-700', 'bg-cold-stone-600', 'bg-cold-stone-500', 'bg-cold-stone-400', 'bg-cold-stone-300', 'bg-cold-stone-200', 'bg-cold-stone-100'] as color}
						<div class={cn('rounded-md border border-cold-stone-100/10  px-4 py-2', color)}>
							#{color.replace('bg-cold-stone-', '')}
						</div>
					{/each}
				</div>
			</div>
		</C.Content>
	</Card>
</div>
