<script lang="ts">
  import { base } from '$app/paths';
  import SingleChopItem from '../../../lib/slides/variations/SingleChopItem.svelte';

  const beforeChop = `${base}/img/taro-rice/taro-1.png`;
  const afterChop = `${base}/img/taro-rice/sliced-taro.png`;
  export let picked = false;
</script>

<SingleChopItem {beforeChop} {afterChop} {picked} itemWidth="350px" />
