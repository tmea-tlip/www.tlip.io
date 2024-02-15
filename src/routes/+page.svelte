<script lang="ts">
	import { ObservedRoute } from "$components";
	import type { Section } from "$lib/types/components";
	import {
		Benefits,
		Hero,
		HowDoesTLIPWork,
		Partners,
		UkEcosystem,
		WhatIsTLIP,
		WhoAreWe,
		WhyTLIP
	} from "$sections/homepage";
	import { HaveAnyQuestions } from "$sections/shared";

	const sections: Section[] = [
		{
			component: Hero,
			id: "hero"
		},
		{
			component: Partners,
			id: "partners"
		},
		{
			component: WhatIsTLIP,
			id: "what-is-tlip"
		},
		{
			component: WhyTLIP,
			id: "why-tlip",
			lightModeNavbar: true
		},
		{
			component: HowDoesTLIPWork,
			id: "how-does-tlip-work"
		},
		{
			component: WhoAreWe,
			id: "who-we-are"
		},
		{
			component: UkEcosystem,
			id: "uk-ecosystem",
			lightModeNavbar: true
		},
		{
			component: Benefits,
			id: "benefins"
		},
		{
			component: HaveAnyQuestions,
			id: "questions"
		}
	];
</script>

<ObservedRoute {sections} />
