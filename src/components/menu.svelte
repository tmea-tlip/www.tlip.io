<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { slide } from "svelte/transition";
	import { clickOutside } from "../directives/clickOutside";
	import { scrollIntoView, type NavigationMenu } from "$lib";
	let classes: string = "";

	export { classes as class };

	export let items: NavigationMenu[] = [];

	const dispatch = createEventDispatcher();

	const dispatchClick = (e?: MouseEvent) => {
		dispatch("click", e);
	};

	const visibleTime = Date.now();
</script>

<ul
	transition:slide={{ duration: 200 }}
	class={`${classes} flex w-fit flex-col items-stretch justify-stretch lg:border lg:border-gray-300 lg:shadow-lg`}
	use:clickOutside={() => {
		if (Date.now() - visibleTime > 300) {
			dispatchClick();
		}
	}}
>
	{#each items as item}
		<li class="metropolis-400 w-full overflow-hidden whitespace-nowrap rounded pl-4 text-sm lg:pl-0 lg:text-base">
			{#if item.external}
				<a
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					class="block w-full rounded p-3 hover:bg-gray-100 hover:text-green-400"
					on:click={dispatchClick}
				>
					{item.label}
				</a>
			{:else}
				<a
					href={item.url}
					class="block w-full rounded p-3 hover:bg-gray-100 hover:text-green-400"
					on:click|preventDefault={e => {
						dispatchClick(e);
						scrollIntoView(e.currentTarget);
					}}
				>
					{item.label}
				</a>
			{/if}
			{#if item.entries}
				<div class="flex flex-col gap-2">
					{#each item.entries as entry}
						<a
							class=" w-full rounded px-6 py-3 hover:bg-gray-100 hover:text-green-400"
							href={entry.url}
							on:click|preventDefault={e => {
								dispatchClick(e);
								scrollIntoView(e.currentTarget);
							}}>- {entry.label}</a
						>
					{/each}
				</div>
			{/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		@apply flex;
		@apply flex-col;
		@apply items-start;
		@apply justify-start;
		@apply list-none;
		@apply bg-white;
		@apply rounded;
		@apply min-w-[200px];
	}
</style>
