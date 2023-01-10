<script lang="ts">
  import { base } from '$app/paths';

  export let isIntersecting = false;

  const src = `${base}/img/sugar-cane-water/scrub.png`;
</script>

<div class="wrapper" style="background-image: url({src})" class:isIntersecting />

<style>
  .wrapper {
    transition: all 300ms ease;
    user-select: none;
    height: 150px;
    width: 230px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
  }

  .wrapper.isIntersecting {
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.5));
    transform: scale(0.8);
  }

  .wrapper:active {
    transform: scale(0.6);
  }
</style>
