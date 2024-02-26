<script lang="ts">
	import { Icon } from "$components";

	export let id: string;

	const items = [
		{
			title: "Connectivity",
			challengeNo: "In global trade, data exchange is fragmented and lacks connectivity.",
			challengeYes: "TLIP is a digital infrastructure for seamless and secure information sharing.",
			src: "/assets/challenges/connectivity.png"
		},
		{
			title: "Simplify",
			challengeNo: "Cross-border transactions and document exchange are complex.",
			challengeYes: "TLIP simplifies trade by eliminating physical documents and verification processes.",
			src: "/assets/challenges/simplify.png"
		},
		{
			title: "Digital",
			challengeNo: "Over-reliance on paper-based data leads to loss and fraud.",
			challengeYes: "TLIP's DLT-based approach ensures data integrity and protection.",
			src: "/assets/challenges/digital.png"
		},
		{
			title: "Silo",
			challengeNo: "Legacy IT structures create siloed supply chain information.",
			challengeYes: "TLIP adapts to existing systems, ensuring interoperability and data transparency.",
			src: "/assets/challenges/silo.png"
		},
		{
			title: "Interoperability",
			challengeNo: "Roadblocks to cross-border data sharing hinder compliance and security.",
			challengeYes: "TLIP breaks down information silos, providing real-time visibility of consignment status.",
			src: "/assets/challenges/interoperability.png"
		},
		{
			title: "Neutrality",
			challengeNo: "Current platforms lock in users, retaining data and collaboration networks.",
			challengeYes:
				"TLIP's neutrality is assured by open-source tech and an independent global governance board.",
			src: "/assets/challenges/neutrality.png"
		}
	];
</script>

<section {id} class="mt-20 p-10">
	<div class="container flex flex-col gap-20 lg:gap-40">
		{#each items as item, idx}
			<div class={`flex flex-col gap-5 lg:flex-row lg:gap-20 ${idx % 2 ? "lg:flex-row-reverse" : ""}`}>
				<div class="flex flex-1 flex-col gap-2 lg:gap-5">
					<div class="flex flex-row gap-5">
						<Icon name="challengeNo"></Icon>
						<p class="metropolis-600 text-16: lg:text-28">{item.challengeNo}</p>
					</div>
					<div class="flex flex-row gap-5">
						<Icon name="challengeYes"></Icon>
						<p class="metropolis-600 text-16: lg:text-28">{item.challengeYes}</p>
					</div>
				</div>
				<div class="flex-1">
					<img src={item.src} alt={item.title} />
				</div>
			</div>
		{/each}
	</div>
</section>
