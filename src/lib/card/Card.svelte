<script lang="ts">
</script>

<div class="card-wrapper">
  <slot />
</div>

<style>
  .card-wrapper {
    background-color: var(--c-white);
    padding: 1rem;

    border: var(--border-style);
    border-radius: var(--border-radius);

    display: flex;
    flex-direction: column;
  }
</style>
