<script lang="ts">
  import { base } from '$app/paths';
  import Slides from '$lib/slides/Slides.svelte';
  import SoundControls from '$lib/sound/SoundControls.svelte';

  let windowWidth = 9999;
  $: isMobile = windowWidth < 500;
</script>

<svelte:head>
  <title>Taro fried rice</title>
</svelte:head>
<svelte:window bind:innerWidth={windowWidth} />
<SoundControls src="{base}/sound/sugar-cane.mp3" />
<Slides
  skipButtonUrl="/taro-rice"
  slides={[
    {
      type: 'static',
      heroImage: `${base}/img/taro-rice/rice bowl.png`,
      alt: 'washing rice',
      successStep: {
        characterName: 'Mum',
        bodyText:
          'Firstly we need to wash and cook the rice. To do this, place your palm flat on the rice and make sure the water reaches your the beginning of your knuckles. That is the perfect amount of water). '
      }
    },
    {
      type: 'finished',
      heroImage: `${base}/img/taro-rice/completed.png`,
      title: '✨ Taro fried rice ✨',
      successStep: {
        characterName: 'Mum',
        bodyText: "Well done, you've made taro fried rice!",
        nextButton: { text: 'Done!', href: '/sugar-cane-water' }
      }
    }
  ]}
/>
