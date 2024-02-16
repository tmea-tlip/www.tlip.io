<script lang="ts">
	import { Carousel } from "$components";
	import { BOARD_MEMBERS } from "$lib";

	export let id: string;
</script>

<section class="container py-24" {id}>
	<h2 class="mb-9 text-center text-36">Our Donors and Government Partners</h2>
	<Carousel items={BOARD_MEMBERS}></Carousel>
</section>
