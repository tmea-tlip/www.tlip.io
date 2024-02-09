<script lang="ts">
	import { Accordion } from "$components";
	import { parseMarkdownToFaqs, type FaqSection } from "$lib";
	import { FAQS } from "$lib/markdown";

	const data: FaqSection[] = parseMarkdownToFaqs(FAQS);
</script>

<section class="relative z-20 pb-32 pt-12">
	<div class="container">
		<div class="w-full">
			<div id="contents">
				{#each data as section, index}
					<div
						class={`metropolis-700 mb-5 text-32 font-bold leading-125 tracking-0.02 text-blue-600 md:mb-10 md:text-36 md:leading-110 ${
							index > 0 && "mt-10 md:mt-20"
						}`}
					>
						{section.title}
					</div>
					<div id={section.id} class="rounded-2xl border border-grey-100 bg-white p-7 md:p-9">
						{#if section.subsections}
							{#each section.subsections as faq, index}
								<Accordion item={faq} />
								{#if index !== section.subsections.length - 1}
									<hr class="my-6 md:my-9" />
								{/if}
							{/each}
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background: linear-gradient(
			to bottom,
			#ffffff 0%,
			#ffffff 13%,
			rgba(86, 204, 242, 0.2) 5%,
			rgba(86, 204, 242, 0.2) 90%,
			#ffffff 85%,
			#ffffff 100%
		);
	}
</style>
