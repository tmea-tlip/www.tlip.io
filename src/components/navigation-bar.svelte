<script lang="ts">
	import ChevronDown from "./icons/chevronDown.svelte";
	import ChevronUp from "./icons/chevronUp.svelte";
	import Menu from "./menu.svelte";
	import type { NavigationMenu } from "$lib";

	let classes: string = "";

	export { classes as class };
	export let items: NavigationMenu[] = [];

	let openMenu: number = -1;

	const handleDropdownClick = (idx: number) => {
		openMenu = openMenu === idx ? -1 : idx;
	};
	const handleMenuClick = () => {
		openMenu = -1;
	};

	const handleDropdownFocusLoss = (event: FocusEvent) => {
		if (
			event.relatedTarget instanceof HTMLElement &&
			(event.currentTarget as HTMLElement)?.contains(event.relatedTarget)
		) {
			return;
		}
		openMenu = -1;
	};
</script>

<ul on:focusout={handleDropdownFocusLoss} class={`${classes} gap-1 lg:gap-8`}>
	{#each items as item, idx}
		<li class="metropolis-400 whitespace-nowrap pb-6 text-sm lg:pb-0 lg:text-base">
			{#if item.entries?.length}
				<!-- Mobile -->
				<div class="block lg:hidden">
					{item.label}
					<Menu items={item.entries} />
				</div>
				<!-- Desktop -->
				<div class="hidden lg:block">
					<button class="flex flex-row items-center gap-2" on:click={() => handleDropdownClick(idx)}>
						{item.label}
						{#if openMenu === idx}
							<ChevronUp />
						{:else}
							<ChevronDown />
						{/if}
					</button>
					{#if openMenu === idx}
						<Menu items={item.entries} class="absolute mt-4" on:click={handleMenuClick} />
					{/if}
				</div>
			{:else}
				<a
					href={item.url}
					target={item.external ? "_blank" : null}
					rel={item.external ? "noopener noreferrer" : null}
					class="block w-full max-w-48 rounded p-3 hover:bg-gray-100 hover:text-green-400"
				>
					{item.label}
				</a>
			{/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		@apply flex-1;
		@apply flex-row;
		@apply items-center;
		@apply justify-start;
		@apply list-none;
	}
</style>
