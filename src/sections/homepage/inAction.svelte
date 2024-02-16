<script lang="ts">
	import { Report } from "$components/icons";

	export let id: string;

	const items = {
		title: "TLIP in Action",
		cards: [
			{
				video: "https://files.iota.org/media/TLIP_Demo_Video.mp4",
				title: "TLIP Dashboard Video",
				description: "Interoperable. No vendor-lock in. Working with legacy systems.",
				poster: "/assets/posters/TLIP_Demo_Video_poster.png"
			},
			{
				video: "https://files.iota.org/media/TLIP_Documentary_2020.mp4",
				title: "Flowers from Kenya to Holland",
				description:
					"The benefits of TLIP are demonstrated by a shipment of flowers from Nairobi, Kenya, to Royal FloraHolland in the Netherlands.",
				poster: "/assets/posters/TLIP_Documentary_2020_poster.png"
			},
			{
				url: "https://www.gov.uk/government/publications/the-ecosystem-of-trust-evaluation-report-2023",
				title: "UK Ecosystem of Trust",
				description:
					"TLIP was selected by the UK Cabinet Office's Border Innovation Hub to pilot infrastructure for trade routes between the UK, Africa and the EU.",
				poster: "/assets/posters/uk-ecosystem-of-trust.png"
			}
		]
	};
</script>

<section {id} class="pb-16 pt-24 lg:pb-28 lg:pt-40">
	<div class="container">
		<div>
			<h3 class="mb-5 text-center leading-125 tracking-0.02 md:mb-16">{items.title}</h3>
			<div class="lg:items-left flex flex-col items-center lg:flex-row">
				{#each items.cards as { title, video, url, description, poster }}
					<div class="mb-9 h-full w-full last:mr-0 lg:mb-0 lg:mr-20 lg:w-1/2">
						{#if video}
							<video
								class="image-shadow h-full w-full object-cover"
								muted
								controls
								preload="metadata"
								{poster}
							>
								<source src={video} type="video/mp4" />
								<track kind="captions" />
							</video>
						{:else}
							<a href={url} target="_blank" rel="noopener noreferrer" class="relative">
								<img src={poster} alt={title} class="image-shadow h-full w-full object-cover" />
								<div class="absolute" style:bottom="30px" style:left="10px">
									<Report></Report>
								</div>
							</a>
						{/if}
						<h3 class="mb-3 mt-5 text-center leading-125 tracking-0.02 md:mb-4 md:mt-6 lg:text-left">
							{title}
						</h3>
						<p class="text-center lg:text-left">{description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background: rgba(86, 204, 242, 0.2) 100%;
	}
</style>
