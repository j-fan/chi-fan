<script lang="ts">
  import { base } from '$app/paths';
  import SingleChopItem from '../../../lib/slides/variations/SingleChopItem.svelte';

  const beforeChop = `${base}/img/taro-rice/ham.png`;
  const afterChop = `${base}/img/taro-rice/ham-slices.png`;
  export let picked = false;
</script>

<SingleChopItem {beforeChop} {afterChop} {picked} itemWidth="270px" />
