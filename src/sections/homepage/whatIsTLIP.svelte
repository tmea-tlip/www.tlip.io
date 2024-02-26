<script lang="ts">
	import { Button } from "$components";

	export let id: string;
</script>

<section {id} class="container mb-40 flex flex-col gap-20 lg:flex-row">
	<div class="flex flex-1 flex-col items-center lg:items-start">
		<h2 class="metropolis-600 mb-10 text-36">What is TLIP?</h2>
		<p class="mb-10 text-center text-16 lg:text-left">
			Trade Logistics Information Pipeline (TLIP) is a collaborative infrastructure, where all actors can share
			data and documents. Used by both border agencies and commercial actors, each party has full control of its
			own data, and all data is available directly from the source.
		</p>
		<Button title="Explore TLIP" url="/what-is"></Button>
	</div>
	<div class="flex-1">
		<img src="/assets/whatIs.png" alt="What Is TLIP?" />
	</div>
</section>
