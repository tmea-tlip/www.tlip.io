<script lang="ts">
	import { Footer, Header } from "$components";
	import type { NavigationMenu } from "$lib";
	// import { scrollIntoView } from "$lib/utils";
	import "../scss/index.scss";

	const navigationMenu: NavigationMenu[] = [
		{
			label: "About Us",
			entries: [
				{
					label: "The Consortium",
					url: "/consortium"
				},
				{
					label: "Our Ecosystem",
					url: "/ecosystem"
				}
			]
		},
		{
			label: "Understand TLIP",
			entries: [
				{
					label: "What is TLIP?",
					url: "/what-is"
				},
				{
					label: "Why TLIP?",
					url: "/why"
				},
				{
					label: "How TLIP Works",
					url: "/#how-does-it-work"
				},
				{
					label: "TLIP In Action",
					url: "/#in-action"
				}
			]
		},
		{
			label: "Resources",
			entries: [
				{
					label: "FAQ",
					url: "/faq"
				},
				{
					label: "Wiki",
					url: "https://docs.tlip.io/",
					external: true
				},
				{
					label: "News",
					url: "/news"
				}
			]
		},
		{
			label: "Blog",
			url: "https://medium.com/@tlip.io",
			external: true
		}
	];
</script>

<Header {navigationMenu} />
<main>
	<slot />
</main>
<Footer />
