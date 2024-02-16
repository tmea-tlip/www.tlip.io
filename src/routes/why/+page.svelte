<script lang="ts">
	import { ObservedRoute } from "$components";
	import type { Section } from "$lib";
	import { HaveAnyQuestions } from "$sections/shared";
	import { Hero, Reasons, Challenges } from "$sections/why";

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
			component: Challenges,
			id: "challenges"
		},
		{
			component: HaveAnyQuestions,
			id: "HaveAnyQuestions"
		}
	];
</script>

<ObservedRoute {sections} />
