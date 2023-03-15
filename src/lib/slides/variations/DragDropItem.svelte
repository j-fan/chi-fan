<script lang="ts">
  export let imageSrc: string;
  export let label: string | undefined = undefined;
</script>

<div class="wrapper">
  <div class="cell" style="background-image: url({imageSrc})" />
  {#if label}
    <div class="label">{label}</div>
  {/if}
</div>

<style>
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
  }

  .cell {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .label {
    position: absolute;
    pointer-events: none;
    right: -1rem;
    top: -2rem;
    border: 2px solid var(--c-dark-green);
    padding: 0.5rem;
    border-radius: 1rem;
    width: min-content;
    background-color: var(--c-white);
    font-size: small;
    transition: all 0.3s ease;
  }
</style>
