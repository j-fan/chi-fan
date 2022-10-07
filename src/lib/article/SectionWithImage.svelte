<script lang="ts">
  import type { AosType } from './aos-types';
  import Section from './Section.svelte';

  export let aos: AosType | undefined = 'fade';
  export let imageSrc: string;
  export let alt: string;
  export let imageAlign: 'left' | 'right' = 'left';
</script>

<Section {aos}>
  <div class="content {imageAlign}">
    <slot />
    <div class="image-wrapper">
      <img src={imageSrc} {alt} />
    </div>
  </div>
</Section>

<style>
  .content {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .content.right {
    flex-direction: row;
  }

  .content.left {
    flex-direction: row-reverse;
  }

  .image-wrapper {
    width: 50%;
    height: 500px;
    flex-shrink: 0;
    position: relative;
    border-radius: 2rem;
    background-color: var(--c-pink);
    box-shadow: var(--drop-shadow-md);
    border: 2px solid var(--c-dark-green);
  }

  .image-wrapper::before {
    content: '';
    border: var(--c-pink) solid 5px;
    border-radius: 2rem;
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 1rem;
    right: 1rem;
  }

  @media (max-width: 700px) {
    .content.right,
    .content.left {
      flex-direction: column;
    }

    .image-wrapper {
      width: 90%;
      height: 400px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
</style>
