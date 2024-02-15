<script lang="ts">
	import { page } from "$app/stores";
	import type { ComponentProps } from "svelte";
	import { Button, Icon } from "$components";
	import type { Button as ButtonType } from "$lib/types/components";
	import type { Heading } from "$lib/types/sections";

	export let id: string;

	const BUTTONS: ButtonType[] = [
		{
			title: "Faq",
			url: "/faq"
		},
		{
			title: "Contact us",
			url: "mailto:tlip@iota.org"
		}
	];

	const HEADING: Heading = {
		title: "Any questions?",
		description: "New to TLIP and full of questions?"
	};
	const HEADING_FAQS: Heading = {
		title: "Still Have Questions?",
		description: "Send us an email and we will reply as soon as we can."
	};

	const LINKEDIN_SOCIAL: {
		href: string;
		icon: ComponentProps<Icon>;
	} = {
		href: "https://www.linkedin.com/company/trade-and-logistics-information-pipeline/",
		icon: {
			name: "linkedin",
			fill: "#000",
			height: 24,
			width: 24
		}
	};
</script>

<section class="bg-blue-300 py-20" {id}>
	<div class="container flex flex-col justify-between text-center text-white lg:flex-row lg:text-left">
		<div class="w-full py-20 lg:mr-7">
			{#if $page.url.pathname !== "/faq"}
				<h1 class="mb-6 flex justify-center text-36 capitalize md:text-48 lg:justify-start">
					{HEADING.title}
				</h1>
				<p>{HEADING.description}</p>
			{:else}
				<h1 class="mb-6 flex justify-center text-36 capitalize md:text-48 lg:justify-start">
					{HEADING_FAQS.title}
				</h1>
				<p>{HEADING_FAQS.description}</p>
			{/if}

			<div class="buttons mt-6 w-full gap-x-7 md:mt-10 md:flex lg:mt-28">
				{#if $page.url.pathname !== "/faq"}
					{#each BUTTONS as button}
						<div class="mx-auto mb-6 w-1/2 uppercase last:mb-0 md:mb-0">
							<Button classes="text-16 font-bold h-14" {...button} secondary />
						</div>
					{/each}
					<a
						href={LINKEDIN_SOCIAL.href}
						target="_blank"
						rel="noopener noreferrer"
						class={"mx-auto mb-6 flex w-1/2 justify-center rounded-md bg-white p-4 transition-opacity last:mb-0 hover:opacity-80 md:mb-0 md:w-auto"}
					>
						<Icon {...LINKEDIN_SOCIAL.icon} />
					</a>
				{:else}
					<div class="mx-auto mb-6 w-1/2 uppercase last:mb-0 md:mb-0 lg:mx-0">
						<Button classes="text-16 font-bold h-14" {...BUTTONS[1]} secondary />
					</div>
				{/if}
			</div>
		</div>

		<div class="relative mt-12 flex w-full items-center justify-center object-scale-down lg:mt-0 lg:max-w-md">
			<img src="./assets/haveAnyQuestions.png" alt="TLIP in Africa" />
		</div>
	</div>
</section>

<style lang="scss">
	.buttons {
		@screen lg {
			max-width: 468px;
		}
	}
</style>
