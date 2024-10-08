import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import Shiki from '@shikijs/rehype';
import RehypeSlug from 'rehype-slug';
import { mdsvex } from 'mdsvex';

// const config = {
// 	preprocess: [vitePreprocess(), markdoc()],
// 	extensions: ['.markdoc', '.svelte'],
// };
//
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sequence([
		vitePreprocess(),
		mdsvex({
			rehypePlugins: [RehypeSlug, Shiki],
		}),
		preprocessMeltUI(),
	]),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	},
	extensions: ['.svelte', '.svx'],
};
export default config;
