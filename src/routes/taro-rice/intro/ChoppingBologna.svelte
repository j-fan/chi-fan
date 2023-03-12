<script lang="ts">
  import { base } from '$app/paths';
  import SingleChopItem from './SingleChopItem.svelte';

  const beforeChop = `${base}/img/taro-rice/bologna.png`;
  const afterChop = `${base}/img/taro-rice/bologna-slices.png`;
  export let picked = false;
</script>

<SingleChopItem {beforeChop} {afterChop} {picked} itemWidth="270px" />
