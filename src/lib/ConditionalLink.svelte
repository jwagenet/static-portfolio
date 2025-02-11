<script>
	export let isContent = false;
	export let tag = 'a';
</script>

{#if isContent && tag}
	<!-- Imagine this is svelte:elemment or svelte:component -->
	<!-- <svelte:element {tag} {...$$restProps}><slot /></svelte:element> -->
  <a {...$$restProps}><slot /></a>
{:else}
  <slot />
{/if}