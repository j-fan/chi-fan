<script lang="ts">
  import { base } from '$app/paths';
  import Article from '$lib/article/Article.svelte';
  import FullWidthBanner from '$lib/article/FullWidthBanner.svelte';
  import Image from '$lib/article/Image.svelte';
  import Inventory from '$lib/article/Inventory.svelte';
  import Section from '$lib/article/Section.svelte';
  import SectionGroup from '$lib/article/SectionGroup.svelte';
  import SectionWithImage from '$lib/article/SectionWithImage.svelte';
</script>

<svelte:head>
  <title>Sugar cane water</title>
  <meta name="description" content="Sugar cane water" />
</svelte:head>

<Article>
  <FullWidthBanner src="{base}/img/sugar-cane-water/interior.jpg" alt="kitchen interior" />
  <h1>Sugar cane water</h1>
  <SectionGroup gap="4rem">
    <Section align="center" width="100%">By Dylan Goh</Section>
    <SectionWithImage
      aos="fade-left"
      imageAlign="right"
      imageSrc="{base}/img/sugar-cane-water/grandpa-cane.jpg"
      alt="Grandpa amongst the canes"
    >
      Sugarcane water has been produced in my family for as long as I can remember. Grandpa is
      really proud of his garden. From winter melon to bamboo, he grows a lot of different plants.
      He also harvests and prepares the sugarcane which my grandma uses to boil sugarcane water.
    </SectionWithImage>

    <Section aos="fade-up" width="100%">
      During COVID-19 lockdown in Sydney, my grandma would also boil sugarcane water and cook dishes
      to give to us. We would call ahead and she would fill repurposed juice bottles and takeaway
      containers to be left outside the front door. When we saw each other through the clear windows
      of the door, we would perform this strange dance. As we approached the door, she retreated
      further inside. Once we retreated into our cars, she would step forward again to wave at us.
    </Section>

    <Inventory
      title="Ingredients"
      itemsImageSrc={[
        {
          label: 'Cane',
          src: `${base}/img/sugar-cane-water/cane3.jpg`
        },

        {
          label: 'Carrot',
          src: `${base}/img/sugar-cane-water/carrot.jpg`
        }
      ]}
    />

    <SectionWithImage
      aos="fade-right"
      imageAlign="left"
      imageSrc="{base}/img/sugar-cane-water/cooking-in-pot.jpg"
      alt="Ingredients all boiling in the pot"
    >
      <ul>
        <li>3kg x fresh sugarcane</li>
        <li>12L x water</li>
        <li>4 x carrots</li>
        <li>10 x Mut jo – Chinese figs/dates</li>
        <li>Handful of yellow rock sugar</li>
        <li>Handful of Chinese almonds (lam bak (north) ham)</li>
        <li>10 x Mut jo – Chinese figs/dates – add natural sweetness</li>
      </ul>
    </SectionWithImage>

    <Inventory
      title="Tools"
      itemsImageSrc={[
        {
          label: 'Cleaver',
          src: `${base}/img/sugar-cane-water/cleaver2.png`
        },
        {
          label: 'Chopping board',
          src: `${base}/img/sugar-cane-water/board.jpg`
        },
        {
          label: 'Hedge shears',
          src: `${base}/img/sugar-cane-water/clippers.jpg`
        },
        {
          label: '20L pot',
          src: `${base}/img/sugar-cane-water/pot.jpg`
        },
        {
          label: 'Steel wool',
          src: `${base}/img/sugar-cane-water/scrub.jpg`
        },
        {
          label: 'Tub',
          src: `${base}/img/sugar-cane-water/tub.jpg`
        }
      ]}
    />

    <SectionWithImage
      aos="fade-left"
      imageAlign="right"
      imageSrc="{base}/img/sugar-cane-water/cutting-cane.jpg"
      alt="Cutting up the cane"
    >
      <ul>
        <li>Saw</li>
        <li>Hedge shears</li>
        <li>Cleaver</li>
        <li>Steel wool</li>
        <li>Chopping board</li>
        <li>20L pot</li>
        <li>Stove</li>
      </ul>
    </SectionWithImage>

    <Section align="left" width="100%" aos="fade-up" title="Directions">
      <p>Preparing the sugarcane stalks:</p>
      <br />
      <ol>
        <li>Use a saw to cut down the sugarcane stalks.</li>
        <li>Use hedge shears to snip off the head of the stalks with the large leaves. Discard.</li>
        <li>Trim the stalks into smaller 2m lengths.</li>
        <li>
          Use a cleaver to shave off the ringed, brown nodes along the stalk to eliminate bumps.
          Ensure you are seated on a low stool and the stalk is firmly implanted into the ground.
        </li>
        <li>Place the shaved stalks into a bucket of water.</li>
        <li>Scratch away the remaining dirt from the stalks with steel wool.</li>
        <li>Trim the 2m lengths into 15cm lengths with hedge shears.</li>
      </ol>
    </Section>

    <Section align="center" width="100%" aos="fade-up">
      <Image
        src="{base}/img/sugar-cane-water/cutting-cane-together.jpg"
        alt="Cutting sugar cane together"
      />
    </Section>

    <Section align="left" width="100%" aos="fade-up">
      <p>Making sugarcane water (10L):</p>
      <br />
      <ol>
        <li>Submerge the sugarcane lengths into water.</li>
        <li>Use a cleaver and make a dent at the midpoint of the sugarcane length.</li>
        <li>
          Slam the sugarcane onto a well-supported chopping board to split the sugarcane into
          halves. Repeat to split into quarters which will make the sugarcane release more flavour.
        </li>
        <li>Fill the pot with 12L of water and bring to a boil.</li>
        <li>Add the chopped sugarcane into the boiling water.</li>
        <li>Peel and chop 4 carrots into smaller chunks. Add to the pot.</li>
        <li>Add a handful of Chinese almonds into the pot.</li>
        <li>
          Add 10 Chinese figs into the pot for added sweetness. Squish the Chinese figs with a spoon
          to release more flavour.
        </li>
        <li>Boil for 40 minutes.</li>
        <li>
          Taste the sugarcane water and add yellow rock sugar for additional sweetness if required.
        </li>
        <li>Use a ladle to strain the serve the sugarcane water.</li>
      </ol>
    </Section>

    <Section align="left" width="100%" aos="fade-up" title="Special notes">
      If you do not intend to boil the sugarcane immediately, store the 15cm lengths in a plastic
      bag and place into the freezer.
    </Section>

    <Section align="center" width="100%" aos="fade-up">
      <Image
        src="{base}/img/sugar-cane-water/save-for-later.jpg"
        alt="Cutting sugar cane together"
      />
    </Section>
  </SectionGroup>
</Article>

<style>
  h1 {
    color: var(--c-red);
    text-align: center;
    margin: 1rem 0;
  }
</style>
