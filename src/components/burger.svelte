<script lang="ts">
	export let open: boolean = false;
	export let classes: string = "";
	export let onClick: (event: Event) => void = () => {};
</script>

<button class="z-20 flex rounded-full {classes}" class:open on:click={onClick}>
	<svg width="32" height="32">
		<line class="top" x1="4" y1="7" x2="28" y2="7" stroke="currentColor" color="dark" />
		<line class="middle" x1="4" y1="13" x2="28" y2="13" stroke="currentColor" color="dark" />
		<line class="middle" x1="4" y1="19" x2="28" y2="19" stroke="currentColor" color="dark" />
		<line class="bottom" x1="4" y1="25" x2="28" y2="25" stroke="currentColor" color="dark" />
	</svg>
</button>

<style lang="scss">
	line {
		transition: color 0.3s ease-in-out;
		stroke-width: 2px;
		transition-property: transform;
		transition-duration: 150ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
	.open {
		transform: scaleX(0.75rem);
		.top {
			transform: translateX(0.575rem) translateY(0rem) rotate(45deg);
		}
		.middle {
			@apply hidden;
		}
		.bottom {
			transform: translateX(-0.84rem) translateY(0.625rem) rotate(-45deg);
		}
	}
</style>
