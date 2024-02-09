<script lang="ts">
	import { marked } from "marked";
	import { slide } from "svelte/transition";
	import type { AccordionItem } from "$lib";

	export let item: AccordionItem;

	let active: boolean = false;

	const handleClick = () => {
		active = !active;
	};
</script>

<div id={item?.id}>
	<button class="w-full cursor-pointer text-left" on:click={handleClick}>
		<div class={"flex w-full items-center justify-between"}>
			<span
				class={`text-20 font-semibold leading-120 tracking-0.02 md:font-bold md:leading-110 lg:text-28 ${
					active ? "metropolis-700 text-blue-400" : "metropolis-600 text-grey-600"
				}`}>{@html item?.title}</span
			>
			<div
				class={`relative ml-8 flex items-center justify-center border p-2.5 ${
					active ? "border-blue-400" : "border-grey-500"
				} rounded-xl`}
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="rotate-0 transform transition-transform duration-200 ease-in-out"
					class:dropdown={active}
				>
					<path d="M3 6L8 11L13 6" stroke="#212121" stroke-width="1.72854" />
				</svg>
			</div>
		</div>
	</button>
</div>

{#if active}
	<div class="mt-6 overflow-hidden text-grey-500 md:mt-9" transition:slide={{ duration: 300 }}>
		<p>
			{@html marked(item?.description ?? "")}
		</p>
	</div>
{/if}

<style lang="scss">
	svg {
		&.dropdown {
			@apply transform;
			@apply rotate-180;
			@apply transition-transform;
			@apply duration-200;
			@apply ease-in-out;
			path {
				stroke: #2d7aa0;
			}
		}
	}
</style>
