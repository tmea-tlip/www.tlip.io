<script lang="ts">
	export let title: string;
	export let url: string = "";
	export let secondary: boolean = false;
	export let tertiary: boolean = false;
	export let plain: boolean = false;
	export let isExternal: boolean = false;
	export let small: boolean = false;
	export let disabled: boolean = false;
	export let onClick: () => void = () => {};
	export let classes: string = "";
	export let as: "button" | "link" = "link";
</script>

{#if as === "link"}
	<a
		href={url}
		target={isExternal ? "_blank" : ""}
		rel={isExternal ? "noopener noreferrer" : ""}
		class:small
		class:secondary
		class:tertiary
		class:plain
		class={classes}
	>
		<span class="flex-shrink-0">{title}</span>
	</a>
{/if}

{#if as === "button"}
	<button
		{disabled}
		on:click={onClick}
		class:small
		class:secondary
		class:tertiary
		class:plain
		class={`${classes} text-15 leading-6 tracking-0.02`}
		>{title}
	</button>
{/if}

<style lang="scss">
	a,
	button {
		@apply flex;
		@apply items-center;
		@apply justify-center;
		@apply text-center;
		@apply bg-green-500;
		@apply text-white;
		@apply rounded;
		@apply px-9;
		@apply py-4;
		@apply font-bold;
		@apply tracking-0.08;
		@apply uppercase;

		&:hover {
			opacity: 0.8;
			transition: opacity 0.2s ease;
		}
		&.small {
			@apply px-6;
			@apply py-3;
		}
		&.secondary {
			@apply text-black;
			@apply bg-white;
		}
		&.tertiary {
			@apply text-white;
			@apply bg-transparent;
			@apply border;
			@apply border-white;
		}
		&.plain {
			@apply text-green-500;
			@apply bg-white;
			@apply border;
			@apply border-green-500;
		}
	}
</style>
