<script lang="ts">
  import { base } from '$app/paths';
  import { soundSrc as externalSoundSrc } from './SoundStore';
  import { tweened } from 'svelte/motion';
  import { linear } from 'svelte/easing';

  let audio: HTMLAudioElement | null = null;
  let interactionStarted = false;
  let soundIsPaused = true;
  let src = $externalSoundSrc;
  const audioFadeTime = 2000;

  const tweenedVolume = tweened(0, {
    duration: audioFadeTime,
    easing: linear
  });

  $: {
    if (interactionStarted) {
      audioUpdated();
      playSound();
    }
  }

  $: {
    // Restart audio when the sound src changes
    if ($externalSoundSrc) {
      pauseSound();

      setTimeout(() => {
        src = $externalSoundSrc;
        interactionStarted = false;
      }, audioFadeTime);
    }
  }

  $: {
    if (audio) {
      audio.volume = $tweenedVolume;
    }
  }

  const playSound = () => {
    if (audio) {
      audio.play();
      tweenedVolume.set(1);
      soundIsPaused = false;
    }
  };

  const pauseSound = () => {
    if (audio) {
      tweenedVolume.set(0);
      soundIsPaused = true;
    }
  };

  const audioUpdated = () => {
    audio = audio;
  };

  const setInteractionStarted = () => {
    interactionStarted = true;
  };
</script>

<svelte:window on:click={setInteractionStarted} on:touchstart={setInteractionStarted} />
<audio
  bind:this={audio}
  on:pause={audioUpdated}
  on:play={audioUpdated}
  on:ended={audioUpdated}
  loop
  {src}
/>
<div class="sound-controls">
  {#if audio?.paused || soundIsPaused}
    <button on:click|stopPropagation={playSound}>
      <img src="{base}/img/speaker-off.png" alt="sound off" />
    </button>
  {:else}
    <button on:click|stopPropagation={pauseSound}>
      <img src="{base}/img/speaker-on.png" alt="sound on" />
    </button>
  {/if}
</div>

<style>
  .sound-controls {
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    z-index: 101;
  }

  img {
    width: 40px;
    height: 40px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
</style>
