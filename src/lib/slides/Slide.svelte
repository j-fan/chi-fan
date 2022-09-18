<script lang="ts">
  import DialogBox from './DialogBox.svelte';
  import type { Dialogs } from './types';

  export let dialogs: Dialogs;
</script>

<div class="wrapper">
  <slot />
  <DialogBox {dialogs} />
</div>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: var(--c-white);
  }
</style>
