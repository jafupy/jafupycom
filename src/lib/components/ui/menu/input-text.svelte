<script lang="ts">
	import { cn } from '$lib';
	import { Check, X, type BoxSelect } from 'lucide-svelte';
	import { createProgress, melt } from '@melt-ui/svelte';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { newToast } from '../../../../routes/toasts.svelte';

	let editing = $state(false);
	let _value = $state('');
	let {
		children,
		value = $bindable(''),
		class: className = '',
		Icon,
		...props
	}: {
		children: () => any;
		class?: string;
		Icon: typeof BoxSelect;
		Icon: typeof BoxSelect;
	} = $props();

	let save = () => {
		value = _value;
		editing = false;
		newToast({ title: 'Saved', description: 'Your changes have been saved', type: 'success' });
	};
	let cancel = () => {
		editing = false;
		_value = value;
		newToast({
			title: 'Cancelled',
			description: 'Your changes have been cancelled',
			type: 'warning',
		});
	};
</script>

<div class="relative w-full">
	{#if editing}
		<span
			class="absolute left-0 top-0 flex w-full items-center text-left"
			in:fly={{ x: 100, duration: 200, delay: 300 }}
			out:fly={{ x: -100, duration: 200, delay: 0 }}
		>
			<input
				type="text"
				bind:value
				class="hover:border-grey-100/10 active:bg-grey-100/10 mr-auto flex w-full items-center justify-end overflow-hidden rounded border border-transparent bg-transparent px-2 py-1.5 text-sm"
			/>
			<button onclick={save} class="active:bg-grey-100 flex p-1">
				<span class="sr-only">Save</span><Check class="h-4 w-4" />
			</button>
			<button onclick={cancel} class="flex p-1"
				><span class="sr-only">Cancel</span><X class="h-4 w-4" /></button
			>
		</span>
	{:else}
		<button
			{...props}
			in:fly={{ x: 100, duration: 200, delay: 300 }}
			out:fly={{ x: -100, duration: 200, delay: 0 }}
			onclick={() => (editing = true)}
			class={cn(
				'absolute left-0 top-0 flex w-full items-center justify-end overflow-hidden rounded px-2 py-1.5 text-sm',
				className,
			)}
		>
			{@render children()}
			<Icon class="ml-auto h-4 w-4" />
		</button>
	{/if}
	<div
		aria-hidden
		onclick={() => (editing = true)}
		class={cn(
			'-z-50 flex w-full items-center justify-end overflow-hidden rounded px-2 py-1.5 text-sm opacity-0',
			className,
		)}
	>
		{@render children()}
		<Icon class="ml-auto h-4 w-4" />
	</div>
</div>
