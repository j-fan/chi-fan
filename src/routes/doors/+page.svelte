<script>
  import Doors from '$lib/doors/Doors.svelte';
</script>

<svelte:head>
  <title>Doors</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="door-list">
  <Doors />
  <Doors />
  <Doors />
  <Doors />
</div>

<style>
  .door-list {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 16px;
    max-width: 100%;
    overflow: auto;
  }
</style>
