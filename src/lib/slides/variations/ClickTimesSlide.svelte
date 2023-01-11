<script lang="ts">
  import { Confetti } from 'svelte-confetti';
  import { clamp } from '$lib/utils/math';
  import { setNoScrollBody } from '$lib/utils/setNoScrollBody';
  import { onMount } from 'svelte';
  import type { ClickTimesSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: ClickTimesSlideType;

  let mouseX = -200;
  let mouseY = -200;
  let dragElementWidth = 0;
  let dragElementHeight = 0;
  let targetRef: HTMLElement;
  let dragRef: HTMLElement;
  let isIntersecting = false;
  let clicks = 0;

  const handleMouseMove = (event: MouseEvent) => {
    const targetBoundingBox = targetRef.getBoundingClientRect();
    mouseX = event.clientX - targetBoundingBox.x - dragElementWidth / 2;
    mouseY = event.clientY - targetBoundingBox.y - dragElementHeight / 2;
  };

  const handleTouchMove = (event: TouchEvent) => {
    const targetBoundingBox = targetRef.getBoundingClientRect();
    mouseX = event.changedTouches[0].clientX - targetBoundingBox.x - dragElementWidth / 2;
    mouseY = event.changedTouches[0].clientY - targetBoundingBox.y - dragElementHeight / 2;
  };

  onMount(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        isIntersecting = entry.isIntersecting;
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: targetRef,
      rootMargin: '0px',
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
    });
    observer.observe(dragRef);

    return () => {
      observer.disconnect();
    };
  });

  setNoScrollBody();
</script>

<BaseSlide
  dialogs={props.dialogs}
  errorStep={props.errorStep}
  successStep={props.successStep}
  isValid={clicks === props.targetClicks}
  bgImage={props.bgImage}
  progressNum={clicks}
  progressTotal={props.targetClicks}
>
  <div
    class="centered"
    on:click={() => {
      if (isIntersecting) {
        clicks = clamp(clicks + 1, 0, props.targetClicks);
      }
    }}
    on:mousemove={handleMouseMove}
    on:touchmove={handleTouchMove}
  >
    <div class="target" bind:this={targetRef}>
      <svelte:component this={props.targetComponent} progress={clicks / props.targetClicks} />
      <div
        class="follow-mouse"
        style="left: {mouseX}px; top:{mouseY}px;"
        bind:clientWidth={dragElementWidth}
        bind:clientHeight={dragElementHeight}
        bind:this={dragRef}
      >
        <svelte:component this={props.toolComponent} {isIntersecting} />
        {#key clicks}
          {#if clicks > 0 && props.confettiProps}
            <Confetti {...props.confettiProps} />
          {/if}
        {/key}
      </div>
    </div>
  </div>
</BaseSlide>

<style>
  .centered {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .target {
    position: relative;
  }

  .follow-mouse {
    position: absolute;
    display: grid;
    place-items: center;
  }
</style>
