<script>
	import { Hero, Section, LinkTree, SectionHome } from '$lib/components';
	import { APPLICATIONS } from '$lib/data';
	import { ColorAndShape, StayInside, Tobi2Go, FixedGearCalc } from '$lib/pages';

	// Cant use {#each}, probably because of the zIndex and scroll listener
</script>

<svelte:head>
	<title>Tired Blue Whale</title>
	<meta name="description" content="Tired Blue Whale" />
</svelte:head>

<Hero />
<Section sectionId={APPLICATIONS.stayInside.slug} zIndex="z-[9]" bgColor={APPLICATIONS.stayInside.bgColor}>
	<SectionHome>
		<StayInside />
	</SectionHome>
</Section>
<Section sectionId={APPLICATIONS.colorAndShape.slug} zIndex="z-[8]" bgColor={APPLICATIONS.colorAndShape.bgColor}>
	<SectionHome>
		<ColorAndShape />
	</SectionHome>
</Section>
<Section sectionId={APPLICATIONS.tobi2Go.slug} zIndex="z-[7]" bgColor={APPLICATIONS.tobi2Go.bgColor}>
	<SectionHome>
		<Tobi2Go />
	</SectionHome>
</Section>
<Section sectionId={APPLICATIONS.fixedGearCalc.slug} zIndex="z-[6]" bgColor={APPLICATIONS.fixedGearCalc.bgColor}>
	<SectionHome>
		<FixedGearCalc />
	</SectionHome>
</Section>
<Section sectionId="random" zIndex="z-[5]" bgColor="bg-slate-950">
	<SectionHome>
		<LinkTree showApps={false} showSocials={false} />
	</SectionHome>
</Section>
