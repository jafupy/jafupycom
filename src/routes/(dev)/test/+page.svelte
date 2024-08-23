<script lang="ts">
	import Menu, { M } from '$lib/components/ui/menu';
	import { Dot } from 'lucide-svelte';
	import { newToast } from '../../toasts.svelte';

	const click = () => {
		newToast({ title: 'Who wants toasts?', description: 'No? No one? ok. :(', variant: 'error' });
		newToast({ title: 'Who wants toasts?', description: 'No? No one? ok. :(', variant: 'warning' });
		newToast({ title: 'Who wants toasts?', description: 'No? No one? ok. :(', variant: 'info' });
	};
</script>

<h1>This is not a public page. This page is meant for testing purposes only.</h1>
<!-- 
<Menu>
	<M.Button Icon={Dot}>Hi</M.Button>
</Menu> -->

<button onclick={click}>Click me</button>
