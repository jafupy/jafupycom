<script lang="ts">
	import Menu, { M } from '$lib/components/ui/menu';
	import {
		ArrowLeftRight,
		ChartLine,
		CloudUpload,
		Copy,
		Dot,
		Pencil,
		Settings2,
	} from 'lucide-svelte';
	import { newToast } from '../../toasts.svelte';
	import Separator from '$lib/components/ui/menu/separator.svelte';

	const click = () => {
		newToast({ title: 'Who wants toasts?', description: 'No? No one? ok. :(', variant: 'error' });
		newToast({ title: 'Who wants toasts?', description: 'No? No one? ok. :(', variant: 'warning' });
		newToast({ title: 'Who wants toasts?', description: 'No? No one? ok. :(', variant: 'info' });
	};
	let value = $state('Hi');
</script>

<h1>This is not a public page. This page is meant for testing purposes only.</h1>

<Menu>
	<M.InputText bind:value Icon={Pencil}>Rename</M.InputText>
	<M.Separator />
	<M.Button Icon={CloudUpload}>New Deployment</M.Button>
	<M.Button Icon={Copy}>Duplicate</M.Button>
	<M.Button Icon={ChartLine}>Analytics</M.Button>
	<M.Button Icon={ArrowLeftRight}>Transfer Project</M.Button>
	<M.Button Icon={Settings2}>Project Settings</M.Button>
	<M.Separator />
	<M.HoldButton class="text-red-500" Icon={Dot} holdText="Hold to Delete">Delete</M.HoldButton>
</Menu>

<button onclick={click}>Click me</button>

<div class="relative mt-12 p-6">
	<div class="not-prose border-grey-100/20 rounded-xl border px-24 py-5">
		<h1 class="font-serif text-3xl font-bold">
			40 <span class="text-lg font-light">WPM</span>
		</h1>
		<p class="text-grey-300">
			Jacob @ Jafu.py <br />
			2024 / Aug / 24
		</p>
	</div>
	<div
		class="absolute bottom-0 right-0 -z-10 h-32 w-32 rounded-full bg-prussian-blue-700 blur-3xl"
	></div>
</div>
