<script lang="ts">
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
</script>

<Header />

<main>
  <slot />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>
