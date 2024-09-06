<script lang="ts">
	import { ObservedRoute } from "$components";
	import type { Section } from "$lib";
	import { HaveAnyQuestions } from "$sections/shared";
	import { Hero, Reasons, Digitalising } from "$sections/why";

	const sections: Section[] = [
		{
			component: Hero,
			id: "hero"
		},
		{
			component: Reasons,
			id: "reasons"
		},
		{
			component: Digitalising,
			id: "digitalising"
		},
		{
			component: HaveAnyQuestions,
			id: "HaveAnyQuestions"
		}
	];
</script>

<ObservedRoute {sections} />
