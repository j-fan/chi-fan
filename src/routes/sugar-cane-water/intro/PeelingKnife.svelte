<script lang="ts">
  import { base } from '$app/paths';

  export let isIntersecting = false;

  const src = `${base}/img/sugar-cane-water/cleaver2.png`;
</script>

<div class="wrapper" style="background-image: url({src})" class:isIntersecting />

<style>
  .wrapper {
    transition: all 300ms ease;
    user-select: none;
    height: 250px;
    width: 125px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    filter: drop-shadow(15px 15px 6px rgba(0, 0, 0, 0.5));
    cursor: none;
  }

  .wrapper.isIntersecting {
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
    transform: scale(0.9);
  }

  .wrapper:active {
    transform: scale(0.8);
  }
</style>
