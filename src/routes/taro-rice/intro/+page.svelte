<script lang="ts">
  import { base } from '$app/paths';
  import Slides from '$lib/slides/Slides.svelte';
  import { soundSrc } from '$lib/sound/SoundStore';
  import Wok from '$lib/tools/Wok.svelte';
  import { onMount } from 'svelte';
  import ChoppingKnife from '../../../lib/tools/ChoppingKnife.svelte';
  import WokMeatVegOnly from '../WokMeatVegOnly.svelte';
  import WokMeatVegSeasoned from '../WokMeatVegSeasoned.svelte';
  import ChoppingBologna from './ChoppingBologna.svelte';
  import ChoppingHam from './ChoppingHam.svelte';
  import ChoppingMushrooms from './ChoppingMushrooms.svelte';
  import ChoppingSpringOnion from './ChoppingSpringOnion.svelte';
  import ChoppingTaro from './ChoppingTaro.svelte';
  import BlackPepper from './DragDropItems/BlackPepper.svelte';
  import Bologna from './DragDropItems/Bologna.svelte';
  import BolognaDropped from './DragDropItems/BolognaDropped.svelte';
  import ChilliPowder from './DragDropItems/ChilliPowder.svelte';
  import DroppedBlackPepper from './DragDropItems/DroppedBlackPepper.svelte';
  import DroppedChilliPowder from './DragDropItems/DroppedChilliPowder.svelte';
  import DroppedOysterSauce from './DragDropItems/DroppedOysterSauce.svelte';
  import DroppedSalt from './DragDropItems/DroppedSalt.svelte';
  import DroppedTaroRice from './DragDropItems/DroppedTaroRice.svelte';
  import DroppedTeriyaki from './DragDropItems/DroppedTeriyaki.svelte';
  import Ham from './DragDropItems/Ham.svelte';
  import HamDropped from './DragDropItems/HamDropped.svelte';
  import Mint from './DragDropItems/Mint.svelte';
  import MintDropped from './DragDropItems/MintDropped.svelte';
  import Mushroom from './DragDropItems/Mushroom.svelte';
  import MushroomDropped from './DragDropItems/MushroomDropped.svelte';
  import OysterSauce from './DragDropItems/OysterSauce.svelte';
  import RiceAndTaroBowl from './DragDropItems/RiceAndTaroBowl.svelte';
  import Salt from './DragDropItems/Salt.svelte';
  import Shrimp from './DragDropItems/Shrimp.svelte';
  import ShrimpDropped from './DragDropItems/ShrimpDropped.svelte';
  import SpringOnion from './DragDropItems/SpringOnion.svelte';
  import SpringOnionDropped from './DragDropItems/SpringOnionDropped.svelte';
  import TeriyakiSauce from './DragDropItems/TeriyakiSauce.svelte';
  import PickedMint from './PickedMint.svelte';
  import WokWithRice from './WokWithRice.svelte';

  let windowWidth = 9999;
  $: isMobile = windowWidth < 500;

  onMount(() => {
    soundSrc.set(`${base}/sound/taro-rice.mp3`);
  });
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
      },
      heightPercent: 55
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
      },
      heightPercent: 55
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
      type: 'drag-drop',
      showMovedItemsInStack: true,
      dialogs: [
        {
          characterName: 'Mum',
          bodyText:
            'Now prepare a wok or a pan with some oil. When it’s hot, throw in all of the chosen meats and vegetables.',
          nextButton: { text: 'Continue' }
        }
      ],
      errorStep: {
        characterName: 'Mum',
        bodyText: 'Not all the ingredients have been added.'
      },
      successStep: {
        characterName: 'Mum',
        bodyText: 'Looks good. Time to add the seasonings.',
        nextButton: { text: 'Keen to try it!' }
      },
      dropZone: Wok,
      dragItems: [Ham, Bologna, Mushroom, Shrimp, Mint, SpringOnion],
      droppedItems: [
        HamDropped,
        BolognaDropped,
        MushroomDropped,
        ShrimpDropped,
        MintDropped,
        SpringOnionDropped
      ]
    },
    {
      type: 'drag-drop',
      showMovedItemsInStack: true,
      dialogs: [
        {
          characterName: 'Mum',
          bodyText:
            'Add some chilli powder, teriyaki sauce, oyster sauce, soy sauce and black peppers into the pan.',
          nextButton: { text: 'Continue' }
        }
      ],
      errorStep: {
        characterName: 'Mum',
        bodyText: "Let's add some more seasonings."
      },
      successStep: {
        characterName: 'Mum',
        bodyText:
          'Stir fry on medium-high heat for a few minutes before putting the cooked taro and rice into the pan.',
        nextButton: { text: 'Continue' }
      },
      dropZone: WokMeatVegOnly,
      dragItems: [BlackPepper, ChilliPowder, Salt, TeriyakiSauce, OysterSauce],
      droppedItems: [
        DroppedBlackPepper,
        DroppedChilliPowder,
        DroppedSalt,
        DroppedTeriyaki,
        DroppedOysterSauce
      ]
    },
    {
      type: 'drag-drop',
      showMovedItemsInStack: true,
      dialogs: [
        {
          characterName: 'Mum',
          bodyText: 'After stir frying for a few minutes, we add the taro and rice.',
          nextButton: { text: 'Done' }
        }
      ],
      errorStep: {
        characterName: 'Mum',
        bodyText: 'Add the taro and rice please.'
      },
      successStep: {
        characterName: 'Mum',
        bodyText: "Let's adjust the seasoning again.",
        nextButton: { text: 'Continue' }
      },
      dropZone: WokMeatVegSeasoned,
      dragItems: [RiceAndTaroBowl],
      droppedItems: [DroppedTaroRice]
    },
    {
      type: 'drag-drop',
      showMovedItemsInStack: true,
      targetCount: 1,
      dialogs: [
        {
          characterName: 'Mum',
          bodyText:
            'Add any final seasonings. Always taste your food while you’re cooking and season to your taste!',
          nextButton: { text: 'Continue' }
        }
      ],
      errorStep: {
        characterName: 'Mum',
        bodyText: "Let's add some more seasonings."
      },
      successStep: {
        characterName: 'Mum',
        bodyText: 'If you are done with the seasonings, we can serve it on a plate.',
        nextButton: { text: "I'm finished now" }
      },
      dropZone: WokWithRice,
      dragItems: [BlackPepper, ChilliPowder, Salt, TeriyakiSauce, OysterSauce],
      droppedItems: [
        DroppedBlackPepper,
        DroppedChilliPowder,
        DroppedSalt,
        DroppedTeriyaki,
        DroppedOysterSauce
      ]
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
