<script lang="ts">
	import { afterUpdate } from "svelte";
	import { News, PaginatorPage } from "$components";

	export let paginatorActivePage: number = 0;
	export let itemsPerPage: number = 0;
	export let elements: object[] = [];
	export let elementsType: string = "";

	//  detect elemenType to render that one
	let component: ConstructorOfATypedSvelteComponent;
	if (elementsType === "news") {
		component = News;
	}

	// paginator config
	const numItems: number = elements.length;
	const numPages: number = Math.ceil(numItems / itemsPerPage);

	// initial page
	let page: number = paginatorActivePage || 1;
	$: currentPage = page;

	const setCurrentPage = (e: { detail: { text: number } }) => {
		page = e.detail.text;
		paginatorActivePage = page;
	};

	// get the elementsToShow depending on currentPage
	const basePage = page * itemsPerPage;
	let fromIndex: number = basePage - itemsPerPage;
	let toIndex: number = basePage;
	$: elementsToShow = elements.slice(fromIndex, toIndex);

	afterUpdate(() => {
		const currentBase = currentPage * itemsPerPage;
		fromIndex = currentBase - itemsPerPage;
		toIndex = currentBase;
	});
</script>

{#if elementsToShow}
	{#each elementsToShow as element}
		<svelte:component this={component} {...element} />
	{/each}
{/if}

{#if numPages > 1}
	<PaginatorPage {numPages} {currentPage} on:message={setCurrentPage} />
{/if}
