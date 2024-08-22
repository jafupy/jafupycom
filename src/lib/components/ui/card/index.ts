import Card from './root.svelte';
import Content from './content.svelte';
import Header from './header.svelte';
import Footer from './footer.svelte';
import HeaderTitle from './header-title.svelte';
import HeaderDescription from './header-subtitle.svelte';

export const C = {
	Header,
	Content,
	Footer,
	H: {
		Title: HeaderTitle,
		Description: HeaderDescription,
	},
};

export default Card;
