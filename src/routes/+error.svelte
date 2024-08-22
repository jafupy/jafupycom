<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 class="font-normal">{$page.status} | {$page.error?.message}</h1>
<p>
	{#if $page.status === 404}
		The robots couldn't find the page you were looking for.
	{/if}
	{#if $page.status === 500}
		The robots are having a bad day, and messed up your request. <a
			href="https://github.com/jafu13/SvelteSite/issues">open an issue</a
		>, or
	{/if}
</p>
<a
	href="/"
	class="mx-auto mt-2 flex h-9 w-fit items-center justify-center whitespace-nowrap rounded-md border border-cold-stone-50 px-4 py-2 text-sm font-medium no-underline shadow-md hover:border-cold-stone-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lavendar-400 disabled:pointer-events-none disabled:opacity-50"
	>Go Home</a
>
