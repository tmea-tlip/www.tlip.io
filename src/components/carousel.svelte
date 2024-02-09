<script lang="ts">
	// eslint-disable-next-line import/no-unresolved
	import { register } from "swiper/element/bundle";
	// eslint-disable-next-line import/no-unresolved
	import { Autoplay, FreeMode } from "swiper/modules";
	// eslint-disable-next-line import/no-unresolved
	import "swiper/css";

	export let images: string[];

	let innerWidth: number;

	const SLIDE_WIDTH = 144; // px
	const SLIDE_HEIGHT = 144; // px
	const SLIDE_GUTTER = 40; // px
	const MAX_CAROUSEL_WIDTH = 1600; // px

	let sliderWidth = 0;

	$: {
		const imageLength = SLIDE_WIDTH * images?.length;
		const gutterLength = SLIDE_GUTTER * (images?.length - 1);

		sliderWidth = imageLength + gutterLength;
	}

	$: staticCarousel = sliderWidth <= Math.min(innerWidth, MAX_CAROUSEL_WIDTH);

	$: swiperOptions = {
		centeredSlides: !staticCarousel,
		modules: [Autoplay, FreeMode],
		freeMode: {
			enabled: !staticCarousel,
			sticky: false,
			momentumBounce: true,
			momentumRatio: 0.4,
			momentumVelocityRatio: 0.4,
			minimumVelocity: 0
		},
		loop: !staticCarousel,
		speed: staticCarousel ? 0 : 2000,
		autoplay: {
			enabled: !staticCarousel,
			delay: 0,
			disableOnInteraction: false
		}
	};

	register();
</script>

<svelte:window bind:innerWidth />

<div class="swiper-block" style="--max-width: {MAX_CAROUSEL_WIDTH}px;">
	{#key swiperOptions}
		<swiper-container
			slidesPerView="auto"
			spaceBetween={SLIDE_GUTTER}
			centerInsufficientSlides
			preventClicks
			slideToClickedSlide
			{...swiperOptions}
		>
			{#each images as image}
				<swiper-slide style={`width: ${SLIDE_WIDTH}px; height: ${SLIDE_HEIGHT}px;`}>
					<div
						class="rounded border border-grey-100 p-4"
						style={`width: ${SLIDE_WIDTH}px; height: ${SLIDE_HEIGHT}px;`}
					>
						<img src={image} alt="" class="h-full w-full object-contain" />
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
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
