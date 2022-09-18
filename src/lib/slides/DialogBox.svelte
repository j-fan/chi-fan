<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import type { Dialogs } from './types';

  export let dialogs: Dialogs;

  let dialogStep = 0;
  if (dialogs.length === 0) {
    throw new Error('You must provide at least 1 dialog option');
  }
  $: currentDialog = dialogs[0];

  const handleClick = () => {
    dialogStep = dialogStep + 1;
    currentDialog.nextButton.action?.();

    if (dialogStep < dialogs.length) {
      currentDialog = dialogs[dialogStep];
    }
  };
</script>

<div class="float-bottom-wrapper">
  <div class="dialog">
    <h3 class="character-name">{currentDialog.characterName}</h3>
    <p>{currentDialog.bodyText}</p>
    <div class="button-wrapper">
      <Button on:click={handleClick}>{currentDialog.nextButton.text}</Button>
    </div>
  </div>
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
