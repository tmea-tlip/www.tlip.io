<script lang="ts">
	import { Card, Icon } from "$components";

	export let id: string;

	const items = [
		{
			title: "Neutrality",
			description: "Governance through independent international bodies",
			icon: {
				name: "neutrality"
			}
		},
		{
			title: "Interoperability",
			description: "International data and API standards",
			icon: {
				name: "interoperability"
			}
		},
		{
			title: "Paper & Digital Simultaneously",
			description: "Does not exclude paper or PDF transactions",
			icon: {
				name: "paperAndDigital"
			}
		},
		{
			title: "Open Source",
			description: "Open to development by the market",
			icon: {
				name: "openSource"
			}
		},
		{
			title: "Scalability",
			description: "Easy to deploy via URL links",
			icon: {
				name: "scalability"
			}
		},
		{
			title: "Upgrade",
			description: "It is an upgrade, not a change to legacy systems",
			icon: {
				name: "upgrade"
			}
		}
	];
</script>

<section class="container mb-20 grid grid-cols-1 gap-10 lg:grid-cols-3" {id}>
	{#each items as item}
		<Card withBorder small>
			<div slot="body">
				<Icon {...item.icon} />
				<h4 class="metropolis-600 my-8 text-28">{item.title}</h4>
				<p class="test-16">{item.description}</p>
			</div>
		</Card>
	{/each}
</section>
