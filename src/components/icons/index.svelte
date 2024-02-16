<script lang="ts">
	import {
		Accuracy,
		ChallengeNo,
		ChallengeYes,
		Data,
		DataAccess,
		DataQuality,
		Decentralized,
		Exports,
		Finance,
		Friendship,
		Government,
		Innovative,
		Interoperability,
		LinkedIn,
		Neutrality,
		OpenSource,
		PaperAndDigital,
		Scalability,
		Secure,
		Time,
		Trust,
		Upgrade,
		Upgrades,
		Visibility
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
		linkedin: LinkedIn,
		interoperability: Interoperability,
		neutrality: Neutrality,
		openSource: OpenSource,
		paperAndDigital: PaperAndDigital,
		scalability: Scalability,
		upgrade: Upgrade,
		challengeNo: ChallengeNo,
		challengeYes: ChallengeYes
	};
</script>

{#if icons[name]}
	<div>
		<svelte:component this={icons[name]} {...$$restProps} />
	</div>
{/if}
