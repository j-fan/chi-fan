<script lang="ts">
  import { base } from '$app/paths';

  const src = `${base}/img/sugar-cane-water/cleaver2.png`;
</script>

<div class="wrapper" style="background-image: url({src})" />

<style>
  .wrapper {
    user-select: none;
    height: 250px;
    width: 125px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
