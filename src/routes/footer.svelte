<script>
	import Wiggle from '$lib/components/wiggle.svelte';
	import Heart from 'lucide-svelte/icons/heart';
</script>

<footer class="not-prose text-grey-400 flex w-full flex-col gap-4 px-5 py-12 text-sm">
	<Wiggle class="text-grey-800" />
	<ul class="flex flex-col-reverse items-baseline justify-center gap-4 sm:flex-row">
		<li class="mr-auto">
			Made with <Heart class="inline h-4 w-4 text-old-rose" /> by Jacob
		</li>
		<li>
			<a href="/legal/privacy" class="flex items-center gap-2"> Privacy </a>
		</li>
		<li>
			<a href="/ui">UI</a>
		</li>
		<li>
			<a href="/counter">Counter</a>
		</li>
	</ul>
	<div class="flex items-center">
		<ul class="order-2 flex flex-row items-center justify-center gap-4">
			<li>
				<a href="https://x.com/jafupy" class="">
					<span class="sr-only">X</span>
					<svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5">
						<path
							d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
						></path>
					</svg>
				</a>
			</li>
			<li>
				<a href="https://github.com/jafupy">
					<span class="sr-only">GitHub</span>
					<svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5">
						<path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd"
						></path>
					</svg>
				</a>
			</li>
		</ul>
		<p class="mr-auto text-sm">
			© {new Date().getFullYear()} Jacob / @JaFu.py. <br /> All rights reserved.
		</p>
	</div>
</footer>
