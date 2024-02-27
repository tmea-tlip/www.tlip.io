<script lang="ts">
	import { Hero } from "$components";
	export let id: string;
</script>

<Hero
	heading={{
		section: "About Us",
		title: "The TLIP Collaboration Agreement",
		subtitle: "Seamless Trade for All",
		description:
			"The future governance structure of TLIP aims to promote transparency, inclusivity, and efficiency in global trade operations."
	}}
	buttons={[
		{
			title: "Contact Us",
			url: "mailto:tlip@iota.org"
		}
	]}
	style=""
	color="text-grey-500"
	{id}
>
	<img src="/assets/hero/boat.png" alt="Boat" class="h-64 object-contain lg:h-auto" style="max-height:500px" />
</Hero>
