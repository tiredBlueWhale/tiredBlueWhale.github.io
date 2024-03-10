<script>
	import { base } from '$app/paths';
	import { Android, AndroidBadge, AppleBadge, IPhone, SectionContent } from '$lib/components';
	import colorAndShapeiOS from '$lib/images/color-shape-ios.png';
	import colorAndShapeAndroid from '$lib/images/color-shape-android.png';
</script>

<SectionContent fontFamily="font-audiowide">
	<div class="md:flex-1" />
	<span class="text-xs md:text-base lg:text-base">Game</span>
	<h1 class="text-3xl md:text-5xl lg:text-7xl md:pb-1 font-bold">Color & Shape</h1>
	<h2 class="text-lg md:text-xl lg:text-3xl pb-1 lg:pb-4">Fast paced hyper casual mobile game</h2>
	<p class="text-base md:text-lg lg:text-xl pb-1 lg:pb-4">
		The goal is to press the correct color(s) and shape(s) made difficult by the <a
			href="https://en.wikipedia.org/wiki/Stroop_effect"
		>
			Stroop effect
		</a> .
	</p>
	<a class="text-base md:text-lg lg:text-xl pb-2 lg:pb-8" href="{base}/color-and-shape"
		>Learn More
	</a>
	<div class="grow-[.1]" />
	<h3 class="text-lg md:text-xl lg:text-3xl pb-1 lg:pb-4">March 2024</h3>
	<!-- <div class="flex flex-wrap gap-2 lg:gap-4 pb-2">
        <AppleBadge href="https://apps.apple.com/us/app/stayinside/id6477404555" />
        <AndroidBadge
            href="https://play.google.com/store/apps/details?id=com.tiredbluewhale.stayinside"
        />
    </div> -->
	<div class="flex-1 md:grow-[1.6]" />
	<div class="flex gap-4">
		<a class="text-sm lg:text-base" href="{base}/color-and-shape/privacy">Privacy Policy </a>
	</div>
	<div slot="device" class="relative flex flex-col">
		<div class="translate-x-2 md:translate-x-8 translate-y-4 md:translate-y-6 z-10">
			<Android src={colorAndShapeAndroid} landscape />
		</div>
		<div class="-translate-x-4 md:translate-x-0 -translate-y-2 md:translate-y-0">
			<IPhone src={colorAndShapeiOS} landscape />
		</div>
	</div>
</SectionContent>
