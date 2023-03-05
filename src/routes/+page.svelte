<script lang="ts">
  import { base } from '$app/paths';
  import Button from '$lib/button/Button.svelte';
  import Card from '$lib/card/Card.svelte';

  const src = `${base}/img/home-bg.jpg`;
</script>

<svelte:head>
  <title>Chi Fan</title>
  <meta name="description" content="Chi Fan interactive artwork" />
  <link rel="preload" as="image" href={src} />
</svelte:head>

<section style="background-image: url({src})">
  <Card width="800px" isCentered>
    <img src="{base}/img/home-banner.png" alt="Welcome to Chi Fan" />
    <Button href="/doors">Enter</Button></Card
  >
</section>

<style>
  section {
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  img {
    margin-bottom: 1rem;
    width: 70%;
    aspect-ratio: 92 / 72;
  }

  @media (max-width: 600px) {
    img {
      padding: 0;
      width: 90%;
    }
  }
</style>
