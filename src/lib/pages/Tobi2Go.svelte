<script>
	import { base } from '$app/paths';
	import { Android, AndroidBadge, AppleBadge, IPhone, SectionContent } from '$lib/components';
	import tobi2goiOS from '$lib/images/tobi-2-go-ios.png';
	import tobi2goAndroid from '$lib/images/tobi-2-go-android.png';
</script>

<SectionContent fontFamily="font-press-start-2p">
	<div class="md:flex-1" />
	<span class="text-xs md:text-base lg:text-base md:pb-1">Utility</span>
	<h1 class="text-3xl md:text-5xl lg:text-7xl md:pb-2">Tobi2Go</h1>
	<h2 class="text-lg md:text-xl lg:text-3xl pb-1 lg:pb-4">Feel good app</h2>
	<p class="text-xs md:text-sm lg:text-base pb-1 lg:pb-4">
		Feeling down? In need of motivation? Look no further, press one of the many buttons and get your
		daily dose of encouragement.
	</p>
	<a class="text-sm md:text-base lg:text-lg pb-2 lg:pb-8" href="{base}/tobi-2-go">Learn More </a>
	<div class="grow-[.1]" />
	<div class="flex flex-wrap gap-2 lg:gap-4 pb-2">
		<AppleBadge href="https://apps.apple.com/us/app/tobi2go/id6478235341" />
		<AndroidBadge href="https://play.google.com/store/apps/details?id=com.tiredbluewhale.tobigo" />
	</div>
	<div class="flex-1 md:grow-[1.6]" />
	<div class="flex gap-4">
		<a class="text-sm lg:text-base" href="{base}/tobi-2-go/privacy">Privacy Policy </a>
	</div>
	<div slot="device" class="relative flex flex-row">
		<div class="translate-x-2 md:translate-x-0 -translate-y-2 md:translate-y-4 lg:translate-y-8">
			<Android src={tobi2goAndroid} />
		</div>
		<div
			class="-translate-x-2 md:-translate-x-4 lg:-translate-x-8 translate-y-2 md:-translate-y-4 lg:-translate-y-8 z-10"
		>
			<IPhone src={tobi2goiOS} />
		</div>
	</div>
</SectionContent>
