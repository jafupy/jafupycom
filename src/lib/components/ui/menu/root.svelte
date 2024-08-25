<script lang="ts">
	import { cn } from '$lib';

	let { class: className = '', children }: { class?: string; children: () => any } = $props();
</script>

<div
	class="not-prose border-grey-100/20 bg-grey-950/20 flex w-52 flex-col items-start gap-y-1 rounded-lg border p-1 shadow-md backdrop-blur-md"
>
	{@render children()}
</div>
