<script lang="ts">
  import { base } from '$app/paths';
  import Slides from '$lib/slides/Slides.svelte';
  import Knife from './Knife.svelte';
  import PeelingSugarCane from './PeelingSugarCane.svelte';
  import SugarCane from './SugarCane.svelte';

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
        bodyText: "These look good. Let's bring them into the kitchen",
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
          bodyText:
            'Now we need to peel the sugar cane with a knife. Tap the knife across the cane at least three times.',
          nextButton: { text: 'Why do we need to do this?' }
        },
        {
          characterName: 'Grandpa',
          bodyText: 'The outside is tough and not nice to use',
          nextButton: { text: 'Ok I got it!' }
        }
      ],
      errorStep: {
        characterName: 'Grandpa',
        bodyText: 'Keep going, it is almost fully peeled'
      },
      successStep: {
        characterName: 'Grandpa',
        bodyText: 'The look great now, now we need to scrub it further to clean it.',
        nextButton: { text: 'Sounds good', href: '/sugar-cane-water' }
      },
      targetComponent: PeelingSugarCane,
      dragComponent: Knife,
      targetStrokes: 3,
      bgImage: `${base}/img/sugar-cane-water/canes-background.png`
    }
  ]}
/>
