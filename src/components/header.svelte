<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import Burger from "./burger.svelte";
	import Button from "./button.svelte";
	import NavigationBar from "./navigation-bar.svelte";
	import { sideMenuOpen } from "$lib/store";
	import type { Button as ButtonType, NavigationMenu } from "$lib/types/components";

	export let navigationMenu: NavigationMenu[] = [];
	export { classes as class };

	let classes: string = "";
	let scroll: boolean;

	const mailLink: ButtonType = {
		title: "CONTACT US",
		url: "mailto:tlip@iota.org",
		small: true,
		classes: "text-14"
	};

	const toggleMenu: () => void = () => {
		if ($sideMenuOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	};
	const closeMenu = () => {
		sideMenuOpen.set(false);
		document.body.classList.remove("overflow-y-hidden");
	};
	const openMenu = () => {
		sideMenuOpen.set(true);
		document.body.classList.add("overflow-y-hidden");
	};

	const logoClick: (event: Event) => void = e => {
		if ($sideMenuOpen) {
			closeMenu();
		}
		if ($page.url.pathname === "/") {
			e.preventDefault();
			document.body.scrollIntoView({ behavior: "smooth" });
			window.history.pushState(null, "", "/");
		}
	};

	onMount(() => {
		const onScroll = () => {
			scroll = window.scrollY > 100;
		};

		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	});
</script>

<nav class="bg-blur metropolis-500 fixed z-50 w-full py-1 text-grey-600 {classes}" class:borderBottom={scroll}>
	<div class="container flex justify-between">
		<a href="/" class="py-4" on:click={logoClick}>
			<img src="/assets/logo-TLIP.svg" alt="TLIP logo" id="logo" />
		</a>
		<div class="order-3 my-auto hidden lg:inline-block">
			<Button {...mailLink} as="link" />
		</div>
		<div class="flex flex-1 flex-row justify-end">
			<!-- Desktop -->
			<NavigationBar items={navigationMenu} class="hidden px-8 lg:flex" />
			<!-- Burger Icon -- Mobile  -->
			<Burger bind:open={$sideMenuOpen} onClick={toggleMenu} classes="flex my-auto lg:hidden" />
		</div>
	</div>
</nav>

<!-- Mobile Menu   -->
<aside
	class={`justify- fixed left-0 top-0 z-40 h-screen w-0 whitespace-nowrap bg-white lg:hidden ${
		$sideMenuOpen ? "open" : ""
	}`}
>
	<div class="flex h-full flex-col items-start justify-between">
		<ul
			class={`duration-400 container w-full border-t-2 pt-32 text-black transition-opacity ${
				$sideMenuOpen ? "flex flex-1 overflow-auto opacity-100" : "hidden opacity-0"
			}`}
		>
			<NavigationBar items={navigationMenu} class="flex-1" />
		</ul>
		<div class={`mx-auto mb-10 ${$sideMenuOpen ? "flex" : "hidden"}`}><Button {...mailLink} as="link" /></div>
	</div>
</aside>

<style lang="scss">
	aside {
		transition: width 0.25s ease-in-out;
		&.open {
			@apply w-screen;
		}
	}
	nav {
		a {
			@apply transition-colors;
			@apply duration-150;
		}

		&.bg-blur {
			background-color: rgba(241, 242, 244, 0.8);
		}
		/* if backdrop support: transparent and blurred */
		@supports ((-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))) {
			&.bg-blur {
				@apply bg-transparent;
				-webkit-backdrop-filter: blur(16px);
				backdrop-filter: blur(16px);
			}
		}
		&.lightMode {
			@apply text-white;
			#logo {
				filter: invert(100%) sepia(100%) saturate(36%) hue-rotate(279deg) brightness(109%) contrast(112%);
			}
		}
		&.borderBottom {
			@apply border-b;
			@apply border-grey-100;
		}
	}
</style>
