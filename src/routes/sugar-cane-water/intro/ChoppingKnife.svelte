<script lang="ts">
  import { base } from '$app/paths';

  export let isIntersecting = false;
  export let isActive = false;

  const src = `${base}/img/sugar-cane-water/cleaver2.png`;
</script>

<div class="wrapper" class:isIntersecting class:isActive style="background-image: url({src})" />

<style>
  .wrapper {
    transition: all 300ms ease;
    user-select: none;
    height: calc(250px * 1.5);
    width: calc(125px * 1.5);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    filter: drop-shadow(15px 15px 6px rgba(0, 0, 0, 0.5));
    cursor: none;
    transform: translateY(30%);
  }

  .wrapper.isIntersecting {
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
    transform: scale(0.9) translateY(30%);
  }

  .wrapper.isActive {
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
    transform: scale(0.9) rotate(75deg) translateY(30%);
  }
</style>
