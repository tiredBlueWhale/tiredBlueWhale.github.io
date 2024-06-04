<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { getOperatingSystem } from '$lib/agent';

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		const operatingSystem = getOperatingSystem();
		const isRedirect = $page.url.searchParams.get('redirect');
		let redirectUrl = data.apple;
		if (operatingSystem === 'Android') {
			redirectUrl = data.android;
		}

		if (isRedirect === 'true' && redirectUrl !== '') {
			// @ts-ignore
			window.location = redirectUrl;
		}
	});
</script>

<svelte:head>
	<title>Tired Blue Whale</title>
	<meta name="description" content="Tired Blue Whale" />
</svelte:head>

<section class="min-h-screen flex justify-center items-center {data.bgColor}">
	<svelte:component this={data.component} />
</section>
