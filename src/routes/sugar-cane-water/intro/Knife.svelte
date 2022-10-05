<script lang="ts">
  import { base } from '$app/paths';

  export let isIntersecting = false;

  const src = `${base}/img/sugar-cane-water/cleaver2.png`;
</script>

<div class="wrapper" style="background-image: url({src})" class:isIntersecting />

<style>
  .wrapper {
    user-select: none;
    height: 250px;
    width: 125px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .wrapper.isIntersecting {
    transform: scale(1.2);
  }
</style>
