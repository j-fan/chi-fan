<script lang="ts">
  import { base } from '$app/paths';
  import Button from '$lib/button/Button.svelte';
  import { fade } from 'svelte/transition';

  export let doorImg = `${base}/img/door-left.jpg`;
  export let link: string | undefined = undefined;

  let doorIsOpen = false;
  let kitchenIsExpanded = false;
  let width = 0;

  const openDoors = () => {
    doorIsOpen = !doorIsOpen;
    kitchenIsExpanded = false;
  };

  const expandKitchen = () => {
    kitchenIsExpanded = !kitchenIsExpanded;
  };

  const navigate = () => {
    if (link) {
      location.href = link;
    }
  };
</script>

<div
  bind:clientWidth={width}
  class="door"
  class:open={doorIsOpen}
  class:expanded={kitchenIsExpanded}
  style="left: {doorIsOpen ? `calc(50vw - ${width / 2}px)` : '0px'}"
>
  {#if doorIsOpen}
    <div class="door-bg" transition:fade />
  {/if}

  <div class="door-inside">
    <slot name="doorInside">There's nothing inside this door</slot>
    {#if kitchenIsExpanded === false}
      <div class="hover-btn" transition:fade>
        <Button isFullWidth={false} on:click={expandKitchen}>Enter this kitchen</Button>
      </div>
    {/if}
  </div>

  <img
    class="left-door"
    class:open={doorIsOpen}
    class:hidden={kitchenIsExpanded}
    src={doorImg}
    alt="door-left"
    on:click={openDoors}
  />
  <img
    class="right-door"
    class:open={doorIsOpen}
    class:hidden={kitchenIsExpanded}
    src={doorImg}
    alt="door-right"
    on:click={openDoors}
  />

  {#if kitchenIsExpanded}
    <div
      class="white-fade-out"
      transition:fade={{ delay: 1000, duration: 500 }}
      on:introend={navigate}
    />
  {/if}
</div>

<style>
  .door {
    display: flex;
    position: relative;
    height: 70vh;
    /* TODO: fix width animtion */
    width: auto;
    flex-shrink: 0;
    border: var(--border-style);

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: height 400ms ease, width 400ms ease;
  }

  .door.open {
    position: absolute;
    height: 80vh;
    z-index: 1;
  }

  .door.expanded {
    height: 102%;
    width: 102%;
  }

  .door-bg {
    background-color: var(--c-white);
    position: fixed;
    inset: 0;
    transition: opacity 500ms ease;
    display: flex;
    justify-content: center;
    pointer-events: none;
  }

  .white-fade-out {
    position: fixed;
    inset: 0;
    background-color: var(--c-white);
  }

  .door-inside {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--c-teal);
    overflow: hidden;
    border: var(--border-style);
    transition: all 400ms ease;
  }

  .hover-btn {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-door,
  .right-door {
    transition: transform 500ms ease-in-out 200ms;
    cursor: pointer;
    max-width: 100%;
    max-height: 100%;
  }

  .left-door.hidden,
  .right-door.hidden {
    display: none;
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
