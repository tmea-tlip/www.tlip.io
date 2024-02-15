<script lang="ts">
	import { Card, Icon } from "$components";

	export let id: string;
	const HEADINGS = {
		title: "What are the Benefits?",
		cards: [
			{
				title: "Time and Cost Saving",
				description:
					"Reduced time and costs involved in moving goods between East Africa and destination markets.",
				icon: {
					name: "time"
				}
			},
			{
				title: "Exports Competitiveness",
				description:
					"Improve the competitiveness of the East African Community in globally-exported comodities.",
				icon: {
					name: "exports"
				}
			},
			{
				title: "Government Collaboration",
				description:
					"Increased collaboration between government and business through information exchange on a trusted infrastructure.",
				icon: {
					name: "government"
				}
			},
			{
				title: "Trust",
				description: "Availability of reliable advance information for all actors.",
				icon: {
					name: "trust"
				}
			},
			{
				title: "Goods Visibility",
				description: "Increased visibility of goods in transit - location and border procedures.",
				icon: {
					name: "visibility"
				}
			},
			{
				title: "Data Accuracy",
				description:
					"Digitisation eliminates the need for repetitive entry of data sets making it possible to reuse data from source.",
				icon: {
					name: "accuracy"
				}
			}
		]
	};
</script>

<section {id}>
	<div class="container py-24 lg:py-28">
		<h2 class="mb-9 text-center text-36 md:mb-12 lg:mb-16 lg:text-left">{HEADINGS.title}</h2>
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-20">
			{#each HEADINGS.cards as { title, description, icon }}
				<Card small>
					<div slot="eyebrow" class="mb-6 flex items-center justify-center md:justify-start">
						<Icon {...icon} />
					</div>
					<h4 slot="title" class="mb-3 text-center font-bold leading-120 tracking-0.02 md:text-left">
						{title}
					</h4>
					<p slot="body" class="text-center leading-150 tracking-0.04 text-grey-500 md:text-left">
						{description}
					</p>
				</Card>
			{/each}
		</div>
	</div>
</section>
