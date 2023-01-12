<script lang="ts">
  import { base } from '$app/paths';
  import { randomBool, randomRange } from '$lib/utils/random';

  const beforeSplit = `${base}/img/sugar-cane-water/cane-split-1.png`;
  const afterSplit = `${base}/img/sugar-cane-water/cane-split-2.png`;

  export let picked = false;

  const rotation = randomRange(-40, 40);
  const flip = randomBool() ? 1 : -1;
</script>

<div
  class="wrapper"
  class:picked
  style="background-image: url({picked
    ? afterSplit
    : beforeSplit}); transform: rotate({rotation}deg) scaleX({flip});"
/>

<style>
  .wrapper {
    transition: all 300ms ease;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 1));
    width: calc(133px * 1);
    height: calc(139px * 1);
    z-index: 1;
    position: relative;
  }

  .wrapper.picked {
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
  }
</style>
