<script lang="ts">
  import { clamp } from '$lib/utils/math';

  export let progressNum = 0;
  export let progressTotal = 1;
  export let width = 100;

  let progressWrapper: HTMLDivElement | null = null;
  const padding = 4;

  $: progress = clamp(progressNum / progressTotal + 0.08, 0, 1);
  $: progressWrapperWidth = progressWrapper ? progressWrapper.clientWidth - padding * 2 : 0;
  $: progressBarWidth = progressWrapperWidth * progress;
</script>

<div class="wrapper">
  <div
    bind:this={progressWrapper}
    class="progress-wrapper"
    style="--wrapper-width: {width}%; --padding:{padding}px;"
  >
    <div class="progress-text">Progress: {progressNum} / {progressTotal}</div>
    <div class="progress-bar" style="--bar-width: {progressBarWidth}px;" />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-wrapper {
    width: var(--wrapper-width);
    border: var(--border-style);
    height: 45px;
    padding: var(--padding);
    border-radius: 20px;
    background-color: var(--c-white);
    box-shadow: var(--drop-shadow-sm);
  }

  @keyframes barberPole {
    100% {
      background-position: 56px 0%; /* 56px is exactly twice bg image size */
    }
  }

  .progress-bar {
    width: var(--bar-width);
    height: 100%;
    border-radius: 20px;
    transition: width ease 0.4s;
    background: repeating-linear-gradient(
      -45deg,
      var(--c-teal),
      var(--c-teal) 10px,
      var(--c-teal-lighter) 10px,
      var(--c-teal-lighter) 20px
    );
    background-size: 28px 28px; /* Manually computed to match stripe dimensions above*/
    animation: barberPole 3s linear infinite;
  }

  .progress-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
