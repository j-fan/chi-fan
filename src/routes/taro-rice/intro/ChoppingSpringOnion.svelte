<script lang="ts">
  import { base } from '$app/paths';
  import SingleChopItem from '../../../lib/slides/variations/SingleChopItem.svelte';

  const beforeChop = `${base}/img/taro-rice/spring-onion-3.png`;
  const afterChop = `${base}/img/taro-rice/chopped-spring-onion-zoomed.png`;
  export let picked = false;
</script>

<SingleChopItem {beforeChop} {afterChop} {picked} itemWidth="500px" />
