<script lang="ts">
	import { Carousel } from "$components";
	import { CONSORTIUM_MEMBERS } from "$lib";

	export let id: string;
</script>

<section class="container py-24 md:pb-36 md:pt-32" {id}>
	<h2 class="mb-9 text-center text-36">Our Governing Body</h2>
	<p class="mx-auto mb-16 max-w-2xl text-center leading-6 tracking-0.04">
		The IOTA Foundation, TradeMark Africa, the World Economic Forum, the Tony Blair Institute for Global Change, the
		Institute of Export and International Trade, and the Global Alliance for Trade Facilitation are planning to sign
		a Collaboration Agreement.
		<br />
		<br />
		A Collaboration Agreement was signed on 27 February 2024 at the
		<a
			class="text-green-500 underline"
			href="https://www.wto.org/english/thewto_e/minist_e/mc13_e/mc13_e.htm"
			target="_blank"
			rel="noopener noreferrer">World Trade Organisation's 13th Ministerial Conference</a
		>
		in Abu Dhabi, United Arab Emirates.
		<br />
		<br />
		By pooling together the trade expertise and non-profit resources of its member organisations, we will build out the
		relevant governance framework and supporting organisation to make TLIP impactful on a global level. The structure
		will purposely be designed to foster collaboration among both government and industry stakeholders to drive policy
		change and establish an impartial ecosystem for global trade.
	</p>
	<Carousel items={CONSORTIUM_MEMBERS}></Carousel>
</section>
