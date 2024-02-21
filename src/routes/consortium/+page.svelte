<script lang="ts">
	import { ObservedRoute } from "$components";
	import type { Section } from "$lib";
	import { GoverningBody, Hero, Inquiries, JoinUs, Quotes } from "$sections/consortium";
	import { HaveAnyQuestions } from "$sections/shared";

	const sections: Section[] = [
		{
			component: Hero,
			id: "hero"
		},
		{
			component: GoverningBody,
			id: "governing-body"
		},
		{
			component: JoinUs,
			id: "join-us"
		},
		{
			component: Inquiries,
			id: "inquiries"
		},
		{
			component: Quotes,
			id: "quotes"
		},
		{
			component: HaveAnyQuestions,
			id: "HaveAnyQuestions"
		}
	];
</script>

<ObservedRoute {sections} />
