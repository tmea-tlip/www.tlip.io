<script lang="ts">
    import { ListLoader, Paginator } from "$components";
    import { fetchUrlImageMetadata, type New } from "$lib";
    import { onMount } from "svelte";

    let news: New[] = [];
    let newsWithImages: New[] = [];

    let paginatorData = {
        elements: [],
        elementsType: "news",
        itemsPerPage: 8,
        paginatorActivePage: 1
    };
    let itemsPerPage: number = 8;
    let paginatorActivePage: number = 1;

    $: paginatorData = {
        elements: newsWithImages,
        elementsType: "news",
        itemsPerPage,
        paginatorActivePage
    };

    $: {
        if (paginatorActivePage !== 1) {
            fetchImageFromMetaData(news, itemsPerPage, paginatorActivePage);
        }
    }

    onMount(async () => {
        news = await fetchNews();
        newsWithImages = news;
        fetchImageFromMetaData(news, itemsPerPage, paginatorActivePage);
    });

    async function fetchNews(): Promise<New[]> {
        let newsData: any = await fetch(`/api/get-news`);
        newsData = await newsData.json();
        return newsData;
    }

    function fetchImageFromMetaData(items, itemsPerPage: number, paginatorActivePage: number): void {
        const firstIndex = (paginatorActivePage - 1) * itemsPerPage;
        const lastIndex = paginatorActivePage * itemsPerPage - 1;
        for (let i = firstIndex; i <= lastIndex; i++) {
            if (items?.[i]) {
                fetchUrlImageMetadata(items[i].linkUrl).then(imageUrl => {
                    newsWithImages[i] = {
                        ...items[i],
                        imageUrl: imageUrl ?? "unreachable"
                    };
                });
            }
        }
    }
</script>

<section class="pt-12 pb-32 relative z-20">
    <div class="container">
        <div class="w-full flex flex-col space-y-6 mt-8">
            {#if newsWithImages?.length > 0}
                <Paginator {...paginatorData} bind:paginatorActivePage />
            {:else}
                <ListLoader />
            {/if}
        </div>
    </div>
</section>
