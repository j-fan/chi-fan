<script lang="ts">
  import { base } from '$app/paths';
  import Slides from '$lib/slides/Slides.svelte';
  import Knife from './Knife.svelte';
  import PeelingSugarCane from './PeelingSugarCane.svelte';
  import Scrub from './Scrub.svelte';
  import SugarCane from './SugarCane.svelte';
  import WashingSugarCane from './WashingSugarCane.svelte';

  let windowWidth = 9999;
  $: isMobile = windowWidth < 500;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<Slides
  skipButtonUrl="/sugar-cane-water"
  slides={[
    {
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Grandpa',
          bodyText: 'First you need to pick some sugar cane',
          nextButton: { text: 'How many do I pick?' }
        },
        {
          characterName: 'Grandpa',
          bodyText: "Let's choose about 3 canes",
          nextButton: { text: 'Ok I got it!' }
        }
      ],
      errorStep: {
        characterName: 'Grandpa',
        bodyText: 'Keep going, we just need a few more!'
      },
      successStep: {
        characterName: 'Grandpa',
        bodyText: "These look good. Let's wash and peel them now.",
        nextButton: { text: 'Sounds good' }
      },
      targetCount: 3,
      totalItems: isMobile ? 3 : 8,
      itemComponent: SugarCane,
      bgImage: `${base}/img/sugar-cane-water/canes-background.png`
    },
    {
      type: 'click-times',
      dialogs: [
        {
          characterName: 'Grandpa',
          bodyText: 'Use a cleaver to shave the stalk to eliminate bumps.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Grandpa',
          bodyText:
            'Ensure you are seated on a low stool and the stalk is firmly implanted into the ground.',
          nextButton: { text: 'Ok I got it!' }
        }
      ],
      errorStep: {
        characterName: 'Grandpa',
        bodyText: 'Keep going, it is almost ready'
      },
      successStep: {
        characterName: 'Grandpa',
        bodyText: 'The look great now, now we need to scrub it further to clean it.',
        nextButton: { text: "Let's do it" }
      },
      targetComponent: PeelingSugarCane,
      dragComponent: Knife,
      targetClicks: 3,
      bgImage: `${base}/img/sugar-cane-water/canes-background.png`,
      confettiProps: {
        colorArray: ['#B6C48F', '#627620'],
        size: 15,
        amount: 25,
        duration: 800,
        x: [-1, 1],
        y: [-1, 1]
      }
    },
    {
      type: 'click-times',
      dialogs: [
        {
          characterName: 'Grandpa',
          bodyText:
            'Place the shaved stalks into a bucket of water and scratch away the remaining dirt from the stalks with steel wool.',
          nextButton: { text: 'I will do it!' }
        }
      ],
      errorStep: {
        characterName: 'Grandpa',
        bodyText: "It's almost clean, please continue scrubbing!"
      },
      successStep: {
        characterName: 'Grandpa',
        bodyText: 'That looks nice and clean now',
        nextButton: { text: "What's next", href: '/sugar-cane-water' }
      },
      targetComponent: WashingSugarCane,
      dragComponent: Scrub,
      targetClicks: 5,
      bgImage: `${base}/img/sugar-cane-water/canes-background.png`,
      confettiProps: {
        colorArray: ['#B6C48F', '#6A4E48'],
        rounded: true,
        size: 15,
        amount: 25,
        duration: 800,
        x: [-0.25, 0.25],
        y: [-0.75, 0]
      }
    }
  ]}
/>
