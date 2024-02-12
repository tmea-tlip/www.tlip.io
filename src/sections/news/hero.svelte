<script lang="ts">
	import { Hero } from "$components";
	import type { Heading } from "$lib";

	const heading: Heading = {
		title: "News"
	};
</script>

<Hero {heading} backgroundOpacity="opacity-50" />
