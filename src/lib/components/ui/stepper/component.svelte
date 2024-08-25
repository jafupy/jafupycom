<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Plus, Minus } from 'lucide-svelte';
	//@ts-ignore
	let {
		value: count = $bindable(0),
		min = 0,
		max = 999,
	}: { value: number; min?: number; max?: number } = $props();
	let prevCount: number = $state(count);

	let prevUnits = $derived(prevCount % 10);
	let units = $derived(count % 10);
	let prevTens = $derived(Math.floor(prevCount / 10) % 10);
	let tens = $derived(Math.floor(count / 10) % 10);
	let prevHundreds = $derived(Math.floor(prevCount / 100) % 10);
	let hundreds = $derived(Math.floor(count / 100) % 10);

	function add() {
		if (count < 999 && count < max) {
			prevCount = count;
			count += 1; // your number
		}
	}
	function subtract() {
		if (count > 0 && count > min) {
			prevCount = count;
			count -= 1;
		}
	}
</script>

<div class="flex w-fit flex-row items-center justify-center gap-2">
	<button
		disabled={count <= 0 || count <= min}
		class="border-grey-100/10 hover:border-grey-100/20 rounded-full border p-2 disabled:opacity-50"
		onclick={subtract}><Minus class="h-4 w-4 " /></button
	>
	<div class="relative flex gap-0 overflow-hidden font-mono">
		<!-- Hundreds -->
		{#if count >= 100}
			<span class="relative">
				{#key hundreds}
					<span
						class="absolute -translate-y-full"
						in:fly={{ y: count > prevCount ? '100%' : '-100%', duration: 200 }}>{prevHundreds}</span
					>
					<span class="absolute" in:fly={{ y: count > prevCount ? '100%' : '-100%', duration: 200 }}
						>{hundreds}</span
					>
					<span class=" opacity-0">{hundreds}</span>
				{/key}
			</span>
		{/if}
		<!-- Tens -->
		{#if count >= 10}
			<span class="relative w-[1ch]">
				{#key tens}
					<span
						class="absolute -translate-y-full"
						in:fly={{ y: count > prevCount ? '100%' : '-100%', duration: 200 }}>{prevTens}</span
					>
					<span class="absolute" in:fly={{ y: count > prevCount ? '100%' : '-100%', duration: 200 }}
						>{tens}</span
					>
					<span class=" opacity-0">{tens}</span>
				{/key}
			</span>
		{/if}
		<!-- Ones -->
		<span class="relative w-[1ch]">
			{#key units}
				<span
					class="absolute -translate-y-full"
					in:fly={{ y: count > prevCount ? '100%' : '-100%', duration: 200 }}>{prevUnits}</span
				>
				<span class="absolute" in:fly={{ y: count > prevCount ? '100%' : '-100%', duration: 200 }}
					>{units}</span
				>
				<span class=" opacity-0">{units}</span>
			{/key}
		</span>
	</div>
	<button
		disabled={count >= 999 || count >= max}
		onclick={add}
		class="border-grey-100/10 hover:border-grey-100/20 rounded-full border p-2 disabled:opacity-50"
		><Plus class="h-4 w-4 " /></button
	>
</div>
