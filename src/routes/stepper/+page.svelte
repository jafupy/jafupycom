<script>
	import Stepper from '$lib/components/ui/stepper';

	let count = $state(0);
</script>

<Stepper bind:value={count} />
