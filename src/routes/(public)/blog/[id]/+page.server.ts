import type { PageLoad } from './$types';
export const load: PageLoad = async ({ params, fetch, ...rest }) => {
	const res = await fetch(`https://cdn.jsdelivr.net/gh/jafupy/site-cdn/blog/${params.id}.md`);
	console.log('L', await (await fetch(`https://cdn.jsdelivr.net/gh/jafupy/site-cdn/`)).text());
	console.log(await res.text());
	return {
		post: {
			title: `Title for ${params.id} goes here`,
			content: `Content for ${params.id} goes here`,
		},
	};
};
