<script lang="ts">
  import { base } from '$app/paths';
  import { fade } from 'svelte/transition';

  export let doorImg = `${base}/img/door-left.jpg`;

  let doorIsOpen = false;
  let width = 0;

  const openDoors = () => {
    doorIsOpen = !doorIsOpen;
  };
</script>

<div
  bind:clientWidth={width}
  class="door"
  class:open={doorIsOpen}
  on:click={openDoors}
  style="left: {doorIsOpen ? `calc(50vw - ${width / 2}px)` : '0px'}"
>
  {#if doorIsOpen}
    <div class="door-bg" transition:fade />
  {/if}
  <div class="door-inside">
    <slot name="doorInside">There's nothing inside this door</slot>
  </div>
  <img class="left-door" class:open={doorIsOpen} src={doorImg} alt="door-left" />
  <img class="right-door" class:open={doorIsOpen} src={doorImg} alt="door-right" />
</div>

<style>
  .door {
    display: flex;
    position: relative;
    height: 70vh;
    flex-shrink: 0;
    transition: height 300ms ease;
    border: 1px solid black;
  }

  .door.open {
    position: absolute;
    height: 80vh;
    max-width: 80vw;
    z-index: 1;
  }

  .door-bg {
    background-color: var(--c-pink);
    position: fixed;
    inset: 0;
    transition: opacity 500ms ease;
    display: flex;
    justify-content: center;
    pointer-events: none;
  }

  .door-inside {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--c-white);
    overflow: hidden;
  }

  .left-door,
  .right-door {
    transition: transform 500ms ease-in-out 200ms;
    cursor: pointer;
    max-width: 100%;
    max-height: 100%;
  }

  .left-door {
    transform: scaleX(1);
    transform-origin: left;
  }

  .left-door.open {
    transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-150deg);
  }

  .right-door {
    transform: scaleX(-1) translateX(-100%);
    transform-origin: left;
  }

  .right-door.open {
    transform: scaleX(-1) translateX(-100%) perspective(1200px) translateZ(0px) translateY(0px)
      rotateY(-150deg);
  }
</style>
