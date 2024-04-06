<script>
	import { AppleBadge, Hero, Section } from '$lib/components';
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
		<h1 class="text-4xl md:text-6xl lg:text-8xl font-bold">Random</h1>
		<div class="flex-1 flex flex-col justify-center items-stretch">
			<a
				href="https://apps.apple.com/mx/app/tired-blue-whale/id6480527807"
				target="_blank"
				rel="noopener noreferrer"
				class="no-underline flex justify-center items-center border-2 rounded-lg p-4 border-slate-300/50 hover:border-slate-300 transition-transform hover:scale-105"
			>
				<h1 class="text-5xl pr-8 text-slate-300/90 hover:text-slate-100">
					Tired Blue Whale iMessage Sticker
				</h1>
			</a>
		</div>
	</div>
</Section>
