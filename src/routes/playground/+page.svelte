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
	/** @type {number} */
	let readingSpeed;
	/** @type {string} */
	let phone;

	onMount(() => {
		let _title = $page.url.searchParams.get('title') || 'Title';
		// Safari iOS does not work other way
		title = decodeURI(_title);

		let _content = $page.url.searchParams.get('content') || '[Content1,Content 2 asdf]';
		_content = _content.replace(/'/g, '');
		// Safari iOS does not work other way
		_content = decodeURI(_content);
		console.log(_content);
		const _contentMatch = /\[(.*?)\]/.exec(_content);
		if (_contentMatch !== null && _contentMatch.length >= 1) {
			content = _contentMatch[1].split(',');
		}
		console.log(content);
		let numberOfWords = 0;
		for (const entry of content) {
			numberOfWords += entry.split(' ').length;
		}

		readingSpeed = parseFloat($page.url.searchParams.get('readingSpeed') || '1.2');
		scrollContainer.animate(
			[{ transform: 'translate(0%,-50%)' }, { transform: 'translate(-50%, -50%)' }],
			{
				duration: numberOfWords * readingSpeed * 1000,
				easing: 'linear',
				iterations: Infinity
			}
		);
		content = [...content, ...content];

		phone = $page.url.searchParams.get('phone') || '';
	});
</script>

<section class="h-screen flex flex-col justify-center items-center bg-gray-900">
	<h1 class="pb-2 text-6xl md:text-7xl lg:text-9xl font-martian font-bold text-center">{title}</h1>
	<div class="relative w-full h-12 md:h-20">
		<div
			bind:this={scrollContainer}
			class="absolute left-0 top-1/2 flex flex-row font-press-start-2p"
		>
			{#each content as entry}
				<h2
					class="flex-1 px-8 text-nowrap text-2xl md:text-4xl lg:text-7xl text-red-600 text-shadow-neon shadow-red-700"
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
