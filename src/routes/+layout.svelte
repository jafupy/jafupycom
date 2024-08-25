<script>
	import { page } from '$app/stores';
	import { cn } from '$lib';
	import '../app.css';
	import Footer from './footer.svelte';
	import Nav from './nav.svelte';
	import Toaster from './toasts.svelte';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Nav />
<main
	class="prose-grey prose prose-invert mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-0 py-12"
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
