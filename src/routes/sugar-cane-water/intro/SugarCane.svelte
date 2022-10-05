<script lang="ts">
  import { base } from '$app/paths';
  import { randomBool, randomRange } from '$lib/utils/random';
  import { onMount } from 'svelte';

  const src = `${base}/img/sugar-cane-water/cane.png`;

  export let picked = false;

  let rotation = 0;
  let scale = 1;
  let flip = 1;
  $: pickedScale = picked ? scale * 1.5 : scale;

  onMount(() => {
    rotation = randomRange(-10, 10);
    scale = randomRange(1, 1.4);
    flip = randomBool() ? 1 : -1;
  });
</script>

<div
  class="wrapper"
  class:picked
  style="background-image: url({src}); transform: rotate({rotation}deg) scale({pickedScale}) scaleX({flip});"
/>

<style>
  .wrapper {
    transition: all 300ms ease;
    width: 120px;
    height: 300px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    filter: drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.3));
  }

  .wrapper.picked {
    filter: brightness(0.8);
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.3));
  }
</style>
