<script lang="ts">
  import { base } from '$app/paths';
  import SingleChopItem from '$lib/slides/variations/SingleChopItem.svelte';

  const beforeChop = `${base}/img/live-lobster/lobster1.png`;
  const afterChop = `${base}/img/live-lobster/lobster2.png`;
  export let picked = false;
</script>

<SingleChopItem {beforeChop} {afterChop} {picked} itemWidth="500px" />
