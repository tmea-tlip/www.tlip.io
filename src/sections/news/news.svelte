<script lang="ts">
	import { onMount } from "svelte";
	import { logger } from "../../routes/api/logger";
	import { ListLoader, Paginator } from "$components";
	import { fetchUrlImageMetadata, type NewsItem } from "$lib";

	let news: NewsItem[] = [];
	let newsWithImages: NewsItem[] = [];

	let paginatorData: {
		elements: NewsItem[];
		elementsType: string;
		itemsPerPage: number;
		paginatorActivePage: number;
	} = {
		elements: [],
		elementsType: "news",
		itemsPerPage: 8,
		paginatorActivePage: 1
	};
	const itemsPerPage: number = 8;
	let paginatorActivePage: number = 1;

	$: paginatorData = {
		elements: newsWithImages,
		elementsType: "news",
		itemsPerPage,
		paginatorActivePage
	};

	$: {
		if (paginatorActivePage !== 1) {
			// eslint-disable-next-line unicorn/prefer-top-level-await
			fetchImageFromMetaData(news, itemsPerPage, paginatorActivePage).catch(err => logger.error(err));
		}
	}

	onMount(async () => {
		news = await fetchNews();
		newsWithImages = news;
		await fetchImageFromMetaData(news, itemsPerPage, paginatorActivePage);
	});

	const fetchNews = async () => {
		const response = await fetch("/api/get-news");
		const json = await response.json();
		return json as NewsItem[];
	};

	const fetchImageFromMetaData = async (items: NewsItem[], itemsPerPage: number, paginatorActivePage: number) => {
		const firstIndex = (paginatorActivePage - 1) * itemsPerPage;
		const lastIndex = paginatorActivePage * itemsPerPage;
		for (let i = firstIndex; i < lastIndex; i++) {
			const linkUrl = items?.[i]?.linkUrl;
			if (linkUrl) {
				const imageUrl = await fetchUrlImageMetadata(linkUrl);

				newsWithImages[i] = {
					...items[i],
					imageUrl: imageUrl ?? "unreachable"
				};
			}
		}
	};
</script>

<section class="relative z-20 pb-32 pt-12">
	<div class="container">
		<div class="mt-8 flex w-full flex-col space-y-6">
			{#if newsWithImages?.length > 0}
				<Paginator {...paginatorData} bind:paginatorActivePage />
			{:else}
				<ListLoader />
			{/if}
		</div>
	</div>
</section>
