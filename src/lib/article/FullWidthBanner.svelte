<script lang="ts">
  import type { AosType } from './aos-types';
  import Section from './Section.svelte';

  export let src: string;
  export let alt: string;
</script>

<Section aos="none" width="100%"><img {src} {alt} /></Section>

<style>
  img {
    object-fit: cover;
    height: 70vh;
    width: 100%;
    object-position: center;
    border-bottom: 3px solid black;
  }

  @media (max-width: 600px) {
    img {
      height: 50vh;
    }
  }
</style>
