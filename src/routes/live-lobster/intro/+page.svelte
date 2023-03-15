<script lang="ts">
  import { base } from '$app/paths';
  import Slides from '$lib/slides/Slides.svelte';

  let windowWidth = 9999;
  $: isMobile = windowWidth < 500;
</script>

<svelte:head>
  <title>Taro fried rice</title>
</svelte:head>
<svelte:window bind:innerWidth={windowWidth} />
<Slides
  skipButtonUrl="/live-lobster"
  slides={[
    {
      type: 'static',
      heroImage: `${base}/img/live-lobster/lobster1.png`,
      alt: 'washing rice',
      successStep: {
        characterName: 'Dad',
        bodyText: 'Example text',
        nextButton: { text: 'Continue' }
      },
      heightPercent: 70
    },
    {
      type: 'finished',
      heroImage: `${base}/img/taro-rice/completed.png`,
      title: '☆ Live lobster stir fry ☆',
      successStep: {
        characterName: 'Dad',
        bodyText: "Well done, you've made live lobster stir fry!",
        nextButton: { text: 'Done!', href: '/taro-rice' }
      }
    }
  ]}
/>
