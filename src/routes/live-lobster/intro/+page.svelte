<script lang="ts">
  import { base } from '$app/paths';
  import Slides from '$lib/slides/Slides.svelte';
  import ChoppingKnife from '../../../lib/tools/ChoppingKnife.svelte';
  import ChopLobster from './ChopLobster.svelte';

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
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Dad',
          bodyText:
            'Cut the lobster along the line between carapace and abdomen in one strong, swift motion.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText:
            'You will need to raise your arm slightly and bring down the knife straight down, taking care to avoid your fingers.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText:
            'Alternatively a safer method would be to rest your knife on the right location and use a meat mallet to hit the top of your knife.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText:
            'You can also use the heel of your palm instead of the mallet to apply force to the knife.',
          nextButton: { text: 'Continue' }
        }
      ],
      errorStep: {
        characterName: 'Dad',
        bodyText: "You haven't cut the lobster in half yet."
      },
      successStep: {
        characterName: 'Dad',
        bodyText: 'We will move onto the carapace.',
        nextButton: { text: "What's next?" }
      },
      targetCount: 1,
      totalItems: 1,
      itemComponent: ChopLobster,
      bgImage: `${base}/img/live-lobster/chopping-board.png`,
      toolComponent: ChoppingKnife,
      bottomPosition: 45
    },
    {
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Dad',
          bodyText: 'Flip the carapace piece so that it is upside down with the legs facing you. ',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText:
            'Using one of the techniques described above, slice this section in half lengthwise.',
          nextButton: { text: 'Continue' }
        }
      ],
      errorStep: {
        characterName: 'Dad',
        bodyText: "You haven't cut the carapace in half yet."
      },
      successStep: {
        characterName: 'Dad',
        bodyText: 'The lobster should now be dead. It is time to clean it.',
        nextButton: { text: 'Ok' }
      },
      targetCount: 1,
      totalItems: 1,
      itemComponent: ChopLobster,
      bgImage: `${base}/img/live-lobster/chopping-board.png`,
      toolComponent: ChoppingKnife,
      bottomPosition: 45
    },
    {
      type: 'static',
      heroImage: `${base}/img/live-lobster/half-lobster-washing.png`,
      alt: 'Washing the lobster carapace',
      dialogs: [
        {
          characterName: 'Dad',
          bodyText: 'Rinse the halves of the carapace and remove the grey gristle and discard it.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText: 'If the lobster is female, you will see a long reddish organ.',
          nextButton: { text: 'Continue' }
        }
      ],
      successStep: {
        characterName: 'Dad',
        bodyText:
          'That is the reproductive organ and can be cooked and eaten, but it is an acquired taste.',
        nextButton: { text: 'Ok' }
      },
      heightPercent: 60
    },
    {
      type: 'finished',
      heroImage: `${base}/img/live-lobster/lobster-dish.png`,
      title: '☆ Live lobster stir fry ☆',
      successStep: {
        characterName: 'Dad',
        bodyText: "Well done, you've made live lobster stir fry!",
        nextButton: { text: 'Done!', href: '/taro-rice' }
      }
    }
  ]}
/>
