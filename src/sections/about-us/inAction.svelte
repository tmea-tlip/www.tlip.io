<script lang="ts">
	export let id: string;

	const items = {
		cards: [
			{
				video: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.mp4",
				description: "Cat ipsum dolor sit amet, run at 3am for get scared by doggo."
			},
			{
				video: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.mp4",
				description: "Cat ipsum dolor sit amet, run at 3am for get scared by doggo"
			}
		]
	};
</script>

<section {id} class="pb-16 pt-24 lg:pb-28 lg:pt-40">
	<div class="lg:items-left container flex flex-col items-center gap-10 lg:flex-row">
		{#each items.cards as { video, description }}
			<div class="flex aspect-video h-full w-full flex-col gap-y-6 last:mr-0 lg:mb-0 lg:mr-20 lg:w-1/2">
				{#if video}
					<video class="image-shadow h-full w-full object-cover" muted controls preload="metadata">
						<source src={video} type="video/mp4" />
						<track kind="captions" />
					</video>
				{/if}
				<p class="text-center lg:text-left">{description}</p>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		background: rgba(86, 204, 242, 0.2) 100%;
	}
</style>
