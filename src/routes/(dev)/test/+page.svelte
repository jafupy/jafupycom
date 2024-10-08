<script lang="ts">
	import { compile } from 'mdsvex';

	const code = `
	# Hi
	hii
	`;
	let body: string;
	export async function load() {
		body = await compile(code, {});
	}
</script>

{@html body}
<!-- {body} -->
