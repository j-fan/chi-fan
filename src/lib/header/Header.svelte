<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
</script>

<header>
  <nav data-sveltekit-prefetch>
    <ul>
      <li class:active={$page.url.pathname === '/'}>
        <a href="{base}/">Home</a>
      </li>
      <li class:active={$page.url.pathname === '/about'}>
        <a href="{base}/about">About</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 1;
  }

  nav {
    display: flex;
    justify-content: center;
    background-color: var(--c-white);
    width: fit-content;
    padding: 1rem;
    margin: 1rem;

    border-radius: var(--border-radius);
    border: var(--border-style);
    box-shadow: var(--drop-shadow-sm);
  }

  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 1rem;
  }

  a {
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--c-pink);
  }

  a:hover {
    color: var(--c-red);
  }

  li.active a {
    color: var(--c-red);
    text-decoration: underline;
  }
</style>
