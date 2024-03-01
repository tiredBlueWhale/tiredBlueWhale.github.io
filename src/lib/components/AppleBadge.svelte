<script>
	import appleBadge from '$lib/images/apple-badge.svg';

	export let href = '';
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	<img
		class="block h-10 md:h-12 lg:h-16 object-contain"
		alt="Download on the App Store"
		src={appleBadge}
	/>
</a>
