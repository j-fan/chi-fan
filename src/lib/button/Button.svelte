<script lang="ts">
</script>

<button type="button">
  <slot />
</button>

<style>
  button {
    background-color: var(--c-pink);
    padding: 0.5rem;
    cursor: pointer;

    border: var(--border-style);
    border-radius: var(--border-radius);
  }

  button:hover {
    box-shadow: var(--drop-shadow);
  }
</style>
