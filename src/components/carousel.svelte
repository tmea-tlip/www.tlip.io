<script lang="ts">
	import { Autoplay, FreeMode } from "swiper";
	import { Swiper, SwiperSlide } from "swiper/svelte";
	// Import Swiper styles
	// eslint-disable-next-line import/no-unresolved
	import "swiper/css";

	export let images: string[] = [];
	export let id: string;

	let innerWidth: number;

	const SLIDE_WIDTH = 144; // px
	const SLIDE_HEIGHT = 144; // px
	const SLIDE_GUTTER = 40; // px
	const MAX_CAROUSEL_WIDTH = 1600; // px

	let swiperOptions: { [key: string]: unknown } = {};
	$: {
		const imageLength = images ? SLIDE_WIDTH * images?.length : 0;
		const gutterLength = images ? SLIDE_GUTTER * (images?.length - 1) : 0;

		const sliderWidth = imageLength + gutterLength;
		const staticCarousel = sliderWidth <= Math.min(innerWidth ?? MAX_CAROUSEL_WIDTH, MAX_CAROUSEL_WIDTH);

		swiperOptions = {
			slidesPerView: "auto",
			class: "mySwiper",
			spaceBetween: 40,
			centeredSlides: !staticCarousel,
			centerInsufficientSlides: true,
			modules: [Autoplay, FreeMode],
			freeMode: {
				enabled: !staticCarousel,
				sticky: false,
				momentumBounce: true,
				momentumRatio: 0.4,
				momentumVelocityRatio: 0.4,
				minimumVelocity: 0
			},
			preventClicks: true,
			loop: !staticCarousel,
			slideToClickedSlide: true,
			speed: staticCarousel ? 0 : 2000,
			autoplay: {
				enabled: !staticCarousel,
				delay: 0,
				disableOnInteraction: false
			}
		};
	}
</script>

<svelte:window bind:innerWidth />

<div class="swiper-block" style="--max-width: {MAX_CAROUSEL_WIDTH}px;" {id}>
	{#key swiperOptions}
		<Swiper {...swiperOptions}>
			{#each images as image}
				<SwiperSlide>
					<div
						class="rounded border border-grey-100 p-4"
						style={`width: ${SLIDE_WIDTH}px; height: ${SLIDE_HEIGHT}px;`}
					>
						<img src={image} alt="" class="h-full w-full object-contain" />
					</div>
				</SwiperSlide>
			{/each}
		</Swiper>
	{/key}
</div>

<style lang="scss">
	.swiper-block {
		max-width: var(--max-width);
	}
	:global(.swiper-block .swiper) {
		height: 100%;
		width: 100%;
	}
	:global(.swiper-block .swiper .swiper-slide) {
		@apply max-w-min;
	}

	:global(.swiper-free-mode > .swiper-wrapper) {
		transition-timing-function: linear;
	}
</style>
