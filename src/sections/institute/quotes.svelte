<script lang="ts">
	import { Carousel } from "$components";
	import { PARTNER_QUOTES } from "$lib";

	export let id: string;
</script>

<section class="container pb-40 pt-10" {id}>
	<Carousel items={PARTNER_QUOTES} itemWidth={380} itemHeight={300} showNavigation timing={3000}></Carousel>
</section>
