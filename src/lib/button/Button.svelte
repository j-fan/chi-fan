<script lang="ts">
</script>

<button type="button">
  <slot />
</button>

<style>
  button {
    background-color: var(--c-pink);
    border-radius: 1rem;
    padding: 0.5rem;
    border: 1px solid var(--c-black);
    cursor: pointer;
  }

  button:hover {
    box-shadow: 4px 4px 0px 1px rgba(0, 0, 0, 0.3);
  }
</style>
