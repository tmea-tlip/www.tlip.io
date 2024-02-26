<script lang="ts">
	import Button from "$components/button.svelte";

	export let id: string;
</script>

<section {id} class="container mb-20 mt-20 flex items-center justify-between rounded bg-blue-200 p-10">
	<p class="metropolis-700 text-24">For Inquiries and Partnership Opportunities</p>
	<Button title="Contact Us" url="mailto:tip@iota.org" />
</section>
