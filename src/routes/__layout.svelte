<script lang="ts">
    import { Footer, Header } from "../components";
    import "../scss/index.scss";

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute("href"));
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth"
        });
    }

    const SITE_PAGES = [
        { title: "What is TLIP", url: "/", id: "#WhatIsTLIP", onClick: scrollIntoView },
        { title: "Who are we", url: "/", id: "#WhoAreWe", onClick: scrollIntoView },
        { title: "Benefits", url: "/", id: "#Benefits", onClick: scrollIntoView },
        { title: "Technology", url: "/", id: "#Technology", onClick: scrollIntoView },
        { title: "FAQ", url: "/faq" }
    ];
</script>

<svelte:head>
    <title>TMEA / TLIP</title>
</svelte:head>

<Header items={SITE_PAGES} />
<main>
    <slot />
</main>
<Footer />
