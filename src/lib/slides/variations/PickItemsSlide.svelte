<script lang="ts">
  import { randomRange, smoothRandomRange } from '$lib/utils/random';
  import type { PickItemsSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  let mouseX = 200;
  let mouseY = 200;
  let isIntersecting = false;
  let isActive = false;

  export let props: PickItemsSlideType;

  $: {
    if (props.totalItems < props.targetCount) {
      throw new Error('The target count must be less than the total items');
    }
  }
  let windowWidth = 9999;
  $: isMobile = windowWidth < 500;

  let pickedItems = new Set();

  const handlePickItem = (itemId: number) => {
    if (pickedItems.has(itemId)) {
      if (props.allowToggle) {
        pickedItems.delete(itemId);
      }
    } else {
      pickedItems.add(itemId);
    }
    pickedItems = pickedItems;
  };

  const handleMouseMove = (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };

  const handleTouchMove = (event: TouchEvent) => {
    mouseX = event.touches[0].clientX;
    mouseY = event.touches[0].clientY;
  };

  const setIntersectingTrue = () => {
    isIntersecting = true;
  };

  const setIntersectingFalse = () => {
    isIntersecting = false;
  };

  const setActiveTrue = () => {
    isActive = true;
  };

  const setActiveFalse = () => {
    isActive = false;
  };

  const getItemSpacing = (index: number) => {
    if (isMobile) {
      index * (100 / props.totalItems);
    }
    return index * (50 / props.totalItems) + 25;
  };
</script>

<svelte:window bind:innerWidth={windowWidth} />
<svelte:body on:mousemove={handleMouseMove} on:touchmove={handleTouchMove} />
<BaseSlide
  dialogs={props.dialogs}
  errorStep={props.errorStep}
  successStep={props.successStep}
  isValid={pickedItems.size >= props.targetCount}
  bgImage={props.bgImage}
  progressNum={pickedItems.size}
  progressTotal={props.targetCount}
>
  <div class="items-container">
    {#each Array(props.totalItems) as _, index (index)}
      <div
        class="item-wrapper"
        on:click={() => {
          handlePickItem(index);
        }}
        on:focus={setIntersectingTrue}
        on:blur={setIntersectingFalse}
        on:mouseover={setIntersectingTrue}
        on:mouseleave={setIntersectingFalse}
        on:mousedown={setActiveTrue}
        on:mouseup={setActiveFalse}
        on:touchstart={setActiveTrue}
        on:touchend={setActiveFalse}
        style="left: {getItemSpacing(index)}%; bottom: {props.bottomPosition +
          randomRange(-10, 10)}%"
      >
        <svelte:component this={props.itemComponent} picked={pickedItems.has(index)} />
      </div>
    {/each}
  </div>
  <div class="follow-mouse" style="left: {mouseX}px; top:{mouseY}px;">
    <svelte:component this={props.toolComponent} {isIntersecting} {isActive} />
  </div>
</BaseSlide>

<style>
  .items-container {
    position: relative;
    width: 80%;
    height: 70%;
    margin: 0 auto;
    margin-top: 15vh;
  }

  @media (max-width: 600px) {
    .items-container {
      width: 100%;
    }
  }

  .item-wrapper {
    position: absolute;
    cursor: pointer;
    user-select: none;
  }

  .follow-mouse {
    position: fixed;
    transform: translateX(-50%) translateY(-50%);
    z-index: 99;
    pointer-events: none;
  }
</style>
