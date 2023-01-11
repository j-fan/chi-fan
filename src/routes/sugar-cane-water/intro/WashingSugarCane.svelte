<script lang="ts">
  import { base } from '$app/paths';

  export let progress = 0;

  const cleanImg = `${base}/img/sugar-cane-water/washing-cane-clean.png`;
  const dirtyImg = `${base}/img/sugar-cane-water/washing-cane-dirty.png`;
</script>

<div class="wrapper">
  <div class="image" style="background-image: url({cleanImg});" />
  <div class="image" style="opacity: {progress}; background-image: url({dirtyImg});" />
</div>

<style>
  .wrapper {
    position: relative;
    width: calc(500px * 0.45);
    height: calc(1500px * 0.45);
  }

  @media (max-width: 600px) {
    .wrapper {
      width: calc(500px * 0.3);
      height: calc(1500px * 0.3);
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
