<script lang="ts">
    import { News } from "$components";
    import { onMount } from "svelte";

    let news;
    let newsWithImages = [];
    async function fetchNews() {
        let newsData: any = await fetch(`/api/get-news`);
        newsData = await newsData.json();
        return newsData;
    }

    onMount(async () => {
        news = await fetchNews();
    });
    $: console.log("newsWithImages", newsWithImages);
    $: console.log("news", news);
</script>

<section class="pt-12 pb-32 relative z-20">
    <div class="container">
        <div class="w-full flex flex-col space-y-6 mt-8">
            {#if news}
                {#each news as newItem}
                    <News {...newItem} />
                {/each}
            {:else}
                <p>loading</p>
            {/if}
        </div>
    </div>
</section>

<style lang="scss">
    section {
        background: linear-gradient(
            to bottom,
            #ffffff 0%,
            #ffffff 13%,
            rgba(86, 204, 242, 0.2) 5%,
            rgba(86, 204, 242, 0.2) 90%,
            #ffffff 85%,
            #ffffff 100%
        );
    }
</style>
