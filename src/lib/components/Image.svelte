<script>
	// @ts-nocheck
	// images has no type
	const images = import.meta.glob('$lib/images/*.png', { eager: true });

	export let image = 'stay-inside-android';
	export let style = '';
	export let alt = '';
</script>

<img src={images[`/src/lib/images/${image}.png`].default ?? ''} class={style} {alt} />
