<script lang="ts">
  import type { Slide } from '../types';
  import BaseSlide from './BaseSlide.svelte';
  import PickItemsSlide from './PickItemsSlide.svelte';

  export let props: Slide;
</script>

{#if props.type === 'pick-items'}
  <PickItemsSlide {props} />
{:else if props.type === 'drag-sides'}
  <BaseSlide {...props} isValid={true}>
    <h2>TODO: implement "drag sides" slide type</h2>
  </BaseSlide>
{:else}
  <div>Unknown slide type</div>
{/if}

<style>
</style>
