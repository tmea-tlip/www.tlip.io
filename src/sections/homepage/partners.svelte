<script lang="ts">
	import { Carousel } from "$components";
	import { PARTNERS } from "$lib";

	export let id: string;
</script>

<div class="flex flex-col items-center justify-center space-y-9 overflow-hidden pt-20" {id}>
	{#each PARTNERS as partnerCategory, idx}
		<div class="flex w-full flex-col items-center justify-center">
			<h4 class="mb-4 text-center font-bold">{partnerCategory.title}</h4>
			<Carousel images={partnerCategory.logos} id={`partners-${idx}`} />
		</div>
	{/each}
</div>
