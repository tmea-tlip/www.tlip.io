<script lang="ts">
	import { Hero } from "$components";
	import type { Heading } from "$lib/types/sections";
	export let id: string;

	const heading: Heading = {
		title: "Our Ecosystem"
	};
</script>

<Hero {heading} color="text-white" {id}></Hero>
