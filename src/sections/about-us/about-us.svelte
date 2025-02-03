<script lang="ts">
	export let id: string;
	const items = [
		{
			title: "Streamlining Global Trade",
			description:
				"TLIP's main focus is to facilitate the smooth exchange of data and trade documents across borders, involving government agencies, traders, and logistics providers. In an industry burdened by paper-based and manual processes, TLIP aims to modernise and streamline operations, overcoming the hurdles associated with traditional methods of data exchange.",
			src: "/assets/about-us/streamlining.png"
		},
		{
			title: "Our Technology",
			description:
				"TLIP leverages the <a href='http://www.twin.org/' target='_blank' class='text-green-500 underline'>Trade Worldwide Information Network </a>’s open-source digital infrastructure to simplify trade and logistics processes through API integrations. It allows users to share and manage real-time trade data directly from the source, eliminating the need for paper-based workflows.<br/><br/>TWIN is built on <a href='https://www.iota.org/' target='_blank' class='text-green-500 underline'>IOTA</a>'s distributed ledger technology, which ensures data immutability, transparency, and traceability",

			src: "/assets/about-us/collaboration.png"
		},
		{
			title: "Pilot Programs and Trials",
			description:
				"Kenya to Netherlands Flower Trade: TLIP was tested in pilot programs for the flower trade, helping to cover supply chain gaps and providing a single source of truth for key trade documents.<br/><br/>Ecosystem of Trust Trials: As part of the UK government’s <a href='https://www.gov.uk/government/publications/2025-uk-border-strategy' target='_blank' class='text-green-500 underline'>2025 Border Strategy</a>, TLIP was used to capture supply chain documentation across various trade flows, including coffee, tea, flowers, frozen fish, and canned food. Learn more about the Ecosystem of Trust trials <a href='https://www.gov.uk/government/publications/the-ecosystem-of-trust-evaluation-report-2023#:~:text=Details,in%20the%202025%20Border%20Strategy.' target='_blank' class='text-green-500 underline'>here.</a>",
			src: "/assets/about-us/pilot-programs.png"
		}
	];
</script>

<section class="container flex flex-col gap-20 py-24 md:pb-36 md:pt-32 lg:gap-32" {id}>
	<p class="leading-6 tracking-0.04">
		In 2020, the IOTA Foundation joined forces with
		<a
			class="text-green-500 underline"
			href="https://www.trademarkafrica.com"
			target="_blank"
			rel="noopener noreferrer">TradeMark Africa</a
		>
		to tackle a critical challenge in international trade — the lack of efficient digital information exchange between
		stakeholders. The partnership established the Trade and Logistics Information Pipeline (TLIP), a groundbreaking initiative
		aimed at transforming global trade by connecting all parties through a seamless and secure data-sharing network.
	</p>
	<div class="flex flex-col gap-10 lg:gap-20">
		{#each items as item, idx}
			<div
				class={`flex flex-col items-center gap-5 lg:flex-row lg:gap-20 ${idx % 2 ? "lg:flex-row-reverse" : ""}`}
			>
				<div class="flex flex-1 flex-col gap-2 lg:gap-5">
					<div class="flex flex-row gap-5">
						<h4>{item.title}</h4>
					</div>
					<div class="flex flex-row gap-5">
						<p>{@html item.description}</p>
					</div>
				</div>
				<div class="flex flex-1 items-center overflow-hidden rounded-lg max-h-96">
					<img src={item.src} alt={item.title} class="w-full object-contain" />
				</div>
			</div>
		{/each}
	</div>
</section>
