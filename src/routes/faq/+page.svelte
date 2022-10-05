<script lang="ts">
    import { ObservedRoute } from "$components";
    import type { Section } from "$lib";
    import { Faqs, Hero } from "$sections/faq";
    import { HaveAnyQuestions } from "$sections/shared";

    const sections: Section[] = [
        {
            component: Hero,
            id: "hero"
        },
        {
            component: Faqs,
            id: "faqs"
        },
        {
            component: HaveAnyQuestions,
            id: "HaveAnyQuestions"
        }
    ];
</script>

<ObservedRoute {sections} />
