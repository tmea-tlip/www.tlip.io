<script lang="ts">
	import { Button } from "$components";
	import type { Button as ButtonType } from "$lib/types/components";
	import type { Heading } from "$lib/types/sections";

	export let id: string | undefined = undefined;
	export let heading: Heading | undefined;
	export let color: string | undefined = "text-white";
	export let background: string = "bg-blue-300";
	export let backgroundOpacity: string | undefined = undefined;
	export let backgroundImage: string | undefined = undefined;
	export let buttons: ButtonType[] = [];
	export let style: string | undefined = undefined;

	$: hasSlots = Object.keys($$slots).length > 0;
</script>

<section class="relative z-20 h-full w-full overflow-hidden {background} pb-14 pt-28" {id} {style}>
	{#if backgroundImage}
		<img
			src={backgroundImage}
			alt="background"
			class="bottom-54 background-image absolute z-0 lg:bottom-0 lg:h-2/3 lg:w-4/5 {backgroundOpacity}"
		/>
	{/if}
	<div
		class={`container z-10 flex h-full w-full flex-col items-center ${hasSlots ? "justify-center" : ""} lg:flex-row lg:gap-5`}
	>
		<div class={`w-full flex-1 text-center ${hasSlots ? "w-full lg:w-3/5" : "text-left"} lg:text-left`}>
			{#if heading?.section}
				<h6 class="lgtext-20 mb-2 text-16 {color} metropolis-700">{heading.section}</h6>
			{/if}
			{#if heading?.title}
				<h1 class="mb-6 text-28 lg:text-48 {color} metropolis-600">{heading.title}</h1>
			{/if}
			{#if heading?.subtitle}
				<h6 class="mb-6 text-18 lg:text-24 lg:max-w-lg {color} metropolis-700">{heading.subtitle}</h6>
			{/if}
			{#if heading?.description}
				<h4
					class={`${color} lg:max-w-lg ${heading.description.length > 200 ? "text-16" : "text-16 lg:text-24"} metropolis-400 whitespace-pre-line`}
				>
					{@html heading.description}
				</h4>
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
			<div class="flex w-auto items-center justify-center lg:w-2/5 lg:justify-end">
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
