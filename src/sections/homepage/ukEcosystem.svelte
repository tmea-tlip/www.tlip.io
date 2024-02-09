<script lang="ts">
	import type { Heading } from "$lib/types/sections";
	export let id: string;
	const HEADING: Heading = {
		title: "UK Ecosystem of Trust",
		description:
			"TLIP has been selected by the UK Cabinet Office's Border Innovation Hub to pilot the infrastructure for trade routes between UK, Africa and the EU."
	};
	const INFO: Heading = {
		title: "Example of a Trade Route Between the UK and the EU",
		description:
			"The pilot is co-managed with the UK Institute of Export & International Trade and implemented with a range of traders, air and ocean transporters, ports and technology companies."
	};
</script>

<section class="pb-20 pt-16 lg:rounded-md" {id}>
	<div class="container relative flex flex-col items-center justify-center bg-blue-500 py-16 text-white">
		<h1 class="mb-5 text-center text-36 lg:mb-9">{HEADING.title}</h1>
		<p class="mb-6 max-w-4xl text-center md:mb-12">{HEADING.description}</p>
		<img src="/assets/uk-ecosystem.png" alt="circle diagram" class="" />
		<h4 class="mb-5 mt-8 text-center font-bold md:mb-4 md:mt-9">{INFO.title}</h4>
		<small class="max-w-2xl text-center tracking-0.02">{INFO.description}</small>
	</div>
</section>
