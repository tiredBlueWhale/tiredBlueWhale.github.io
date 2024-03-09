<script>
	import { getOperatingSystem } from '$lib/agent';

	import { onMount } from 'svelte';
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
		const redirectUrl = getRedirectUrl(data.slug);
		if (redirectUrl !== '') {
			// @ts-ignore
			window.location = redirectUrl;
		}
	});
</script>

<svelte:component this={data.component} />
