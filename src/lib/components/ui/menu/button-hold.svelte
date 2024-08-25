<script lang="ts">
	import { cn } from '$lib';
	import type { BoxSelect } from 'lucide-svelte';
	import { createProgress, melt } from '@melt-ui/svelte';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	let holding = $state(false);
	let showHoldText = $state(false);
	let elapsedTime = $state(0);
	let maxTime = 1000;

	const handleStart = () => {
		holding = true;
	};
	const handleEnd = () => {
		let prevElapsedTime = elapsedTime;
		holding = false;
		elapsedTime = 0;
		if (prevElapsedTime < 200) {
			showHoldText = true;
			setTimeout(() => {
				showHoldText = false;
			}, 1000);
		}
	};

	$effect(() => {
		let timer: NodeJS.Timeout | undefined;
		if (holding) {
			timer = setInterval(() => {
				elapsedTime = Math.min(elapsedTime + 10, maxTime);
			}, 10);
		} else if (!holding && elapsedTime > 0) {
			clearInterval(timer);
		}
		return () => clearInterval(timer);
	});

	let {
		children,
		holdText,
		class: className = '',
		Icon,
		...props
	}: { children: () => any; class?: string; Icon: typeof BoxSelect; holdText?: string } = $props();
</script>

<button
	{...props}
	onmousedown={handleStart}
	onmouseup={handleEnd}
	onmouseleave={handleEnd}
	ontouchstart={handleStart}
	ontouchend={handleEnd}
	class={cn(
		'relative flex w-full items-center justify-end overflow-hidden rounded px-2 py-1.5 text-sm  ',
		className,
	)}
>
	<span class="relative w-full">
		{#if holding || showHoldText}
			<span
				class="absolute left-0 top-0 w-full text-left"
				transition:fly={{ y: -100, duration: 200 }}>{holdText}</span
			>
		{:else}
			<span
				class="absolute left-0 top-0 w-full text-left"
				transition:fly={{ y: 100, duration: 200 }}>{@render children()}</span
			>
		{/if}
		<span class=" opacity-0">
			{#if holding}
				{holdText}
			{:else}
				{@render children()}
			{/if}
		</span>
	</span>
	<Icon class="ml-auto h-4 w-4" />
	<div
		style="width: {(elapsedTime / maxTime) * 100}%"
		class="absolute left-0 top-0 -z-[1] h-full w-full bg-red-500/25"
	></div>
</button>
