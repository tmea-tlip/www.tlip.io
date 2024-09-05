<script lang="ts">
	import { Icon, Card } from "$components";

	export let id: string;

	interface Section {
		title: string;
		subsections: Subsection[];
	}
	interface Subsection {
		id: string;
		title: string;
		description: string;
		icon: {
			name: string;
		};
		cards: Card[];
	}

	interface Card {
		title: string;
		description: string;
	}

	const SECTIONS: Section = {
		title: "Benefits",
		subsections: [
			{
				id: "for-exporters",
				title: "For exporters",
				description: "Get key export permits in real-time",
				icon: {
					name: "exports"
				},
				cards: [
					{
						title: "Key export permits in real-time",
						description:
							"TLIP is integrated with authorities including the Kenya Revenue Authority and KenTrade, allowing exporters to receive essential permits, such as export declarations, directly in their account immediately upon approval."
					},
					{
						title: "Streamlined document management",
						description:
							"Consignment data and documents can be easily stored, accessed, and used to generate reports with just a few clicks."
					},
					{
						title: "Easy data sharing",
						description:
							"Exporters can share consignment documents or data with freight forwarders, consolidators, or buyers to allow them to add documents on their behalf."
					}
				]
			},
			{
				id: "for-freight-forwarders",
				title: "For freight forwarders",
				description: "Reduced admin costs",
				icon: {
					name: "government"
				},
				cards: [
					{
						title: "Reduced admin",
						description:
							"TLIP allows freight forwarders to share consignment data directly with 3PLs, removing the need for manual data entry and excessive email communication."
					},
					{
						title: "Flexible document handling",
						description:
							"Freight forwarders can submit documents on behalf of exporters manually or through  API integration."
					},
					{
						title: "Improved customer trust",
						description:
							"By enabling a tamper-evident audit trail, data encryption provides higher security assurance and reduces the risk of fraud and data manipulation."
					}
				]
			},
			{
				id: "for-governments",
				title: "For governments",
				description: "Comprehensive and accurate view of consignments",
				icon: {
					name: "finance"
				},
				cards: [
					{
						title: "Comprehensive and accurate view of consignments",
						description:
							"TLIP enables border agents to evaluate the accuracy and consistency of data throughout the consignment's journey from origin to destination."
					},
					{
						title: "Enhanced data security ",
						description:
							"Governments benefit from TLIP’s data integrity and confidentiality as it enhances the accuracy of cross-border data, reduces fraud risk, and improves regulatory efficiency. Secure data protection helps governments effectively manage trade and enforce compliance."
					},
					{
						title: "Efficient and informed decision-making",
						description:
							"Government decision-making processes benefit from a streamlined access to information enabled by TLIP's data consolidation. With timely and accurate data at their fingertips, decision-makers have can take more informed and effective policy decisions."
					}
				]
			},
			{
				id: "for-importers",
				title: "For importers",
				description: "Timely clearance of goods",
				icon: {
					name: "trust"
				},
				cards: [
					{
						title: "Timely clearance of goods",
						description:
							"TLIP allows importers to access consignment documents to start clearance of goods before they reach their destination market."
					},
					{
						title: "Comprehensive consignment overview",
						description:
							"TLIP allows importers to track the consignments' processes in real time as it goes through government processes."
					},
					{
						title: "Goods integrity confidence ",
						description:
							"Through consignment tracking with RFID tags, cargo tracking, and an overall audit trail, importers have more visibility into the consignment, which in turn improves their confidence about the the goods integrity."
					}
				]
			}
		]
	};

	let selectedCard: Subsection = SECTIONS.subsections[0];

	const handleCardClick = (card: Subsection) => {
		selectedCard = card;
	};
</script>

<section {id}>
	<div class="container flex flex-col gap-10 py-20 lg:py-28">
		<h2 class="text-center text-36 lg:text-left">{SECTIONS.title}</h2>
		<div class="flex flex-col gap-5 lg:grid lg:grid-cols-3">
			<!-- Mobile Section -->
			<div class="space-y-8 lg:hidden">
				{#each SECTIONS.subsections as subsection}
					<div class="space-y-6 rounded-lg border border-blue-200/30 p-6 lg:hidden">
						<div class="flex items-start gap-x-2">
							<Icon {...subsection.icon} />
							<div class="text-start">
								<h3 class="text-xl font-bold">{subsection.title}</h3>
								<p>{subsection.description}</p>
							</div>
						</div>
						<hr class="border border-blue-200/30" />
						<div class="space-y-4">
							{#each subsection.cards as card}
								<div class="flex flex-col gap-2">
									<h4 class="leading-110 tracking-0.02">
										{card.title}
									</h4>
									<p class="leading-150 tracking-0.02 text-grey-500">
										{card.description}
									</p>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
			<!-- Desktop Section -->
			<div class="hidden flex-col space-y-4 lg:flex">
				{#each SECTIONS.subsections as card}
					<button
						class={`flex w-full cursor-pointer flex-row justify-start rounded-lg p-4 ${
							selectedCard.id === card.id ? "border border-blue-200/30 bg-blue-200/30" : "border border-blue-200/30"
						}`}
						on:click={() => handleCardClick(card)}
					>
						<div class="flex w-full flex-row items-start justify-start gap-x-4">
							<Icon {...card.icon} />
							<div class="flex flex-col gap-1 text-start">
								<h4 class="font-bold">{card.title}</h4>
								<p>{card.description}</p>
							</div>
						</div>
					</button>
				{/each}
			</div>
			<div class="col-span-2 hidden rounded-lg border border-blue-200/30 p-6 lg:block">
				<div class="flex flex-col gap-8">
					{#each selectedCard.cards as card}
						<div class="flex flex-col gap-2">
							<h4 class="text-28 leading-110 tracking-0.02">{card.title}</h4>
							<div class="leading-150 tracking-0.02 text-grey-500">{card.description}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
