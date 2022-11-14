<script lang="ts">
    export let image: string;
    export let title: string;
    export let date: string;
    export let publishBy: string;
</script>

<div class="flex justify-start items-center w-full border border-grey-100 rounded-2xl bg-white p-7 md:p-9">
    <img src={image} alt="" class="w-16 h-16 md:w-20 md:h-20 rounded-full mr-6 md:mr-16" />
    <div class="space-y-2">
        <p class="lg:text-20 lg:leading-110 tracking-0.02 font-semibold text-grey-600">{title}</p>
        <div class="text-14">
            <p>Published by: {publishBy}</p>
            <p>{date}</p>
        </div>
    </div>
</div>

<style lang="scss">
    .image div {
        img {
            @apply transition-transform;
            @apply duration-200;
            @apply ease-in-out;
        }
        &:after {
            content: "";
            @apply transition-transform;
            @apply duration-200;
            @apply ease-in-out;
            @apply mix-blend-color;
            @apply bg-opacity-100;
            @apply absolute;
            @apply -translate-x-28;
            @apply top-0;
            @apply left-0;
            @apply w-full;
            @apply opacity-0;
            @apply h-full;
            @apply bg-green-200;
        }
        &:hover {
            img {
                @apply scale-105;
            }
            &:after {
                @apply opacity-100;
                @apply translate-x-0;
            }
        }
    }
    .label {
        border-bottom: 50px solid;
        border-right: 30px solid;
        @apply border-r-transparent;
    }
</style>
