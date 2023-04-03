<script lang="ts">
  import { base } from '$app/paths';
  import SingleChopItem from '$lib/slides/variations/SingleChopItem.svelte';

  const beforeChop = `${base}/img/live-lobster/lobster-head-2.png`;
  const afterChop = `${base}/img/live-lobster/lobster-head-3.png`;
  export let picked = false;
</script>

<SingleChopItem {beforeChop} {afterChop} {picked} itemWidth="500px" />
