<script lang="ts">
  import { base } from '$app/paths';
  import Button from '$lib/button/Button.svelte';
  import Card from '$lib/card/Card.svelte';

  const src = `${base}/img/home-bg.jpg`;
</script>

<svelte:head>
  <title>Chi Fan</title>
  <meta name="description" content="Chi Fan interactive artwork" />
</svelte:head>

<section style="background-image: url({src})">
  <Card width="400px" isCentered
    ><h2>Welcome to Chi Fan</h2>
    <Button isFullWidth href="{base}/doors">Enter</Button></Card
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
</style>
