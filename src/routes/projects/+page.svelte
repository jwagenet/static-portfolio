<script>
    import { onMount } from 'svelte';
    import ConditionalLink from "$lib/ConditionalLink.svelte"
	let { data } = $props();

    onMount(() => {
        document.querySelector(".tag-selector").addEventListener("click", (event) => {
            if (!event.target.classList.contains("tag-toggle")) return;

            let allOptions = [...document.querySelectorAll(".tag-toggle")].map(el =>
                el.classList[1] // Extracts class like 'option-a', 'option-b', etc.
            );

            let selectedClass = allOptions.find(cls => event.target.classList.contains(cls));
            let isAlreadyActive = event.target.classList.contains("active");
            document.querySelectorAll(".tag-toggle, .tag-label").forEach(el => el.classList.remove("active"));

            // If the clicked toggle was active, turn everything off and show all content
            if (isAlreadyActive) {
                document.querySelectorAll(".tag-section").forEach(el => el.classList.remove("hidden"));
                return;
            }

            // Add active class to the selected toggle and label, hide others
            event.target.classList.add("active");
            document.querySelectorAll(`.tag-label.${selectedClass}`).forEach(el => el.classList.add("active"));

            document.querySelectorAll(".tag-section").forEach(el => {
                let containsSelected = el.classList.contains(selectedClass);
                el.classList.toggle("hidden", !containsSelected);
            });
        });
    });
</script>

<svelte:head>
    <title>Jonathan Wagenet | Projects</title>
</svelte:head>

<h1>Projects</h1>
<h3 class="tag-selector">Tags
    <span class="tag-toggle mech">mech</span>
    <span class="tag-toggle sw">sw</span>
</h3>

{#each data.summaries as { isContent, slug, title, thumb, location, years, tags, summary, classes }}
<div class="tag-section {classes}">
    <ConditionalLink {isContent} class="section" href="/projects/{slug}">
        <section>
            {#if thumb != ""}
            <img src="/images/projects/{thumb}" alt={slug}>
            {/if}
            <h2>{title}</h2>
            <h3>{location} | {years}
                {#each tags as tag}<span class="tag-label {tag}">{tag}</span>{/each}
            </h3>
            <p>{@html summary}</p>
        </section>
    </ConditionalLink>
</div>
{/each}