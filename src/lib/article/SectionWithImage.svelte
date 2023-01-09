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
    <Image src={imageSrc} {alt} width="auto" />
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
  }

  .content.right {
    flex-direction: row;
  }

  .content.left {
    flex-direction: row-reverse;
  }

  @media (max-width: 700px) {
    .content.right,
    .content.left {
      flex-direction: column;
    }

    .content > * {
      width: 100%;
    }
  }
</style>
