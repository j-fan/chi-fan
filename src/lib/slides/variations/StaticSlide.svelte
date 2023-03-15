<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { sineIn } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import type { StaticSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: StaticSlideType;
  let showHeroImage = false;

  onMount(() => {
    showHeroImage = true;
  });
</script>

<BaseSlide
  dialogs={[{ bodyText: '', characterName: '' }]}
  errorStep={{ bodyText: '', characterName: '' }}
  successStep={props.successStep}
  isValid={true}
  bgImage={props.bgImage}
>
  <div class="center-content">
    {#if showHeroImage}
      <img
        in:fly={{ y: -50, duration: 300, easing: sineIn }}
        src={props.heroImage}
        alt={props.alt}
        style="--height-percent: {props.heightPercent}%"
      />
    {/if}
  </div>
</BaseSlide>

<style>
  .center-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-bottom: 5%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  img {
    height: var(--height-percent);
    object-fit: contain;
  }
</style>
