<script lang="ts">
	import { Footer, Header } from "$components";
	import type { NavigationMenu } from "$lib";
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
			label: "How TLIP Works",
			entries: [
				{
					label: "Launch with Ease",
					url: "/#launch-with-ease"
				},
				{
					label: "Standards compliance",
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
					url: "/about-us#videos"
				},
				{
					label: "TLIP Wiki",
					url: "https://docs.tlip.io/",
					external: true
				}
			]
		}
	];
</script>

<Header {navigationMenu} />
<main>
	<slot />
</main>
<Footer />
