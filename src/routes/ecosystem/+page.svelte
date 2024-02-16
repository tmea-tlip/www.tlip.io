<script lang="ts">
	import { ObservedRoute } from "$components";
	import type { Section } from "$lib";
	import { CommercialPartners, DonorsAndPartners, Hero } from "$sections/ecosystem";
	import { HaveAnyQuestions } from "$sections/shared";

	const sections: Section[] = [
		{
			component: Hero,
			id: "hero"
		},
		{
			component: DonorsAndPartners,
			id: "donors-and-partners"
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
