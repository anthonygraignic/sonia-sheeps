<script lang="ts">
	import ProposalForm from '$lib/components/ProposalForm.svelte';
	import ProposalResponse from '$lib/components/ProposalResponse.svelte';

	function onResult(event: { detail: { from: string; result: string } }) {
		responses = [event.detail, ...responses];
	}

	let responses: { from: string; result: string }[] = [];
</script>

<svelte:head>
	<title>Sonia Sheeps</title>
	<meta name="description" content="Using OpenAI to improvise" />
</svelte:head>

<main class="min-h-[90vh]">
	<div class="flex flex-col items-center justify-items-center">
		<h1 class="text-3xl font-bold mt-4 ">Les Moutons de Sonia</h1>
		<p class="mt-2">
			Et si au lieu de compter les moutons pour s'endormir, on se disait des mots en relation les un
			avec les autres comme en exercice d'improvisation ?
		</p>

		<ProposalForm on:result={onResult} />

		<hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />

		<div class="grid grid-cols-1 divide-y gap-2">
			{#each responses as response}
				<ProposalResponse from={response.from} response={response.result} wordsAmount={2} />
			{/each}
		</div>
	</div>
</main>
