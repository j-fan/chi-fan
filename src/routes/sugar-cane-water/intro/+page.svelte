<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Slide from '$lib/slides/Slide.svelte';

  let isValid = false;
</script>

<Slide
  dialogs={[
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
  ]}
  {isValid}
  errorStep={{
    characterName: 'Grandpa',
    bodyText: 'Keep going, we just need a few more!'
  }}
  successStep={{
    characterName: 'Grandpa',
    bodyText: "These look good. Let's bring them into the kitchen",
    nextButton: { text: 'Sounds good' }
  }}
>
  <h1 style="margin-bottom: 10rem;">Sugar cane water interactive intro</h1>
  <Button
    on:click={() => {
      isValid = !isValid;
    }}>set isValid: {isValid}</Button
  >
</Slide>

<style>
  h1 {
    color: var(--c-red);
  }
</style>
