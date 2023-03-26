<script lang="ts">
  import { base } from '$app/paths';
  import Slides from '$lib/slides/Slides.svelte';
  import Wok from '$lib/tools/Wok.svelte';
  import SpringOnion from './DragDropItems/SpringOnion.svelte';
  import SpringOnionDropped from './DragDropItems/SpringOnionDropped.svelte';
  import ChoppingKnife from '../../../lib/tools/ChoppingKnife.svelte';
  import ChopLobster from './ChopLobster.svelte';
  import ChopSwimmerets from './ChopSwimmerets.svelte';
  import SpringOnionWhite from './DragDropItems/SpringOnionWhite.svelte';
  import SpringOnionDroppedWhite from './DragDropItems/SpringOnionDroppedWhite.svelte';
  import Ginger from './DragDropItems/Ginger.svelte';
  import GingerDropped from './DragDropItems/GingerDropped.svelte';
  import Salt from './DragDropItems/Salt.svelte';
  import SaltDropped from './DragDropItems/SaltDropped.svelte';
  import Oil from './DragDropItems/Oil.svelte';
  import OilDropped from './DragDropItems/OilDropped.svelte';
  import Coriander from './DragDropItems/Coriander.svelte';
  import CorianderDropped from './DragDropItems/CorianderDropped.svelte';
  import SlurryDropped from './DragDropItems/SlurryDropped.svelte';
  import Slurry from './DragDropItems/Slurry.svelte';
  import Wine from './DragDropItems/Wine.svelte';
  import WineDropped from './DragDropItems/WineDropped.svelte';
  import { onMount } from 'svelte';
  import { soundSrc } from '$lib/sound/SoundStore';

  let windowWidth = 9999;
  $: isMobile = windowWidth < 500;

  onMount(() => {
    soundSrc.set(`${base}/sound/lobster.mp3`);
  });
</script>

<svelte:head>
  <title>Chi Fan - Live lobster stir fry</title>
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
            'The abdomen is the segmented section from the end of the carapace and down to the tip of the tail.',
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
      itemComponent: ChopLobster, // TODO replace with new component that has the flipped carapace
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
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Dad',
          bodyText: 'Place the abdomen piece so that the bottom side is facing up.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText: 'Lift up the swimmerets on one side with your knife.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText:
            'With the swimmerets still lifted, turn the abdomen to the side and slice off the swimmerets.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText: 'Also trim off the tip of the tail and discard it.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText: 'Repeat on the other side.',
          nextButton: { text: 'Continue' }
        }
      ],
      errorStep: {
        characterName: 'Dad',
        bodyText: "You haven't cut the swimmerets off yet."
      },
      successStep: {
        characterName: 'Dad',
        bodyText: 'We need to continue chopping up the abdomen.',
        nextButton: { text: 'Ok' }
      },
      targetCount: 1,
      totalItems: 1,
      itemComponent: ChopSwimmerets,
      bgImage: `${base}/img/live-lobster/chopping-board.png`,
      toolComponent: ChoppingKnife,
      bottomPosition: 45
    },
    {
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Dad',
          bodyText:
            'Slice the abdomen halfway on the long side and remove the dark thread that is the intestine.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText: 'Cut each half into 4 pieces on the short side.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText: 'Repeat again for the other half of the abdomen.',
          nextButton: { text: 'Continue' }
        }
      ],
      errorStep: {
        characterName: 'Dad',
        bodyText: "You haven't cut the abdomen into small enough pieced yet."
      },
      successStep: {
        characterName: 'Dad',
        bodyText: 'Now that the lobster is in small pieces, we can cook it.',
        nextButton: { text: "Let's do it!" }
      },
      targetCount: 1,
      totalItems: 1,
      itemComponent: ChopSwimmerets, // TODO - replace with 3 step of chopping abdomen lengthwise and into smaller chunks
      bgImage: `${base}/img/live-lobster/chopping-board.png`,
      toolComponent: ChoppingKnife,
      bottomPosition: 45
    },
    {
      type: 'drag-drop',
      showMovedItemsInStack: true,
      dialogs: [
        {
          characterName: 'Dad',
          bodyText:
            'Add 1 tablespoon of oil to a fry pan and turn on high heat. Make it as hot as you can.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText: 'When you can barely hold your hand over the pan, it is ready.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText: 'Add the ginger slices and fry until fragrant.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText:
            'Add the white parts of the scallion, lobster pieces, ½ teaspoon of salt and one teaspoon of white wine.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText:
            'Mix together and cover for 3-4 minutes. It is important not to overcook lobster otherwise it gets tough. ',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText:
            'Add the remaining scallions, half the coriander and drizzle in the starch flour slurry slowly into the pan.',
          nextButton: { text: 'Continue' }
        },
        {
          characterName: 'Dad',
          bodyText:
            'Keep stirring the contents of the pan for another 30 seconds until the slurry has thickened into sauce.',
          nextButton: { text: 'Continue' }
        }
      ],
      errorStep: {
        characterName: 'Dad',
        bodyText: 'Not all the ingredients have been added to the wok and cooked.'
      },
      successStep: {
        characterName: 'Dad',
        bodyText:
          'Drizzle some oil over the top and mix again. This will improve the sheen of the food. Garnish with coriander and serve.',
        nextButton: { text: 'We did it!' }
      },
      dropZone: Wok,
      dragItems: [Oil, Ginger, SpringOnionWhite, Salt, Wine, Slurry, SpringOnion, Coriander],
      droppedItems: [
        OilDropped,
        GingerDropped,
        SpringOnionDroppedWhite,
        SaltDropped,
        WineDropped,
        SlurryDropped,
        SpringOnionDropped,
        CorianderDropped
        //TODO: Add lobster pieces
      ]
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
