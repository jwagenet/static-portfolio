<script>
	import { onMount } from 'svelte';
	import showdown from 'showdown';
	const { Converter } = showdown;
	import { wrapHeadingGroups } from '$lib/wrapHeadingGroups.js';

	let finalHtml = '';

	onMount(async () => {
		const res = await fetch('/resume/resume-web.md');
		const text = await res.text();

		const converter = new Converter();
		const rawHtml = converter.makeHtml(text);
		finalHtml = wrapHeadingGroups(rawHtml, { tag: 'div', atomicLevels: [5] });
	});
</script>

<svelte:head>
    <title>Jonathan Wagenet | Resume</title>
</svelte:head>

<h1>Resume</h1>

<section id="resume-wrapper">
	{@html finalHtml}
</section>