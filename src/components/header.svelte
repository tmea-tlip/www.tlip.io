<script lang="ts">
    import { page } from "$app/stores";
    import { darkModeNavbar } from "$lib/store";
    import Burger from "./burger.svelte";
    export let items = [];
    export { classes as class };

    let classes: string = "";

    let sideMenuOpen = false;

    const toggleMenu = () => {
        sideMenuOpen ? closeMenu() : openMenu();
    };
    const closeMenu = () => {
        sideMenuOpen = false;
    };
    const openMenu = () => {
        sideMenuOpen = true;
    };
</script>

<nav
    class="fixed container flex justify-between z-50 min-w-full
    {classes}"
    class:darkMode={($darkModeNavbar && !sideMenuOpen)}
>
    <a href="/" class="py-4">
        <img src="/assets/logo-TLIP.svg" alt="TLIP logo" id="logo" />
    </a>
    <div class="flex flex-row">
        {#if items}
            <!-- Desktop -->
            <ul class="hidden lg:flex items-center flex-row col-9 w-full flex-wrap">
                {#each items as { title, url, id, onClick }}
                    {#if title}
                        {#if id && url === $page.path}
                            <li class="px-4">
                                <a href={id} on:click|preventDefault={onClick}>{title}</a>
                            </li>
                        {:else if url || (id && url != $page.path)}
                            <li class="px-4">
                                <a href={url}>{title}</a>
                            </li>
                        {/if}
                    {/if}
                {/each}
            </ul>

            <!-- Mobile -->
            <div class="flex lg:hidden pt-3">
                <Burger bind:open={sideMenuOpen} onClick={toggleMenu} {sideMenuOpen}/>
            </div>
            <aside class="bg-green-200 h-screen w-0 absolute right-0 top-0 lg:hidden {sideMenuOpen ? 'open' : ''}">
                <ul class="h-screen pt-20 text-{($darkModeNavbar && !sideMenuOpen) ? 'white' : 'black'} border-t-2 px-4">
                    {#each items as { title, url, id, onClick }}
                        {#if title}
                            {#if id && url === $page.path}
                                <li class="my-4">
                                    <a
                                        href={id}
                                        on:click|preventDefault={e => {
                                            onClick(e);
                                            closeMenu();
                                        }}>{title}</a
                                    >
                                </li>
                            {:else if url || (id && url != $page.path)}
                                <li class="my-4">
                                    <a href={url}>{title}</a>
                                </li>
                            {/if}
                        {/if}
                    {/each}
                </ul>
            </aside>
        {/if}
    </div>
</nav>

<style lang="scss">
    nav {
        &.darkMode {
            @apply text-white;
            #logo {
                filter: invert(100%) sepia(100%) saturate(36%) hue-rotate(279deg) brightness(109%) contrast(112%);
            }
        }
        aside {
            z-index: -1;
            @apply flex-wrap;
            transition: width .3s ease-in-out;
            &.open {
                @apply w-full;
            }
        }
    }

</style>
