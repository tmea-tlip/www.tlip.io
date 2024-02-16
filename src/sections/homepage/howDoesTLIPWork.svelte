<script lang="ts">
	import { Card, Icon } from "$components";
	export let id: string;
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
</script>

<section {id} class="pb-16 pt-24 lg:pb-16 lg:pt-40">
	<div class="container">
		<h3 class="mb-5 text-center lg:mb-16">How Does TLIP Work?</h3>
		<img src="/assets/how.svg" alt="How Does TLIP Work?" class="mb-20 lg:p-10" />
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
	</div>
</section>
