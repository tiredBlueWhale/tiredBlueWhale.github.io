<script>
	import { base } from '$app/paths';
	import { Android, AndroidBadge, AppleBadge, IPhone, SectionContent } from '$lib/components';
	import { PATHS } from '$lib/paths';
	import stayInsideiOS from '$lib/images/stay-inside-ios.png';
	import stayInsideAnroid from '$lib/images/stay-inside-android.png';

	const content = PATHS['stay-inside'];
	const slug = `${base}/${content.slug}`;
</script>

<SectionContent fontFamily={content.fontFamily}>
	<div class="md:flex-1" />
	<span class="text-xs md:text-base lg:text-base">Game</span>
	<h1 class="text-4xl md:text-6xl lg:text-8xl font-bold text-shadow shadow-stay-inside-shadow">
		Stay Inside
	</h1>
	<h2 class="text-lg md:text-xl lg:text-3xl pb-1 lg:pb-4">Fast paced hyper casual mobile game</h2>
	<p class="text-base md:text-lg lg:text-xl pb-1 lg:pb-4">
		The goal is to stay inside the outer circle, which changes speed, size and rythm.
	</p>
	<a class="text-base md:text-lg lg:text-xl pb-2 lg:pb-8" href={slug}>Learn More</a>
	<div class="grow-[.1]" />
	<div class="flex flex-wrap gap-2 lg:gap-4 pb-2">
		<AppleBadge href={content.apple} />
		<AndroidBadge href={content.android} />
	</div>
	<div class="flex-1 md:grow-[1.6]" />
	<div class="flex gap-4">
		<a class="text-sm lg:text-base" href="{slug}/privacy">Privacy Policy</a>
	</div>
	<div slot="device" class="relative flex flex-row">
		<div class="translate-x-2 md:translate-x-0 -translate-y-2 md:translate-y-4 lg:translate-y-8">
			<IPhone src={stayInsideiOS} />
		</div>
		<div
			class="-translate-x-2 md:-translate-x-4 lg:-translate-x-8 translate-y-2 md:-translate-y-4 lg:-translate-y-8 z-10"
		>
			<Android src={stayInsideAnroid} />
		</div>
	</div>
</SectionContent>
