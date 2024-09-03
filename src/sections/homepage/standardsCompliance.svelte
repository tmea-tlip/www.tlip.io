<script lang="ts">
	import { Button } from "$components";

	export let id: string;
</script>

<section class="container py-20 md:pb-36 md:pt-32" {id}>
	<h2 class="mb-9 text-center text-36">Standards compliance</h2>
	<div class="flex flex-col items-center justify-center gap-10 text-center">
		<p class="max-w-4xl leading-6 tracking-0.04">
			TLIP exposes APIs that conform to core data standards such as UN/CEFACT and GS1 EPCIS 2.0, enabling any
			stakeholder to efficiently share data and events.
		</p>
		<Button title="Read more about standards compliance" url="/standard-compliance" plain />
	</div>
</section>
