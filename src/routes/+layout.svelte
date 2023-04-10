<script lang="ts">
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
  import AOS from 'aos';
  import { onMount } from 'svelte';
  import SoundControls from '$lib/sound/SoundControls.svelte';

  onMount(() => {
    AOS.init({ offset: 100, once: true });
  });

  const description =
    '吃饭 (Chi-Fan) is a visual arts / heritage studies project tracing the intimate stories and migration of family recipes across the contested “Chinese diaspora”.';
  const socialMediaImage = 'https://j-fan.github.io/chi-fan/img/home-banner.jpg';
</script>

<svelte:head>
  <title>Chi Fan</title>
  <meta name="description" content={description} />

  <!-- Primary Meta Tags -->
  <title>Chi Fan</title>
  <meta name="title" content="Chi Fan" />
  <meta name="description" content={description} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://j-fan.github.io/chi-fan" />
  <meta property="og:title" content="Chi Fan" />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={socialMediaImage} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://j-fan.github.io/chi-fan" />
  <meta property="twitter:title" content="Chi Fan" />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={socialMediaImage} />

  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<Header />
<SoundControls />

<main>
  <slot />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>
