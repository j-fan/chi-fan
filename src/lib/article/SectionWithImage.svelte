<script lang="ts">
  import type { AosType } from './aos-types';
  import Section from './Section.svelte';
  import Image from './Image.svelte';

  export let aos: AosType | undefined = 'fade';
  export let imageSrc: string;
  export let alt: string;
  export let imageAlign: 'left' | 'right' = 'left';
</script>

<Section {aos} width="100%">
  <div class="content {imageAlign}">
    <div>
      <slot />
    </div>
    <div>
      <Image src={imageSrc} {alt} width="auto" />
    </div>
  </div>
</Section>

<style>
  .content {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .content > * {
    width: 50%;
    flex-grow: 0;
  }

  @media (max-width: 700px) {
    .content {
      flex-direction: column;
    }

    .content > * {
      width: 100%;
    }
  }
</style>
