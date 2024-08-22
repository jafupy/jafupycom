<script lang="ts">
	import Menu, { M } from '$lib/components/ui/menu';
	import { Dot } from 'lucide-svelte';
</script>

<h1>This is not a public page. This page is meant for testing purposes only.</h1>

<Menu>
	<M.Button Icon={Dot}>Hi</M.Button>
</Menu>
