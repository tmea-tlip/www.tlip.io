<script lang="ts">
	import { ObservedRoute } from "$components";
	import type { Section } from "$lib";
	import { HaveAnyQuestions } from "$sections/shared";
	import { Standards, Hero } from "$sections/standard-compliance";

	const sections: Section[] = [
		{
			component: Hero,
			id: "hero"
		},
		{
			component: Standards,
			id: "standards"
		},
		{
			component: HaveAnyQuestions,
			id: "HaveAnyQuestions"
		}
	];
</script>

<ObservedRoute {sections} />
