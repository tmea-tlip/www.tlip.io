<script lang="ts">
	import { formatDateToDDMMYYYY } from "$lib";

	export let imageUrl: string;
	export let title: string;
	export let date: Date;
	export let publishBy: string;
	export let linkUrl: string;

	let formattedDate: string;
	$: formattedDate = formatDateToDDMMYYYY(date);

	$: showFallbackImage = imageUrl === "unreachable";
</script>

<a
	href={linkUrl}
	target="_blank"
	class="card relative flex w-full items-center justify-start overflow-hidden rounded-2xl border border-grey-100 bg-white p-4 md:p-7"
>
	<div
		class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#dbe9f4] md:h-20 md:w-20"
	>
		{#if imageUrl}
			<img
				src={showFallbackImage ? "/assets/default-news-thumbnail.svg" : imageUrl}
				alt={title}
				class={`h-full w-full ${showFallbackImage ? "object-contain" : "object-cover"}`}
			/>
		{/if}
	</div>
	<div class="ml-4 space-y-2">
		<p class="font-semibold tracking-0.02 text-grey-600 lg:text-20 lg:leading-110">{title}</p>
		<div class="text-14">
			<p class="font-semibold">{publishBy}</p>
			<p>{formattedDate}</p>
		</div>
	</div>
</a>

<style lang="scss">
	.card {
		&:hover {
			transition: all 0.2s ease-in-out;
			box-shadow: 0px 3px 6px rgba(38, 38, 38, 0.2);
			border: 1px solid #f2f8f9;
		}
	}
</style>
