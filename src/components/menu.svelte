<script lang="ts">
	import { slide } from "svelte/transition";
	import { scrollIntoView, type NavigationMenu } from "$lib";
	let classes: string = "";

	export { classes as class };

	export let items: NavigationMenu[] = [];
</script>

<ul
	transition:slide={{ duration: 200 }}
	class={`${classes} flex flex-col items-stretch justify-stretch lg:border lg:border-gray-300 lg:shadow-lg`}
>
	{#each items as item}
		<li class="metropolis-400 w-full overflow-hidden whitespace-nowrap rounded pl-4 text-sm lg:pl-0 lg:text-base">
			{#if item.external}
				<a
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					class="block w-full rounded p-3 hover:bg-gray-100 hover:text-green-400"
				>
					{item.label}
				</a>
			{:else}
				<a
					href={item.url}
					class="block w-full rounded p-3 hover:bg-gray-100 hover:text-green-400"
					on:click|preventDefault={e => scrollIntoView(e.currentTarget)}
				>
					{item.label}
				</a>
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
		width: 200px;
	}
</style>
