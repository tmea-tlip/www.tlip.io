<script lang="ts" context="module">
    import Footer from "../components/footer.svelte";
    import Header from "../components/header.svelte";
    import "../scss/index.scss";
</script>

<svelte:head>
    <title>TMEA / TLIP</title>
</svelte:head>

<div class="flex flex-col h-full bg-gray-100 dark:bg-gray-800">
    <Header title="TMEA / TLIP" to="/" />

    <section class="flex flex-1 flex-col p-5">
        <slot />
    </section>

    <Footer />
</div>
