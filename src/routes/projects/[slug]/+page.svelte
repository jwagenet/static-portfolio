<script>
	let { data } = $props();
</script>
<svelte:head>
    <title>Jonathan Wagenet | {data.project.title}</title>
</svelte:head>

<h1>{data.project.title}</h1>
{@html data.project.content}