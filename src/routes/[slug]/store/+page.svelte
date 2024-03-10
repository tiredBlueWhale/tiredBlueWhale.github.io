<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { getOperatingSystem } from '$lib/agent';

	/** @type {import('./$types').PageData} */
	export let data;

	/**
	 * @param {string} slug
	 */
	function getRedirectUrl(slug) {
		const operatingSystem = getOperatingSystem();

		switch (slug) {
			case 'stay-inside':
				switch (operatingSystem) {
					case 'iOS':
						return 'https://apps.apple.com/us/app/stayinside/id6477404555';
					default:
						return 'https://play.google.com/store/apps/details?id=com.tiredbluewhale.stayinside';
				}
			case 'color-and-shape':
				switch (operatingSystem) {
					case 'iOS':
						return '';
					default:
						return '';
				}
			case 'tobi-2-go':
				switch (operatingSystem) {
					case 'iOS':
						return 'https://apps.apple.com/us/app/tobi2go/id6478235341';
					default:
						return 'https://play.google.com/store/apps/details?id=com.tiredbluewhale.tobigo';
				}
			default:
				return '';
		}
	}

	onMount(() => {
		const isRedirect = $page.url.searchParams.get('redirect');
		const redirectUrl = getRedirectUrl(data.slug);
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

<section class="min-h-screen flex justify-center items-center {data.color}">
	<svelte:component this={data.component} />
</section>
