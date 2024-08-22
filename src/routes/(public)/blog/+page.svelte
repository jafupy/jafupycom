<script lang="ts">
	import Card, { C } from '$lib/components/ui/card';
	import Header from '$lib/components/ui/card/header.svelte';
	import Tag from '$lib/components/ui/tag';
	import { AppWindowMac, CalendarClock, Newspaper, UsersRound } from 'lucide-svelte';
	import Footer from '../../footer.svelte';
	import Button from '$lib/components/ui/button';

	let posts = [
		{
			title: 'Hello World',
			date: '2023-01-01',
			description: 'This is a description',
			slug: 'hello-world',
		},
		{
			title: 'Hello World 2',
			date: '2023-01-02',
			description: 'This is a description',
			slug: 'hello-world-2',
		},
	];
</script>

<h1 class="mb-2">Blog</h1>
<p class="mt-2">Me rambling.</p>
<div class="grid w-full max-w-ch-xl grid-cols-3 place-items-center gap-4"></div>
