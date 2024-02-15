<script lang="ts">
	import { Button } from "$components";
	import type { Button as ButtonType } from "$lib/types/components";
	import type { Heading } from "$lib/types/sections";

	export let id: string | undefined = undefined;
	export let heading: Heading | undefined;
	export let color: string | undefined = "text-white";
	export let background: string = "bg-blue-300";
	export let backgroundOpacity: string | undefined = undefined;
	export let buttons: ButtonType[] = [];

	$: hasSlots = Object.keys($$slots).length > 0;
</script>

<section class="relative z-20 h-full w-full overflow-hidden {background} pb-14 pt-28 lg:pb-28 lg:pt-40" {id}>
	<img
		src="/assets/background-hero.png"
		alt="background"
		class="bottom-54 background-image absolute z-0 lg:bottom-0 lg:h-2/3 lg:w-4/5 {backgroundOpacity}"
	/>
	<div
		class={`container z-10 flex h-full w-full flex-col items-center ${hasSlots ? "justify-center" : ""} lg:flex-row`}
	>
		<div class={`w-full text-center ${hasSlots ? "lg:w-1/2" : "text-left"} lg:mr-8 lg:text-left`}>
			{#if heading?.title}
				<h1 class="mb-6 {color}">{heading.title}</h1>
			{/if}
			{#if heading?.description}
				<h4 class="metropolis-400 {color} lg:max-w-md">{heading.description}</h4>
			{/if}
			{#if buttons.length > 0}
				<div class="mb-9 mt-6 flex justify-center lg:mb-0 lg:mt-10 lg:justify-start">
					{#each buttons as button}
						<div class="mr-6 uppercase last:mr-0">
							<Button {...button} />
						</div>
					{/each}
				</div>
			{/if}
		</div>
		{#if hasSlots}
			<div class="w-full max-w-xl lg:w-6/12 xl:w-10/12">
				<slot />
			</div>
		{/if}
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
