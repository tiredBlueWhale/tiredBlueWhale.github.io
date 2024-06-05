<script>
	import { SectionApplication } from '$lib/components';
	import { APPLICATIONS } from '$lib/data';

	const data = APPLICATIONS.tobi2Go;
</script>

<SectionApplication {data}>
	<p slot="description" class="text-xs md:text-sm lg:text-base pb-1 lg:pb-4">
		Feeling down? In need of motivation? Look no further, press one of the many buttons and get your daily dose of
		encouragement.
	</p>
</SectionApplication>
