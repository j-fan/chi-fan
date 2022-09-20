<script lang="ts">
  import { onMount, tick } from 'svelte';
  import type { DragSidesSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: DragSidesSlideType;
  let progress = 0.2;
  let mouseX = 0;
  let mouseY = 0;
  let dragElementWidth = 0;
  let dragElementHeight = 0;
  let targetRef: HTMLElement;
  let dragRef: HTMLElement;
  let isIntersecting = false;

  const handleMousemove = (event: MouseEvent) => {
    const targetBoundingBox = targetRef.getBoundingClientRect();
    mouseX = event.clientX - targetBoundingBox.x - dragElementWidth / 2;
    mouseY = event.clientY - targetBoundingBox.y - dragElementHeight / 2;
  };

  onMount(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry, i) => {
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
</script>

<BaseSlide
  dialogs={props.dialogs}
  errorStep={props.errorStep}
  successStep={props.successStep}
  isValid={true}
>
  <p>isIntersecting: {isIntersecting}</p>
  <div class="centered" on:mousemove={handleMousemove}>
    <div class="target" bind:this={targetRef}>
      <svelte:component this={props.targetComponent} {progress} />
      <div
        class="follow-mouse"
        style="left: {mouseX}px; top:{mouseY}px;"
        bind:clientWidth={dragElementWidth}
        bind:clientHeight={dragElementHeight}
        bind:this={dragRef}
      >
        <svelte:component this={props.dragComponent} />
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
  }
</style>
