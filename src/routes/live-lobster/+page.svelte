<script lang="ts">
  import { base } from '$app/paths';
  import Article from '$lib/article/Article.svelte';
  import FullWidthBanner from '$lib/article/FullWidthBanner.svelte';
  import Image from '$lib/article/Image.svelte';
  import Inventory from '$lib/article/Inventory.svelte';
  import Section from '$lib/article/Section.svelte';
  import SectionGroup from '$lib/article/SectionGroup.svelte';
  import SectionWithImage from '$lib/article/SectionWithImage.svelte';
  import RedTitle from '$lib/text/RedTitle.svelte';
</script>

<svelte:head>
  <title>Chi Fan - Live lobster stir fry</title>
</svelte:head>

<Article>
  <FullWidthBanner src="{base}/img/sugar-cane-water/interior.jpg" alt="kitchen interior" />
  <RedTitle>Live lobster stir fry</RedTitle>
  <SectionGroup gap="4rem">
    <Section align="center" width="100%">By Jane Fan</Section>
    <SectionWithImage
      imageAlign="right"
      imageSrc="{base}/img/live-lobster/photo-finished.jpg"
      alt="Finished dish"
    >
      I interviewed my Dad about his recipe for Live Lobster. It is a banquet dish in Cantonese
      cuisine that exemplifies the features of this culture: freshness and subtlety of flavours. He
      is a chef with 3 decades of experience and preparing fresh seafood well is one of his skills.
    </SectionWithImage>

    <Section width="100%">
      My family is lucky to be spoiled with a Cantonese traditional dinner every week on his day
      off. It typically features 3-6 dishes shared amongst diners. There is always at least one
      seafood dish, reflecting the diet they grew up with and proximity of their birthplace to the
      sea. Luckily this is the same in their current home in Sydney, Australia. I consider myself an
      avid cook and food appreciator, but it is hard to beat the comfort of a home cooked meal and
      good company.
    </Section>

    <Inventory
      title="Ingredients"
      itemsImageSrc={[
        {
          label: 'Rock lobster',
          src: `${base}/img/live-lobster/lobster1.png`
        },
        {
          label: 'Chicken stick',
          src: `${base}/img/live-lobster/chicken-stock.png`
        },
        {
          label: 'Coriander',
          src: `${base}/img/live-lobster/coriander-2.png`
        },
        {
          label: 'Ginger',
          src: `${base}/img/live-lobster/ginger.png`
        },
        {
          label: 'Salt',
          src: `${base}/img/taro-rice/salt.png`
        },
        {
          label: 'Spring onion',
          src: `${base}/img/taro-rice/spring-onion-2.png`
        },
        {
          label: 'Starch',
          src: `${base}/img/live-lobster/potato-starch.png`
        },
        {
          label: 'Vegetable oil',
          src: `${base}/img/live-lobster/corn-oil.png`
        },
        {
          label: 'White wine',
          src: `${base}/img/live-lobster/wine.png`
        }
      ]}
    />

    <SectionWithImage
      imageAlign="left"
      imageSrc="{base}/img/live-lobster/photo-ingredients.jpg"
      alt="Prepped herbs and spices on a plate"
    >
      <ul>
        <li>1 live spiny/rock lobster</li>
        <li>4 spring onions</li>
        <li>Large handful of coriander leaves</li>
        <li>About 10 thin slices of ginger</li>
        <li>Vegetable oil</li>
        <li>½ teaspoon salt</li>
        <li>1 teaspoon corn or potato starch</li>
        <li>Sherry or white wine (prefer sweet rather than dry taste)</li>
        <li>
          2 cups chicken broth (homemade is best but from stock powder or pre-packaged is fine)
        </li>
      </ul>
    </SectionWithImage>

    <Inventory
      title="Tools"
      itemsImageSrc={[
        {
          label: 'Cleaver',
          src: `${base}/img/live-lobster/cleaver.png`
        },
        {
          label: 'Chopping board',
          src: `${base}/img/live-lobster/chopping-board.png`
        },
        {
          label: 'Chopsticks',
          src: `${base}/img/live-lobster/chopsticks.png`
        },
        {
          label: 'Meat mallet',
          src: `${base}/img/live-lobster/mallet.png`
        },
        {
          label: 'Wok',
          src: `${base}/img/wok.png`
        }
      ]}
    />

    <SectionWithImage
      imageAlign="right"
      imageSrc="{base}/img/live-lobster/photo-cutting-lobster.jpg"
      alt="Cutting up the lobster"
    >
      <ul>
        <li>Large heavy sharp knife, like a Chinese cleaver</li>
        <li>Meat mallet</li>
        <li>Wok or deep fry pan</li>
        <li>Steel Chopping board</li>
        <li>Chopsticks (for mixing the stir fry)</li>
      </ul>
    </SectionWithImage>

    <Section align="left" width="100%" title="Directions">
      <p>Prepare ingredients:</p>
      <br />
      <ol>
        <li>Slice the scallions, separating the light and dark parts.</li>
        <li>Pick the soft leaves and stems from the coriander until you have a large handful.</li>
        <li>Cut 10-15 thin slices of ginger, about 5 cm in length.</li>
        <li>Pour out 2 cups of chicken stock into a bowl.</li>
        <li>Mix starch flour in another bowl with ½ cup of cold water.</li>
      </ol>
    </Section>

    <Section align="center" width="100%">
      <Image
        src="{base}/img/live-lobster/photo-cleaning-head.jpg"
        alt="Cut lobster pieces on a plate"
      />
    </Section>

    <Section align="left" width="100%">
      <p>Butcher the live lobster:</p>
      <br />
      <ol>
        <li>
          Identify the parts of the lobster. There are two main sections, the carapace and abdomen.
          The carapace includes the head and middle section (thorax) where the walking legs attach.
          They form a single fused piece of shell. The abdomen is the segmented section from the end
          of the carapace and down to the tip of the tail. The spiny lobster that is common in
          Australia has no claws.
        </li>
        <li>
          Cut the lobster along the line between carapace and abdomen in one strong, swift motion.
          You will need to raise your arm slightly and bring down the knife straight down, taking
          care to avoid your fingers. Alternatively a safer method would be to rest your knife on
          the right location and use a meat mallet to hit the top of your knife. You can also use
          the heel of your palm instead of the mallet to apply force to the knife.
        </li>
        <li>
          Flip the carapace piece so that it is upside down with the legs facing you. Using one of
          the techniques described above, slice this section in half lengthwise. The lobster should
          now be dead.
        </li>
        <li>
          Rinse the halves of the carapace and remove the grey gristle and discard it. If the
          lobster is female, you will see a long reddish organ. That is the reproductive organ and
          can be cooked and eaten, but it is an acquired taste.
        </li>
        <li>
          Get the carapace pieces and cut off the tip of the head including the thick antennae and
          eyes. Smash the thick antennae with the side of the knife to flatten it and break off the
          sharp spines on the shell.
        </li>
        <li>Trim off the half of the tail and discard.</li>
        <li>
          Place the abdomen piece so that the bottom side is facing up. Lift up the swimmerets on
          one side with your knife. With the swimmerets still lifted, turn the abdomen to the side
          and slice off the swimmerets. Repeat on the other side.
        </li>
        <li>
          Slice the abdomen halfway on the long side and remove the dark thread that is the
          intestine. Cut each half into 4 pieces on the short side.
        </li>
        <li>
          Get the carapace pieces and slice off the lowest segments of the legs. They have no meat
          and can be discarded. Remove any remaining innards (they appear dark against the white
          flesh). Then slice the thorax pieces in half again on the short side.
        </li>
        <li>Set the pieces aside on a plate.</li>
      </ol>
    </Section>

    <Section align="center" width="100%">
      <Image src="{base}/img/live-lobster/photo-stir-fry.jpg" alt="Cutting sugar cane together" />
    </Section>

    <Section align="left" width="100%">
      <p>Stir fry the lobster:</p>
      <br />
      <ol>
        <li>
          Add 1 tablespoon of oil to a fry pan and turn on high heat. Make it as hot as you can.
          When you can barely hold your hand over the pan, it is ready.
        </li>
        <li>Add the ginger slices and fry until fragrant.</li>
        <li>
          Add the white parts of the scallion, lobster pieces, ½ teaspoon of salt and one teaspoon
          of white wine. Mix together and cover for 3-4 minutes. It is important not to overcook
          lobster otherwise it gets tough. This is why the high heat is essential to the process.
        </li>
        <li>
          Add the remaining scallions, half the coriander and stir in the starch flour slurry to the
          pan. The slurry may have settled, so mix it again in the bowl before pouring into the pan.
          Keep stirring the contents of the pan for another 30 seconds until the slurry has
          thickened into sauce.
        </li>
        <li>
          Drizzle some oil over the top and mix again. This will improve the sheen of the food.
          Transfer the stir fry to a plate and garnish with the remaining coriander.
        </li>
      </ol>
    </Section>

    <Section align="center" width="100%">
      <Image src="{base}/img/live-lobster/photo-finished2.jpg" alt="Cutting sugar cane together" />
    </Section>
  </SectionGroup>
</Article>
