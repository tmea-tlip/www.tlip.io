<script lang="ts">
	import { Carousel } from "$components";
	import { COMMERCIAL_PARTNERS } from "$lib";

	export let id: string;
</script>

<section class="container py-24 md:pb-36 md:pt-32" {id}>
	<h4 class="mb-9 text-center text-18">Our Ecosystem</h4>
	<Carousel items={COMMERCIAL_PARTNERS} itemWidth={144}></Carousel>
</section>
