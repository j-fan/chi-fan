<script>
  import { base } from '$app/paths';
</script>

<div class="wrapper" style="background-image: url({base}/img/sugar-cane-water/pot.jpg)">
  <slot />
</div>

<style>
  .wrapper {
    width: 45vh;
    height: 45vh;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (max-width: 600px) {
    .wrapper {
      width: 300px;
      height: 300px;
    }
  }
</style>
