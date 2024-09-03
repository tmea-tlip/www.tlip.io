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

<section class="container py-24" {id}>
	<h2 class="mb-9 text-center text-36">Our Partners</h2>
	<div class="flex flex-col gap-28">
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
		<div>
			<h3 class="text-center">Testimonials</h3>
			<div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-10">
				{#each TESTIMONIALS as { description, author, logo }}
					<div
						class="flex flex-col gap-y-5 rounded-md border border-grey-100 bg-white px-6 py-8 md:px-9 md:py-14"
					>
						<div class="flex flex-row items-center gap-x-5">
							<div class="h-10 w-10 overflow-hidden rounded-full">
								<img src={logo} alt={logo} class="h-full w-full object-contain" />
							</div>
							<h4>{author}</h4>
						</div>
						<div class="leading-150 tracking-0.04 text-grey-500">
							{description}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
