<script>
  import { base } from '$app/paths';
  import Article from '$lib/article/Article.svelte';
  import Section from '$lib/article/Section.svelte';
  import SectionGroup from '$lib/article/SectionGroup.svelte';
  import SectionWithImage from '$lib/article/SectionWithImage.svelte';
  import SurveySection from '$lib/article/SurveySection.svelte';
  import RedTitle from '$lib/text/RedTitle.svelte';
</script>

<svelte:head>
  <title>Chi Fan - About</title>
</svelte:head>

<Article>
  <div class="top-buffer" />
  <SectionGroup gap="4rem">
    <Section width="100%">
      <div class="image-showcase">
        <img src="{base}/img/taro-rice/completed.png" alt="Taro fried rice" />
        <img src="{base}/img/sugar-cane-water/completed.png" alt="Sugarcane water" />
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
    <RedTitle>The team</RedTitle>
    <SectionWithImage
      title="Dylan Goh - Curator"
      imageAlign="left"
      imageSrc="{base}/img/dylan-goh.jpg"
      alt="Dylan Goh"
    >
      <p>
        Born on unceded Bidjigal lands, Dylan Goh is a cultural practitioner with 7 years’
        experience as an artist, curator, dancer and museum worker. Drawing upon his upbringing as a
        2nd generation Asian Australian, Dylan’s practice centres around intimate vignettes of
        culture in everyday life. Often working with family and communities, he accumulates these
        acutely rendered stories to disarm audiences and engender empathy. As the New Colombo Plan
        Fellow (Republic of Korea), Dylan is undertaking a fellowship in South Korea to explore the
        role of street dance in cultural diplomacy.
      </p>
    </SectionWithImage>
    <SectionWithImage
      title="Amy Ge - Illustrator"
      imageAlign="right"
      imageSrc="{base}/img/amy-ge.jpg"
      alt="Amy Ge"
    >
      <p>
        Amy Ge is a Chinese-Australian artist and illustrator from Noongar country (Perth, Western
        Australia) currently living and practicing on Gadigal land (Sydney, New South Wales). Her
        work grapples with finding joy in incoherence and the layers of meaning lost-in-translation.
        Ge’s print, illustration and animation work have been exhibited at the National Maritime
        Museum, Sydney Design Festival, Lane Cove Gallery, UNSW Galleries, Kudos Gallery and in
        publications such as Voiceworks Australia.
      </p>
    </SectionWithImage>
    <SectionWithImage
      title="Jane Fan - Web developer"
      imageAlign="left"
      imageSrc="{base}/img/jane-fan.jpg"
      alt="Jane Fan"
    >
      <p>
        Jane Fan is a software engineer and digital artist based in Sydney, Australia. Her works
        span a variety of mediums including illustration, 3D computer graphics, generative and
        interactive art. She employs web and game technologies to create her works, assisted by
        webcams, 3D cameras and microphones if they are interactive. Her artworks explore the body
        as an interface, surveillance, artificial intelligence and minority identities in digital
        spaces. She is part of the Sydney based New Media Arts group known as Origin Collective.
      </p>
    </SectionWithImage>
    <Section width="100%">
      <div class="image-showcase">
        <img src="{base}/img/wok.png" alt="Wok" />
        <img src="{base}/img/live-lobster/chopsticks.png" alt="Chopsticks" />
        <img src="{base}/img/sugar-cane-water/cleaver2.png" alt="Chinese cleaver" />
        <img src="{base}/img/taro-rice/rice-cooker.png" alt="Rice cooker" />
      </div>
    </Section>
    <SurveySection />
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
