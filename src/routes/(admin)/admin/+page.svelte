<script lang="ts">
	import { page } from '$app/stores';
	import { newToast } from '../../toasts.svelte';

	if ($page.params.login === 'success') {
		newToast({
			title: 'Success',
			description: 'You have been logged in',
			variant: 'success',
		});
	}
</script>
