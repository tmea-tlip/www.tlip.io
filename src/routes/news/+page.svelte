<script lang="ts">
    import { ObservedRoute } from "$components";
    import type { Section } from "$lib";
    import { News, Hero } from "$sections/news";
    import { HaveAnyQuestions } from "$sections/shared";

    const sections: Section[] = [
        {
            component: Hero,
            id: "hero"
        },
        {
            component: News,
            id: "news"
        },
        {
            component: HaveAnyQuestions,
            id: "HaveAnyQuestions"
        }
    ];
</script>

<ObservedRoute {sections} />
