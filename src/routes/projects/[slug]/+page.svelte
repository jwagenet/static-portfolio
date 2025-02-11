<script>
	let { data } = $props();
</script>

<h1>{data.project.title}</h1>
{@html data.project.content}