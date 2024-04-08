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
		<div
			class="flex-1 flex flex-col justify-center items-stretch text-xl md:text3xl lg:text-5xl text-slate-300/90 *:border-y-2 *:p-4 *:border-slate-300/50 *: *:transition-transform *:"
		>
			<a
				href="https://apps.apple.com/mx/app/tired-blue-whale/id6480527807"
				target="_blank"
				rel="noopener noreferrer"
				class="no-underline flex justify-center items-center hover:border-slate-300 hover:scale-110"
			>
				<h1 class="hover:text-slate-100">Tired Blue Whale iMessage Sticker</h1>
			</a>
			<a
				href="tired_blue_whale.wastickers"
				download=""
				class="no-underline flex flex-col justify-center items-center hover:border-slate-300 hover:scale-110"
			>
				<h1 class="hover:text-slate-100">Tired Blue Whale Whatsapp Sticker</h1>
			</a>
		</div>
	</div>
</Section>
