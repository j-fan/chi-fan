<script lang="ts">
  import { base } from '$app/paths';

  export let beforeChop = '';
  export let afterSplit = '';
  export let itemWidth: string;
  export let picked = false;
</script>

<!-- <div
  class="wrapper"
  class:picked
  style="background-image: url({picked ? afterSplit : beforeChop}); --item-width:{width};"
/> -->
<img
  class="wrapper"
  class:picked
  src={picked ? afterSplit : beforeChop}
  alt="chopped item"
  style="--item-width:{itemWidth};"
/>

<style>
  .wrapper {
    transition: all 300ms ease;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 1));
    width: var(--item-width);
    max-width: 100%;
    z-index: 1;
    position: relative;
  }

  .wrapper.picked {
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
  }
</style>
