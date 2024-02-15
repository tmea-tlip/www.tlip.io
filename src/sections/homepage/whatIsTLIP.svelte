<script lang="ts">
	import type { Heading } from "$lib/types/sections";
	export let id: string;
	const HEADING: Heading = {
		title: "What is TLIP?",
		description:
			"TLIP is a collaborative infrastructure, where all actors can share data and documents. Used by both border agencies and commercial actors, each party has full control of its own data, and all data is available directly from the source."
	};
	const cards = [
		{
			eyebrow: "For traders",
			title: "Quick, Seamless and Digitised Document Sharing with Border Agencies",
			description:
				"TLIP provides transparency to governments and trading partners with real-time updates on consignments.",
			image: "forTraders.png"
		},
		{
			eyebrow: "For governments",
			title: "A Global Public Infrastructure Inclusive for All",
			description:
				"TLIP is a revolutionary distributed ledger technology solution that brings together the public and private sector to facilitate paperless international trade.",
			image: "forGovernments.png"
		},
		{
			eyebrow: "For Transporters",
			title: "Cargo Visibility and Optimised Planning",
			description:
				"TLIP works with multiple governments and businesses to establish a data infrastructure for the secure and trusted sharing of information in cross-border trade.",
			image: "forTransporters.png"
		},
		{
			eyebrow: "For ports",
			title: "International Partner to the Port Community System",
			description:
				"Digital versions of certificates of origin, phytosanitary certificates, export certificates, inspection reports and more are made available to destination customs and traders.",
			image: "forPorts.png"
		}
	];
</script>

<section class="container py-24 md:pb-36 md:pt-32" {id}>
	<h2 class="mb-9 text-center text-36">{HEADING.title}</h2>
	<p class="mx-auto mb-6 max-w-4xl text-center leading-6 tracking-0.04 md:mb-32">{HEADING.description}</p>
	{#each cards as { image, title, eyebrow, description }, idx}
		<div class="mb-9 flex justify-center last:mb-0 md:mb-32">
			<div class="flex flex-col justify-center md:flex-row">
				<div
					class={`${
						idx % 2 ? "md:order-1" : "md:order-0"
					} mb-4 flex w-full items-center md:mb-12 md:w-auto lg:mb-0`}
				>
					<img
						src="./assets/{image}"
						alt={title}
						class={`image-shadow ld:${idx % 2 ? "ml-auto" : "mr-auto"}`}
					/>
				</div>
				<div
					class={`flex w-full flex-col items-start justify-center text-left md:w-1/2 ${
						idx % 2 ? "md:mr-20" : "md:ml-20"
					}`}
				>
					<h4 class="text-left text-15 font-bold capitalize leading-6 tracking-0.02 text-grey-500 lg:text-20">
						{eyebrow}
					</h4>
					<h3 class="my-3 tracking-normal lg:tracking-0.02">{title}</h3>
					<p class="text-grey-500">{description}</p>
				</div>
			</div>
		</div>
	{/each}
</section>
