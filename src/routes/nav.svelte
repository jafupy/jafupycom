<script lang="ts">
	import { assets, cn } from '$lib';
	import {
		ChevronRight,
		Command,
		FolderKanban,
		Hammer,
		Menu,
		Newspaper,
		User,
		X,
	} from 'lucide-svelte';
	import { page } from '$app/stores';
	import { newToast } from './toasts.svelte';
	import Tag from '$lib/components/ui/tag';
	import { slide } from 'svelte/transition';

	let path: string[] = $derived(
		$page.url.pathname.split('/').slice(2, $page.url.pathname.split('/').length - 1),
	);
	let currentPath = $derived($page.url.pathname);
	let toast = $state(0);

	let mobileMenuOpen = $state(false);

	// onkeypress(()=>{

	// })
</script>

{#snippet items(mobile: boolean)}
	<ul
		class={cn('mx-auto flex-row items-center gap-4', mobile ? 'flex flex-col' : 'hidden sm:flex')}
	>
		<li data-selected={currentPath.startsWith('/bio')} class="group flex items-center">
			<a onclick={() => (mobileMenuOpen = false)} href="/bio">
				<User
					strokeWidth={currentPath.startsWith('/bio') ? 2 : 1}
					class="mr-2 inline h-4 w-4 text-grey-100/50 group-hover:text-grey-100/75 group-data-[selected=true]:text-old-rose"
				/>
				Bio</a
			>
		</li>
		<li data-selected={currentPath.startsWith('/projects')} class="group flex items-center">
			<a onclick={() => (mobileMenuOpen = false)} href="/projects">
				<FolderKanban
					strokeWidth={currentPath.startsWith('/projects') ? 2 : 1}
					class="mr-2 inline h-4 w-4 text-grey-100/50 group-hover:text-grey-100/75 group-data-[selected=true]:text-old-rose"
				/>
				Projects</a
			>
		</li>
		<li data-selected={currentPath.startsWith('/blog')} class="group flex items-center">
			<a onclick={() => (mobileMenuOpen = false)} href="/blog"
				><Newspaper
					strokeWidth={currentPath.startsWith('/blog') ? 2 : 1}
					class="mr-2 inline h-4 w-4 text-grey-100/50 group-hover:text-grey-100/75 group-data-[selected=true]:text-old-rose"
				/> Blog</a
			>
		</li>
	</ul>
{/snippet}

<header class="fixed inset-x-4 top-4 z-50 p-0 sm:inset-x-12">
	<nav
		data-mobile-open={mobileMenuOpen}
		class="not-prose group flex list-none items-center justify-center rounded-xl border border-grey-100/10 bg-grey-950/20 p-1 pr-4 text-sm shadow-md backdrop-blur-md hover:border-grey-100/20 data-[mobile-open=true]:rounded-b-md data-[mobile-open=true]:border-grey-100/20"
	>
		<a href="/" class="flex items-center justify-between gap-2 pr-4">
			<img src={assets.logo} alt="Logo" class="h-10 w-10 rounded-lg" />
			<span class="text-sm">Jafu.py</span>
		</a>
		<Tag icon={Hammer}>{import.meta.env.DEV ? 'Dev' : 'Beta'}</Tag>
		{@render items(false)}

		<button
			onclick={() => {
				newToast({
					title: 'Coming Soon',
					description: 'The robots are still working on this feature.',
					variant: 'error',
				});
			}}
			class="hidden cursor-not-allowed items-center rounded-md border border-grey-100/10 px-3 py-1 text-sm opacity-50 md:flex"
			>Search
			<span class="ml-2 flex items-center gap-1 font-mono text-xs">
				<kbd><Command class="h-3 w-3 text-grey-500" /></kbd>+<kbd class=" text-grey-500">K</kbd>
			</span>
		</button>
		<button class="ml-auto sm:hidden" onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			><span class="sr-only"> Toggle Navigation </span>
			{#if mobileMenuOpen}
				<X class="h-6 w-6" stroke-width={1} />
			{:else}
				<Menu stroke-width={1} class="h-6 w-6" />
			{/if}
		</button>
	</nav>
	{#if mobileMenuOpen}
		<div
			transition:slide={{ axis: 'y' }}
			class="mt-2 rounded-b-xl rounded-t-md border border-grey-100/20 bg-grey-950/20 px-4 py-6 backdrop-blur-md"
		>
			{@render items(true)}
		</div>
	{/if}
</header>
