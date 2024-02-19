<script lang="ts">
	import { Hero } from "$components";
	export let id: string;
</script>

<Hero
	heading={{
		section: "The TLIP Institute",
		title: "Our Ecosystem"
	}}
	color="text-white"
	{id}
></Hero>
