import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import Shiki from '@shikijs/rehype';
import RehypeSlug from 'rehype-slug';
//
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sequence([
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx'],
			smartypants: true,
			layout: 'src/lib/svx.svelte',
			rehypePlugins: [Shiki, RehypeSlug],
		}),
		preprocessMeltUI(),
	]),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	},
	extensions: ['.svelte', '.md', '.svx'],
};
export default config;
