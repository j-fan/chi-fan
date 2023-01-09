<script lang="ts">
  import DialogBox from '../DialogBox.svelte';
  import type { Dialog, Dialogs } from '../types';

  export let dialogs: Dialogs;
  export let isValid: boolean;
  export let errorStep: Dialog;
  export let successStep: Dialog;
  export let bgImage: string | undefined = undefined;
  export let progressNum: number;
  export let progressTotal: number;
</script>

<div class="wrapper">
  <div class="slide-content" style="background-image: url({bgImage});">
    <p class="progress">Progress: {progressNum} / {progressTotal}</p>
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
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 80% contain;
    background-position: center;
  }

  .progress {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
