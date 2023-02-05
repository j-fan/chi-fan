<script lang="ts">
  export let imageSrc: string;
  export let label: string = 'label';
</script>

<div class="wrapper">
  <div class="cell" style="background-image: url({imageSrc})" />
  <div class="label">{label}</div>
</div>

<style>
  .wrapper {
    position: relative;
  }

  .cell {
    width: 100px;
    height: 100px;
    margin: 0.5rem;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (max-width: 600px) {
    .cell {
      width: 60px;
      height: 60px;
    }
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
