<script lang="ts">
  import Slide from '$lib/slides/Slide.svelte';
</script>

<Slide
  dialogs={[
    {
      characterName: 'Grandpa',
      bodyText: 'First you need to pick some sugar cane',
      nextButton: { text: 'How many do I pick?', action: () => alert(1) }
    },
    {
      characterName: 'Grandpa',
      bodyText: "Let's choose 5-7 canes",
      nextButton: { text: 'Ok I got it!', action: () => alert(1) }
    }
  ]}
>
  <h1>Sugar cane water interactive intro</h1>
</Slide>

<style>
  h1 {
    color: var(--c-red);
  }
</style>
