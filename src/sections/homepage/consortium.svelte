<script lang="ts">
	import { Button, Carousel } from "$components";
	import { CONSORTIUM_MEMBERS } from "$lib";

	export let id: string;
</script>

<section class="container py-24 md:pb-36 md:pt-32" {id}>
	<h2 class="mb-9 text-center text-36">The Consortium</h2>
	<p class="mx-auto mb-16 max-w-4xl text-center leading-6 tracking-0.04">
		The TLIP platform was developed by TradeMark Africa in partnership with the IOTA Foundation, drawing from
		experiences implementing TLIP in Kenya and the United Kingdom. Realising a global consortium is needed to ensure
		widespread adoption, a Teaming Agreement has been signed with global leading organisations to collaborate and
		build out the TLIP infrastructure and governance framework. All partners have come together in the belief that
		to facilitate sustainable trade it is important to create a neutral, open, collaborative, trusted and
		interoperable digital ecosystem.
	</p>
	<h4 class="mb-9 text-center text-18">The TLIP Partners</h4>
	<Carousel items={CONSORTIUM_MEMBERS}></Carousel>
	<div class="mt-20 flex justify-center">
		<Button url="/consortium" title="Read More" />
	</div>
</section>
