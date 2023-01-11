<script lang="ts">
  import { base } from '$app/paths';

  export let imageSrc: string;
</script>

<div style="background-image: url({imageSrc})" />

<style>
  div {
    width: 100px;
    height: 100px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>
