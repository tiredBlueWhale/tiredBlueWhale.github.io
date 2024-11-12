<script>
	/**
	 * @type {String}
	 */
	export let title;

	export let color = 'bg-blue-700';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={title} />
</svelte:head>

<section class="min-h-screen flex justify-center py-4 px-6 md:py-32 md:px-16 xl:px-52 {color}">
	<div class="max-w-screen-xl flex-1 flex flex-col">
		<slot />
	</div>
</section>
