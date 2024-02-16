<script lang="ts">
	import { Button } from "$components";

	export let id: string;
	const reasonItems = [
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

<section class="relative h-full w-full bg-green-500" {id}>
	<div class="image bottom-0 left-0 top-0 h-full w-full lg:absolute lg:w-1/2" />
	<div class="container h-full w-full justify-end lg:flex">
		<div
			class="flex w-full flex-col items-center bg-green-500 py-16 pl-6 text-white lg:w-1/2 lg:items-start lg:py-28 lg:pl-24 xl:max-w-xl"
		>
			<div class="mb-9 flex flex-col items-center lg:items-start">
				<h3 class="mb-6">Why TLIP?</h3>
				<p class="text-center lg:text-left">
					Trade Logistics Information Pipeline (TLIP) is a collaborative infrastructure, where all actors can
					share data and documents. Used by both border agencies and commercial actors, each party has full
					control of its own data, and all data is available directly from the source.
				</p>
			</div>
			{#each reasonItems as reason}
				<div class="mb-6 flex flex-col items-center last:mb-0 lg:w-8/12 lg:items-start">
					<h3 class="mb-1.5">{reason.title}</h3>
					<p class="text-center lg:text-left">{reason.description}</p>
				</div>
			{/each}
			<Button title="Learn More" url="/why" tertiary />
		</div>
	</div>
	<hr />
</section>

<style lang="scss">
	.image {
		min-height: 375px;
		background: url("/assets/why-tlip.png");
		background-size: 100%;
		background-position: 45% 20%;
		block-size: auto;
		@apply bg-no-repeat;
		@apply bg-cover;
	}
</style>
