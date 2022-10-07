<script lang="ts">
  import { randomRange, smoothRandomRange } from '$lib/utils/random';
  import type { PickItemsSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  const seed = 0.23;

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
  <div class="items-container">
    {#each Array(props.totalItems) as _, index (index)}
      <div
        class="item-wrapper"
        on:click={() => {
          handlePickItem(index);
        }}
        style="left: {smoothRandomRange(-30, 100, index, 0, seed)}%; top: {smoothRandomRange(
          0,
          50,
          index,
          1,
          seed
        )}%;"
      >
        <svelte:component this={props.itemComponent} picked={pickedItems.has(index)} />
      </div>
    {/each}
  </div>
</BaseSlide>

<style>
  .items-container {
    position: relative;
    width: 50%;
    height: 50%;
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
</style>
