<script lang="ts">
	import { ObservedRoute } from "$components";
	import type { Section } from "$lib";
	import { AboutUs, Hero, InAction } from "$sections/about-us";
	import { HaveAnyQuestions } from "$sections/shared";

	const sections: Section[] = [
		{
			component: Hero,
			id: "hero"
		},
		{
			component: AboutUs,
			id: "about-us"
		},
		{
			component: InAction,
			id: "in-action"
		},
		{
			component: HaveAnyQuestions,
			id: "HaveAnyQuestions"
		}
	];
</script>

<ObservedRoute {sections} />
