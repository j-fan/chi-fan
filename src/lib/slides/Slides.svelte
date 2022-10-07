<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import { bounceOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { SlidesType } from './types';
  import SlideSwitch from './variations/SlideSwitch.svelte';

  export let slides: SlidesType;
  export let skipButtonUrl: string;

  let showSkip = false;
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

  onMount(() => {
    showSkip = true;
  });
</script>

{#key currentSlide}
  <div class="wrapper" in:fade={{ duration: 500 }}>
    <SlideSwitch
      props={{
        ...currentSlide,
        successStep
      }}
    />
    {#if showSkip}
      <div class="skip-button" in:fly={{ y: -20, easing: bounceOut, delay: 2000, duration: 600 }}>
        <Button href={skipButtonUrl}>Skip</Button>
      </div>
    {/if}
  </div>
{/key}

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: var(--c-white);
  }

  .skip-button {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
  }
</style>
