<script lang="ts">
  import DialogBox from '../DialogBox.svelte';
  import ProgressBar from '../ProgressBar.svelte';
  import type { Dialog, Dialogs } from '../types';

  export let dialogs: Dialogs;
  export let isValid: boolean;
  export let errorStep: Dialog;
  export let successStep: Dialog;
  export let bgImage: string | undefined = undefined;
  export let progressNum: number | undefined = undefined;
  export let progressTotal: number | undefined = undefined;
</script>

<div class="wrapper">
  <div class="slide-content" style="background-image: url({bgImage});">
    {#if progressNum !== undefined && progressTotal !== undefined}
      <div class="progress">
        <ProgressBar {progressNum} {progressTotal} />
      </div>
    {/if}
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
    z-index: 100;
    width: 500px;
    max-width: 90%;
  }
</style>
