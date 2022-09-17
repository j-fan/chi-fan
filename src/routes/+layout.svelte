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
    min-width: 100%;
    min-height: 100%;
  }
</style>
