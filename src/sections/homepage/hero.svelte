<script lang="ts">
	import { Hero } from "$components";

	export let id: string;
</script>

<Hero
	heading={{
		title: "Digital trade docs from government in seconds",
		subtitle: "Access documents instantly via TLIP’s integration with the Kenya Revenue Authority, KenTrade, and KEPHIS.",
		description:
			"Supported documents: Export Declaration, Certificate of Export, Phytosanitary Certificate, Export Certificate"
	}}
	buttons={[
		{
			title: "Book a demo",
			url: "mailto:tlip@iota.org"
		}
	]}
	style=""
	color="text-grey-500"
	{id}
>
	<img src="/assets/hero/earth.png" alt="Earth" class="h-64 object-contain lg:h-auto" style="max-height:500px" />
</Hero>
