<script lang="ts">
    let classes: string = "";
    export { classes as class };

    const footerLinks = [{
        url: '/',
        title: 'Privacy Policy'
    }, {
        url: '/',
        title: 'Terms and Conditions'
    }]

</script>

<footer class="p-5 text-white w-full px-20 lg:px-32 {classes}">
    <div class="flex flex-col text-center md:text-start md:flex-row w-full">
        <p class="md:min-w-max">&copy; {new Date().getFullYear()} TLIP.io All rights reserved.</p>
        <div class="flex flex-col mt-6 md:mt-0 md:flex-row w-full">
            {#each footerLinks as {url, title} }
            <a href={url} class="md:ml-7">{title}</a>
            {/each}
        </div>
    </div>
</footer>

<style lang="scss">
    // temporary styles until we add the rest of the palette
    footer {
        background-color: #212121;
    }
</style>
