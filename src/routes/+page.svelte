<script>
	import { Hero, Section } from '$lib/components';
	import { ColorAndShape, StayInside, Tobi2Go } from '$lib/pages';
</script>

<svelte:head>
	<title>Tired Blue Whale</title>
	<meta name="description" content="Tired Blue Whale" />
</svelte:head>

<Hero />
<Section sectionId="stay-inside" zIndex="z-[9]" color="bg-stay-inside">
	<StayInside />
</Section>
<Section sectionId="color-and-shape" zIndex="z-[8]" color="bg-color-and-shape">
	<ColorAndShape />
</Section>
<Section sectionId="tobi-2-go" zIndex="z-[7]" color="bg-lime-700">
	<Tobi2Go />
</Section>
