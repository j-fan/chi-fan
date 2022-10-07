<script lang="ts">
</script>

<article>
  <slot />
</article>

<style>
  article {
    padding: 6rem 1rem 0; /* Make space for header */
    max-width: 1000px;
    margin: 0 auto;
    min-height: 100%;
  }

  @media (max-width: 600px) {
    article {
      width: 100%;
    }
  }
</style>
