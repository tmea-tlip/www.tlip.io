<script lang="ts">
    export let border: "withBorder" | "withOutBorder" = "withBorder";
    export let classes: string = "false";
</script>

<div
    class={`${classes} card py-16 px-11 lg:p-10 border rounded border-black`}
    class:noBorder={border === "withOutBorder"}
>
    <slot name="body" />
</div>

<style lang="scss">
    .card {
        &.noBorder {
            @apply border-0;
        }
    }
</style>
