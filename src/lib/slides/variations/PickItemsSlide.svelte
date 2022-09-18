<script lang="ts">
  import { randomRange } from '$lib/utils/random';
  import type { PickItemsSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: PickItemsSlideType;

  $: {
    if (props.totalItems < props.targetCount) {
      throw new Error('The target count must be less than the total items');
    }
  }

  let pickedItems = new Set();

  const handlePickItem = (itemId: number) => {
    if (pickedItems.has(itemId)) {
      pickedItems.delete(itemId);
    } else {
      pickedItems.add(itemId);
    }
    pickedItems = pickedItems;
  };
</script>

<BaseSlide
  dialogs={props.dialogs}
  errorStep={props.errorStep}
  successStep={props.successStep}
  isValid={pickedItems.size >= props.targetCount}
>
  <div class="slide-content">
    <div class="items-container">
      <h2>items picked: {pickedItems.size}</h2>
      {#each Array(props.totalItems) as _, index (index)}
        <div
          class="item-wrapper"
          on:click={() => {
            handlePickItem(index);
          }}
          style="left: {randomRange(0, 100)}%; top: {randomRange(0, 100)}%;"
        >
          <svelte:component this={props.itemComponent} picked={pickedItems.has(index)} />
        </div>
      {/each}
    </div>
  </div>
</BaseSlide>

<style>
  .slide-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .items-container {
    position: relative;
    width: 50%;
    height: 50%;
  }
  .item-wrapper {
    position: absolute;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    user-select: none;
  }
</style>
