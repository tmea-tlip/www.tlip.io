<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let currentPage: number;
	export let numPages: number;

	const dispatch = createEventDispatcher();

	const setCurentPage = (page: number) => {
		dispatch("message", {
			text: page
		});
	};
</script>

<div class="flex w-full justify-center">
	<div class="my-5 flex">
		<!-- previous page for mobile and desktop -->
		<button
			disabled={currentPage === 1}
			class={`${currentPage === 1 ? "cursor-not-allowed opacity-60" : ""} mx-1 flex items-center justify-center
          rounded-lg border-2 border-blue-300 px-6 py-3 font-bold text-blue-300 lg:mx-2`}
			on:click={e => setCurentPage(currentPage - 1)}
			on:keypress={e => setCurentPage(currentPage - 1)}
		>
			<span class="hidden md:block">{"<"}</span>
			<svg
				class="block md:hidden"
				width="8"
				height="12"
				viewBox="0 0 8 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M7 1L2 6L7 11" stroke="#485776" stroke-width="1.72854" />
			</svg>
		</button>

		<!-- desktop paginator -->
		<div class="hidden md:flex">
			<!-- First page -->
			{#if numPages > 7}
				<button
					class:active={currentPage === 1}
					class="mx-1 flex items-center justify-center rounded-lg border-2 border-blue-300 px-6
                  py-3 font-bold text-blue-300 md:block lg:mx-2"
					on:click={e => setCurentPage(1)}
					on:keypress={e => setCurentPage(1)}
				>
					1
				</button>
			{/if}

			<!-- first pages dots -->
			{#if numPages > 7 && currentPage > 2}
				<svg width="61" height="48" viewBox="0 0 61 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M24.3807 27.1477C25.108 27.1477 25.7386 26.5398 25.7443 25.7841C25.7386 25.0398 25.108 24.4318 24.3807
                      24.4318C23.6307 24.4318 23.0114 25.0398 23.017 25.7841C23.0114 26.5398 23.6307 27.1477 24.3807
                      27.1477ZM30.4263 27.1477C31.1536 27.1477 31.7843 26.5398 31.7899 25.7841C31.7843 25.0398 31.1536 24.4318
                      30.4263 24.4318C29.6763 24.4318 29.057 25.0398 29.0627 25.7841C29.057 26.5398 29.6763 27.1477 30.4263
                      27.1477ZM36.4719 27.1477C37.1992 27.1477 37.8299 26.5398 37.8356 25.7841C37.8299 25.0398 37.1992 24.4318
                      36.4719 24.4318C35.7219 24.4318 35.1026 25.0398 35.1083 25.7841C35.1026 26.5398 35.7219 27.1477 36.4719
                      27.1477Z"
						fill="#8493AD"
					/>
				</svg>
			{/if}
			<!-- pages between dots icons -->
			{#each Array.from({ length: numPages }) as _, pageIndex}
				{#if numPages > 7}
					{#if pageIndex + 1 !== 1 && pageIndex + 1 !== numPages && (pageIndex + 1 >= currentPage || pageIndex + 1 >= numPages - 3 || (currentPage >= numPages - 3 && pageIndex + 1 >= numPages - 3)) && (pageIndex + 1 <= currentPage + 2 || (currentPage === 1 && pageIndex + 1 <= currentPage + 3))}
						<button
							class:active={pageIndex + 1 === currentPage}
							class="mx-1 flex items-center justify-center rounded-lg border-2 border-blue-300 px-6
                          py-3 font-bold text-blue-300 lg:mx-2"
							on:click={e => setCurentPage(pageIndex + 1)}
							on:keypress={e => setCurentPage(pageIndex + 1)}
						>
							{pageIndex + 1}
						</button>
					{/if}
				{:else}
					<button
						class:active={pageIndex + 1 === currentPage}
						class="mx-1 flex items-center justify-center rounded-lg border-2 border-blue-300 px-6
                      py-3 font-bold text-blue-300 lg:mx-2"
						on:click={e => setCurentPage(pageIndex + 1)}
						on:keypress={e => setCurentPage(pageIndex + 1)}
					>
						{pageIndex + 1}
					</button>
				{/if}
			{/each}

			<!-- lasts pages dots -->
			{#if numPages > 7}
				{#if currentPage < numPages - 5}
					<svg width="61" height="48" viewBox="0 0 61 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M24.3807 27.1477C25.108 27.1477 25.7386 26.5398 25.7443 25.7841C25.7386 25.0398 25.108 24.4318
                          24.3807 24.4318C23.6307 24.4318 23.0114 25.0398 23.017 25.7841C23.0114 26.5398 23.6307 27.1477 24.3807
                          27.1477ZM30.4263 27.1477C31.1536 27.1477 31.7843 26.5398 31.7899 25.7841C31.7843 25.0398 31.1536
                          24.4318 30.4263 24.4318C29.6763 24.4318 29.057 25.0398 29.0627 25.7841C29.057 26.5398 29.6763 27.1477
                          30.4263 27.1477ZM36.4719 27.1477C37.1992 27.1477 37.8299 26.5398 37.8356 25.7841C37.8299 25.0398
                          37.1992 24.4318 36.4719 24.4318C35.7219 24.4318 35.1026 25.0398 35.1083 25.7841C35.1026 26.5398
                          35.7219 27.1477 36.4719 27.1477Z"
							fill="#8493AD"
						/>
					</svg>
				{:else if currentPage === numPages - 5}
					<button
						class:active={numPages - 1 === currentPage}
						class="mx-1 flex items-center justify-center rounded-lg border-2 border-blue-300 px-6
                      py-3 font-bold text-blue-300 lg:mx-2"
						on:click={e => setCurentPage(numPages - 1)}
						on:keypress={e => setCurentPage(numPages - 1)}
					>
						{numPages - 1}
					</button>
				{/if}
			{/if}

			<!-- Last page -->
			{#if numPages > 7}
				<button
					class:active={numPages === currentPage}
					class="mx-1 flex items-center justify-center rounded-lg border-2 border-blue-300 px-6 py-3 font-bold text-blue-300 lg:mx-2"
					on:click={e => setCurentPage(numPages)}
					on:keypress={e => setCurentPage(numPages)}
				>
					{numPages}
				</button>
			{/if}
		</div>

		<!-- mobile paginator -->
		<div class="flex md:hidden">
			{#each Array.from({ length: numPages }) as _, pageIndex}
				{#if (pageIndex + 1 <= currentPage + 1 && pageIndex + 1 >= currentPage - 1) || (currentPage === 1 && pageIndex + 1 <= currentPage + 2) || (currentPage === numPages && pageIndex + 1 >= currentPage - 2)}
					<button
						class:active={pageIndex + 1 === currentPage}
						class="mx-1 flex items-center justify-center rounded-lg px-6 py-3 font-bold
                      lg:mx-2"
						on:click={e => setCurentPage(pageIndex + 1)}
						on:keypress={e => setCurentPage(pageIndex + 1)}
					>
						{pageIndex + 1}
					</button>
				{/if}
			{/each}
		</div>
		<!-- next page for mobile and desktop -->
		<button
			disabled={currentPage === numPages}
			class={`${currentPage === numPages ? "cursor-not-allowed" : ""} mx-1 flex items-center justify-center
          rounded-lg border-2 border-blue-300 px-6 py-3 font-bold text-blue-300 lg:mx-2`}
			on:click={e => setCurentPage(currentPage + 1)}
			on:keypress={e => setCurentPage(currentPage + 1)}
		>
			<span class="hidden md:block">{">"}</span>
			<svg
				class="block md:hidden"
				width="8"
				height="12"
				viewBox="0 0 8 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M1 11L6 6L1 1" stroke="#485776" stroke-width="1.72854" />
			</svg>
		</button>
	</div>
</div>

<style lang="scss">
	.active {
		@apply bg-blue-300;
		@apply border-2;
		@apply text-white;
	}
</style>
