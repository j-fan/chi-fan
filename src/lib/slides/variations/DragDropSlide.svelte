<script lang="ts">
  import { setNoScrollBody } from '$lib/utils/setNoScrollBody';
  import type { SvelteComponent } from 'svelte';
  import { backIn } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import type { DragIntoSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: DragIntoSlideType;

  let currentDragItem: typeof SvelteComponent | null = null;

  let pendingItems: Array<typeof SvelteComponent> = [...props.dragItems];
  let movedItems: Array<typeof SvelteComponent> = [];

  setNoScrollBody();

  const handleDragStart = (currentItem: typeof SvelteComponent) => () => {
    currentDragItem = currentItem;
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

    if (!currentTarget || currentDragItem === null) {
      return;
    }

    if (currentTarget.id === 'dropzone') {
      const indexToRemove = pendingItems.indexOf(currentDragItem);
      pendingItems.splice(indexToRemove, 1);
      pendingItems = pendingItems;

      movedItems = [...movedItems, currentDragItem];
    }
  };

  // Ditch drag and drop for mobile because if UX issues, use taps instead
  const handleTouch = (currentItem: typeof SvelteComponent) => (event: TouchEvent) => {
    const indexToRemove = pendingItems.indexOf(currentItem);
    pendingItems.splice(indexToRemove, 1);
    pendingItems = pendingItems;

    movedItems = [...movedItems, currentItem];
  };
</script>

<BaseSlide
  dialogs={props.dialogs}
  errorStep={props.errorStep}
  successStep={props.successStep}
  isValid={movedItems.length === props.dragItems.length}
  bgImage={props.bgImage}
>
  <div class="slide-contents">
    <div class="drag-items-source">
      {#each pendingItems as dragItem}
        <div
          class="drag-item"
          draggable={true}
          on:dragstart={handleDragStart(dragItem)}
          on:touchend={handleTouch(dragItem)}
          out:fly={{ y: 50, duration: 500 }}
        >
          <svelte:component this={dragItem} />
        </div>
      {/each}
    </div>
    <div id="dropzone" on:dragover={handleDragOver} on:drop={handleDrop}>
      <svelte:component this={props.dropZone}>
        {#each movedItems as item}
          <div in:fly={{ y: -50, easing: backIn, duration: 600 }}>
            <svelte:component this={item} />
          </div>
        {/each}
      </svelte:component>
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
