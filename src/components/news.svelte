<script lang="ts">
    import { formatDateToDDMMYYYY } from "$lib";

    export let imageUrl: string;
    export let title: string;
    export let date: Date;
    export let publishBy: string;
    export let linkUrl: string;

    let formattedDate: string;
    $: formattedDate = formatDateToDDMMYYYY(date);
</script>

<a
    href={linkUrl}
    target="_blank"
    class="flex justify-start items-center w-full border border-grey-100 rounded-2xl bg-white p-4 md:p-7 "
>
    {#if imageUrl}
        <div
            class="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-grey-100 rounded-2xl overflow-hidden shrink-0"
        >
            <img src={imageUrl} alt={title} class="w-full h-full object-cover" />
        </div>
    {:else}
        <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-grey-100 shrink-0" />
    {/if}
    <div class="space-y-2 ml-4">
        <p class="lg:text-20 lg:leading-110 tracking-0.02 font-semibold text-grey-600">{title}</p>
        <div class="text-14">
            <p class="font-semibold">{publishBy}</p>
            <p>{formattedDate}</p>
        </div>
    </div>
</a>

<style lang="scss">
    a:hover {
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    }
</style>
