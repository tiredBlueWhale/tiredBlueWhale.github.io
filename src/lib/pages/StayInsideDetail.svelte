<script>
	import { SectionDetail, SectionApplication } from '$lib/components';
	import { APPLICATIONS } from '$lib/data';
	const data = APPLICATIONS.stayInside;
</script>

<SectionDetail {data}>
	<SectionApplication {data} />
</SectionDetail>
