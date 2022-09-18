<script lang="ts">
  import type { DragSidesSlideType } from '../types';
  import BaseSlide from './BaseSlide.svelte';

  export let props: DragSidesSlideType;
</script>

<BaseSlide
  dialogs={props.dialogs}
  errorStep={props.errorStep}
  successStep={props.successStep}
  isValid={true}
/>

<style>
</style>
