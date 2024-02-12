<script lang="ts">
	import { Hero } from "$components";
	import type { Heading } from "$lib";

	const heading: Heading = {
		title: "Frequent Asked Questions",
		description: "Have questions? We are here to help."
	};
</script>

<Hero {heading} backgroundOpacity="opacity-50" />
