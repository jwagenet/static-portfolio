<script>
	let { children } = $props();
</script>


<header>
    <a style="text-decoration:none;" href="./index.htm"><h1><span class="bb">Jonathan</span><span class="l">Wagenet</span></h1></a>
    <nav>
        <a href="/">Home</a>
        <a href="/resume">Resume</a>
        <a href="/projects">Projects</a>
    </nav>
</header>


{@render children()}
