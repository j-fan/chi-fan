<script lang="ts">
  import { base } from '$app/paths';
  import Slides from '$lib/slides/Slides.svelte';
  import ChoppingKnife from '../../../lib/tools/ChoppingKnife.svelte';
  import ChoppingBologna from './ChoppingBologna.svelte';
  import ChoppingHam from './ChoppingHam.svelte';
  import ChoppingMushrooms from './ChoppingMushrooms.svelte';
  import ChoppingSpringOnion from './ChoppingSpringOnion.svelte';
  import ChoppingTaro from './ChoppingTaro.svelte';
  import PickedMint from './PickedMint.svelte';

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
      heroImage: `${base}/img/taro-rice/wash-rice.png`,
      alt: 'washing rice',
      successStep: {
        characterName: 'Mum',
        bodyText:
          'Firstly we need to wash and cook the rice. To do this, place your palm flat on the rice and make sure the water reaches your the beginning of your knuckles. That is the perfect amount of water).',
        nextButton: { text: 'Continue' }
      }
    },
    {
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Mum',
          bodyText: 'After we peel the skin of the taro we can cut it into small wedges.',
          nextButton: { text: 'What else?' }
        },
        {
          characterName: 'Mum',
          bodyText: 'Remember to wear gloves because the skin will make your hands itchy.',
          nextButton: { text: 'Ok I got it!' }
        }
      ],
      errorStep: {
        characterName: 'Mum',
        bodyText: 'Keep going, we need taro chopped into wedges.'
      },
      successStep: {
        characterName: 'Mum',
        bodyText: "Looking good. Let's cook the rice and taro next.",
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
      type: 'static',
      heroImage: `${base}/img/taro-rice/rice-cooker.png`,
      alt: 'washing rice',
      successStep: {
        characterName: 'Mum',
        bodyText:
          'Salt the rice with a teaspoon of salt then add your taro wedges into the rice. Add some water to wet the taro a little bit. Set it in the rice cooker and cook it.',
        nextButton: { text: 'Continue' }
      }
    },
    {
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Mum',
          bodyText:
            'Now it is time to prepare fresh herbs. Chop the spring onions into small pieces.',
          nextButton: { text: "Let's do it." }
        }
      ],
      errorStep: {
        characterName: 'Mum',
        bodyText: "Come on, let's slice the spring onion."
      },
      successStep: {
        characterName: 'Mum',
        bodyText: "Let's prepare the next herb, mint.",
        nextButton: { text: "Let's continue" }
      },
      targetCount: 1,
      totalItems: 1,
      itemComponent: ChoppingSpringOnion,
      bgImage: `${base}/img/board-bg.jpg`,
      toolComponent: ChoppingKnife,
      bottomPosition: 50
    },
    {
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Mum',
          bodyText: 'Pull the mint off their stems and chop it into small pieces.',
          nextButton: { text: 'Alright' }
        }
      ],
      errorStep: {
        characterName: 'Mum',
        bodyText: "Let's pick the mint leaves"
      },
      successStep: {
        characterName: 'Mum',
        bodyText: 'The next step involves your choice of mushrooms.',
        nextButton: { text: "Let's continue" }
      },
      targetCount: 1,
      totalItems: 1,
      itemComponent: PickedMint,
      bgImage: `${base}/img/board-bg.jpg`,
      toolComponent: ChoppingKnife,
      bottomPosition: 50
    },
    {
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Mum',
          bodyText: 'Here we have some king oyster mushrooms. Slice them into small pieces.',
          nextButton: { text: 'I can do that.' }
        }
      ],
      errorStep: {
        characterName: 'Mum',
        bodyText: 'Not all the mushrooms have been chopped yet.'
      },
      successStep: {
        characterName: 'Mum',
        bodyText: "Let's move onto the meats.",
        nextButton: { text: 'Ok!' }
      },
      targetCount: isMobile ? 1 : 3,
      totalItems: isMobile ? 1 : 3,
      itemComponent: ChoppingMushrooms,
      bgImage: `${base}/img/board-bg.jpg`,
      toolComponent: ChoppingKnife,
      bottomPosition: 40
    },
    {
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Mum',
          bodyText:
            "Cut the meats of choice, we will have multiple today. Let's chop up the vietnamese bologna (Chả lụa) first.",
          nextButton: { text: 'Got it!' }
        }
      ],
      errorStep: {
        characterName: 'Mum',
        bodyText: 'Please chop the vietnamese bologna (Chả lụa) into small pieces.'
      },
      successStep: {
        characterName: 'Mum',
        bodyText: 'Next is the ham.',
        nextButton: { text: 'Continue' }
      },
      targetCount: 1,
      totalItems: 1,
      itemComponent: ChoppingBologna,
      bgImage: `${base}/img/board-bg.jpg`,
      toolComponent: ChoppingKnife,
      bottomPosition: 50
    },
    {
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Mum',
          bodyText: 'Cut the ham in small slices, same as the bologna.',
          nextButton: { text: 'Got it!' }
        }
      ],
      errorStep: {
        characterName: 'Mum',
        bodyText: 'Please chop the ham into small pieces.'
      },
      successStep: {
        characterName: 'Mum',
        bodyText: 'Wait for the rice and taro to be cooked, then we are ready to stir fry.',
        nextButton: { text: "I can't wait!" }
      },
      targetCount: 1,
      totalItems: 1,
      itemComponent: ChoppingHam,
      bgImage: `${base}/img/board-bg.jpg`,
      toolComponent: ChoppingKnife,
      bottomPosition: 50
    },
    {
      type: 'finished',
      heroImage: `${base}/img/taro-rice/completed.png`,
      title: '☆ Taro fried rice ☆',
      successStep: {
        characterName: 'Mum',
        bodyText: "Well done, you've made taro fried rice!",
        nextButton: { text: 'Done!', href: '/taro-rice' }
      }
    }
  ]}
/>
