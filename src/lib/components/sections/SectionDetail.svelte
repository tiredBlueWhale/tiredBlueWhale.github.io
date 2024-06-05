<script>
	import { base } from '$app/paths';
	import { UnderConstruction, SectionScroll } from '$lib/components';
	import { APPLICATIONS } from '$lib/data';

	export let data = APPLICATIONS.stayInside;
	const slug = `${base}/${data.slug}`;
</script>

<SectionScroll title={data.title} color={data.bgColor}>
	<slot name="title">
		<h1 class="text-xl lg:text-5xl font-press-start-2p font-bold">{data.title}</h1>
	</slot>
	<slot>
		<!-- <UnderConstruction /> -->
	</slot>
	<UnderConstruction />
	<div class="flex-1" />

	<div class="flex gap-4">
		<a class="text-sm lg:text-base" href="{slug}/privacy">Privacy Policy</a>
	</div>
</SectionScroll>
