<script lang="ts">
  import DialogBox from '../DialogBox.svelte';
  import type { Dialog, Dialogs } from '../types';

  export let dialogs: Dialogs;
  export let isValid: boolean;
  export let errorStep: Dialog;
  export let successStep: Dialog;
</script>

<div class="wrapper">
  <div class="slide-content">
    <slot />
  </div>
  <DialogBox {dialogs} {isValid} {errorStep} {successStep} />
</div>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: var(--c-white);
  }

  .slide-content {
    width: 100%;
    height: 100%;
  }
</style>
