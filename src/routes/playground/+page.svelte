<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	/**
	 * @type {HTMLDivElement}
	 */
	let scrollContainer;

	/** @type {string} */
	let title;
	/** @type {string[]} */
	let content = [];
	/** @type {string} */
	let phone;

	onMount(() => {
		title = $page.url.searchParams.get('title') || 'Title';
		const _content =
			$page.url.searchParams.get('content') ||
			"['Content1', 'Content2', 'Content3', 'Content4', 'Content5']";
		const _contentMatch = /\[(.*?)\]/.exec(_content.replace(/\s|'/g, ''));
		if (_contentMatch !== null && _contentMatch.length >= 1) {
			content = _contentMatch[1].split(',');
		}
		console.log(content);
		phone = $page.url.searchParams.get('phone') || '';

		scrollContainer.animate(
			[{ transform: 'translate(0%,-50%)' }, { transform: 'translate(-50%, -50%)' }],
			{
				duration: content.length * 1.5 * 1000,
				easing: 'linear',
				iterations: Infinity
			}
		);

		content = [...content, ...content];
	});
</script>

<section class="h-screen flex flex-col justify-center items-center bg-gray-900">
	<h1 class="pb-2 text-6xl md:text-7xl lg:text-9xl font-martian font-bold text-center">{title}</h1>
	<div class="relative overflow-hidden w-full h-12 md:h-20">
		<div bind:this={scrollContainer} class="absolute top-1/2 flex font-press-start-2p">
			{#each content as entry}
				<h2
					class="px-2 text-2xl md:text-4xl lg:text-7xl text-red-600 text-shadow-neon shadow-red-700"
				>
					{entry}
				</h2>
			{/each}
		</div>
	</div>

	{#if phone}
		<a href="tel:+{phone}" class="pt-4 flex flex-col justify-center items-center">
			<h3 class="text-3xl lg:text-7xl">Call: +{phone}</h3>
		</a>
	{/if}
</section>
