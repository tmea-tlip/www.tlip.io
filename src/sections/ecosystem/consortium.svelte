<script lang="ts">
	import { CONSORTIUM_MEMBERS } from "$lib";

	export let id: string;
</script>

<section class="container py-24" {id}>
	<h2 class="mb-9 text-center text-36">The Consortium</h2>
	<div class="grid flex-1 grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
		{#each CONSORTIUM_MEMBERS as item}
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
