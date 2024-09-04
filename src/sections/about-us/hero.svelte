<script lang="ts">
	import { Hero } from "$components";
	export let id: string;
</script>

<Hero
	heading={{
		section: "About Us",
		title: "Discover the future of global trade",
		description:
			"Launched in 2020, TLIP by IOTA Foundation and TradeMark Africa transforms global trade with secure, efficient data exchange, modernizing outdated processes and enhancing transparency."
	}}
	color="text-grey-500"
	{id}
>
	<img src="/assets/hero/boat.png" alt="Boat" class="h-64 object-contain lg:h-auto" style="max-height:500px" />
</Hero>
