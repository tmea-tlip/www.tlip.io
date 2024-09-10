<script lang="ts">
	import { Hero } from "$components";
	export let id: string;
</script>

<Hero
	heading={{
		title: "Unlocking cross-border trade data exchange"
	}}
	color="text-grey-500"
	{id}
>
	<img src="/assets/hero/boat.png" alt="Boat" class="h-64 object-contain lg:h-auto" style="max-height:500px" />
</Hero>
