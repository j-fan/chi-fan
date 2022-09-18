<script lang="ts">
  import type { DragSidesSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: DragSidesSlideType;
  let progress = 0.2;
</script>

<BaseSlide
  dialogs={props.dialogs}
  errorStep={props.errorStep}
  successStep={props.successStep}
  isValid={true}
>
  <div class="content">
    <svelte:component this={props.targetComponent} {progress} />
  </div>
</BaseSlide>

<style>
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
