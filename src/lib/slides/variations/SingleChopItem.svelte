<script lang="ts">
  export let beforeChop = '';
  export let afterChop = '';
  export let itemWidth: string;
  export let picked = false;
</script>

<img
  class="wrapper"
  class:picked
  src={picked ? afterChop : beforeChop}
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
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.5));
  }
</style>
