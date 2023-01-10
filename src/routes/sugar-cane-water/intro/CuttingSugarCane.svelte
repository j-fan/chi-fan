<script lang="ts">
  import { base } from '$app/paths';

  export let progress = 0;
  $: step = Math.floor(progress / 0.33) + 1;
</script>

<div class="wrapper">
  <div
    class="image"
    style="background-image: url({`${base}/img/sugar-cane-water/cutting-cane-${step}.png`});"
  />
</div>

<style>
  .wrapper {
    position: relative;
    width: calc(97px * 0.7);
    height: calc(800px * 0.7);
  }

  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
