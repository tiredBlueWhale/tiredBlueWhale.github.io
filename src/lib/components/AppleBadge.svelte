<script>
	export let href = '';
</script>

{#if href}
	<a {href} target="_blank" rel="noopener noreferrer">
		<img
			class="block h-10 md:h-12 lg:h-16 object-contain"
			alt="Download on the App Store"
			src="$lib/images/apple-badge.svg"
		/>
	</a>
{/if}
