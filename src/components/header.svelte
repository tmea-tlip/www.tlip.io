<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import Burger from "./burger.svelte";
	import Button from "./button.svelte";
	import { activeSectionId, lightModeNavbar } from "$lib/store";
	import type { Button as ButtonType, SitePage } from "$lib/types/components";

	export let items: SitePage[] = [];
	export { classes as class };

	let classes: string = "";
	let scroll: number;
	let sideMenuOpen: boolean = false;

	const mailLink: ButtonType = {
		title: "CONTACT US",
		url: "mailto:tlip@iota.org",
		small: true,
		classes: "text-14"
	};

	const toggleMenu: () => void = () => {
		if (sideMenuOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	};
	const closeMenu = () => {
		sideMenuOpen = false;
		document.querySelector("body")?.classList.remove("overflow-y-hidden");
	};
	const openMenu = () => {
		sideMenuOpen = true;
		document.querySelector("body")?.classList.add("overflow-y-hidden");
	};

	const logoClick: (event: Event) => void = e => {
		if (sideMenuOpen) {
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
			if (window.scrollY > 100) {
				scroll = window.scrollY;
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	});
</script>

<nav
	class="bg-blur metropolis-500 fixed z-50 w-full py-1 text-grey-600 {classes}"
	class:lightMode={$lightModeNavbar && !sideMenuOpen}
	class:borderBottom={scroll}
>
	<div class="container flex justify-between">
		<a href="/" class="py-4" on:click={logoClick}>
			<img src="/assets/logo-TLIP.svg" alt="TLIP logo" id="logo" />
		</a>
		<div class="order-3 my-auto hidden lg:inline-block">
			<Button {...mailLink} as="link" />
		</div>
		<div class="flex flex-row">
			{#if items}
				<!-- Desktop -->
				<ul
					class={"hidden w-full flex-row items-center transition-opacity duration-200 md:space-x-2 lg:flex lg:space-x-6 xl:space-x-8"}
				>
					{#each items as { title, url, id, onClick, external }}
						{#if title}
							<li class="shrink-0">
								{#if id && url.startsWith("/#")}
									<a
										href={url}
										on:click|preventDefault={e => onClick && onClick(e.currentTarget)}
										class={`lg:text-14 xl:text-16 ${
											id === `#${$activeSectionId}` ? "metropolis-700" : ""
										} hover:text-green-400`}>{title}</a
									>
								{:else if url || (id && url !== $page.url.pathname)}
									<a
										href={url}
										target={external ? "_blank" : null}
										rel={external ? "noopener noreferrer" : null}
										class={`lg:text-14 xl:text-16 ${
											url === $page.url.pathname ? "metropolis-700" : ""
										} hover:text-green-400`}>{title}</a
									>
								{/if}
							</li>{/if}
					{/each}
				</ul>
				<!-- Burger Icon -- Mobile  -->
				<Burger bind:open={sideMenuOpen} onClick={toggleMenu} {sideMenuOpen} classes="flex my-auto lg:hidden" />
			{/if}
		</div>
	</div>
</nav>

<!-- Mobile Menu   -->
<aside
	class={`justify- fixed left-0 top-0 z-40 h-screen w-0 whitespace-nowrap bg-white lg:hidden ${
		sideMenuOpen ? "open" : ""
	}`}
>
	<div class="flex h-full flex-col items-start justify-between">
		<ul
			class={`duration-400 container h-auto w-full border-t-2 pt-20 text-black transition-opacity ${
				sideMenuOpen ? "block opacity-100" : "hidden opacity-0"
			}`}
		>
			{#each items as { title, url, id, onClick, external }}
				{#if title}
					<li class="nav-link min-w-max py-4">
						{#if id && url.startsWith("/#")}
							<a
								class={id === `#${$activeSectionId}` ? "metropolis-700" : ""}
								href={url}
								on:click|preventDefault={e => {
									if (onClick) {
										onClick(e.currentTarget);
									}
									closeMenu();
								}}>{title}</a
							>
						{:else if url || (id && url !== $page.url.pathname)}
							<a
								on:click={closeMenu}
								target={external ? "_blank" : null}
								rel={external ? "noopener noreferrer" : null}
								class={url === $page.url.pathname ? "metropolis-700" : ""}
								href={url}>{title}</a
							>
						{/if}
					</li>
				{/if}
			{/each}
		</ul>
		<div class={`mx-auto mb-10 ${sideMenuOpen ? "flex" : "hidden"}`}><Button {...mailLink} as="link" /></div>
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
