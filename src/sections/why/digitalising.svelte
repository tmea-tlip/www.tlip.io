<script lang="ts">
	import { Icon } from "$components";

	export let id: string;

	const items = [
		{
			title: "cut trade transaction costs with 80%",
			icon: {
				name: "finance"
			}
		},
		{
			title: "cut cross border processing times from 25 days to one day",
			icon: {
				name: "time"
			}
		},
		{
			title: "increase SME efficiency with 35%",
			icon: {
				name: "innovative"
			}
		}
	];
</script>

<section {id} class="container flex flex-col gap-20 py-24 md:py-36">
	<h2 class="text-center">Digitalising trade transactions would…</h2>
	<div class="flex flex-1 flex-col gap-8 lg:flex-row lg:gap-5">
		{#each items as { title, icon }}
			<div class="flex flex-col items-center gap-5 rounded-lg border border-blue-500 p-10 text-center lg:w-1/3">
				<Icon {...icon} fill="#004E71" width={50} height={50} />
				<h4>{title}</h4>
			</div>
		{/each}
	</div>
</section>
