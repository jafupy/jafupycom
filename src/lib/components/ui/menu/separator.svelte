<script>
	import { createSeparator, melt } from '@melt-ui/svelte';

	const {
		elements: { root: Separator },
	} = createSeparator({ orientation: 'horizontal' });
</script>

<div use:melt={$Separator} class="bg-grey-100/20 mx-auto h-px w-[80%]"></div>
