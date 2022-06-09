<script lang="ts">
    import { page } from "$app/stores";
    export let items = [];
    export { classes as class };

    let classes: string = "";
</script>

<nav class="fixed container flex justify-between {classes}">
    <a href="/">
        <img src="/assets/logo-TLIP.svg" alt="TLIP logo" />
    </a>
    <div class="flex flex-row">
        {#if items}
            <!-- Desktop -->
            <ul class="hidden lg:flex items-center flex-row col-9 w-full">
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
        {/if}
    </div>
</nav>
