<script lang="ts">
	import { ObservedRoute } from "$components";
	import type { Section } from "$lib";
	import { HaveAnyQuestions } from "$sections/shared";
	import { Features, Hero, WhatIsTLIP } from "$sections/what-is";

	const sections: Section[] = [
		{
			component: Hero,
			id: "hero"
		},
		{
			component: WhatIsTLIP,
			id: "what-is"
		},
		{
			component: Features,
			id: "features"
		},
		{
			component: HaveAnyQuestions,
			id: "HaveAnyQuestions"
		}
	];
</script>

<ObservedRoute {sections} />
