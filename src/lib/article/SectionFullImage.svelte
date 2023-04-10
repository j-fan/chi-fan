<script lang="ts">
  import type { AosType } from './aos-types';
  import Section from './Section.svelte';
  import Image from './Image.svelte';

  export let aos: AosType | undefined = undefined;
  export let src: string;
  export let alt: string;
  export let caption: string | undefined = undefined;
</script>

<Section {aos} align="center" width="100%">
  <figure>
    <Image {src} {alt} />
    {#if caption}
      <figcaption>{caption}</figcaption>
    {/if}
  </figure>
</Section>

<style>
  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  figcaption {
    color: var(--c-pink);
    text-align: center;
  }
</style>
