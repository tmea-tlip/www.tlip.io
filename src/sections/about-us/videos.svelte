<script lang="ts">
	export let id: string;

	const items = {
		cards: [
			{
				title: "Flowers from Kenya to Holland",
				video: "https://files.iota.org/media/TLIP_Documentary_2020.mp4",
				description: "The benefits of TLIP are demonstrated by a shipment of flowers from Nairobi, Kenya, to Royal FloraHolland in the Netherlands.",
				poster: "/assets/posters/TLIP_Documentary_2020_poster.png"
			}
		]
	};
</script>

<section {id} class="flex flex-col gap-16 pb-16 pt-24 lg:py-28">
	<h2 class="mb-9 text-center text-36">Videos</h2>
	<div class="justify-center container flex flex-col items-center gap-10 lg:flex-row">
		{#each items.cards as { video, description, title, poster }}
			<div class="flex aspect-video h-full w-full flex-col gap-y-8 last:mr-0 lg:mb-0 lg:mr-20 lg:w-1/2">
				{#if video}
					<video class="image-shadow h-full w-full object-cover" muted controls preload="metadata" {poster}>
						<source src={video} type="video/mp4" />
						<track kind="captions" />
					</video>
				{/if}
				<div class="flex flex-col gap-1 lg:gap-3">
					<h4 class="text-center lg:text-left">
						{title}
					</h4>
					<p class="text-center lg:text-left">{description}</p>
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
