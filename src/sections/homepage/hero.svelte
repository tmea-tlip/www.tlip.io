<script lang="ts">
	// eslint-disable-next-line import/no-unresolved
	import { register } from "swiper/element/bundle";
	import { Hero } from "$components";
	register();
</script>

<div class="swiper-block">
	<swiper-container
		class="mySwiper"
		pagination="true"
		paginationClickable="true"
		loop="true"
		autoplay-delay="10000"
		autoplay-disable-on-interaction="false"
	>
		<swiper-slide>
			<Hero
				heading={{
					section: "TLIP",
					title: "Revolutionising Global Trade",
					description:
						"Trade Logistics Information Pipeline (TLIP) is a digital, collaborative infrastructure that enables data sharing between different partners in the global trade supply chain."
				}}
				buttons={[
					{
						title: "Learn more",
						url: "/what-is"
					}
				]}
				style="background:#C6E3F3"
				color="text-grey-500"
			>
				<img src="/assets/hero/earth.png" alt="Earth" />
			</Hero>
		</swiper-slide>
		<swiper-slide>
			<Hero
				heading={{
					section: "The Consortium",
					title: "Impartial Governance",
					description:
						"The neutrality of TLIP is secured by a consortium, aiming to develop relevant governance structures involving impartial international organisations and guided by the goals of public good."
				}}
				buttons={[
					{
						title: "About Us",
						url: "/consortium"
					}
				]}
				style="background:#64A9D1"
				color="text-grey-500"
			>
				<img src="/assets/hero/boat.png" alt="Boat" />
			</Hero>
		</swiper-slide>
		<swiper-slide>
			<Hero
				heading={{
					section: "Unlocking Potential",
					title: "Open-Source Collaboration",
					description:
						"Governments and businesses around the globe can adapt and build on TLIP's open-source functionality according to their specific needs and cross-border processes."
				}}
				buttons={[
					{
						title: "How TLIP Works",
						url: "/#how-does-it-work"
					}
				]}
				style="background:#C6E3F3"
				color="text-grey-500"
			>
				<img src="/assets/hero/collaboration.png" alt="Collaboration" />
			</Hero>
		</swiper-slide>
		<swiper-slide>
			<Hero
				heading={{
					section: "Empowering All",
					title: "Low Fees and Inclusivity",
					description:
						"TLIP is powered by IOTA's distributed ledger technology and built with commitment to the public good, ensuring low-fee transactions and making it accessible to all."
				}}
				buttons={[
					{
						title: "More Benefits",
						url: "/#in-action"
					}
				]}
				style="background:#3CB878"
				color="text-grey-500"
			>
				<img src="/assets/hero/empowering.png" alt="Empowering" />
			</Hero>
		</swiper-slide>
	</swiper-container>
</div>

<style lang="scss">
	swiper-container {
		height: 650px;
	}

	swiper-slide {
		img {
			height: 200px;
			@apply object-contain;
		}

		@media only screen and (min-width: 1024px) {
			img {
				height: 500px;
			}
		}
	}

	:root {
		--swiper-pagination-color: #005923;
	}
</style>
