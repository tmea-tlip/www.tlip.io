<script lang="ts">
	import { Carousel } from "$components";
	import { ECOSYSTEM_PARTNERS } from "$lib";

	export let id: string;
</script>

<section class="container py-24" {id}>
	<h2 class="mb-9 text-center text-36">Commercial Partners</h2>
	<Carousel items={ECOSYSTEM_PARTNERS}></Carousel>
</section>
