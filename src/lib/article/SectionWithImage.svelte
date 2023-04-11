<script lang="ts">
  import type { AosType } from './aos-types';
  import Section from './Section.svelte';
  import Image from './Image.svelte';

  export let aos: AosType | undefined = undefined;
  export let imageSrc: string;
  export let alt: string;
  export let imageAlign: 'left' | 'right' = 'left';
  export let caption: string | undefined = undefined;
  export let title: string | undefined = undefined;
</script>

<Section {aos} width="100%" {title}>
  <div class="content">
    {#if imageAlign === 'left'}
      <figure>
        <Image src={imageSrc} {alt} width="auto" />
        {#if caption}
          <figcaption>{caption}</figcaption>
        {/if}
      </figure>
      <div>
        <slot />
      </div>
    {:else}
      <div>
        <slot />
      </div>
      <figure>
        <Image src={imageSrc} {alt} width="auto" />
        {#if caption}
          <figcaption>{caption}</figcaption>
        {/if}
      </figure>
    {/if}
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

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  figcaption {
    color: var(--c-pink);
    text-align: center;
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
