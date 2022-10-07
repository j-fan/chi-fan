<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import { fade } from 'svelte/transition';
  import type { SlidesType } from './types';
  import SlideSwitch from './variations/SlideSwitch.svelte';

  export let slides: SlidesType;

  let slideCount = 0;
  $: {
    if (slides.length === 0) {
      throw new Error('You must provide at least 1 slide option');
    }
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
        ...currentSlide.successStep.nextButton,
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
  <div class="wrapper" in:fade={{ duration: 500 }}>
    <SlideSwitch
      props={{
        ...currentSlide,
        successStep
      }}
    />
  </div>
{/key}

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: var(--c-white);
  }
</style>
