<script lang="ts">
  import { base } from '$app/paths';
  import { randomBool, randomRange } from '$lib/utils/random';

  const src = `${base}/img/sugar-cane-water/cane.png`;

  export let picked = false;

  const rotation = randomRange(-10, 10);
  const scale = randomRange(1, 1.4);
  const flip = randomBool() ? 1 : -1;
  $: pickedScale = picked ? scale * 1.2 : scale;
</script>

<div
  class="wrapper"
  class:picked
  style="background-image: url({src}); transform: rotate({rotation}deg) scale({pickedScale}) scaleX({flip});"
/>

<style>
  .wrapper {
    transition: all 300ms ease;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 1));
    width: calc(217px * 0.4);
    height: calc(986px * 0.4);
    z-index: 1;
    position: relative;
    transform-origin: bottom;
  }

  .wrapper.picked {
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
    z-index: 2;
  }

  @media (max-width: 600px) {
    .wrapper {
      width: calc(217px * 0.4);
      height: calc(986px * 0.4);
    }
  }
</style>
