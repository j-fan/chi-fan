<script lang="ts">
  import { setNoScrollBody } from '$lib/utils/setNoScrollBody';
  import type { DragIntoSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: DragIntoSlideType;

  let itemsMoved = 0;
  let sourceRef: HTMLElement | null = null;
  let currentlyDraggedItem: HTMLElement | null = null;

  setNoScrollBody();

  const handleDragStart = (event: DragEvent) => {
    currentlyDraggedItem = event.currentTarget as HTMLElement;
  };

  const handleDragOver = (event: DragEvent) => {
    // prevent default to allow drop
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged element to the selected drop target
    const currentTarget = event?.currentTarget as HTMLElement;
    const destination = event?.target as HTMLElement;

    console.log(destination, currentlyDraggedItem);

    if (!destination || !currentlyDraggedItem || !sourceRef) {
      return;
    }

    if (currentTarget.id === 'dropzone') {
      sourceRef.removeChild(currentlyDraggedItem);
      destination.appendChild(currentlyDraggedItem);
      itemsMoved++;
    }
  };
</script>

<BaseSlide
  dialogs={props.dialogs}
  errorStep={props.errorStep}
  successStep={props.successStep}
  isValid={itemsMoved === props.dragItems.length}
  bgImage={props.bgImage}
>
  <div class="slide-contents">
    <div bind:this={sourceRef} class="drag-items-source">
      {#each props.dragItems as dragItem}
        <div class="drag-item" draggable={true} on:dragstart={handleDragStart}>
          <svelte:component this={dragItem} />
        </div>
      {/each}
    </div>
    <div id="dropzone" on:dragover={handleDragOver} on:drop={handleDrop}>
      <svelte:component this={props.dropZone} />
    </div>
  </div>
</BaseSlide>

<style>
  .slide-contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .drag-items-source {
    display: flex;
    min-height: 150px;
    width: 600px;
    max-width: calc(100% - 3rem);
    gap: 0.5rem;
    padding: 1rem;

    border-radius: 1rem;
    border: 8px solid var(--c-light-green);
    box-shadow: var(--drop-shadow-md), var(--box-shadow-outline);
  }

  .drag-item {
    cursor: move;
    width: fit-content;
  }
</style>
