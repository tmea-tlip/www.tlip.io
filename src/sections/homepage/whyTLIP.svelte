<script lang="ts">
	import type { Heading } from "$lib/types/sections";
	export let id: string;
	const HEADINGS: Heading = {
		title: "Why TLIP?",
		description:
			"Global trade today has a problem. Paper based trade documentation required for cross border exchange is slow, error prone and expensive."
	};
	const REASONS = [
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
		<div class="w-full bg-green-500 py-16 pl-6 text-white lg:w-1/2 lg:py-28 lg:pl-24 xl:max-w-xl">
			<div class="mb-9">
				<h3 class="mb-6">{HEADINGS.title}</h3>
				<p class="">{HEADINGS.description}</p>
			</div>
			{#each REASONS as reason}
				<div class="mb-6 last:mb-0 lg:w-8/12">
					<h3 class="mb-1.5">{reason.title}</h3>
					<p>{reason.description}</p>
				</div>
			{/each}
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
