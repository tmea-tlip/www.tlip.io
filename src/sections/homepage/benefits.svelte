<script lang="ts">
	import { onMount } from "svelte";
	import { Icon } from "$components";

	export let id: string;

	const HEADINGS = {
		title: "What are the Benefits?",
		cards: [
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

	let selectedCard = HEADINGS.cards[0];

	const selectCardFromQuery = () => {
		const urlParams = new URLSearchParams(window.location.search);
		const cardId = urlParams.get("card");

		if (cardId) {
			const card = HEADINGS.cards.find(c => c.id === cardId);
			if (card) {
				selectedCard = card;
			}
		}
	};

	const scrollToBenefits = () => {
		const benefitsSection = document?.getElementById(id);
		if (benefitsSection) {
			benefitsSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	onMount(() => {
		selectCardFromQuery();
		scrollToBenefits();

		window.addEventListener("popstate", () => {
			selectCardFromQuery();
			scrollToBenefits();
		});
	});

	const handleCardClick = card => {
		selectedCard = card;
		const url = `?card=${card.id}#${id}`;
		window.history.pushState({}, "", url);
		selectCardFromQuery();
		scrollToBenefits();
	};
</script>

<section {id}>
	<div class="container py-24 lg:py-28">
		<h2 class="mb-9 text-center text-36 md:mb-12 lg:mb-16 lg:text-left">{HEADINGS.title}</h2>
		<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
			<div class="space-y-4">
				{#each HEADINGS.cards as card}
					<button
						class="flex flex-row justify-start w-full cursor-pointer border rounded-lg p-4 {selectedCard.id === card.id
							? "border-blue-500"
							: "border-gray-300"}"
						on:click={() => handleCardClick(card)}
					>
						<div class="flex justify-start gap-x-2 items-center w-full">
							<Icon {...card.icon} class="mr-4" />
							<div class="flex text-start flex-col">
								<h4 class="font-bold">{card.title}</h4>
								<p>{card.description}</p>
							</div>
						</div>
					</button>
				{/each}
			</div>
			<div class="border rounded-lg border-gray-300 p-4">
				<p>{selectedCard.description}</p>
			</div>
		</div>
	</div>
</section>
