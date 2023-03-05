<script lang="ts">
  import { base } from '$app/paths';
  import SingleChopItem from './SingleChopItem.svelte';

  const beforeChop = `${base}/img/taro-rice/taro-1.png`;
  const afterSplit = `${base}/img/taro-rice/sliced-taro.png`;
  export let picked = false;
</script>

<SingleChopItem {beforeChop} {afterSplit} {picked} itemWidth="350px" />
