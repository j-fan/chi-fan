<script lang="ts">
  import type { Slide } from '../types';
  import ClickTimesSlide from './ClickTimesSlide.svelte';
  import DragDropSlide from './DragDropSlide.svelte';
  import FinishedSlide from './FinishedSlide.svelte';
  import PickItemsSlide from './PickItemsSlide.svelte';

  export let props: Slide;
</script>

{#if props.type === 'pick-items'}
  <PickItemsSlide {props} />
{:else if props.type === 'click-times'}
  <ClickTimesSlide {props} />
{:else if props.type === 'drag-drop'}
  <DragDropSlide {props} />
{:else if props.type === 'finished'}
  <FinishedSlide {props} />
{:else}
  <div>Unknown slide type</div>
{/if}

<style>
</style>
