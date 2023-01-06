<script lang="ts">
  import { base } from '$app/paths';
  export let isFullWidth = false;
  export let href: string | undefined = undefined;

  const width = isFullWidth ? '100%' : 'auto';
</script>

{#if href}
  <a href="{base}{href}" style="width: {width}">
    <button type="button" style="width: {width}">
      <slot />
    </button>
  </a>
{:else}
  <button type="button" style="width: {width}" on:click>
    <slot />
  </button>
{/if}

<style>
  button {
    background-color: var(--c-pink);
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: var(--border-style);
    border-radius: var(--border-radius);
    transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  }

  button:hover {
    box-shadow: var(--drop-shadow-sm);
    transform: translateY(-4px);
  }

  a,
  button {
    color: var(--c-black);
  }
</style>
