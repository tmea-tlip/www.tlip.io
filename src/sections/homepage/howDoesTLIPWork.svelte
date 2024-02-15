<script lang="ts">
	import { Card, Icon } from "$components";
	import type { Heading } from "$lib/types/sections";
	export let id: string;
	const HEADINGS: Heading = {
		title: "How Does TLIP Work?"
	};
	const CARDS = [
		{
			title: "Decentralised",
			description: "Data is not stored or controlled centrally.",
			icon: {
				name: "decentralized"
			}
		},
		{
			title: "Secure",
			description: "State-of-the-art security encryption avoids hacking by unauthorised parties.",
			icon: {
				name: "secure"
			}
		},
		{
			title: "Upgrades Legacy IT",
			description: "Plugs into existing systems and facilitate expansion through open APIs.",
			icon: {
				name: "upgrades"
			}
		},
		{
			title: "Data at the Source",
			description: "Keeps data local and traceable to source.",
			icon: {
				name: "data"
			}
		},
		{
			title: "Data Owners Control Access",
			description:
				"Gives data producers control over who can access their data, thus guaranteeing privacy and confidentiality.",
			icon: {
				name: "dataAccess"
			}
		},
		{
			title: "Innovative",
			description: "Immutable transparency and auditability through distributed ledger technology.",
			icon: {
				name: "innovative"
			}
		}
	];
	const SEE_IN_ACTION = {
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
			}
		]
	};
</script>

<section {id} class=" pb-16 pt-24 lg:pb-28 lg:pt-40">
	<div class="container">
		<h3 class="mb-5 text-center lg:mb-16">{HEADINGS.title}</h3>
		<div class="mb-16 grid grid-cols-1 gap-5 md:mb-32 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
			{#each CARDS as { title, description, icon }}
				<Card classes="work bg-white" withBorder>
					<div slot="eyebrow" class="mb-4 md:mb-6">
						<Icon {...icon} />
					</div>
					<h3 slot="title" class="mb-4 text-28 leading-110 tracking-0.02">{title}</h3>
					<div slot="body" class="leading-150 tracking-0.04 text-grey-500">
						{description}
					</div>
				</Card>
			{/each}
		</div>
		<div>
			<h3 class="mb-5 text-center leading-125 tracking-0.02 md:mb-16">{SEE_IN_ACTION.title}</h3>
			<div class="flex flex-col lg:flex-row">
				{#each SEE_IN_ACTION.cards as { title, video, description, poster }}
					<div class="mb-9 h-full w-full last:mr-0 lg:mb-0 lg:mr-20 lg:w-1/2">
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
						<h3 class="mb-3 mt-5 leading-125 tracking-0.02 md:mb-4 md:mt-6">{title}</h3>
						<p>{description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background: linear-gradient(
			to bottom,
			#ffffff 0%,
			#ffffff 30%,
			rgba(86, 204, 242, 0.2) 30%,
			rgba(86, 204, 242, 0.2) 100%
		);
	}
</style>
