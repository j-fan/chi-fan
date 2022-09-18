<script lang="ts">
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
  <h2>items picked: {pickedItems.size}</h2>
  {#each Array(props.totalItems) as _, index (index)}
    <div
      class="item-wrapper"
      on:click={() => {
        handlePickItem(index);
      }}
    >
      <svelte:component this={props.itemComponent} picked={pickedItems.has(index)} />
    </div>
  {/each}
</BaseSlide>

<style>
  .item-wrapper {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    user-select: none;
  }
</style>
