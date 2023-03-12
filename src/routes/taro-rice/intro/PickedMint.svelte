<script lang="ts">
  import { base } from '$app/paths';
  import SingleChopItem from './SingleChopItem.svelte';

  const beforeChop = `${base}/img/taro-rice/mint.png`;
  const afterChop = `${base}/img/taro-rice/chopped-mint-leaves.png`;
  export let picked = false;
</script>

<SingleChopItem {beforeChop} {afterChop} {picked} itemWidth="350px" />
