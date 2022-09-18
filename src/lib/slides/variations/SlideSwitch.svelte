<script lang="ts">
  import type { Slide } from '../types';
  import PickItemsSlide from './PickItemsSlide.svelte';

  export let slideProps: Slide;
</script>

{#if slideProps.type === 'pick-items'}
  <PickItemsSlide {slideProps} totalItems={10} targetCount={3}>
    <div slot="item">item</div></PickItemsSlide
  >
{:else if slideProps.type === 'drag-sides'}
  <div>Drag items slide type</div>
{:else}
  <div>Unknown slide type</div>
{/if}

<style>
</style>
