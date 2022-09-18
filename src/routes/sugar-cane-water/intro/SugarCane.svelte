<script lang="ts">
  export let picked = false;
</script>

<p class="wrapper" class:picked>sugar cane</p>

<style>
  .wrapper {
    border: var(--border-style);
    border-radius: var(--border-radius);
    padding: 1rem;
    background-color: var(--c-light-green);
    transition: all 300ms ease;
  }

  .wrapper.picked {
    transform: scale(1.3);
    filter: brightness(0.8);
  }
</style>
