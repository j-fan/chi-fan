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
    box-shadow: 4px 4px 0px 1px rgba(0, 0, 0, 0.3);
  }
</style>
