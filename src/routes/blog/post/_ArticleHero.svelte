<script>
  export let title
  export let date
  export let updated

  const [dateStr, updatedStr] = [date, updated].map((s) => new Date(s).toLocaleDateString("ja"))
</script>

<header class="article-hero">
  <h1 class="title">{title}</h1>
  <div class="meta">
    <div class="century-gothic date">
      <time id="published-time" datetime={date}>{dateStr}</time>
      {#if !!updated}
        (<time id="updated-time" datetime={updatedStr}>{updatedStr}</time> に更新)
      {/if}
    </div>
  </div>
</header>

<style lang="scss">
  .article-hero {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    > .title {
      font-size: 3.2rem;
    }
  }
</style>
