<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$components";
</script>

<svelte:head>
	<title>TMEA / TLIP - {$page.status}</title>
</svelte:head>

<section class="flex h-screen w-full items-center justify-center overflow-hidden p-20">
	<div class="container flex flex-col items-center">
		<div class="z-10 mb-5 flex flex-col items-center justify-center text-center text-grey-500">
			<h2 class="flex text-64 uppercase leading-none">
				{$page.status}
			</h2>
			<h4 class="my-2">{$page.error?.message}</h4>
		</div>
		<div class="home-button flex">
			<Button title="Home" as="link" url="/" small />
		</div>
	</div>
</section>
