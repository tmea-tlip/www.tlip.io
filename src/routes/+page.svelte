<script lang="ts">
	import { ObservedRoute } from "$components";
	import type { Section } from "$lib/types/components";
	import {
		Benefits,
		Hero,
		HowDoesTLIPWork,
		InAction,
		Consortium,
		Ecosystem,
		WhatIsTLIP,
		WhyTLIP
	} from "$sections/homepage";
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
			component: WhatIsTLIP,
			id: "what-is-tlip"
		},
		{
			component: WhyTLIP,
			id: "why-tlip"
		},
		{
			component: HowDoesTLIPWork,
			id: "how-does-it-work"
		},
		{
			component: InAction,
			id: "in-action"
		},
		{
			component: Benefits,
			id: "benefits"
		},
		{
			component: Ecosystem,
			id: "ecosystem"
		},
		{
			component: HaveAnyQuestions,
			id: "questions"
		}
	];
</script>

<ObservedRoute {sections} />
