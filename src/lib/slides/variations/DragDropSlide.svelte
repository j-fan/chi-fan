<script lang="ts">
  import { setNoScrollBody } from '$lib/utils/setNoScrollBody';
  import { onMount, type SvelteComponent } from 'svelte';
  import { Confetti } from 'svelte-confetti';
  import type { DragDropSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: DragDropSlideType;

  let currentDragItem: typeof SvelteComponent | null = null;
  let movedItem: typeof SvelteComponent | null = null;

  let pendingItems: Array<typeof SvelteComponent> = [...props.dragItems];
  let pendingDroppedItems: Array<typeof SvelteComponent> = props.droppedItems
    ? [...props.droppedItems]
    : [...props.dragItems];
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
      dropItemIntoDropzone(currentDragItem);
    }
  };

  // Ditch drag and drop for mobile because if UX issues, use taps instead
  const handleTouch = (currentItem: typeof SvelteComponent) => () => {
    dropItemIntoDropzone(currentItem);
  };

  const dropItemIntoDropzone = (currentItem: typeof SvelteComponent) => {
    const indexToRemove = pendingItems.indexOf(currentItem);
    pendingItems.splice(indexToRemove, 1);
    pendingItems = pendingItems;

    if (props.droppedItems) {
      const currentVariant = pendingDroppedItems[indexToRemove];
      pendingDroppedItems.splice(indexToRemove, 1);
      pendingDroppedItems = pendingDroppedItems;

      movedItems = [...movedItems, currentVariant];
      movedItem = currentVariant;
    } else {
      movedItems = [...movedItems, currentItem];
      movedItem = currentItem;
    }
  };

  onMount(() => {
    if (props.droppedItems && props.droppedItems.length !== props.dragItems.length) {
      throw new Error('If droppedItems array is used, it must have the same length as dragItems');
    }
  });
</script>

<BaseSlide
  dialogs={props.dialogs}
  errorStep={props.errorStep}
  successStep={props.successStep}
  isValid={movedItems.length === props.dragItems.length}
  bgImage={props.bgImage}
>
  <div class="slide-contents">
    <div class="pending-items-container">
      {#each pendingItems as pendingItem}
        <div
          class="pending-item"
          draggable={true}
          on:dragstart={handleDragStart(pendingItem)}
          on:touchend={handleTouch(pendingItem)}
          on:click={handleTouch(pendingItem)}
        >
          <svelte:component this={pendingItem} />
        </div>
      {/each}
    </div>
    <div id="dropzone" on:dragover={handleDragOver} on:drop={handleDrop}>
      <svelte:component this={props.dropZone}>
        {#if props.showMovedItemsInStack}
          <div class="moved-items-stack">
            {#each movedItems as item}
              <div class="moved-item">
                <svelte:component this={item} />
              </div>
            {/each}
          </div>
        {:else}
          {#key movedItem}
            <div class="item-in-dropzone">
              <svelte:component this={movedItem} />
            </div>
            <div class="splash">
              {#if props.confettiProps && movedItem !== null}
                <Confetti {...props.confettiProps} />
              {/if}
            </div>
          {/key}
        {/if}
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

  .pending-items-container {
    display: flex;
    flex-wrap: wrap;
    width: 900px;
    max-width: calc(100% - 3rem);
    gap: 0.5rem;
    padding: 1rem;
    min-height: 168px;

    border-radius: 1rem;
    border: 8px solid var(--c-light-green);
    box-shadow: var(--drop-shadow-md), var(--box-shadow-outline);
  }

  /* Hacky... but needed to preserve empty box height */
  @media (max-width: 600px) {
    .pending-items-container {
      min-height: 128px;
    }
  }

  .pending-item {
    cursor: move;
    width: fit-content;
    height: fit-content;
    border-radius: 1rem;
    border: var(--border-style);
    border-color: var(--c-light-green);
    width: 100px;
    height: 100px;
  }

  @keyframes bounce {
    0% {
      transform: translateY(-50px);
    }
    33% {
      transform: translateY(40px);
      opacity: 1;
    }
    66% {
      transform: translateY(-25px);
    }
    100% {
      transform: translateY(40px);
      opacity: 0;
    }
  }

  .item-in-dropzone {
    animation: bounce 0.7s ease-in;
    animation-fill-mode: both;
    pointer-events: none;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100px;
    height: 100px;
    margin-left: calc(50% - 50px);
  }

  #dropzone {
    position: relative;
  }

  .splash {
    pointer-events: none;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
  }

  .moved-items-stack {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .moved-item {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    .item-in-dropzone {
      width: 70px;
      height: 70px;
    }

    .pending-item {
      width: 70px;
      height: 70px;
    }
  }
</style>
