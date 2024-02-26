<script lang="ts">
	export let id: string;

	const items = [
		{
			title: "$500 Bn",
			description: "the annual cost of paper based documentation"
		},
		{
			title: "200+",
			description: "the number of information exchanges required for a shipment from Kenya to the Netherlands"
		},
		{
			title: "$Zero",
			description: "the value of a shipment delayed due to lost documents"
		}
	];
</script>

<section {id} class="bg-green-500 p-10">
	<div class="container grid grid-cols-1 gap-10 lg:grid-cols-3">
		{#each items as item}
			<div class="flex flex-col gap-1 lg:gap-2">
				<h2 class="metropolis-600 text-32 text-white">{item.title}</h2>
				<p class="text-16 text-white">{item.description}</p>
			</div>
		{/each}
	</div>
</section>
