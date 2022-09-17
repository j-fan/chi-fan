<script lang="ts">
  import { base } from '$app/paths';

  export let doorImg = `${base}/img/door-left.jpg`;

  let doorIsOpen = false;

  const handleClick = () => {
    doorIsOpen = !doorIsOpen;
  };
</script>

<div class="door" class:open={doorIsOpen} on:click={handleClick}>
  <img src={doorImg} alt="door-left" />
  <img class="right-door" src={doorImg} alt="door-right" />
</div>

<style>
  .door {
    display: flex;
    position: relative;
    height: 70vh;
    cursor: pointer;
    flex-shrink: 0;
    transition: left 800ms ease, height 300ms ease;
  }

  .door.open {
    height: 100%;
    transition: left 800ms ease, height 300ms ease;
    z-index: 1;
  }

  .right-door {
    transform: scaleX(-1);
  }
</style>
