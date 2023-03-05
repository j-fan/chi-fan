<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { bounceOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import type { FinishedSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: FinishedSlideType;
  let showTitle = false;
  const spikyCircleImg = `${base}/img/spiky-circle.png`;

  onMount(() => {
    showTitle = true;
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
    {#if showTitle}
      <h1 in:fly={{ y: -50, duration: 800, delay: 200, easing: bounceOut }}>{props.title}</h1>
    {:else}
      <h1 class="title-placeholder">{'a'}</h1>
    {/if}
    <div class="content">
      <div class="spiky-circle" style="--spiky-bg-img:url({spikyCircleImg});" />
      <img src={props.heroImage} alt={props.title} />
    </div>
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
  }

  .content {
    width: 60%;
    height: 60%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }

  .spiky-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: var(--spiky-bg-img);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    animation: rotate 20s linear;
    animation-iteration-count: infinite;
    z-index: 1;
  }

  img {
    width: 50%;
    aspect-ratio: 900 / 769;
    z-index: 2;
    animation: bounce 1.5s ease;
    animation-iteration-count: infinite;
  }

  h1 {
    z-index: 2;
    color: var(--c-pink);
    /* -webkit-text-stroke: 2px white; */
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 3px 0 #000;
  }

  h1.title-placeholder {
    opacity: 0;
  }

  @media (max-width: 600px) {
    .content {
      width: 90%;
      height: 90%;
    }

    img {
      width: 80%;
    }
  }
</style>
