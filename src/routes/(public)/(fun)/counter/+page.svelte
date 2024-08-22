<script>
	import Stepper from '$lib/components/ui/stepper';
	import Button from '$lib/components/ui/button';

	let count = $state(0);
</script>

<h1>Counter</h1>
<p>A simple cookie clicker like game.</p>
<!-- <Button>Click me</Button> -->
<!-- {Button.d} -->
<Stepper bind:value={count} />
