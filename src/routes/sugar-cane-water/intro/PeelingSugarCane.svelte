<script lang="ts">
  import { base } from '$app/paths';

  export let progress = 0;

  const cleanImg = `${base}/img/sugar-cane-water/cut-cane-knobbly.png`;
  const dirtyImg = `${base}/img/sugar-cane-water/cut-cane-peeled.png`;
</script>

<div class="wrapper">
  <div class="image" style="background-image: url({cleanImg});" />
  <div class="image" style="opacity: {progress}; background-image: url({dirtyImg});" />
</div>

<style>
  .wrapper {
    position: relative;
    width: calc(57px * 1);
    height: calc(540px * 1);
  }

  @media (max-width: 600px) {
    .wrapper {
      width: calc(57px * 1);
      height: calc(540px * 1);
    }
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
