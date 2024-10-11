<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib';
	import '../app.css';
	import Footer from './footer.svelte';
	import Nav from './nav.svelte';
	import Toaster from './toasts.svelte';

	// export let data;
	// if (data.locals.session) {
	// }
</script>

<Nav />
<main
	class="prose-grey prose prose-invert mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-0 py-12"
>
	<slot></slot>
</main>
<Footer />

<Toaster />

<div
	class={cn(
		'absolute left-1/2 top-0 -z-50 aspect-square w-screen max-w-52 -translate-x-1/2 -translate-y-1/2 blur-3xl  sm:scale-[3]',
		$page?.status !== 200 ? 'bg-red-400' : 'bg-prussian-blue-700',
	)}
></div>
