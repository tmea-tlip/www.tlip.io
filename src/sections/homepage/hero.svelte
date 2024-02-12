<script lang="ts">
	import { Hero } from "$components";
	import type { Button as ButtonType } from "$lib/types/components";
	import type { Heading } from "$lib/types/sections";
	export let id: string;

	const heading: Heading = {
		title: "Trade and Logistics Information Pipeline",
		description:
			"Creating paperless trade through a trusted infrastructure that enables secure and efficient cross-border collaboration between multiple parties."
	};
	const buttons: ButtonType[] = [
		{
			title: "Contact us",
			url: "mailto:tlip@iota.org"
		}
	];
</script>

<Hero {heading} background="bg-green-200" color="text-grey-500" {id} {buttons}>
	<video
		class="image-shadow h-full w-full object-cover"
		muted
		controls
		preload="metadata"
		poster="/assets/posters/Akeyos_flowers_poster.png"
	>
		<source src="https://files.iota.org/media/Akeyos_flowers.mp4" type="video/mp4" />
		<track kind="captions" />
	</video>
</Hero>
