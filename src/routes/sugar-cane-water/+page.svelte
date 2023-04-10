<script lang="ts">
  import { base } from '$app/paths';
  import Article from '$lib/article/Article.svelte';
  import FullWidthBanner from '$lib/article/FullWidthBanner.svelte';
  import Image from '$lib/article/Image.svelte';
  import Inventory from '$lib/article/Inventory.svelte';
  import Section from '$lib/article/Section.svelte';
  import SectionFullImage from '$lib/article/SectionFullImage.svelte';
  import SectionGroup from '$lib/article/SectionGroup.svelte';
  import SectionWithImage from '$lib/article/SectionWithImage.svelte';
  import RedTitle from '$lib/text/RedTitle.svelte';
</script>

<svelte:head>
  <title>Chi Fan - Sugarcane water - 蔗水</title>
</svelte:head>

<Article>
  <FullWidthBanner src="{base}/img/sugar-cane-water/kitchen.jpg" alt="kitchen interior" />
  <RedTitle>Sugarcane water - 蔗水</RedTitle>
  <SectionGroup gap="4rem">
    <Section aos="none" align="center" width="100%"
      >By Dylan Goh, Joseph Tsang (曾廣棟) & Lipoha Tsang (李寶霞)</Section
    >

    <SectionWithImage
      imageAlign="right"
      imageSrc="{base}/img/sugar-cane-water/grandpa.jpg"
      alt="Grandpa sitting in a chair"
      caption="Grandpa - Joseph Tsang (曾廣棟)"
    >
      蔗水 (sugarcane water) has been produced in my family for as long as I can remember. Grandpa
      is really proud of his garden. From winter melon to bamboo, he grows a lot of different
      plants. He also harvests and prepares the sugarcane which my grandma uses to boil sugarcane
      water.
    </SectionWithImage>

    <SectionWithImage
      imageAlign="left"
      imageSrc="{base}/img/sugar-cane-water/grandma.jpg"
      alt="Grandma holding up fruits"
      caption="Grandma - Lipoha Tsang (李寶霞)"
    >
      During COVID-19 lockdown in Sydney, my grandma would also boil sugarcane water and cook dishes
      to give to us. We would call ahead and she would fill repurposed juice bottles and takeaway
      containers to be left outside the front door. When we saw each other through the clear windows
      of the door, we would perform this strange dance. As we approached the door, she retreated
      further inside. Once we retreated into our cars, she would step forward again to wave at us.
    </SectionWithImage>

    <Inventory
      title="Ingredients"
      itemsImageSrc={[
        {
          label: 'Cane',
          src: `${base}/img/sugar-cane-water/cane3.jpg`
        },
        {
          label: 'Carrots',
          src: `${base}/img/sugar-cane-water/carrot.png`
        },
        {
          label: 'Figs',
          src: `${base}/img/sugar-cane-water/figs.png`
        },
        {
          label: 'Almonds',
          src: `${base}/img/sugar-cane-water/almond-bowl.png`
        },
        {
          label: 'Rock sugar',
          src: `${base}/img/sugar-cane-water/rock-sugar-box.png`
        }
      ]}
    />

    <SectionWithImage
      imageAlign="left"
      imageSrc="{base}/img/sugar-cane-water/cooking-in-pot.jpg"
      alt="Sugar cane ingredients all boiling in the pot"
      caption="Sugar cane ingredients all boiling in the pot"
    >
      <ul>
        <li>3kg x fresh sugarcane</li>
        <li>12L x water</li>
        <li>4 x carrots</li>
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
          src: `${base}/img/sugar-cane-water/clippers.png`
        },
        {
          label: '20L pot',
          src: `${base}/img/sugar-cane-water/pot.jpg`
        },
        {
          label: 'Steel wool',
          src: `${base}/img/sugar-cane-water/scrub.png`
        },
        {
          label: 'Tub',
          src: `${base}/img/sugar-cane-water/tub.png`
        }
      ]}
    />

    <SectionWithImage
      imageAlign="right"
      imageSrc="{base}/img/sugar-cane-water/cutting-cane.jpg"
      alt="Cutting up the sugarcane"
      caption="Cutting up the sugarcane into 15cm pieces"
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

    <Section align="left" width="100%" title="Directions">
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

    <SectionFullImage
      src="{base}/img/sugar-cane-water/cane-cutting-equipment.jpg"
      alt="Hedge shears are used for cutting the sugarcane"
      caption="Hedge shears are used for cutting the sugarcane"
    />

    <Section align="left" width="100%">
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

    <Section align="left" width="100%" title="Special notes">
      If you do not intend to boil the sugarcane immediately, store the 15cm lengths in a plastic
      bag and place into the freezer.
    </Section>

    <SectionFullImage
      src="{base}/img/sugar-cane-water/save-for-later.jpg"
      alt="Store excess sugar cane in the freezer"
      caption="Store excess sugar cane in the freezer"
    />
  </SectionGroup>
</Article>
