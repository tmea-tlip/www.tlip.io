<script lang="ts">
	import { ObservedRoute } from "$components";
	import type { Section } from "$lib";
	import { CommercialPartners, Consortium, Government, Hero } from "$sections/ecosystem";
	import { HaveAnyQuestions } from "$sections/shared";

	const sections: Section[] = [
		{
			component: Hero,
			id: "hero"
		},
		{
			component: Consortium,
			id: "consortium"
		},
		{
			component: Government,
			id: "government"
		},
		{
			component: CommercialPartners,
			id: "commercial-partners"
		},
		{
			component: HaveAnyQuestions,
			id: "HaveAnyQuestions"
		}
	];
</script>

<ObservedRoute {sections} />
