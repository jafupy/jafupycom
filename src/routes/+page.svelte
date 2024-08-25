<script lang="ts">
	import Wiggle from '$lib/components/wiggle.svelte';
</script>

<section class="not-prose mx-auto flex min-h-[85vh] flex-col items-center justify-center">
	<h1 class="text-7xl">I'm Jacob</h1>
	<p>Also known as Jafu.py</p>
	<p>A web dev, guitarist and professional waste of space</p>
</section>
<section class="relative">
	<p>
		Hello, I’m Jacob, more commonly known online as jafu.py. I'm a {new Date().getFullYear() - 2010}
		years old Polish person raised in England. I write code, play classical/fingerstyle guitar. I taught
		myself python at 10, moving on to web dev. I use React and Svelte. Other than that, I play minecraft,
		and other non FPS games.
		<a href="/bio#games">More on games here</a>
	</p>
	<div
		aria-hidden="true"
		class="absolute -top-52 right-0 -z-20 h-52 w-52 translate-x-56 scale-150 rounded-full bg-prussian-blue-700 blur-3xl"
	></div>
	<Wiggle />
</section>
