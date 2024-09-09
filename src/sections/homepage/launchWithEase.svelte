<script lang="ts">
	import { Button } from "$components";

	export let id: string;
</script>

<section class="container py-20 md:pb-36 md:pt-32" {id}>
	<h2 class="mb-9 text-center text-36">Launch with Ease</h2>
	<p class="mx-auto mb-8 max-w-2xl text-center leading-6 tracking-0.04">
		TLIP App provides supply chain businesses easy access via the web browser. All functions can be seamlessly
		integrated into corporate or government systems via TLIP API.
	</p>
	<div class="flex justify-center">
		<Button classes="mb-16" title="Read API Docs" url="https://docs.tlip.io/" isExternal />
	</div>
	<video
		class="image-shadow aspect-video h-full w-full object-cover"
		muted
		controls
		preload="metadata"
		poster="/assets/posters/TLIP_Documentary_2020_poster.png"
	>
		<source src="https://files.iota.org/media/TLIP_Documentary_2020.mp4" type="video/mp4" />
		<track kind="captions" />
	</video>
</section>
