<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import { fade } from 'svelte/transition';
  import Slide from './Slide.svelte';
  import type { Slides } from './types';

  const SLIDE_EXIT_DURATION = 500;

  export let slides: Slides;

  let isValid = false;
  let slideCount = 0;
  if (slides.length === 0) {
    throw new Error('You must provide at least 1 slide option');
  }
  $: currentSlide = slides[slideCount];

  const incrementSlide = () => {
    if (slideCount < slides.length - 1) {
      slideCount = slideCount + 1;
    }
  };

  $: successStep = currentSlide.successStep;
  $: {
    const successNext = currentSlide.successStep.nextButton;
    successStep = {
      ...currentSlide.successStep,
      nextButton: {
        text: successNext?.text || 'Ok',
        action: () => {
          successNext?.action?.();
          incrementSlide();
        }
      }
    };
  }
</script>

{#key currentSlide}
  <div
    class="wrapper"
    in:fade={{ duration: SLIDE_EXIT_DURATION, delay: SLIDE_EXIT_DURATION }}
    out:fade={{ duration: SLIDE_EXIT_DURATION }}
  >
    <Slide
      dialogs={currentSlide.dialogs}
      errorStep={currentSlide.errorStep}
      {successStep}
      {isValid}
    >
      <h1>Slide count: {slideCount}</h1>
      <Button
        on:click={() => {
          isValid = !isValid;
        }}>set isValid: {isValid}</Button
      >
    </Slide>
  </div>
{/key}

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: var(--c-white);
  }
</style>
