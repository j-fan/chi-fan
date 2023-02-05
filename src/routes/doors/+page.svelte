<script>
  import { base } from '$app/paths';
  import Doors from '$lib/doors/Doors.svelte';
</script>

<svelte:head>
  <title>Doors</title>
  <meta name="description" content="Doors" />
</svelte:head>

<div class="wrapper">
  <div class="door-list">
    <Doors link="{base}/sugar-cane-water/intro">
      <img
        class="interior-img"
        slot="doorInside"
        src="{base}/img/sugar-cane-water/interior.jpg"
        alt="the kitchen inside the door"
      />
    </Doors>
  </div>
</div>

<style>
  .wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .door-list {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
    max-width: 100%;
    overflow: auto;
  }

  .interior-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>
