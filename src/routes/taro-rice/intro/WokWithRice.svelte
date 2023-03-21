<script>
  import { base } from '$app/paths';
</script>

<div class="wrapper" style="background-image: url({base}/img/taro-rice/wok-with-rice.png)">
  <slot />
</div>

<style>
  .wrapper {
    width: 60vh;
    height: 40vh;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 15vh;
  }

  @media (max-width: 600px) {
    .wrapper {
      width: 300px;
      height: 300px;
    }
  }
</style>
