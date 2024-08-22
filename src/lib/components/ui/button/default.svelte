<script lang="ts">
	import { cn } from '$lib';
	import { _util } from '$lib/components/ui';
	import { styles } from './index';

	type Size = 'sm' | 'md' | 'lg';
	type Variant = 'default' | 'destructive' | 'outline' | 'ghost';

	const { variants, sizes, base } = styles;

	let {
		class: className = '',
		size = 'md',
		variant = 'default',

		children,
		...props
	}: {
		class?: string;
		size?: Size;
		variant: Variant;
		children: () => any;
	} = $props();
</script>

<button class={cn(base, _util.accessibility, sizes[size], variants[variant], className)} {...props}>
	{@render children()}
</button>
