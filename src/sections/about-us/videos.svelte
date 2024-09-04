<script lang="ts">
	export let id: string;

	const items = {
		cards: [
			{
				title: "Video Title",
				video: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.mp4",
				description: "Cat ipsum dolor sit amet, run at 3am for get scared by doggo."
			},
			{
				title: "Video Title",
				video: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.mp4",
				description: "Cat ipsum dolor sit amet, run at 3am for get scared by doggo"
			}
		]
	};
</script>

<section {id} class="pb-16 pt-24 lg:pb-28 lg:pt-40">
	<div class="lg:items-left container flex flex-col items-center gap-10 lg:flex-row">
		{#each items.cards as { video, description, title }}
			<div class="flex aspect-video h-full w-full flex-col gap-y-8 last:mr-0 lg:mb-0 lg:mr-20 lg:w-1/2">
				{#if video}
					<video class="image-shadow h-full w-full object-cover" muted controls preload="metadata">
						<source src={video} type="video/mp4" />
						<track kind="captions" />
					</video>
				{/if}
				<div class="flex flex-col gap-1 lg:gap-3">
				<h3 class="text-center leading-125 tracking-0.02 lg:text-left">
					{title}
				</h3>
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
