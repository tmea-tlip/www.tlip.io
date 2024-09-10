<script lang="ts">
	import { Hero } from "$components";
	export let id: string;
</script>

<Hero
	heading={{
		section: "Understanding TLIP",
		title: "Why TLIP?",
		subtitle: "Trade Logistics Information Pipeline",
		description:
			"Global trade today has a problem. Paper based trade documentation required for cross border exchange is slow, error prone and expensive."
	}}
	style="background:#3CB878"
	color="text-grey-500"
	{id}
>
	<img
		src="/assets/hero/empowering.png"
		alt="Empowering"
		class="h-64 object-contain lg:h-auto"
		style="max-height:500px"
	/>
</Hero>
