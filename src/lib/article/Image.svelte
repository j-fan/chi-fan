<script lang="ts">
  export let src: string;
  export let alt: string;
  export let width = '100%';
</script>

<div class="image-wrapper" style="width: {width}">
  <img {src} {alt} />
</div>

<style>
  .image-wrapper {
    height: 500px;
    flex-shrink: 0;
    position: relative;
    border-radius: 2rem;
    background-color: var(--c-pink);
    box-shadow: var(--drop-shadow-md);
    border: 2px solid var(--c-dark-green);
  }

  @media (max-width: 700px) {
    .image-wrapper {
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
