<script lang="ts">
</script>

<div class="card-wrapper">
  <slot />
</div>

<style>
  .card-wrapper {
    background-color: var(--c-white);
    border-radius: 1rem;
    padding: 1rem;
    border: 1px solid var(--c-black);

    display: flex;
    flex-direction: column;
  }
</style>
