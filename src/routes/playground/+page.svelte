<!-- https://localhost:5173/playground?title=Looking for&[Human, Amazing ideas, Developer, Talent, Telepath, Psychic, an undeniable amazing taste in music]&readingSpeed=1.4&phone=3584578387387 -->

<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { getOperatingSystem } from '$lib/agent';

	/**
	 * @type {HTMLDivElement}
	 */
	let scrollContainer;

	/** @type {string} */
	let title = '¯_(ツ)_/¯';
	/** @type {string[]} */
	let content = [];
	/** @type {number} */
	let readingSpeed;
	/** @type {boolean} */
	let isMultiline = false;
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

		readingSpeed = parseFloat($page.url.searchParams.get('readingSpeed') || '0.8');
		scrollContainer.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], {
			duration: numberOfWords * readingSpeed * 1000,
			easing: 'linear',
			iterations: Infinity,
			delay: 200
		});
		content = [...content, ...content, ...content, ...content];

		isMultiline = 'true' === ($page.url.searchParams.get('isMultiline') || 'false');

		phone = $page.url.searchParams.get('phone') || '358443070894';
	});
</script>

<section class="h-screen flex flex-col justify-center bg-gray-900">
	<h1 class="pb-4 text-6xl md:text-7xl lg:text-9xl font-martian font-bold text-center">
		{title}
	</h1>
	<div class="w-full overflow-x-hidden">
		<div
			bind:this={scrollContainer}
			class="flex flex-row items-center {isMultiline ? 'w-min' : 'w-max'} "
		>
			{#each content as entry}
				<div
					class="px-8 md:px-12 lg:px-16 font-press-start-2p text-2xl md:text-4xl lg:text-7xl text-red-600 text-shadow-neon shadow-red-700"
				>
					{entry}
				</div>
			{/each}
		</div>
	</div>
	{#if phone}
		<a href="tel:+{phone}" class="flex flex-col justify-center items-center">
			<h3 class="text-4xl lg:text-7xl text-center">Call</h3>
			<h3 class="text-2xl lg:text-5xl text-center">+{phone}</h3>
		</a>
	{/if}
</section>
