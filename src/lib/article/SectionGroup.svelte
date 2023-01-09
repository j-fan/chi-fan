<script lang="ts">
  export let gap = '1rem';
</script>

<div style="gap:{gap}; margin-bottom: {gap};">
  <slot />
</div>

<style>
  div {
    padding: 0 2rem;
    max-width: 1000px;
    margin: 0 auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden; /* TODO: Bit of a hack to hide double scroll. Figure out root cause please */
  }

  @media (max-width: 600px) {
    div {
      width: 100%;
    }
  }
</style>
