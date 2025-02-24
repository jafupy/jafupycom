import Button from './default.svelte';

export const styles = {
	//BTN
	base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm',
	variants: {
		default: 'bg-grey-50 text-grey-950 shadow-md hover:bg-grey-50/90',
		destructive: 'bg-red-400 text-text-grey-950 shadow-md hover:bg-red-400/90',
		outline: 'border border-grey-100/10 shadow-md hover:border-grey-100/20',
		ghost: 'hover:border-grey-100/20',
		link: 'underline-offset-2 underline hover:text-blue-400 text-blue-300',
	},
	sizes: {
		md: 'h-9 px-4 py-2',
		sm: 'h-8 rounded-md px-3 text-xs',
		lg: 'h-10 rounded-md px-8',
		icon: 'h-9 w-9',
	},
};

export default Button;
