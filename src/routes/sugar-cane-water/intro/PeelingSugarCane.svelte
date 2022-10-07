<script lang="ts">
  import { base } from '$app/paths';
  import { clamp } from '$lib/utils/math';

  export let progress = 0;
  $: brightness = clamp(progress + 0.2, 0, 1);

  const src = `${base}/img/sugar-cane-water/cut-cane.png`;
</script>

<div class="wrapper" style="filter: brightness({brightness}); background-image: url({src});" />

<style>
  .wrapper {
    width: 57px;
    height: 540px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
