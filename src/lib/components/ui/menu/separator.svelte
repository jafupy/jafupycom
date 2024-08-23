<script>
	import { createSeparator, melt } from '@melt-ui/svelte';

	const {
		elements: { root: Separator },
	} = createSeparator({ orientation: 'horizontal' });
</script>

<div use:melt={$Separator} class="my-2 h-[1px] w-full bg-neutral-500"></div>
