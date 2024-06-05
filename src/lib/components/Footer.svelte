<script>
	import { Section } from '$lib/components';
	import Socials from './Socials.svelte';

	const year = new Date().getFullYear();
</script>

<Section sectionId="footer" bgColor="bg-neutral-950">
	<footer class="h-full p-8 flex flex-col justify-center items-center gap-6">
		<img
			class="h-48 md:h-64 lg:h-96 transition-transform hover:scale-110"
			alt="Tired Blue Whale Logo"
			src="$lib/images/tired-blue-whale-water.png"
		/>
		<Socials />
		<span class="text-white">&copy; {year} Tired Blue Whale. All rights reserved</span>
	</footer>
</Section>
