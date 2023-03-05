<script lang="ts">
  import { base } from '$app/paths';
  import Slides from '$lib/slides/Slides.svelte';
  import ChoppingKnife from '../../../lib/tools/ChoppingKnife.svelte';
  import ChoppingTaro from './ChoppingTaro.svelte';

  let windowWidth = 9999;
  $: isMobile = windowWidth < 500;
</script>

<svelte:head>
  <title>Taro fried rice</title>
</svelte:head>
<svelte:window bind:innerWidth={windowWidth} />
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
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Mum',
          bodyText: 'After we peel the skin of the taro we can cut it into small wedges.',
          nextButton: { text: "Let's cut the taro" }
        },
        {
          characterName: 'Mum',
          bodyText:
            'Remember to wear gloves because my mum says that the skin will make your hands itchy.',
          nextButton: { text: 'Ok I got it!' }
        }
      ],
      errorStep: {
        characterName: 'Mum',
        bodyText: 'Keep going, we need taro chopped into wedges.'
      },
      successStep: {
        characterName: 'Mum',
        bodyText: "Looking good. Let's move onto the next ingredient.",
        nextButton: { text: "Let's continue" }
      },
      targetCount: 1,
      totalItems: 1,
      itemComponent: ChoppingTaro,
      bgImage: `${base}/img/board-bg.jpg`,
      toolComponent: ChoppingKnife,
      bottomPosition: 50
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
