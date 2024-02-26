<script lang="ts">
	import { Hero } from "$components";
	export let id: string;
</script>

<Hero
	heading={{
		section: "Join Us",
		title: "Our Call for Collaboration",
		description: `Our goal is to foster global partnerships that enable everyone to participate in international trade.

The partners invite like-minded global trade actors to co-design the future of trade facilitation.

Based on our experiences of implementing TLIP in Kenya and the UK, we welcome public and private entities to build on TLIP and develop it into a public utility infrastructure.

We envision an open ecosystem where industry, government, and businesses can come together to drive meaningful change.`
	}}
	background="light"
	color="text-grey-500"
	{id}
>
	<img src="/assets/collaboration.jpg" alt="Collaboration" class="object-scale-down" />
</Hero>
