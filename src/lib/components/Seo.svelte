<script>
  import { page } from "$app/stores"
  import { dev, prerendering } from "$app/env"

  const baseUrl = "https://www.honai.me"

  export let title = "Honai Ueoka"
  export let description = ""
  export let path = ""
  export let ogImageUrl = ""

  if ((dev || prerendering) && !path) {
    console.info("Path is not set on Seo props")
    console.info("Using path from $page", $page.path)
    path = $page.path
  }

  if (!path.endsWith("/")) {
    path = path + "/"
  }

  const largeCard = !!ogImageUrl
  ogImageUrl = ogImageUrl || `${baseUrl}/images/profile.png`

  const canonicalUrl = `${baseUrl}${path}`
</script>

<svelte:head>
  <link rel="canonical" href={canonicalUrl} />
  <title>{title}</title>
  <meta name="description" content={description} />

  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImageUrl} />
  <meta property="fb:app_id" content="1144529745735811" />
  <meta property="og:locale" content="ja_JP" />

  <meta name="twitter:card" content={largeCard ? "summary_large_image" : "summary"} />
  <meta name="twitter:creator" content="@_honai" />
  {#if path.startsWith("/blog")}
    <link type="application/rss+xml" rel="alternate" title="Honai's Blog" href="/blog/rss.xml" />
  {/if}
</svelte:head>
