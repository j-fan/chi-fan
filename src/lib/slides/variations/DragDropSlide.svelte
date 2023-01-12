<script lang="ts">
  import { setNoScrollBody } from '$lib/utils/setNoScrollBody';
  import type { SvelteComponent } from 'svelte';
  import { Confetti } from 'svelte-confetti';
  import type { DragDropSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: DragDropSlideType;

  let currentDragItem: typeof SvelteComponent | null = null;
  let movedItem: typeof SvelteComponent | null = null;

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
      movedItem = currentDragItem;
    }
  };

  // Ditch drag and drop for mobile because if UX issues, use taps instead
  const handleTouch = (currentItem: typeof SvelteComponent) => (event: TouchEvent) => {
    const indexToRemove = pendingItems.indexOf(currentItem);
    pendingItems.splice(indexToRemove, 1);
    pendingItems = pendingItems;

    movedItems = [...movedItems, currentItem];
    movedItem = currentItem;
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
    <div class="pending-items-container">
      {#each pendingItems as pendingItem}
        <div
          class="pending-item"
          draggable={true}
          on:dragstart={handleDragStart(pendingItem)}
          on:touchend={handleTouch(pendingItem)}
        >
          <svelte:component this={pendingItem} />
        </div>
      {/each}
    </div>
    <div id="dropzone" on:dragover={handleDragOver} on:drop={handleDrop}>
      <svelte:component this={props.dropZone}>
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
    min-height: 150px;
    width: 600px;
    max-width: calc(100% - 3rem);
    gap: 0.5rem;
    padding: 1rem;

    border-radius: 1rem;
    border: 8px solid var(--c-light-green);
    box-shadow: var(--drop-shadow-md), var(--box-shadow-outline);
  }

  .pending-item {
    cursor: move;
    width: fit-content;
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
    width: 100%;
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
</style>
