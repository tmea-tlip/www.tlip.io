<script lang="ts">
	import { Button, Carousel } from "$components";
	import { COMMERCIAL_PARTNERS, GOVERNMENT_PARTNERS } from "$lib";

	export let id: string;
</script>

<section class="container py-24 md:pb-36 md:pt-32" {id}>
	<h4 class="mb-9 text-center text-18">Our Government and Commercial Partners and Donors</h4>
	<Carousel items={GOVERNMENT_PARTNERS.concat(COMMERCIAL_PARTNERS)} itemWidth={144}></Carousel>

	<div class="mt-8 flex justify-start">
		<Button title="See All" url="/ecosystem" small />
	</div>
</section>
