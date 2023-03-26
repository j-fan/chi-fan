<script lang="ts">
  import { base } from '$app/paths';
  import Slides from '$lib/slides/Slides.svelte';

  let windowWidth = 9999;
  $: isMobile = windowWidth < 500;
</script>

<svelte:head>
  <title>Live lobster stir fry</title>
</svelte:head>
<svelte:window bind:innerWidth={windowWidth} />
<Slides
  skipButtonUrl="/live-lobster"
  slides={[
    {
      type: 'static',
      heroImage: `${base}/img/live-lobster/lobster-labelled.png`,
      alt: 'Parts of the lobster',
      dialogs: [
        {
          characterName: 'Dad',
          bodyText:
            'Identify the parts of the lobster. There are two main sections, the carapace and abdomen.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText:
            'The carapace includes the head and middle section (thorax) where the walking legs attach.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText:
            'The abdomen is the segmented section from the end of the carapace and down to the tip of the tail. ',
          nextButton: { text: 'Continue' }
        }
      ],
      successStep: {
        characterName: 'Dad',
        bodyText: 'The spiny lobster that is common in Australia has no claws.',
        nextButton: { text: 'Got it!' }
      },
      heightPercent: 80
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
