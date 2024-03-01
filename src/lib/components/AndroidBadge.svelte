<script>
	import googleBadge from '$lib/images/google-play-badge.png';

	export let href = '';
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	<img
		class="block h-10 md:h-12 lg:h-16 object-contain"
		alt="Get it on Google Play"
		src={googleBadge}
	/>
</a>
