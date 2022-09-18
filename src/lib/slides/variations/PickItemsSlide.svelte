<script lang="ts">
  import type { PickItemsSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let slideProps: PickItemsSlideType;
  export let targetCount: number;
  export let totalItems: number;
  $: {
    if (totalItems < targetCount) {
      throw new Error('The target count must be less than the total items');
    }
  }

  let currentItemsPicked = 0;
</script>

<BaseSlide
  dialogs={slideProps.dialogs}
  errorStep={slideProps.errorStep}
  successStep={slideProps.successStep}
  isValid={true}
>
  {#each Array(totalItems) as _, index (index)}
    <slot name="item" />
  {/each}
</BaseSlide>

<style>
</style>
