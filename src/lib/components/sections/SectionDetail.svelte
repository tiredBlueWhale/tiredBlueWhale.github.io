<script>
	import { base } from '$app/paths';
	import { UnderConstruction, SectionScroll } from '$lib/components';
	import { APPLICATIONS } from '$lib/data';

	export let data = APPLICATIONS.stayInside;
	const slug = `${base}/${data.slug}`;
</script>

<SectionScroll title={data.title} color={data.bgColor}>
	<slot />
</SectionScroll>
