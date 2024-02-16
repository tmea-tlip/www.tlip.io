<script lang="ts">
	import { Carousel } from "$components";
	import { BOARD_MEMBERS } from "$lib";

	export let id: string;
</script>

<section class="container py-24 md:pb-36 md:pt-32" {id}>
	<h2 class="mb-9 text-center text-36">Our Governing Body</h2>
	<p class="mx-auto mb-16 max-w-2xl text-center leading-6 tracking-0.04">
		The governing body was formed following a Teaming Agreement signed on 27 February 2024 at the World Trade
		Organisation's 13th Ministerial Conference in Abu Dhabi, United Arab Emirates.
		<br />
		<br />
		By pooling together the trade expertise and non-profit resources of its member organizations, the TLIP Institute
		transcends national divisions. It fosters collaboration among both government and industry stakeholders to drive
		policy and establish an impartial ecosystem for global trade.
	</p>
	<Carousel items={BOARD_MEMBERS}></Carousel>
</section>
