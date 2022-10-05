<script lang="ts">
    import type { Heading } from "$lib/types/sections";

    const HEADING: Heading = {
        title: "Frequent Asked Questions",
        description: "Have questions? We are here to help."
    };
</script>

<section class="bg-blue-300 w-full h-full relative pt-28 lg:pt-36 pb-20 lg:pb-28 z-20 overflow-hidden">
    <img
        src="/assets/background-hero.png"
        alt="background"
        class="absolute bottom-54 lg:bottom-0 lg:w-4/5 lg:h-2/3 z-0 background-image opacity-50"
    />
    <div class="container">
        <div
            class="text-white flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left w-full h-full z-10"
        >
            <h1 class="mb-6">{HEADING.title}</h1>
            <p>{HEADING.description}</p>
        </div>
    </div>
</section>

<style lang="scss">
    .background-image {
        z-index: -1;
        width: 100%;
        min-width: 1200px;
        right: -50rem;
        @screen md {
            width: calc((100vw - 600px) / 2 + 600px + 10px);
            right: -30rem;
        }
        @screen lg {
            width: calc((100vw - 900px) / 2 + 900px + 10px);
            right: -12rem;
            top: 113px;
            height: auto;
        }
        @screen xl {
            width: calc((100vw - 1200px) / 2 + 1200px + 10px);
            right: 0px;
        }
    }
</style>
