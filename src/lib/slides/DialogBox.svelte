<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import { tick } from 'svelte';
  import { fly } from 'svelte/transition';
  import type { Dialog, Dialogs } from './types';

  export let dialogs: Dialogs;
  export let isValid: boolean;
  export let errorStep: Dialog;
  export let successStep: Dialog;

  let dialogStep = 0;
  $: {
    if (dialogs.length === 0) {
      throw new Error('You must provide at least 1 dialog option');
    }
  }
  $: currentDialog = dialogs[0];
  $: {
    // Ensure currentDialog reacts to the isValid prop
    if (dialogStep === dialogs.length) {
      currentDialog = isValid ? successStep : errorStep;
      tick();
    }
  }

  const handleClick = () => {
    currentDialog.nextButton?.action?.();

    if (dialogStep < dialogs.length - 1) {
      dialogStep = dialogStep + 1;
      currentDialog = dialogs[dialogStep];
    } else if (dialogStep === dialogs.length - 1) {
      dialogStep = dialogStep + 1;
    }
  };
</script>

<div class="float-bottom-wrapper">
  {#key currentDialog}
    <div class="dialog" in:fly={{ y: 20, duration: 400 }}>
      <h3 class="character-name">{currentDialog.characterName}</h3>
      <p>{currentDialog.bodyText}</p>
      <div class="button-wrapper">
        {#if currentDialog.nextButton}
          <Button on:click={handleClick}>{currentDialog.nextButton.text}</Button>
        {/if}
      </div>
    </div>
  {/key}
</div>

<style>
  .float-bottom-wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .dialog {
    position: relative;
    background-color: var(--c-white);
    border-radius: var(--border-radius);
    border: 8px solid var(--c-light-green);
    outline: var(--border-width) solid var(--c-dark-green);
    box-shadow: var(--drop-shadow-md);
    margin: 2rem;
    padding: 1rem;
    padding-top: 2.5rem;
    width: 70vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all 500ms ease;
  }

  @media (max-width: 600px) {
    .dialog {
      margin: 1rem;
      width: 100%;
    }
  }

  .character-name {
    background-color: var(--c-white);
    border: 8px solid var(--c-light-green);
    outline: var(--border-width) solid var(--c-dark-green);
    border-radius: var(--border-radius);
    width: fit-content;
    padding: 0.5rem;

    position: absolute;
    top: 0;
    left: 1rem;
    transform: translateY(-60%);
  }

  .button-wrapper {
    align-self: end;
  }
</style>
