<script lang="ts">
	import { onMount } from "svelte";
	import { activeSectionId, lightModeNavbar } from "$lib/store";
	import type { Section } from "$lib/types/components";
	import { startActiveSectionObserver } from "$lib/utils";

	export let sections: Section[] = [];

	let container: HTMLElement;

	$: lightModeNavbar.set(sections.find(s => s.id === $activeSectionId)?.lightModeNavbar ?? false);

	onMount(() => {
		const disconnect = startActiveSectionObserver(container);
		return () => {
			lightModeNavbar.set(false);
			disconnect();
		};
	});
</script>

<div bind:this={container}>
	{#each sections as { component, id }}
		<svelte:component this={component} {id} />
	{/each}
</div>
