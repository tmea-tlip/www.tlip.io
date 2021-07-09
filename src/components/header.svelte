<script lang="ts">
    export let title: string = "unknown app";
    export let to: string | undefined;
    let classes: string = "";
    export { classes as class };
</script>

<header class="flex flex-row items-center justify-between p-5 bg-green-500 {classes}">
    <h1 class="text-white dark:text-gray-800">
        {#if to}
            <a href={to}>{title}</a>
        {:else}
            {title}
        {/if}
    </h1>
    <slot name="right" />
</header>
