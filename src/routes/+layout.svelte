<script>
	let { children } = $props();
</script>

<header>
    <h1><a href="/"><span class="bb">Jonathan</span><span class="l">Wagenet</span></a></h1>
    <nav>
        <a href="/">Home</a>
        <a href="/resume">Resume</a>
        <a href="/projects">Projects</a>
        <a href="https://github.com/jwagenet">Github</a>
        <a href="https://www.linkedin.com/in/jonathanwagenet">LinkedIn</a>
    </nav>
</header>

{@render children()}