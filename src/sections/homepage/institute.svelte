<script lang="ts">
	import { Button, Carousel } from "$components";
	import { BOARD_MEMBERS } from "$lib";

	export let id: string;
</script>

<section class="container py-24 md:pb-36 md:pt-32" {id}>
	<h2 class="mb-9 text-center text-36">The TLIP Institute</h2>
	<p class="mx-auto mb-16 max-w-4xl text-center leading-6 tracking-0.04">
		is a non-profit organization that will facilitate sustainable trade by creating a neutral, open, collaborative,
		trusted and interoperable digital ecosystem. It will maintain and develop TLIP technology and infrastructure.
		While the setup of the TLIP Institute is currently being developed with the founding organizations it will
		operate on the principles of open architecture and infrastructure for public good.
	</p>
	<h4 class="mb-9 text-center text-18">The TLIP Institute Board</h4>
	<Carousel items={BOARD_MEMBERS}></Carousel>
	<div class="mt-20 flex justify-center">
		<Button url="/institute" title="Read More" />
	</div>
</section>
