<script>
	import Card, { C } from '$lib/components/ui/card';
	import Content from '$lib/components/ui/card/content.svelte';
	import { KeyRound } from 'lucide-svelte';
</script>

<Card>
	<C.Header icon={KeyRound}>
		<C.H.Title>Login</C.H.Title>
	</C.Header>
	<C.Content>
		<form method="post" action="?/login" class="flex flex-col gap-2">
			<input
				type="password"
				name="password"
				id="password"
				class="w-full rounded-md border border-grey-100/20 bg-transparent p-2 text-sm focus:border-blue-300"
			/>
			<button
				class="w-full rounded-md border border-grey-100/20 bg-transparent p-2 text-sm active:border-blue-300"
				type="submit">Login</button
			>
		</form>
	</C.Content>
</Card>
