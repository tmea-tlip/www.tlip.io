<script lang="ts">
	import { Card, Icon, Carousel } from "$components";
	import { INTEGRATED_WITH } from "$lib";
	export let id: string;

	const CARDS = [
		{
			title: "All trade permits in one place",
			description:
				"Store and access all your consignment data and documents easily. Create reports quickly with just a few clicks.",
			icon: {
				name: "decentralised"
			}
		},
		{
			title: "Significant admin cost savings",
			description:
				"TLIP allows actors to share consignment data directly with 3PLs, removing the need for manual data entry and excessive email communication.",
			icon: {
				name: "secure"
			}
		},
		{
			title: "High security levels",
			description:
				"TLIP uses encryption and strong access controls to protect sensitive information, ensuring data integrity and confidentiality throughout the supply chain journey.",
			icon: {
				name: "upgrades"
			}
		}
	];
</script>

<section class="container flex flex-col py-24 md:pb-36 md:pt-32" {id}>
	<div>
		<h2 class="mb-9 text-center text-36">Integrated with</h2>
		<Carousel items={INTEGRATED_WITH}></Carousel>
	</div>
	<div class="grid grid-cols-1 gap-5 pt-24 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
		{#each CARDS as { title, description, icon }}
			<Card classes="work bg-white" withBorder>
				<div slot="eyebrow" class="mb-4 md:mb-6">
					<Icon {...icon} />
				</div>
				<h3 slot="title" class="mb-4 text-28 leading-110 tracking-0.02">{title}</h3>
				<div slot="body" class="leading-150 tracking-0.04 text-grey-500">
					{description}
				</div>
			</Card>
		{/each}
	</div>
</section>
