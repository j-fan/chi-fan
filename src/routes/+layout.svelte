<script lang="ts">
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
  import AOS from 'aos';
  import { onMount } from 'svelte';
  import SoundControls from '$lib/sound/SoundControls.svelte';

  onMount(() => {
    AOS.init({ offset: 140, once: true });
  });
</script>

<Header />
<SoundControls />
<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>
<main>
  <slot />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>
