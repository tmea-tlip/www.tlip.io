<script lang="ts">
	import { Icon, Card } from "$components";
	import type { Heading } from "$lib/types/sections";
	export let id: string;

	const CARDS = [
		{
			title: "Initiated",
			description:
				"by TradeMark Africa and IOTA Foundation together with strategic partners from the public and private sector in East Africa.",
			icon: "friendship"
		},
		{
			title: "Implemented",
			description:
				"by government agencies with technical oversight from a Technical Working Group, representing both public and private entities.",
			icon: "dataQuality"
		},
		{
			title: "Funded",
			description: "through the generous support of development agencies.",
			icon: "finance"
		}
	];

	const HEADING: Heading = {
		title: "Who are We?"
	};
</script>

<section class="container py-24" {id}>
	<h3 class="mb-5 text-left text-36 md:mb-10">{HEADING.title}</h3>
	<div class="flex flex-col lg:flex-row lg:gap-x-20">
		<div class="mb-7 flex items-center justify-center md:mb-4 lg:mb-0 lg:w-1/2">
			<div class="flex w-full flex-col gap-y-7 md:gap-y-4">
				{#each CARDS as { title, icon, description }}
					<Card classes="lg:py-6 lg:px-8" withBorder>
						<div slot="eyebrow">
							<Icon name={icon} />
						</div>
						<h4 slot="title" class="my-3 font-bold leading-120">{title}</h4>
						<p slot="body" class="text-grey-500">
							{description}
						</p>
					</Card>
				{/each}
			</div>
		</div>
		<div class="image-container overflow-hidden lg:w-1/2">
			<img src="./assets/who-are-we.png" alt="TLIP in everyday life" class="h-full rounded-md" />
		</div>
	</div>
</section>

<style lang="scss">
	.image-container {
		height: 760px;
		@screen lg {
			height: auto;
		}
		img {
			width: 100%;
			object-fit: cover;
			@screen lg {
				max-width: fit-content;
			}
		}
	}
</style>
