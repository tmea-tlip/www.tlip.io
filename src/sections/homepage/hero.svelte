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
		autoplay-delay="3500"
		autoplay-disable-on-interaction="false"
	>
		<swiper-slide>
			<Hero
				heading={{
					title: "Trade and Logistics Information Pipeline",
					description:
						"Creating paperless trade through a trusted infrastructure that enables secure and efficient cross-border collaboration between multiple parties."
				}}
				buttons={[
					{
						title: "Contact us",
						url: "mailto:tlip@iota.org"
					}
				]}
				background="bg-green-200"
				color="text-grey-500"
				backgroundImage="/assets/background-hero.png"
			>
				<div class="video-container">
					<video
						class="image-shadow h-full w-full object-cover"
						muted
						controls
						preload="metadata"
						poster="/assets/posters/Akeyos_flowers_poster.png"
					>
						<source src="https://files.iota.org/media/Akeyos_flowers.mp4" type="video/mp4" />
						<track kind="captions" />
					</video>
				</div>
			</Hero>
		</swiper-slide>
		<swiper-slide>
			<Hero
				heading={{
					section: "TLIP",
					title: "Revolutionizing Global Trade",
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
					section: "TLIP Institute",
					title: "Impartial Governance",
					description:
						"The neutrality of TLIP is secured by the TLIP Institute, governed by a board of international organisations and guided by the goals of public good."
				}}
				buttons={[
					{
						title: "About Us",
						url: "/institute"
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
						"Governments and businesses around the globe can adapt and build on TLIP’s open-source functionality according to their specific needs and cross-border processes."
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
						"TLIP is powered by IOTA’s distributed ledger technology, ensuring low-fee transactions, and built according to the TLIP Institute’s commitment to public good, making it accessible to all."
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
		img,
		.video-container {
			height: 200px;
			@apply object-contain;
		}

		@media only screen and (min-width: 1024px) {
			img {
				height: 500px;
			}
			.video-container {
				height: 350px;
			}
		}
	}

	:root {
		--swiper-pagination-color: #005923;
	}
</style>
