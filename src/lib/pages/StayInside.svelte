<script>
	import { SectionApplication } from '$lib/components';
	import { APPLICATIONS } from '$lib/data';

	const data = APPLICATIONS.stayInside;
</script>

<SectionApplication {data}>
	<h1 slot="title" class="text-4xl md:text-6xl lg:text-8xl font-bold text-shadow shadow-stay-inside-shadow">
		{data.title}
	</h1>
</SectionApplication>
