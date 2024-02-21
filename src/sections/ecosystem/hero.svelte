<script lang="ts">
	import { Hero } from "$components";
	export let id: string;
</script>

<Hero
	heading={{
		section: "About Us",
		title: "Our Ecosystem"
	}}
	color="text-white"
	{id}
></Hero>
