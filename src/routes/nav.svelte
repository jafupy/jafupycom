<script lang="ts">
	import { assets } from '$lib';
	import { ChevronRight, Command, FolderKanban, Newspaper, User } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { newToast } from './toasts.svelte';

	let path: string[] = $derived(
		$page.url.pathname.split('/').slice(2, $page.url.pathname.split('/').length - 1),
	);
	let currentPath = $derived($page.url.pathname);
	let toast = $state(0);
</script>

<header class="fixed inset-x-12 top-4 z-50 p-0">
	<nav
		class="not-prose group flex list-none items-center justify-center rounded-xl border border-cold-stone-100/10 bg-cold-stone-950/20 p-1 pr-4 text-sm shadow-md backdrop-blur-md hover:border-cold-stone-100/20"
	>
		<a href="/" class="flex items-center justify-between gap-2 pr-4">
			<img src={assets.logo} alt="Logo" class="h-10 w-10 rounded-lg" />
			<span class="text-sm">Jafu.py</span>
		</a>
		<ul class="mx-auto flex flex-row items-center gap-4">
			<li data-selected={currentPath.startsWith('/bio')} class="group flex items-center">
				<User
					strokeWidth={currentPath.startsWith('/bio') ? 2 : 1}
					class="mr-2 inline h-4 w-4 text-cold-stone-100/50 group-hover:text-cold-stone-100/75 group-data-[selected=true]:text-old-rose"
				/>
				<a href="/bio">Bio</a>
			</li>
			<li data-selected={currentPath.startsWith('/projects')} class="group flex items-center">
				<FolderKanban
					strokeWidth={currentPath.startsWith('/projects') ? 2 : 1}
					class="mr-2 inline h-4 w-4 text-cold-stone-100/50 group-hover:text-cold-stone-100/75 group-data-[selected=true]:text-old-rose"
				/>
				<a href="/projects">Projects</a>
			</li>
			<li data-selected={currentPath.startsWith('/blog')} class="group flex items-center">
				<a href="/blog"
					><Newspaper
						strokeWidth={currentPath.startsWith('/blog') ? 2 : 1}
						class="mr-2 inline h-4 w-4 text-cold-stone-100/50 group-hover:text-cold-stone-100/75 group-data-[selected=true]:text-old-rose"
					/> Blog</a
				>
			</li>
		</ul>

		<button
			onclick={() => {
				newToast({
					title: 'Coming Soon',
					description: 'The robots are still working on this feature.',
					variant: 'error',
				});
			}}
			class="flex items-center rounded-md border border-cold-stone-100/10 px-3 py-1 text-sm opacity-50"
			>Search
			<span class="ml-2 flex items-center gap-1 font-mono text-xs">
				<kbd><Command class="h-3 w-3 text-cold-stone-500" /></kbd>+<kbd class=" text-cold-stone-500"
					>K</kbd
				>
			</span>
		</button>
	</nav>
</header>
