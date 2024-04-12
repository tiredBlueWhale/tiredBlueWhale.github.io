<script>
	import { AppleBadge, Hero, Section } from '$lib/components';
	import LinkTree from '$lib/components/LinkTree.svelte';
	import { StayInside, ColorAndShape, Tobi2Go } from '$lib/pages';
	import { PATHS } from '$lib/paths';

	// Cant use {#each}, probably because of the zIndex and scroll listener
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
<Section sectionId="random" zIndex="z-[6]" bgColor="bg-slate-950">
	<div class="h-full flex flex-col items-stretch py-4 px-6 md:py-32 md:px-16 xl:px-52">
		<LinkTree showApps={false} />
	</div>
</Section>
