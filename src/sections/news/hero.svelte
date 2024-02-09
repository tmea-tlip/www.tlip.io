<script lang="ts">
	import type { Heading } from "$lib/types/sections";

	const HEADING: Heading = {
		title: "News"
	};
</script>

<section class="relative z-20 h-full w-full overflow-hidden bg-blue-300 pb-20 pt-28 lg:pb-28 lg:pt-36">
	<img
		src="/assets/background-hero.png"
		alt="background"
		class="bottom-54 background-image absolute z-0 opacity-50 lg:bottom-0 lg:h-2/3 lg:w-4/5"
	/>
	<div class="container">
		<div
			class="z-10 flex h-full w-full flex-col items-center justify-center text-center text-white lg:items-start lg:justify-start lg:text-left"
		>
			<h1 class="mb-6">{HEADING.title}</h1>
		</div>
	</div>
</section>

<style lang="scss">
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
