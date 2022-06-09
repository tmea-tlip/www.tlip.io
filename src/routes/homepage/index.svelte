<script context="module" lang="ts">
    import type { Section } from "$lib/types/components";
    import { Hero, WhatIsTLIP, WhoAreWe, Benefits, Technology } from "./sections";

    export const prerender = true;
</script>

<script lang="ts">
    const sections: Section[] = [
        {
            component: Hero,
            id: "hero"
        },
        {
            component: WhatIsTLIP,
            id: "WhatIsTLIP"
        },
        {
            component: WhoAreWe,
            id: "WhoAreWe",
            darkModeNavbar: true
        },
        {
            component: Benefits,
            id: "Benefits"
        },
        {
            component: Technology,
            id: "Technology"
        }
    ];
</script>

{#each sections as { component, id }}
    <svelte:component this={component} {id} />
{/each}
