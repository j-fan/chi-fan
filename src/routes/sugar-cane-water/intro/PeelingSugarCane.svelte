<script lang="ts">
  import { base } from '$app/paths';

  export let progress = 0;

  const src = `${base}/img/sugar-cane-water/cut-cane.png`;
</script>

<div class="wrapper" style="filter: brightness({1 - progress}); background-image: url({src});" />

<style>
  .wrapper {
    width: 120px;
    height: 540px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
