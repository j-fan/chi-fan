<script lang="ts">
  import type { Slide } from '../types';
  import DragSidesSlide from './DragSidesSlide.svelte';
  import PickItemsSlide from './PickItemsSlide.svelte';

  export let props: Slide;
</script>

{#if props.type === 'pick-items'}
  <PickItemsSlide {props} />
{:else if props.type === 'drag-sides'}
  <DragSidesSlide {props} />
{:else}
  <div>Unknown slide type</div>
{/if}

<style>
</style>
