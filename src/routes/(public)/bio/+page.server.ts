import type { PageLoad } from './$types';
import { compile } from 'mdsvex';
export async function load() {
	const page = await (
		await fetch('https://cdn.jsdelivr.net/gh/jafupy/obsidian-vault/site/bio.md')
	).text();
	const md = await compile(page, {}).code;
	console.log(md);
	return {
		mdBody: md,
		page,
	};
}
