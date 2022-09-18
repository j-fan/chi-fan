<script lang="ts">
  export let progress = 0;
</script>

<p class="wrapper" style="filter: brightness({1 - progress})">sugar cane</p>

<style>
  .wrapper {
    border: var(--border-style);
    border-radius: var(--border-radius);
    padding: 1rem;
    background-color: var(--c-light-green);
    transition: all 300ms ease;
    width: 60px;
    height: 400px;
  }
</style>
