<script lang="ts">
  import type { Slide } from '../types';
  import ClickTimesSlide from './ClickTimesSlide.svelte';
  import PickItemsSlide from './PickItemsSlide.svelte';

  export let props: Slide;
</script>

{#if props.type === 'pick-items'}
  <PickItemsSlide {props} />
{:else if props.type === 'click-times'}
  <ClickTimesSlide {props} />
{:else}
  <div>Unknown slide type</div>
{/if}

<style>
</style>
