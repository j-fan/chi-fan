<script lang="ts">
  import { base } from '$app/paths';
  import Slides from '$lib/slides/Slides.svelte';
  import CuttingSugarCane from './CuttingSugarCane.svelte';
  import PeelingSugarCane from './PeelingSugarCane.svelte';
  import Scrub from './Scrub.svelte';
  import Shears from './Shears.svelte';
  import SugarCane from './SugarCane.svelte';
  import WashingSugarCane from './WashingSugarCane.svelte';
  import ChoppingKnife from './ChoppingKnife.svelte';
  import PeelingKnife from './PeelingKnife.svelte';
  import SplittingSugarCane from './SplittingSugarCane.svelte';
  import BoilingPot from './BoilingPot.svelte';
  import Carrot from './Carrot.svelte';

  let windowWidth = 9999;
  $: isMobile = windowWidth < 500;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<Slides
  skipButtonUrl="/sugar-cane-water"
  slides={[
    // {
    //   type: 'pick-items',
    //   dialogs: [
    //     {
    //       characterName: 'Grandpa',
    //       bodyText: 'First you need to pick some sugar cane',
    //       nextButton: { text: 'How many do I pick?' }
    //     },
    //     {
    //       characterName: 'Grandpa',
    //       bodyText: "Let's choose about 3 canes",
    //       nextButton: { text: 'Ok I got it!' }
    //     }
    //   ],
    //   errorStep: {
    //     characterName: 'Grandpa',
    //     bodyText: 'Keep going, we just need a few more!'
    //   },
    //   successStep: {
    //     characterName: 'Grandpa',
    //     bodyText: "These look good. Let's wash and peel them now.",
    //     nextButton: { text: 'Sounds good' }
    //   },
    //   targetCount: 3,
    //   totalItems: isMobile ? 3 : 8,
    //   itemComponent: SugarCane,
    //   bgImage: `${base}/img/sugar-cane-water/canes-background.png`,
    //   bottomPosition: 5,
    //   allowToggle: true
    // },
    // {
    //   type: 'click-times',
    //   dialogs: [
    //     {
    //       characterName: 'Grandpa',
    //       bodyText: 'Use a cleaver to shave the stalk to eliminate bumps.',
    //       nextButton: { text: 'Continue' }
    //     },
    //     {
    //       characterName: 'Grandpa',
    //       bodyText:
    //         'Ensure you are seated on a low stool and the stalk is firmly implanted into the ground.',
    //       nextButton: { text: 'Ok I got it!' }
    //     }
    //   ],
    //   errorStep: {
    //     characterName: 'Grandpa',
    //     bodyText: 'Keep going, it is almost ready'
    //   },
    //   successStep: {
    //     characterName: 'Grandpa',
    //     bodyText: 'The look great now, now we need to scrub it further to clean it.',
    //     nextButton: { text: "Let's do it" }
    //   },
    //   targetComponent: PeelingSugarCane,
    //   toolComponent: PeelingKnife,
    //   targetClicks: 3,
    //   bgImage: `${base}/img/sugar-cane-water/canes-background.png`,
    //   confettiProps: {
    //     colorArray: ['#B6C48F', '#627620'],
    //     size: 15,
    //     amount: 25,
    //     duration: 800,
    //     x: [-1, 1],
    //     y: [-1, 1]
    //   }
    // },
    // {
    //   type: 'click-times',
    //   dialogs: [
    //     {
    //       characterName: 'Grandpa',
    //       bodyText:
    //         'Place the shaved stalks into a bucket of water and scratch away the remaining dirt from the stalks with steel wool.',
    //       nextButton: { text: 'I will do it!' }
    //     }
    //   ],
    //   errorStep: {
    //     characterName: 'Grandpa',
    //     bodyText: "It's almost clean, please continue scrubbing!"
    //   },
    //   successStep: {
    //     characterName: 'Grandpa',
    //     bodyText: 'That looks nice and clean now',
    //     nextButton: { text: "What's next" }
    //   },
    //   targetComponent: WashingSugarCane,
    //   toolComponent: Scrub,
    //   targetClicks: 5,
    //   bgImage: `${base}/img/sugar-cane-water/canes-background.png`,
    //   confettiProps: {
    //     colorArray: ['#B6C48F', '#6A4E48'],
    //     rounded: true,
    //     size: 15,
    //     amount: 25,
    //     duration: 800,
    //     x: [-0.25, 0.25],
    //     y: [-0.75, 0]
    //   }
    // },
    // {
    //   type: 'click-times',
    //   dialogs: [
    //     {
    //       characterName: 'Grandpa',
    //       bodyText: 'Use the hedge shears to trim the sugar cane into 15cm lengths',
    //       nextButton: { text: 'Got it' }
    //     }
    //   ],
    //   errorStep: {
    //     characterName: 'Grandpa',
    //     bodyText: 'The pieces need to be a little smaller'
    //   },
    //   successStep: {
    //     characterName: 'Grandpa',
    //     bodyText: 'Good job, those pieces look small enough',
    //     nextButton: { text: 'Is it ready to cook it yet?' }
    //   },
    //   targetComponent: CuttingSugarCane,
    //   toolComponent: Shears,
    //   targetClicks: 3,
    //   bgImage: `${base}/img/sugar-cane-water/board-bg.jpg`,
    //   confettiProps: {
    //     colorArray: ['#B6C48F', '#627620'],
    //     size: 20,
    //     amount: 10,
    //     duration: 800,
    //     x: [-1, 1],
    //     y: [-1, 1]
    //   }
    // },
    // {
    //   type: 'pick-items',
    //   dialogs: [
    //     {
    //       characterName: 'Grandpa',
    //       bodyText: "It's not quite ready to cook yet. We need to split it to release more flavour",
    //       nextButton: { text: 'How do I do that?' }
    //     },
    //     {
    //       characterName: 'Grandpa',
    //       bodyText:
    //         'Slam the sugarcane onto a well-supported chopping board to split the sugarcane into halves. Repeat to split into quarters.',
    //       nextButton: { text: 'Ok I got it!' }
    //     }
    //   ],
    //   errorStep: {
    //     characterName: 'Grandpa',
    //     bodyText: 'Keep going, we need the sugar cane nicely split open.'
    //   },
    //   successStep: {
    //     characterName: 'Grandpa',
    //     bodyText: 'Thank you, now we can assemble the final ingredients for boiling',
    //     nextButton: { text: 'Sounds good' }
    //   },
    //   targetCount: 4,
    //   totalItems: 4,
    //   itemComponent: SplittingSugarCane,
    //   bgImage: `${base}/img/sugar-cane-water/board-bg.jpg`,
    //   toolComponent: ChoppingKnife,
    //   bottomPosition: 50
    // },
    {
      type: 'drag-drop',
      dialogs: [
        {
          characterName: 'Grandpa',
          bodyText: 'Now we need to boil a pot of water and add the ingredients.',
          nextButton: { text: 'What ingredients?' }
        },
        {
          characterName: 'Grandpa',
          bodyText: 'We need the sugar cane pieces, 4 carrots chopped into chunks...',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Grandpa',
          bodyText: '...a handful of chinese almonds, and 10 Chinese figs for added sweetness...',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Grandpa',
          bodyText: 'Finally we will have a taste and add yellow rock sugar as needed',
          nextButton: { text: 'Ok, I will add them' }
        }
      ],
      errorStep: {
        characterName: 'Grandpa',
        bodyText: "Let's add all the ingredients"
      },
      successStep: {
        characterName: 'Grandpa',
        bodyText: 'Looks good. Let it boil for 40 minutes and it will be ready to serve.',
        nextButton: { text: 'Keen to try it!', href: '/sugar-cane-water' }
      },
      dropZone: BoilingPot,
      dragItems: [Carrot, Carrot],
      dropZoneOverlay: BoilingPot,
      confettiProps: {
        rounded: true,
        amount: 10,
        cone: true,
        delay: [500, 500],
        duration: 800,
        colorArray: ['#cbc7b7', '#dadec2']
      }
    }
  ]}
/>
