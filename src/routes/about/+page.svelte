<script>
  import { base } from '$app/paths';
  import Article from '$lib/article/Article.svelte';
  import Section from '$lib/article/Section.svelte';
  import SectionGroup from '$lib/article/SectionGroup.svelte';
  import RedTitle from '$lib/text/RedTitle.svelte';
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this Chi Fan" />
</svelte:head>

<Article>
  <div class="top-buffer" />
  <SectionGroup gap="4rem">
    <Section width="100%">
      <div class="image-showcase">
        <img src="{base}/img/taro-rice/completed.png" alt="Taro fried rice" />
        <img src="{base}/img/sugar-cane-water/completed.png" alt="Sugar cane water" />
        <img src="{base}/img/live-lobster/lobster-dish.png" alt="Live lobster stir fry" />
      </div>
    </Section>
    <Section width="100%">
      <RedTitle>About this project</RedTitle>
      吃饭 (Chi-Fan) is a visual arts / heritage studies project tracing the intimate stories and migration
      of family recipes across the contested “Chinese diaspora”.
    </Section>
    <Section width="100%">
      Materialising as a minigame, audiences enter animated kitchens which are vivified by
      interviews between young people who identify as a member of the Chinese diaspora and their
      relatives about a family recipe. Each kitchen features: audio ruminations about the recipe;
      photo essays of the cooking methodology; the dish’s cultural significance; and intimate
      vignettes of domestic spaces.
    </Section>
    <Section width="100%">
      By playfully weaving these interpretations of a ‘family recipe’, 吃饭 (Chi-Fan) presents an
      alternative version of the ‘Chinese diaspora’ - beyond surnames, passports or dialects. The
      project gives licence for the interrogation of who defines cultural history.
    </Section>
    <Section width="100%">
      <div class="image-showcase">
        <img src="{base}/img/sugar-cane-water/almond-bowl.png" alt="Almonds in a bowl" />
        <img src="{base}/img/taro-rice/mint.png" alt="Mint" />
        <img src="{base}/img/sugar-cane-water/rock-sugar-box.png" alt="Rock sugar" />
        <img src="{base}/img/taro-rice/chopped-taro.png" alt="Taro" />
        <img src="{base}/img/taro-rice/spring-onion-2.png" alt="Ham" />
      </div>
    </Section>
    <Section width="100%">
      <RedTitle>The team</RedTitle>
      <h2>Dylan Goh - Curator</h2>
      <p>
        Born on unceded Bidjigal lands, Dylan Goh is a cultural practitioner with 7 years’
        experience as an artist, curator, dancer and museum worker.
      </p>
      <br />
      <p>
        Drawing upon his upbringing as a 2nd generation Asian Australian, Dylan’s practice centres
        around intimate vignettes of culture in everyday life. Often working with family and
        communities, he accumulates these acutely rendered stories to disarm audiences and engender
        empathy.
      </p>
      <br />
      <p>
        Selected projects include: “Interrogating Archives: Where is the Bubble Tea?” (2022) – an
        essay advocating for grassroot communities like Subtle Asian Traits to curate national
        archives; “Queer Haymarket Tour” (2022) – a walking tour employing dance, readings and
        performances to re-imagine Haymarket, Sydney into a precinct visibly celebrating queer
        Asian-Australians; and “Porpor and I (婆婆和我): the interview” (2020-21) – a video
        installation about intergenerational language barriers and food as a vehicle for love during
        the pandemic.
      </p>
      <br />
      <p>
        In a recent talk for Museums & Galleries of NSW, Dylan championed the idea of museums as
        spaces purely for the cultural practices of living communities – as opposed to storage
        facilities for object-based collections. As a New Colombo Plan Scholar, he is undertaking a
        16-month fellowship in South Korea to explore the role of street dance in cultural
        diplomacy.
      </p>
    </Section>
    <Section width="100%">
      <h2>Amy Ge - Illustrator</h2>
      <p>
        Amy Ge is a Chinese-Australian artist and illustrator from Noongar country (Perth, Western
        Australia) currently living and practicing on Gadigal land (Sydney, New South Wales). Her
        work grapples with finding joy in incoherence and the layers of meaning lost-in-translation.
        Ge’s print, illustration and animation work have been exhibited at the National Maritime
        Museum, Sydney Design Festival, Lane Cove Gallery, UNSW Galleries, Kudos Gallery and in
        publications such as Voiceworks Australia.
      </p>
    </Section>
    <Section width="100%">
      <h2>Jane Fan - Web developer</h2>
      <p>
        Jane Fan is a software engineer and digital artist based in Sydney, Australia. Her works
        span a variety of mediums including illustration, 3D computer graphics, generative and
        interactive art. She employs web and game technologies to create her works, assisted by
        webcams, 3D cameras and microphones if they are interactive. Her artworks explore the body
        as an interface, surveillance, artificial intelligence and minority identities in digital
        spaces. She is part of the Sydney based New Media Arts group known as Origin Collective.
      </p>
    </Section>
    <Section width="100%">
      <div class="image-showcase">
        <img src="{base}/img/wok.png" alt="Wok" />
        <img src="{base}/img/live-lobster/chopsticks.png" alt="Chopsticks" />
        <img src="{base}/img/sugar-cane-water/cleaver2.png" alt="Chinese cleaver" />
        <img src="{base}/img/taro-rice/rice-cooker.png" alt="Rice cooker" />
      </div>
    </Section>
  </SectionGroup>
</Article>

<style>
  .top-buffer {
    height: 8rem;
  }

  .image-showcase {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .image-showcase img {
    max-width: 200px;
    max-height: 200px;
  }
</style>
