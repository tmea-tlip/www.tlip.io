<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { Icon } from "$components";

	export let id: string;

	interface Card {
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
	}

	const CARDS: Card = {
		title: "What are the Benefits?",
		subsections: [
			{
				id: "for-exporters",
				title: "For exporters",
				description: "Get key export permits in real-time",
				icon: {
					name: "time"
				}
			},
			{
				id: "for-freight-forwarders",
				title: "For freight forwarders",
				description: "Reduced admin costs",
				icon: {
					name: "exports"
				}
			},
			{
				id: "for-governments",
				title: "For governments",
				description: "Comprehensive and accurate view of consignments",
				icon: {
					name: "government"
				}
			},
			{
				id: "for-importers",
				title: "For importers",
				description: "Timely clearance of goods",
				icon: {
					name: "trust"
				}
			}
		]
	};

	let selectedCard: Subsection = CARDS.subsections[0];

	$: console.log("selectedCard", selectedCard);
	$: console.log("$page", $page);

	const handleCardClick = (card: Subsection) => {
		selectedCard = card;
		document?.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" });
	};

	const handleNavClick = (cardId: string) => {
		selectedCard = CARDS.subsections.find(card => card.id === cardId) ?? CARDS.subsections[0];
	};

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.hash.replace("#", ""));
		const cardId = urlParams.get("card");
		if (cardId) {
			handleNavClick(cardId);
		}
	});
</script>

<section {id}>
	<div class="container py-24 lg:py-28">
		<h2 class="mb-9 text-center text-36 md:mb-12 lg:mb-16 lg:text-left">{CARDS.title}</h2>
		<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
			<div class="space-y-4">
				{#each CARDS.subsections as card}
					<button
						class="flex w-full cursor-pointer flex-row justify-start rounded-lg border p-4 {selectedCard.id ===
						card.id
							? "border-blue-500"
							: "border-gray-300"}"
						on:click={() => handleCardClick(card)}
					>
						<div class="flex w-full items-center justify-start gap-x-2">
							<Icon {...card.icon} class="mr-4" />
							<div class="flex flex-col text-start">
								<h4 class="font-bold">{card.title}</h4>
								<p>{card.description}</p>
							</div>
						</div>
					</button>
				{/each}
			</div>
			<div class="rounded-lg border border-gray-300 p-4">
				<p>{selectedCard.title}</p>
			</div>
		</div>
	</div>
</section>
