<script lang="ts">
	export let small: boolean = false;
	export let classes: string = "";
	export let withBorder: boolean = false;
</script>

<div class={`card px-6 py-8 md:px-9 md:py-14 ${classes}`} class:small class:withBorder>
	<slot name="eyebrow" />
	<slot name="title" />
	<slot name="body" />
</div>

<style lang="scss">
	.card {
		&.small {
			@apply py-6;
			@apply px-0;
		}
		&.withBorder {
			@apply border;
			@apply rounded-md;
			@apply border-grey-100;
			&.small {
				@apply py-6;
				@apply px-7;
			}
		}

		&.work {
			min-height: 280px;
			@screen md {
				min-height: 380px;
			}
		}
	}
</style>
