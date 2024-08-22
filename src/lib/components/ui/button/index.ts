import Button from './default.svelte';

export const styles = {
	//BTN
	base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm',
	variants: {
		default: 'bg-cold-stone-50 text-cold-stone-950 shadow-md hover:bg-cold-stone-50/90',
		destructive: 'bg-well-red-400 text-text-cold-stone-950 shadow-md hover:bg-well-red-400/90',
		outline: 'border border-cold-stone-100/10 shadow-md hover:border-cold-stone-100/20',
		ghost: 'hover:border-cold-stone-100/20',
		link: 'underline-offset-2 underline text-lavendar-400 hover:text-lavendar-200',
	},
	sizes: {
		md: 'h-9 px-4 py-2',
		sm: 'h-8 rounded-md px-3 text-xs',
		lg: 'h-10 rounded-md px-8',
		icon: 'h-9 w-9',
	},
};

export default Button;
