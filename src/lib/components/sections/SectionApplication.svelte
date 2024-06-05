<script>
	import { base } from '$app/paths';
	import { Android, AndroidBadge, AppleBadge, IPhone } from '$lib/components';
	import { APPLICATIONS } from '$lib/data';

	export let data = APPLICATIONS.stayInside;
	const slug = `${base}/${data.slug}`;
</script>

<div class="flex-1 flex flex-col-reverse md:flex-row">
	<div class="flex-1 flex flex-col {data.fontFamily}">
		<div class="md:flex-1" />
		<slot name="category">
			<span class="text-xs md:text-base lg:text-base">{data.category}</span>
		</slot>
		<slot name="title">
			<h1 class="text-3xl md:text-5xl lg:text-7xl md:pb-1 font-bold">{data.title}</h1>
		</slot>
		<slot name="subTitle">
			<h2 class="text-lg md:text-xl lg:text-3xl pb-1 lg:pb-4">{data.subTitle}</h2>
		</slot>
		<slot name="description">
			<p class="text-base md:text-lg lg:text-xl pb-1 lg:pb-4">
				{@html data.description}
			</p>
		</slot>
		<a class="text-base md:text-lg lg:text-xl pb-2 lg:pb-8" href={slug}>Learn More</a>
		<div class="grow-[.1]" />
		<div class="flex flex-wrap gap-2 lg:gap-4 pb-2">
			<AppleBadge href={data.apple} />
			<AndroidBadge href={data.android} />
		</div>
		<div class="flex-1 md:grow-[1.6]" />
		<div class="flex gap-4">
			<a class="text-sm lg:text-base" href="{slug}/privacy">Privacy Policy</a>
		</div>
	</div>
	<div class="md:p-2 lg:p-8" />
	<div
		class="flex-1 md:grow-[1.2] lg:grow-[1.0] xl:grow-[1.6] flex flex-row justify-center md:justify-start items-end md:items-center"
	>
		<div class="relative flex {data.landscape ? 'flex-col' : 'flex-row'}">
			{#if data.landscape}
				<div class="translate-x-2 md:translate-x-8 translate-y-4 md:translate-y-6 z-10">
					<Android image={data.images.android} isNative={data.isNative} landscape />
				</div>
				<div class="-translate-x-4 md:translate-x-0 -translate-y-2 md:translate-y-0">
					<IPhone image={data.images.apple} isNative={data.isNative} landscape />
				</div>
			{:else}
				<div class="translate-x-2 md:translate-x-0 -translate-y-2 md:translate-y-4 lg:translate-y-8">
					<IPhone image={data.images.apple} isNative={data.isNative} />
				</div>
				<div
					class="-translate-x-2 md:-translate-x-4 lg:-translate-x-8 translate-y-2 md:-translate-y-4 lg:-translate-y-8 z-10"
				>
					<Android image={data.images.android} isNative={data.isNative} />
				</div>
			{/if}
		</div>
	</div>
</div>
