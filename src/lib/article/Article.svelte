<script lang="ts">
  export let gap = '1rem';
</script>

<article style="gap:{gap};">
  <slot />
</article>

<style>
  article {
    padding: 6rem 1rem 0; /* Make space for header */
    max-width: 1000px;
    margin: 0 auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    article {
      width: 100%;
    }
  }
</style>
