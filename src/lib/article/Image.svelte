<script lang="ts">
  export let src: string;
  export let alt: string;
  export let width = '100%';
  export let imageObjectFit: string | undefined = 'cover';
  export let imageBgColor: string | undefined = 'black';
</script>

<div class="image-wrapper" style="width: {width}">
  <img {src} {alt} style="--object-fit:{imageObjectFit}; --bg-color:{imageBgColor}" />
</div>

<style>
  .image-wrapper {
    height: 500px;
    flex-shrink: 0;
    position: relative;
    border-radius: 2rem;
    background-color: var(--bg-color);
    box-shadow: var(--drop-shadow-md);
    border: 2px solid var(--c-dark-green);
    margin-bottom: 1rem;
  }

  @media (max-width: 700px) {
    .image-wrapper {
      height: 400px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: var(--object-fit);
    border-radius: 2rem;
  }
</style>
