<script lang="ts">
  import Slides from '$lib/slides/Slides.svelte';
</script>

<Slides
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
          bodyText: "Let's choose 5-7 canes",
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
      }
    },
    {
      type: 'pick-items',
      dialogs: [
        {
          characterName: 'Grandpa',
          bodyText: 'Now we need to peel the sugar cane with a knife',
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
        nextButton: { text: 'Sounds good' }
      }
    }
  ]}
/>