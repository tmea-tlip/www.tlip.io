<script lang="ts">
    import { formatDateToDDMMYYYY } from "$lib";

    export let imageUrl: string;
    export let title: string;
    export let date: Date;
    export let publishBy: string;
    export let linkUrl: string;

    let formattedDate: string;
    $: formattedDate = formatDateToDDMMYYYY(date);

    $: showFallbackImage = imageUrl === "unreachable";
</script>

<a
    href={linkUrl}
    target="_blank"
    class="card relative overflow-hidden flex justify-start items-center w-full border border-grey-100 rounded-2xl bg-white p-4 md:p-7 "
>
    <div
        class="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-[#dbe9f4] rounded-2xl overflow-hidden shrink-0"
    >
        {#if imageUrl}
            <img
                src={showFallbackImage ? "/assets/default-news-thumbnail.svg" : imageUrl}
                alt={title}
                class="w-full h-full {showFallbackImage ? 'object-contain' : 'object-cover'}"
            />
        {/if}
    </div>
    <div class="space-y-2 ml-4">
        <p class="lg:text-20 lg:leading-110 tracking-0.02 font-semibold text-grey-600">{title}</p>
        <div class="text-14">
            <p class="font-semibold">{publishBy}</p>
            <p>{formattedDate}</p>
        </div>
    </div>
</a>

<style lang="scss">
    .card {
        &:hover {
            transition: all 0.2s ease-in-out;
            box-shadow: 0px 3px 6px rgba(38, 38, 38, 0.2);
            border: 1px solid #f2f8f9;
        }
    }

    .load-wraper {
        background-color: rgb(219, 233, 244);
        z-index: 44;
    }
    .load-image {
        position: absolute;
        left: -45%;
        background: linear-gradient(239.01deg, rgba(232, 240, 255, 0.5) 9.43%, rgba(72, 87, 118, 0) 121.19%);
        animation: load 1.5s infinite;
        z-index: 45;
    }
    @keyframes load {
        0% {
            left: -50%;
        }
        100% {
            left: 100%;
        }
    }
</style>
