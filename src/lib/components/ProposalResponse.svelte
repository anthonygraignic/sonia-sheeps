<script lang="ts">
	export let from: string;
	export let response: string;
	export let wordsAmount: 2;

	$: words = response
		.replaceAll('\n', ' ')
		.split(' ')
		.filter((str) => str.length > 3)
		// reverse it to have more meaningful words
		.reverse();
</script>

<div class="flex flex-row space-x-4 items-center justify-items-center px-4">
	<p>{from} -></p>

	<details>
		<summary class="font-bold">
			{#each Array.from(Array(wordsAmount).keys()) as index}
				{words[index]}&nbsp;
			{/each}
		</summary>
		<p>{response}</p>
	</details>
</div>
