<script lang="ts">
  import type { DragSidesSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: DragSidesSlideType;
  let progress = 0.2;
  let mouseX = 0;
  let mouseY = 0;
  let dragElementWidth = 0;

  const handleMousemove = (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };
</script>

<BaseSlide
  dialogs={props.dialogs}
  errorStep={props.errorStep}
  successStep={props.successStep}
  isValid={true}
>
  <div class="centered" on:mousemove={handleMousemove}>
    <svelte:component this={props.targetComponent} {progress} />
    <div
      class="follow-mouse"
      style="left: {mouseX - dragElementWidth / 2}px; top:{mouseY}px;"
      bind:clientWidth={dragElementWidth}
    >
      <svelte:component this={props.dragComponent} />
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

  .follow-mouse {
    position: absolute;
  }
</style>
