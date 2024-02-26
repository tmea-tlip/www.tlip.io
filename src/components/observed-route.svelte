<script lang="ts">
	import { onMount } from "svelte";
	import { sideMenuOpen } from "$lib/store";
	import type { Section } from "$lib/types/components";
	import { startActiveSectionObserver } from "$lib/utils";

	export let sections: Section[] = [];

	let container: HTMLElement;

	onMount(() => {
		const disconnect = startActiveSectionObserver(container);
		return () => {
			sideMenuOpen.set(false);
			document.body.classList.remove("overflow-y-hidden");
			disconnect();
		};
	});
</script>

<div bind:this={container}>
	{#each sections as { component, id }}
		<svelte:component this={component} {id} />
	{/each}
</div>
