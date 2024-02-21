<script lang="ts">
	// eslint-disable-next-line import/no-unresolved
	import { register } from "swiper/element/bundle";
	import { Icon } from "$components";
	import { type CarouselEntry, MAX_CONTENT_WIDTH } from "$lib";

	export let items: CarouselEntry[] = [];
	export let itemWidth: number = 180;
	export let itemHeight: number | undefined = undefined;
	export let showNavigation: boolean | undefined = undefined;
	export let timing: number = 1000;

	let swiperWidth: number = 0;

	const SLIDE_GUTTER = 20;

	let staticCarousel = false;
	let slidesPerView = 0;
	let pagination: { el: string | null; bullets: string[] } | boolean = { el: null, bullets: [] };

	if (showNavigation) {
		pagination = true;
	}

	$: {
		const itemsWidth = items ? itemWidth * items.length : 0;
		const gutterWidth = items ? SLIDE_GUTTER * (items.length - 1) : 0;

		const totalItemsWidth = itemsWidth + gutterWidth;
		staticCarousel = totalItemsWidth <= swiperWidth;

		slidesPerView = staticCarousel ? items.length : Math.floor(swiperWidth / (itemWidth + SLIDE_GUTTER));
	}

	register();
</script>

<section class="swiper-block" style={`--max-width: ${MAX_CONTENT_WIDTH}px}`}>
	{#key staticCarousel || slidesPerView}
		<swiper-container
			bind:clientWidth={swiperWidth}
			class="mySwiper"
			loop={!staticCarousel}
			autoplay-delay={staticCarousel ? 0 : timing}
			autoplay-disable-on-interaction={!staticCarousel}
			{slidesPerView}
			spaceBetween={SLIDE_GUTTER}
			centerInsufficientSlides={staticCarousel}
			centerSlides={staticCarousel}
			{pagination}
		>
			{#each items as item}
				<swiper-slide class="flex flex-col items-center gap-2">
					<div
						class={`content-container flex h-full flex-col ${item.src ? "" : "mb-20 rounded border p-8"}`}
						style:width={`${itemWidth}px`}
						style:height={itemHeight ? `${itemHeight}px` : "auto"}
					>
						{#if item.src}
							<div
								class="flex items-center rounded border p-2"
								style:width={`${itemWidth}px`}
								style:height={`${itemWidth}px`}
							>
								<img src={item.src} alt={item.label ?? ""} class="w-full" />
							</div>
						{/if}
						{#if item.label}
							<p class={`w-full flex-1 ${item.src ? "text-10 text-center" : "text-left text-12"}`}>
								{item.label}
							</p>
						{/if}
						{#if item.author}
							<div class="w-full">
								<h3 class="metropolis-700 mt-4 whitespace-pre-line text-left text-14">{item.author}</h3>
							</div>
						{/if}
						{#if item.links}
							<div class="mt-4 flex w-full flex-row gap-5">
								{#each item.links as link}
									<a
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										class={"rounded border border-green-500 p-3"}
									>
										<Icon name={link.icon} fill="#000" height={24} width={24} />
									</a>
								{/each}
							</div>
						{/if}
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	{/key}
</section>

<style lang="scss">
	:root {
		--swiper-pagination-color: #005923;
	}
</style>
