<script lang="ts">
	import { BoxSelect } from 'lucide-svelte';

	let query = $state('');
</script>

<div
	class="not-prose fixed left-1/2 top-1/2 w-full max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-grey-100/20 bg-grey-950/20 backdrop-blur-md"
>
	<div class="w-full">
		<input
			bind:value={query}
			placeholder="Search the Site"
			class="mb-4 w-full overflow-y-scroll rounded-b-md rounded-t-xl border-0 border-b border-b-grey-100/10 bg-transparent px-4 py-2 text-tw-inherit"
		/>
	</div>
	<div class="max-h-[400px] overflow-y-scroll">
		<ul class="w-full list-none">
			<li class="flex items-center gap-4 px-5 py-2">
				<BoxSelect class="h-4 w-4" />
				<div>
					<p class="font-bold">Something</p>
					<p class="text-sm text-grey-200">Lorem ipsum dolor sit amet consectetur adipisicing</p>
				</div>
			</li>
			<li class="flex items-center gap-4 px-5 py-2">
				<BoxSelect class="h-4 w-4" />
				<div>
					<p class="font-bold">Something</p>
					<p class="text-sm text-grey-200">Lorem ipsum dolor sit amet consectetur adipisicing</p>
				</div>
			</li>
			<li class="flex items-center gap-4 px-5 py-2">
				<BoxSelect class="h-4 w-4" />
				<div>
					<p class="font-bold">Something</p>
					<p class="text-sm text-grey-200">Lorem ipsum dolor sit amet consectetur adipisicing</p>
				</div>
			</li>
			<li class="flex items-center gap-4 px-5 py-2">
				<BoxSelect class="h-4 w-4" />
				<div>
					<p class="font-bold">Something</p>
					<p class="text-sm text-grey-200">Lorem ipsum dolor sit amet consectetur adipisicing</p>
				</div>
			</li>
		</ul>
	</div>
	<div></div>
</div>

<!-- <Typewriter text="Hacker" class="font-mono text-3xl font-bold" /> -->

<!-- <button onclick={() => (start = !start)}>Click me</button> -->

<!-- <div class="relative mt-12 p-6">
	<div
		class="not-prose relative aspect-[10/4] rounded-xl border border-grey-100/20 px-20 py-5 text-center"
	>
		<h1 class="font-mono text-3xl font-bold">
			52<span class="text-lg font-light">WPM</span>
		</h1>
		<p class="font-mono">
			ACC 94%<span class="font-sans text-grey-100/50">{' • '}</span>2024 AUG 29
		</p>
		<p class="text-grey-300">Jacob @ Jafu.py</p>
	</div>
	<div
		class="absolute bottom-0 right-0 -z-10 h-32 w-32 rounded-full bg-prussian-blue-700 blur-3xl"
	></div>
</div> -->
