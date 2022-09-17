<script lang="ts">
  export let width = 'auto';
  export let height = 'auto';
  export let isCentered = false;
</script>

<div
  class="card-wrapper"
  style="width: {width}; height:{height}; align-items:{isCentered ? 'center' : 'left'}"
>
  <slot />
</div>

<style>
  .card-wrapper {
    background-color: var(--c-white);
    padding: 1rem;

    border: var(--border-style);
    border-radius: var(--border-radius);
    box-shadow: var(--drop-shadow);

    display: flex;
    flex-direction: column;
  }
</style>
