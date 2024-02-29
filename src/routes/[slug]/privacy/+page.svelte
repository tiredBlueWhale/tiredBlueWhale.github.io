<script>
	import { SectionScroll } from '$lib/components/sections';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<!-- <svelte:component this={data.component} /> -->

<SectionScroll title="{data.title}: Privacy" color="bg-neutral-700">
	<h1 class="{data.headerClass} pb-8">
		Privacy Policy <strong class={data.titleClass}>{data.title}</strong>
	</h1>
	<a class="text-sm lg:text-base" href={data.iubenda}>{data.iubenda}</a>
</SectionScroll>
