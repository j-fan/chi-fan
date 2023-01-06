<script lang="ts">
  import Section from './Section.svelte';

  type Item = {
    label: string;
    src: string;
  };

  export let itemsImageSrc: Item[];
</script>

<Section aos="fade-up" width="100%">
  <h2>Tools & ingredients</h2>
  <div class="grid-wrapper">
    {#each itemsImageSrc as item}
      <div class="cell">
        <img src={item.src} alt="" />
        <div class="label">{item.label}</div>
      </div>
    {/each}
  </div>
</Section>

<style>
  h2 {
    color: var(--c-pink);
    margin-bottom: 1rem;
  }
  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
    border: 8px solid var(--c-light-green);
    box-shadow: var(--drop-shadow-md), var(--box-shadow-outline);
  }

  .cell {
    height: 150px;

    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0 -1px -1px 0;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: var(--c-white);

    border-radius: 1rem;
    border: var(--border-style);
  }

  .cell:hover {
    transform: scale(1.2);
    box-shadow: var(--drop-shadow-sm);
    z-index: 1;
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }

  .label {
    position: absolute;
    opacity: 0;
    user-select: none;
    transition: all 0.3s ease;
    background-color: var(--c-white);
    right: 0;
    top: 0;
    transform: translateY(-50%) translateX(50%);
    border: 2px solid var(--c-dark-green);
    padding: 0.5rem;
    border-radius: 1rem;
    width: min-content;
  }

  .cell:hover .label {
    opacity: 1;
  }
</style>
