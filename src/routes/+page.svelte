<script>
	import { Hero, Section } from '$lib/components';
	import { getComponent } from '$lib/page';
	import { PATHS } from '$lib/paths';

	const sections = Object.entries(PATHS)
		.filter(([_, params]) => params.paths.includes('detail'))
		.map(([key, params], index) => ({
			sectionId: key,
			component: getComponent(key),
			zIndex: `z-[${9 - index}]`,
			...params
		}));
</script>

<svelte:head>
	<title>Tired Blue Whale</title>
	<meta name="description" content="Tired Blue Whale" />
</svelte:head>

<Hero />
{#each sections as { sectionId, zIndex, bgColor, component }}
	<Section {sectionId} {zIndex} {bgColor}>
		<svelte:component this={component} />
	</Section>
{/each}
