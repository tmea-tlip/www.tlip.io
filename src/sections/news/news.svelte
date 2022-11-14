<script lang="ts">
    import { ListLoader, Paginator } from "$components";
    import { fetchUrlMetadata, type New } from "$lib";
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

    async function fetchNews() {
        let newsData: any = await fetch(`/api/get-news`);
        newsData = await newsData.json();
        return newsData;
    }

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

    const fetchImageFromMetaData = (items, itemsPerPage: number, paginatorActivePage: number) => {
        const firstIndex = (paginatorActivePage - 1) * itemsPerPage;
        const lastIndex = paginatorActivePage * itemsPerPage - 1;
        for (let i = firstIndex; i <= lastIndex; i++) {
            if (items[i]) {
                let imageUrl: string | null;
                fetchUrlMetadata(items[i].linkUrl).then(metadata => {
                    imageUrl = metadata.image || metadata["og:image"] || null;
                    newsWithImages[i] = {
                        ...items[i],
                        imageUrl: imageUrl,
                        imageFetched: true
                    };
                });
            }
        }
    };
    onMount(async () => {
        news = await fetchNews();
        newsWithImages = news;
        fetchImageFromMetaData(news, itemsPerPage, paginatorActivePage);
    });
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
