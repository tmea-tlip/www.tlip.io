<script lang="ts">
	import { Footer, Header } from "$components";
	import type { NavigationMenu } from "$lib";
	// import { scrollIntoView } from "$lib/utils";
	import "../scss/index.scss";

	const navigationMenu: NavigationMenu[] = [
		{
			label: "About Us",
			url: "/about-us"
		},
		{
			label: "Understand TLIP",
			entries: [
				{
					label: "Why TLIP?",
					url: "/why"
				},
				{
					label: "Benefits",
					url: "/#benefits"
				}
			]
		},
		{
			label: "How TLIP works",
			entries: [
				{
					label: "Launch with ease",
					url: "/#launch-with-ease"
				},
				{
					label: "Built for developers",
					url: "/#built-for-developers"
				},
				{
					label: "Standard compliance",
					url: "/standard-compliance"
				}
			]
		},
		{
			label: "Resources",
			entries: [
				{
					label: "News",
					url: "/news"
				},
				{
					label: "Blog",
					url: "https://medium.com/@tlip.io",
					external: true
				},
				{
					label: "Videos",
					url: "/about-us#videos",
				},
				{
					label: "TLIP Wiki",
					url: "https://docs.tlip.io/",
					external: true
				},
			]
		},
	];
</script>

<Header {navigationMenu} />
<main>
	<slot />
</main>
<Footer />
