<script>
	import { Hero, Section } from '$lib/components';
	import { StayInside, ColorAndShape, Tobi2Go } from '$lib/pages';
	import { PATHS } from '$lib/paths';
</script>

<svelte:head>
	<title>Tired Blue Whale</title>
	<meta name="description" content="Tired Blue Whale" />
</svelte:head>

<Hero />
<Section sectionId="stay-inside" zIndex="z-[9]" bgColor={PATHS['stay-inside'].bgColor}>
	<StayInside />
</Section>
<Section sectionId="color-and-shape" zIndex="z-[8]" bgColor={PATHS['color-and-shape'].bgColor}>
	<ColorAndShape />
</Section>
<Section sectionId="tobi-2-go" zIndex="z-[7]" bgColor={PATHS['tobi-2-go'].bgColor}>
	<Tobi2Go />
</Section>
