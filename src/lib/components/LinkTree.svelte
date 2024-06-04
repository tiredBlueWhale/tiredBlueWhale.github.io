<script>
	import { PATHS } from '$lib/paths';
	import Socials from './Socials.svelte';

	export let showApps = true;
	export let showSocials = true;

	const apps = Object.values(PATHS).filter((path) => path.paths.includes('store'));

	const aClass =
		'no-underline flex flex-col justify-center items-center hover:border-slate-300 hover:scale-110';

	const textClass = 'hover:text-slate-100';
</script>

<div class="flex-1 flex flex-col justify-center items-stretch">
	<div
		class="flex-1 flex flex-col justify-center items-stretch text-xl md:text3xl lg:text-5xl text-slate-300/90 *:border-y-2 *:p-4 *:border-slate-300/50 *: *:transition-transform"
	>
		{#if showApps}
			{#each apps as { title, slug }}
				<a
					href="{slug}/store?redirect=true"
					target="_blank"
					rel="noopener noreferrer"
					class={aClass}
				>
					<h1 class={textClass}>{title}</h1>
				</a>
			{/each}
		{/if}

		<a
			href="https://apps.apple.com/mx/app/tired-blue-whale/id6480527807"
			target="_blank"
			rel="noopener noreferrer"
			class={aClass}
		>
			<h1 class={textClass}>Tired Blue Whale iMessage Sticker</h1>
		</a>
		<a href="tired_blue_whale.wastickers" download="" class={aClass}>
			<h1 class={textClass}>Tired Blue Whale Whatsapp Sticker</h1>
		</a>
	</div>
	{#if showSocials}
		<Socials />
	{/if}
</div>
