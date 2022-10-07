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
    <div class="image-wrapper {imageAlign}">
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
    width: 40%;
    height: 400px;
    flex-shrink: 0;
    position: relative;
    border-radius: 2rem;
    background-color: var(--c-pink);
  }

  .image-wrapper::before {
    content: '';
    border: var(--c-pink) solid 5px;
    border-radius: 2rem;
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .image-wrapper.left::before {
    bottom: 1rem;
    right: 1rem;
  }

  .image-wrapper.right::before {
    bottom: 1rem;
    left: 1rem;
  }

  @media (max-width: 700px) {
    .content.right,
    .content.left {
      flex-direction: column;
    }

    .image-wrapper {
      width: 80%;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
</style>
