<script lang="ts">
	import { Hero } from "$components";
	export let id: string;
</script>

<Hero
	heading={{
		section: "Understanding TLIP",
		title: "What is TLIP?",
		subtitle: "Trade Logistics Information Pipeline",
		description:
			"TLIP is a digital, collaborative infrastructure for global trade that enables data to be transmitted directly from its source with no third-party involvement and shared seamlessly, securely and at little to no cost. "
	}}
	buttons={[
		{
			title: "Contact us",
			url: "mailto:tlip@iota.org"
		}
	]}
	style="background:#C6E3F3"
	color="text-grey-500"
	{id}
>
	<img src="/assets/hero/earth.png" alt="Earth" class="h-64 object-contain lg:h-auto" style="max-height:500px" />
</Hero>
