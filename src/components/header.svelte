<script lang="ts">
    import type { Button as ButtonType } from "$lib/types/components";
    import Button from "./button.svelte";
    import Burger from "./burger.svelte";
    import { page } from "$app/stores";
    import { activeSectionId, lightModeNavbar } from "$lib/store";
    import { onMount } from "svelte";

    export let items = [];
    export { classes as class };

    let classes: string = "";
    let scroll: number;
    let sideMenuOpen: boolean = false;

    const BUTTON: ButtonType = {
        title: "CONTACT US",
        url: "mailto:tlip@iota.org",
        small: true,
        classes: "text-14"
    };

    const toggleMenu: () => void = () => {
        sideMenuOpen ? closeMenu() : openMenu();
    };
    const closeMenu = () => {
        sideMenuOpen = false;
        document.querySelector("body").classList.remove("overflow-y-hidden");
    };
    const openMenu = () => {
        sideMenuOpen = true;
        document.querySelector("body").classList.add("overflow-y-hidden");
    };

    const logoClick: (event: Event) => void = e => {
        if (openMenu) {
            closeMenu()
        }
        if ($page.path === "/") {
            e.preventDefault();
            document.body.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", "/");
        }
    };

    function onScroll() {
        window.scrollY > 100;
        scroll = window.scrollY;
    }

    onMount(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });
</script>

<nav
    class="fixed py-1 z-50 w-full bg-blur text-grey-600 metropolis-500 {classes}"
    class:lightMode={$lightModeNavbar && !sideMenuOpen}
    class:borderBottom={scroll}
>
    <div class="container flex justify-between">
        <a href="/" class="py-4" on:click={logoClick}>
            <img src="/assets/logo-TLIP.svg" alt="TLIP logo" id="logo" />
        </a>
        <div class="order-3 my-auto hidden lg:inline-block">
            <Button {...BUTTON} />
        </div>
        <div class="flex flex-row">
            {#if items}
                <!-- Desktop -->
                <ul
                    class="flex-row items-center md:space-x-2 lg:space-x-6 xl:space-x-12 hidden w-full lg:flex transition-opacity duration-200"
                >
                    {#each items as { title, url, id, onClick }}
                        {#if title}
                            <li class="shrink-0">
                                {#if id && url.startsWith("/#")}
                                    <a
                                        href={url}
                                        on:click|preventDefault={onClick}
                                        class="{id === '#' + $activeSectionId
                                            ? 'metropolis-700'
                                            : ''} hover:text-green-400">{title}</a
                                    >
                                {:else if url || (id && url != $page.path)}
                                    <a
                                        href={url}
                                        class="{url === $page.path ? 'metropolis-700' : ''} hover:text-green-400"
                                        >{title}</a
                                    >
                                {/if}
                            </li>{/if}
                    {/each}
                </ul>
                <!-- Burger Icon -- Mobile  -->
                <Burger bind:open={sideMenuOpen} onClick={toggleMenu} {sideMenuOpen} classes="flex my-auto lg:hidden" />
            {/if}
        </div>
    </div>
</nav>

<!-- Mobile Menu   -->
<aside
    class="bg-white h-screen w-0 fixed left-0 top-0 lg:hidden z-40 whitespace-nowrap justify- {sideMenuOpen
        ? 'open'
        : ''}"
>
    <div class="h-full flex flex-col items-start justify-between">
        <ul
            class="container h-auto pt-20 text-black border-t-2 w-full transition-opacity duration-400 {!sideMenuOpen
                ? 'opacity-0 hidden'
                : 'opacity-100 block'}"
        >
            {#each items as { title, url, id, onClick }}
                {#if title}
                    <li class="py-4 nav-link min-w-max">
                        {#if id && url.startsWith("/#")}
                            <a
                                class={id === "#" + $activeSectionId ? "metropolis-700" : ""}
                                href={url}
                                on:click|preventDefault={e => {
                                    onClick(e);
                                    closeMenu();
                                }}>{title}</a
                            >
                        {:else if url || (id && url != $page.path)}
                            <a on:click={closeMenu} class={url === $page.path ? "metropolis-700" : ""} href={url}
                                >{title}</a
                            >
                        {/if}
                    </li>
                {/if}
            {/each}
        </ul>
        <div class="mx-auto mb-10 {sideMenuOpen ? 'flex' : 'hidden'}"><Button {...BUTTON} /></div>
    </div>
</aside>

<style lang="scss">
    aside {
        transition: width 0.25s ease-in-out;
        &.open {
            @apply w-screen;
        }
    }
    nav {
        a {
            @apply transition-colors;
            @apply duration-150;
        }

        &.bg-blur {
            background-color: rgba(241, 242, 244, 0.8);
        }
        /* if backdrop support: transparent and blurred */
        @supports ((-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))) {
            &.bg-blur {
                @apply bg-transparent;
                -webkit-backdrop-filter: blur(16px);
                backdrop-filter: blur(16px);
            }
        }
        &.lightMode {
            @apply text-white;
            #logo {
                filter: invert(100%) sepia(100%) saturate(36%) hue-rotate(279deg) brightness(109%) contrast(112%);
            }
        }
        &.borderBottom {
            @apply border-b;
            @apply border-grey-100;
        }
    }
</style>
