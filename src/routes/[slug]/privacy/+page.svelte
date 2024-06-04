<script>
	import { SectionScroll } from '$lib/components';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SectionScroll title="{data.title}: Privacy" color="bg-neutral-700">
	<h1 class="text-2xl md:text-4xl lg:text-6xl pb-8">
		Privacy Policy <strong class="{data.fontFamily} {data.titleClass || ''}">{data.title}</strong>
	</h1>
	<a class="text-sm lg:text-base" href={data.privacyPolicy}>{data.privacyPolicy}</a>
</SectionScroll>
