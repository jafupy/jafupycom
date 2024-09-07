<script lang="ts">
	import { fly } from 'svelte/transition';

	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let { text, class: className, ...props }: { text: string; class?: string } = $props();
	let newText = $state(text);
	function hacker() {
		let interval: any = null;

		let iteration = 0;

		clearInterval(interval);

		interval = setInterval(() => {
			newText = newText
				.split('')
				.map((letter, index) => {
					if (index < iteration) {
						return text[index];
					}

					return letters[Math.floor(Math.random() * 26)];
				})
				.join('');

			if (iteration >= text.length) {
				clearInterval(interval);
			}

			iteration += 1 / 5;
		}, 30);
	}
</script>

<span onmouseover={hacker} onfocus={hacker} class={className} {...props}>
	{newText}
</span>
