<script lang="ts">
    import { afterUpdate } from "svelte";
    import { New, PaginatorPage } from "$components";

    export let paginatorActivePage: number = 0;
    export let itemsPerPage: number = 0;
    export let elements = [];
    export let elementsType: string = "";

    $: elements = elements.map((element, i) => {
        return { ...element, i };
    });

    //  detect elemenType to render that one
    let component;
    switch (elementsType) {
        case "news":
            component = New;
            break;

        default:
            break;
    }

    // paginator config
    const numItems: number = elements.length;
    const numPages: number = Math.ceil(numItems / itemsPerPage);

    // initial page
    let page: number = paginatorActivePage || 1;
    $: currentPage = page;

    function setCurrentPage(e): void {
        page = e.detail.text;
        paginatorActivePage = page;
    }

    // get the elementsToShow depending on currentPage
    let fromIndex: number = page * itemsPerPage - itemsPerPage;
    let toIndex: number = page * itemsPerPage;
    $: elementsToShow = elements.slice(fromIndex, toIndex);

    afterUpdate(() => {
        fromIndex = currentPage * itemsPerPage - itemsPerPage;
        toIndex = currentPage * itemsPerPage;
    });
</script>

{#if elementsToShow}
    {#each elementsToShow as element (element.i)}
        <svelte:component this={component} {...element} />
    {/each}
{/if}

{#if numPages > 1}
    <PaginatorPage {numPages} {currentPage} on:message={setCurrentPage} />
{/if}
