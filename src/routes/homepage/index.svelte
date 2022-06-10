<script context="module" lang="ts">
    import type { Section } from "$lib/types/components";
    import { Hero, WhatIsTLIP, WhyTLIP, HowDoesTLIPWork, Benefits, WhoAreWe } from "./sections";

    export const prerender = true;
</script>

<script lang="ts">
import { ObservedRoute } from "../../components";

    const sections: Section[] = [
        {
            component: Hero,
            id: "hero",
            darkModeNavbar: true
        },
        {
            component: WhatIsTLIP,
            id: "WhatIsTLIP"
        },
        {
            component: WhyTLIP,
            id: "WhyTLIP",
            darkModeNavbar: true
        },
        {
            component: HowDoesTLIPWork,
            id: "HowDoesTLIPWork"
        },
        {
            component: WhoAreWe,
            id: "WhoAreWe"
        },
        {
            component: Benefits,
            id: "Benefits"
        }
    ];
</script>

<ObservedRoute {sections}/>
