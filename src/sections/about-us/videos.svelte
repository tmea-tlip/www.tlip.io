<script lang="ts">
	export let id: string;

	const items = {
		cards: [
			{
				title: "TLIP is revolutionising global trade through digitalisation",
				video: "https://www.youtube.com/embed/TW3HtMXOzJA?si=-Kk3J_H-5WNrTx7n",
				isYouTube: true,
				description: "Hear firsthand accounts from traders, customs officials, TradeMark Africa, trade facilitation agencies and IOTA about how TLIP is redefining global trade and setting a new benchmark for efficiency and transparency."
			},
			{
				title: "Flowers from Kenya to Holland",
				video: "https://files.iota.org/media/TLIP_Documentary_2020.mp4",
				description:
					"The benefits of TLIP are demonstrated by a shipment of flowers from Nairobi, Kenya, to Royal FloraHolland in the Netherlands.",
				poster: "/assets/posters/TLIP_Documentary_2020_poster.png"
			},
			{
				title: "Step-by-step Guide",
				video: "https://www.youtube.com/embed/fY5Ab6t72eM?si=cUPceF-9GYq-tfXn",
				isYouTube: true,
				description: "Watch this video for a step-by-step guide on how to use TLIP. Learn how to navigate the platform, streamline trade processes, and make the most of its features."
			}
		]
	};
</script>

<section {id} class="flex flex-col gap-16 pb-16 pt-24 lg:py-28">
	<h2 class="mb-9 text-center text-36">Videos</h2>
	<div class="container flex flex-col items-center justify-center gap-10">
		{#each items.cards as { video, description, title, poster, isYouTube }, idx}
			<div class={`flex flex-col items-center gap-5 lg:flex-row lg:gap-20 ${idx % 2 ? "lg:flex-row-reverse" : ""}`}>
				{#if video}
					{#if isYouTube}
						<iframe
							class="lg:w-full w-2/3 h-80"
							src={video}
							{title}
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					{:else}
						<video
							class="lg:w-full lg:object-cover w-2/3 h-80"
							muted
							controls
							preload="metadata"
							{poster}
						>
							<source src={video} type="video/mp4" />
							<track kind="captions" />
						</video>
					{/if}
				{/if}
				<div class="flex flex-col gap-1 lg:gap-3">
					<h4 class="text-center lg:text-left">
						{title}
					</h4>
					{#if description}
					<p class="text-center lg:text-left">{description}</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		background: rgba(86, 204, 242, 0.2) 100%;
	}
</style>
