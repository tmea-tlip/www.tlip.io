<script lang="ts">
</script>

<div class="flex flex-col gap-y-5 [&_a]:text-green-500 [&_a]:underline">
	<div class="leading-125 tracking-0.02">
		<slot name="title" />
	</div>
	<div class="leading-6 tracking-0.04">
		<slot name="description" />
	</div>
	<div class="[&_ul]:list-disc [&_ul]:pl-5">
		<slot name="items" />
	</div>
	<div class="leading-6 tracking-0.04">
		<slot name="conclusion" />
	</div>
</div>
