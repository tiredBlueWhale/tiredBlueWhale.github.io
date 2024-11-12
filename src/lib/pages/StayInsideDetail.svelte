<script>
	import { SectionDetail, SectionApplication } from '$lib/components';
	import { APPLICATIONS } from '$lib/data';
	import StayInside from './StayInside.svelte';
	const data = APPLICATIONS.stayInside;
</script>

<SectionDetail {data}>
	<StayInside />
</SectionDetail>
