<script>
  /** @type {import("$lib/posts").PostToc[]} */
  export let toc
  export let highlight
</script>

<ol>
  {#each toc as item (item.id)}
    <li>
      <!-- SvelteKitのフラグメントでのリンクの挙動にバグがありそう -->
      <a href={`#${item.id}`} rel="external" class:active={item.id === highlight}>{item.text}</a>
      {#if item.children.length > 0}
        <svelte:self toc={item.children} {highlight} />
      {/if}
    </li>
  {/each}
</ol>

<style>
  ol {
    padding: 0 0 0 2.4rem;
  }
  li {
    color: var(--color-text-secondary);
  }
  a {
    color: inherit;
  }
  li > .active {
    font-weight: bold;
  }
</style>
