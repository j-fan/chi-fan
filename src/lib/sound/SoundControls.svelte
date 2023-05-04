<script lang="ts">
  import { base } from '$app/paths';
  import { soundSrc } from './SoundStore';

  let audio: HTMLAudioElement | null = null;
  let interactionStarted = false;

  $: {
    if (interactionStarted) {
      playSound();
      audioUpdated();
    }
  }

  $: {
    // Restart audio when the sound src changes
    if ($soundSrc) {
      interactionStarted = false;
      audioUpdated();
    }
  }

  const playSound = () => {
    if (audio) {
      audio.play();
    }
  };

  const pauseSound = () => {
    if (audio) {
      audio.pause();
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
  src={$soundSrc}
/>
<div class="sound-controls">
  {#if audio?.paused}
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
    margin: 1rem;
    z-index: 101;
    background-color: white;
    border-radius: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
</style>
