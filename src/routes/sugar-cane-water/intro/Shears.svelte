<script lang="ts">
  import { base } from '$app/paths';

  export let isIntersecting = false;

  const openShears = `${base}/img/sugar-cane-water/clippers.png`;
  const closedShears = `${base}/img/sugar-cane-water/clippers-closed.png`;
</script>

<div
  class="wrapper"
  class:isIntersecting
  style="--open-shears: url({openShears}); --closed-shears: url({closedShears});"
/>

<style>
  .wrapper {
    transition: all 300ms ease;
    user-select: none;
    width: calc(480px * 0.6);
    height: calc(600px * 0.6);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: var(--open-shears);
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
    cursor: none;
  }

  .wrapper:active {
    transform: scale(0.9);
    background-image: var(--closed-shears);
  }
</style>
