<script lang="ts">
	import {
		Decentralized,
		Secure,
		Upgrades,
		Data,
		Friendship,
		DataQuality,
		Finance,
		DataAccess,
		Innovative,
		Time,
		Exports,
		Government,
		Trust,
		Visibility,
		Accuracy,
		LinkedIn
	} from "./index";

	export let name: string;

	const icons: { [id: string]: ConstructorOfATypedSvelteComponent } = {
		decentralized: Decentralized,
		secure: Secure,
		upgrades: Upgrades,
		data: Data,
		dataAccess: DataAccess,
		innovative: Innovative,
		time: Time,
		exports: Exports,
		government: Government,
		trust: Trust,
		visibility: Visibility,
		friendship: Friendship,
		dataQuality: DataQuality,
		finance: Finance,
		accuracy: Accuracy,
		linkedin: LinkedIn
	};
</script>

{#if icons[name]}
	<div>
		<svelte:component this={icons[name]} {...$$restProps} />
	</div>
{/if}
