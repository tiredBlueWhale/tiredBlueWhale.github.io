<script>
	import { SectionApplication, SectionDetail } from '$lib/components';
	import { APPLICATIONS } from '$lib/data';

	const data = APPLICATIONS.colorAndShape;
</script>

<SectionDetail {data}>
	<SectionApplication {data} />
</SectionDetail>
