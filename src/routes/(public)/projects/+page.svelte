<script lang="ts">
	import { assets, cn } from '$lib';
	import wikiredesign from '$lib/assets/wikiredesign.png';
	import Button, { styles } from '$lib/components/ui/button';
	import Card, { C } from '$lib/components/ui/card';
	import Tag from '$lib/components/ui/tag';
	import {
		Anvil,
		AppWindowMac,
		Brush,
		CalendarClock,
		Component,
		Paintbrush,
		Scale,
		TerminalSquare,
		UsersRound,
	} from 'lucide-svelte';
</script>

<h1>Projects</h1>
<p>
	My projects are primarily code based web dev thing, however I have a few design thins in here as
	well.
</p>

<div class="grid w-full max-w-ch-xl grid-cols-3 gap-4">
	<Card>
		<C.Header icon={Anvil} iconColor="text-prussian-blue-200">
			<C.H.Title>Pandora's Box</C.H.Title>
			<C.H.Description>
				<ul class="flex flex-wrap gap-1">
					<li>
						<Tag icon={Scale}>FOSS</Tag>
					</li>
					<li>
						<Tag icon={TerminalSquare}>Svelte</Tag>
					</li>
					<li>
						<Tag icon={CalendarClock}>2024 / Aug</Tag>
					</li>
				</ul>
			</C.H.Description>
		</C.Header>
		<C.Content>
			<p>
				Pandora's Box is a Svelte UI library focusing on over-animated, over-engineered components
				where every bit of the component is animated.
			</p>
		</C.Content>
		<C.Footer class="flex gap-2 text-sm">
			<a href="/projects/pandora" class={cn(styles.base, styles.variants.link, styles.sizes.md)}>
				Read on
			</a>
			<a
				href="https://github.com/jafupy/pandoras-Box"
				class={cn(styles.base, styles.variants.link, styles.sizes.md)}
			>
				Github
			</a>
		</C.Footer>
	</Card>
	<Card>
		<C.Header icon={Paintbrush} iconColor="text-prussian-blue-200">
			<C.H.Title>Wikipedia Redesign</C.H.Title>
			<C.H.Description>
				<ul class="flex flex-wrap gap-1">
					<li>
						<Tag icon={AppWindowMac}>Figma</Tag>
					</li>
					<li>
						<Tag icon={UsersRound}>Co-op</Tag>
					</li>
					<li>
						<Tag icon={CalendarClock}>2023 / Dec</Tag>
					</li>
				</ul>
			</C.H.Description>
		</C.Header>
		<C.Content>
			<img
				class="rounded-md border border-cold-stone-100/20"
				src={wikiredesign}
				alt="Mockup of Wikipedia Redesign"
			/>
			<p>
				From the 2000s' bare-bones design to a beautifully crafted website of the modern era, we
				updated the aesthetics and created an intuitive navigation with thoughtful details in order
				to create an enhanced user experience, one pixel at a time.
				<br /> <br />
				Made with a friend, who I am no longer able to contact.
			</p>
		</C.Content>
		<C.Footer class="flex gap-2 text-sm">
			<a
				href="/projects/wikipedia-redesign"
				class={cn(styles.base, styles.variants.link, styles.sizes.md)}
			>
				Read on
			</a>
		</C.Footer>
	</Card>
	<Card>
		<C.Header icon={Component} iconColor="text-old-rose">
			<C.H.Title>Branding V6</C.H.Title>
			<C.H.Description>
				<ul class="flex flex-wrap gap-1">
					<li>
						<Tag icon={AppWindowMac}>Figma</Tag>
					</li>
					<li>
						<Tag icon={Brush}>Procreate</Tag>
					</li>
					<li>
						<Tag icon={CalendarClock}>2024 / Aug</Tag>
					</li>
				</ul>
			</C.H.Description>
		</C.Header>
		<C.Content>
			<img
				class="rounded-md border border-cold-stone-100/20"
				src={assets.banner}
				alt="Banner for V6"
			/>
			<p>
				Version 6 of my branding. This includes a new logo, a new color scheme and a new social
				media banner.
			</p>
		</C.Content>
		<C.Footer>
			<a
				href="/projects/branding-v6"
				class={cn(styles.base, styles.variants.link, styles.sizes.md)}
			>
				Read on
			</a>
		</C.Footer>
	</Card>
</div>
