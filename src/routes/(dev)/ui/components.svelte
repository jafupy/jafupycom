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
		<CheckCircle2 stroke-width={1} class="absolute -right-2 -top-2 h-6 w-6 text-green-400" />
		<C.Header icon={Pencil}>
			<C.H.Title>Card</C.H.Title>
			<C.H.Description>A card with a title and description.</C.H.Description>
		</C.Header>
		<C.Content>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</C.Content>
		<C.Footer>
			<button
				class="ml-auto inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-950 shadow-md hover:bg-neutral-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 disabled:pointer-events-none disabled:opacity-50"
				>Button</button
			>
		</C.Footer>
	</Card>
	<Card class="relative col-span-4 row-span-4 overflow-visible">
		<CircleX stroke-width={1} class="absolute -right-2 -top-2 h-6 w-6 text-red-400" />
		<C.Header icon={Paintbrush}>
			<C.H.Title>Colour Scheme</C.H.Title>
			<C.H.Description>The UI colours for this website.</C.H.Description>
		</C.Header>
		<C.Content class="">
			<div {...$root}>
				<div use:melt={$item('Cold Stone')}>
					<h4 use:melt={$trigger}>Cold Stone</h4>
					<div class="grid grid-cols-4 gap-2" use:melt={$content}>
						{#each ['bg-neutral-950', 'bg-neutral-900', 'bg-neutral-800', 'bg-neutral-700', 'bg-neutral-600', 'bg-neutral-500', 'bg-neutral-400', 'bg-neutral-300', 'bg-neutral-200', 'bg-neutral-100', 'bg-neutral-50'] as color}
							<div
								class={cn(
									'rounded-md border border-neutral-100/10  px-4 py-2',
									color,
									parseInt(color.replace('bg-neutral-', '')) < 500 ? 'text-neutral-950' : '',
								)}
							>
								#{color.replace('bg-neutral-', '')}
							</div>
						{/each}
					</div>
				</div>
				<h4>Prussian Blue</h4>
				<div class="grid grid-cols-4 gap-2">
					{#each ['bg-prussian-blue-800', 'bg-prussian-blue-700', 'bg-prussian-blue-600', 'bg-prussian-blue-500', 'bg-prussian-blue-400', 'bg-prussian-blue-300', 'bg-prussian-blue-200'] as color}
						<div
							class={cn(
								'rounded-md border border-neutral-100/10  px-4 py-2',
								color,
								parseInt(color.replace('bg-prussian-blue-', '')) < 500 ? 'text-neutral-950' : '',
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
								'rounded-md border border-neutral-100/10  px-4 py-2',
								color,
								parseInt(color.replace('bg-old-rose-', '')) < 500 ? 'text-neutral-950' : '',
							)}
						>
							#{color.replace('bg-old-rose-', '')}
						</div>
					{/each}
				</div>
				<h4>Well Red</h4>
				<div class="grid grid-cols-4 gap-2">
					{#each ['bg-red-800', 'bg-red-700', 'bg-red-600', 'bg-red-500', 'bg-red-400', 'bg-red-300', 'bg-red-200'] as color}
						<div
							class={cn(
								'rounded-md border border-neutral-100/10  px-4 py-2',
								color,
								parseInt(color.replace('bg-red-', '')) < 500 ? 'text-neutral-950' : '',
							)}
						>
							#{color.replace('bg-red-', '')}
						</div>
					{/each}
				</div>
				<h4>green</h4>
				<div class="grid grid-cols-4 gap-2">
					{#each ['bg-green-800', 'bg-green-700', 'bg-green-600', 'bg-green-500', 'bg-green-400', 'bg-green-300', 'bg-green-200'] as color}
						<div
							class={cn(
								'rounded-md border border-neutral-100/10  px-4 py-2',
								color,
								parseInt(color.replace('bg-green-', '')) < 500 ? 'text-neutral-950' : '',
							)}
						>
							#{color.replace('bg-green-', '')}
						</div>
					{/each}
				</div>
				<h4>Cold Stone</h4>
				<div class="grid grid-cols-4 gap-2">
					{#each ['bg-neutral-950', 'bg-neutral-900', 'bg-neutral-800', 'bg-neutral-700', 'bg-neutral-600', 'bg-neutral-500', 'bg-neutral-400', 'bg-neutral-300', 'bg-neutral-200', 'bg-neutral-100'] as color}
						<div class={cn('rounded-md border border-neutral-100/10  px-4 py-2', color)}>
							#{color.replace('bg-neutral-', '')}
						</div>
					{/each}
				</div>
				<h4>Cold Stone</h4>
				<div class="grid grid-cols-4 gap-2">
					{#each ['bg-neutral-950', 'bg-neutral-900', 'bg-neutral-800', 'bg-neutral-700', 'bg-neutral-600', 'bg-neutral-500', 'bg-neutral-400', 'bg-neutral-300', 'bg-neutral-200', 'bg-neutral-100'] as color}
						<div class={cn('rounded-md border border-neutral-100/10  px-4 py-2', color)}>
							#{color.replace('bg-neutral-', '')}
						</div>
					{/each}
				</div>
			</div>
		</C.Content>
	</Card>
</div>
