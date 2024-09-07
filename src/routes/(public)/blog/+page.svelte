<script lang="ts">
	import Card, { C } from '$lib/components/ui/card';
	import Header from '$lib/components/ui/card/header.svelte';
	import Tag from '$lib/components/ui/tag';
	import { AppWindowMac, CalendarClock, Link2, Newspaper, UsersRound } from 'lucide-svelte';
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
<div class="grid w-full max-w-ch-xl grid-cols-3 place-items-center gap-4">
	{#each posts as post}
		<a class="not-prose w-full" href="/blog/{post.slug}">
			<Card class="hover:border-grey-100/20">
				<C.Header icon={Link2}>
					<C.H.Title>{post.title}</C.H.Title>
					<C.H.Description>{post.date}</C.H.Description>
				</C.Header>
				<C.Content>
					<p>{post.description}</p>
				</C.Content>
			</Card>
		</a>
	{/each}
</div>
