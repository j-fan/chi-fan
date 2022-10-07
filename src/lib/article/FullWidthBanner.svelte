<script lang="ts">
  import type { AosType } from './aos-types';
  import Section from './Section.svelte';

  export let aos: AosType | undefined = undefined;
  export let src: string;
  export let alt: string;
</script>

<Section {aos} width="100%"><img {src} {alt} /></Section>

<style>
  img {
    object-fit: cover;
    height: 70vh;
    width: 100%;
    object-position: center;
  }
</style>
