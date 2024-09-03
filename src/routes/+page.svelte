<script lang="ts">
	import { ObservedRoute } from "$components";
	import type { Section } from "$lib/types/components";
	import {
		Benefits,
		Hero,
		LaunchWithEase,
		OurPartners,
		BuiltForDevelopers,
		StandardsCompliance
	} from "$sections/homepage";
	import IntegratedWith from "$sections/homepage/integratedWith.svelte";
	import { HaveAnyQuestions } from "$sections/shared";

	const sections: Section[] = [
		{
			component: Hero,
			id: "hero"
		},
		{
			component: IntegratedWith,
			id: "integrated-with"
		},
		{
			component: OurPartners,
			id: "our-partners"
		},
		{
			component: Benefits,
			id: "benefits"
		},
		{
			component: LaunchWithEase,
			id: "launch-with-ease"
		},
		{
			component: BuiltForDevelopers,
			id: "built-for-developers"
		},
		{
			component: StandardsCompliance,
			id: "standards-compliance"
		},
		{
			component: HaveAnyQuestions,
			id: "questions"
		}
	];
</script>

<ObservedRoute {sections} />
