<script lang="ts">
	import { Button } from "$components";
	import type { Button as ButtonType } from "$lib/types/components";
	import type { Heading } from "$lib/types/sections";
	export let id: string;

	const HEADING: Heading = {
		title: "Trade and Logistics Information Pipeline",
		description:
			"Creating paperless trade through a trusted infrastructure that enables secure and efficient cross-border collaboration between multiple parties."
	};
	const BUTTONS: ButtonType[] = [
		{
			title: "Contact us",
			url: "mailto:tlip@iota.org"
		}
	];
</script>

<section class="relative z-20 h-full w-full overflow-hidden bg-green-200 pb-14 pt-28 lg:pb-28 lg:pt-40" {id}>
	<img
		src="/assets/background-hero.png"
		alt="background"
		class="bottom-54 background-image absolute z-0 lg:bottom-0 lg:h-2/3 lg:w-4/5"
	/>
	<div class="container z-10 flex h-full w-full flex-col items-center justify-center lg:flex-row">
		<div class="w-full text-center lg:mr-8 lg:w-1/2 lg:text-left">
			<h1 class="mb-6">{HEADING.title}</h1>
			<h4 class="metropolis-400 text-grey-500 lg:max-w-md">{HEADING.description}</h4>
			<div class="mb-9 mt-6 flex justify-center lg:mb-0 lg:mt-10 lg:justify-start">
				{#each BUTTONS as button}
					<div class="mr-6 uppercase last:mr-0">
						<Button {...button} />
					</div>
				{/each}
			</div>
		</div>
		<div class="w-full max-w-xl lg:w-6/12 xl:w-10/12">
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
		</div>
	</div>
</section>

<style lang="scss">
	section {
		min-height: 680px;
	}
	.background-image {
		z-index: -1;
		width: 100%;
		min-width: 1200px;
		right: -50rem;
		@screen md {
			width: calc((100vw - 600px) / 2 + 600px + 10px);
			right: -30rem;
		}
		@screen lg {
			width: calc((100vw - 900px) / 2 + 900px + 10px);
			right: -12rem;
			top: 113px;
			height: auto;
		}
		@screen xl {
			width: calc((100vw - 1200px) / 2 + 1200px + 10px);
			right: 0px;
		}
	}
</style>
