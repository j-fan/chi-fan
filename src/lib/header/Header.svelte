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
  }

  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    padding: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 1rem;
  }

  a:hover {
    text-decoration: underline;
  }

  li.active a {
    color: red;
  }

  a {
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
  }
</style>
