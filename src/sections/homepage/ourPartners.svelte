<script lang="ts">
	import { COMMERCIAL_PARTNERS, GOVERNMENT_PARTNERS } from "$lib";

	export let id: string;

	const TESTIMONIALS = [
		{
			description:
				"Cat ipsum dolor sit amet, run at 3am for get scared by doggo also cucumerro spend all night ensuring people don't sleep sleep all day for stare at wall turn and meow stare at wall some more meow again continue staring.",
			author: "Author Name",
			logo: "https://placecats.com/millie/300/300"
		},
		{
			description:
				"Cat ipsum dolor sit amet, run at 3am for get scared by doggo also cucumerro spend all night ensuring people don't sleep sleep all day for stare at wall turn and meow stare at wall some more meow again continue staring.",
			author: "Author Name",
			logo: "https://placecats.com/millie/300/300"
		}
	];
</script>

<section class="container py-20 lg:py-28" {id}>
	<h2 class="mb-9 text-center text-36">Our Partners</h2>
		<div class="grid flex-1 grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
			{#each GOVERNMENT_PARTNERS.concat(COMMERCIAL_PARTNERS) as item}
				<div class="flex aspect-square flex-col">
					<div class="flex h-full w-full items-center justify-center border p-2">
						<img src={item.src} alt={item.label ?? ""} class="aspect-square object-contain" />
					</div>
					{#if item.label}
						<p class={`w-full flex-1 ${item.src ? "text-center text-14" : "text-left text-16"}`}>
							{item.label}
						</p>
					{/if}
				</div>
			{/each}
	</div>
</section>
