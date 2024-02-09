<script lang="ts">
	import type { Link as LinkType } from "$lib";

	let classes: string = "";

	export { classes as class };

	const footerLinks: LinkType[] = [
		{
			title: "Privacy Policy",
			url: "https://www.iota.org/privacy-policy"
		}
	];
</script>

<footer class="w-full bg-grey-500 py-5 text-white {classes}">
	<div class="container flex w-full flex-col items-start justify-start text-start text-12 md:flex-row">
		<p class="md:min-w-max">&copy; {new Date().getFullYear()} TLIP.io All rights reserved.</p>
		<div class="mt-3 flex w-full flex-col md:mt-0 md:flex-row">
			{#each footerLinks as link}
				<a href={link.url} class="leading-160 tracking-0.02 md:ml-7" target="_blank">{link.title}</a>
			{/each}
		</div>
	</div>
</footer>
