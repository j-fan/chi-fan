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
  <title>Taro fried rice</title>
</svelte:head>

<Article>
  <FullWidthBanner src="{base}/img/sugar-cane-water/interior.jpg" alt="kitchen interior" />
  <RedTitle>Taro fried rice</RedTitle>
  <SectionGroup gap="4rem">
    <Section align="center" width="100%">By Tammy Dang</Section>
    <SectionWithImage
      aos="fade-left"
      imageAlign="right"
      imageSrc="{base}/img/taro-rice/photo-dish.jpg"
      alt="Cooked dish of taro fried rice"
    >
      Taro rice is a recipe that’s been passed down our family for 4 generations (great grandma,
      grandma, mum and me). We’re a Teochew family who fled to Vietnam during times of political
      unrest before going to Australia. So, the recipe has some Vietnamese touches as well. There
      isn’t a “true recipe” for this, kind of like fried rice. Instead, you use what ingredients you
      have to make it yummy and to your liking.
    </SectionWithImage>

    <Section aos="fade-up" width="100%">
      Taro rice first came into our family when there was political unrest and war. During those
      times, there was not enough rice to go around big Chinese families, so my great grandma and
      grandma would add some taro to make it more filling. Since then, there have been many
      iterations of this recipe within our family. This is my mums…
    </Section>

    <Inventory
      title="Ingredients"
      itemsImageSrc={[
        {
          label: 'Ham',
          src: `${base}/img/taro-rice/ham.png`
        },
        {
          label: 'Mint',
          src: `${base}/img/taro-rice/mint.png`
        },
        {
          label: 'Mushrooms',
          src: `${base}/img/taro-rice/mushrooms.png`
        },
        {
          label: 'Rice',
          src: `${base}/img/taro-rice/rice bowl.png`
        },
        {
          label: 'Taro',
          src: `${base}/img/taro-rice/taro-1.png`
        },
        {
          label: 'Spring onion',
          src: `${base}/img/taro-rice/spring-onion-2.png`
        },
        {
          label: 'Shrimp',
          src: `${base}/img/taro-rice/shrimp.png`
        },
        {
          label: 'Bologna',
          src: `${base}/img/taro-rice/bologna.png`
        }
      ]}
    />

    <SectionWithImage
      aos="fade-right"
      imageAlign="left"
      imageSrc="{base}/img/taro-rice/photo-ingredients.jpg"
      alt="Ingredients laid out on the kitchen table"
    >
      <ul>
        <li>Rice</li>
        <li>Taro</li>
        <li>Varieties of mushroom (your choice)</li>
        <li>Mint</li>
        <li>Vietnamese bologna (Chả lụa)</li>
        <li>Dried shrimp</li>
        <li>Ham</li>
        <li>Spring onions</li>
        <li>Soy sauce</li>
        <li>Salt</li>
        <li>Chilli powder</li>
        <li>Teriyaki sauce</li>
        <li>Oyster sauce</li>
        <li>Black pepper</li>
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
        }
      ]}
    />

    <SectionWithImage
      aos="fade-left"
      imageAlign="right"
      imageSrc="{base}/img/taro-rice/photo-scallions-knife.jpg"
      alt="chopping board with knife and scallions"
    >
      <ul>
        <li>Cleaver</li>
        <li>Chopping board</li>
        <li>Wok</li>
        <li>Stove</li>
        <li>Rice cooker</li>
      </ul>
    </SectionWithImage>

    <Section align="left" width="100%" aos="fade-up" title="Directions">
      <p>Preparing the ingredients:</p>
      <br />
      <ol>
        <li>
          Wash rice at least 2 times, then add water to it (Mum’s note: To do this, place your palm
          flat on the rice and make sure the water reaches your the beginning of your knuckles. That
          is the perfect amount of water). Set the rice aside for now.
        </li>
        <li>
          Start peeling the skin of the taro then cut it into small wedges. (Mum’s note: Remember to
          wear gloves because my mum says that the skin will make your hands itchy).
        </li>
        <li>Salt the rice with a teaspoon of salt then add your taro wedges into the rice.</li>
        <li>Now, give it a little more salt and add some water to wet the taro a little bit.</li>
        <li>Set it in the rice cooker and cook it.</li>
        <li>Chop the spring onions into small pieces.</li>
        <li>Pull the mint off their stems and chop it into small pieces.</li>
        <li>Cut up your mushrooms of choice into small pieces.</li>
        <li>
          Cut the meats of choice (Here it is vietnamese bologna (Chả lụa), dried shrimp, and ham)
          into small pieces.
        </li>
      </ol>
    </Section>

    <Section align="center" width="100%" aos="fade-up">
      <Image
        src="{base}/img/taro-rice/photo-chopped-ingredients.jpg"
        alt="Cutting sugar cane together"
      />
    </Section>

    <Section align="left" width="100%" aos="fade-up">
      <p>Stir frying the rice:</p>
      <br />
      <ol>
        <li>When the rice is finished cooking, give it a good mix.</li>
        <li>Now prepare a wok or a pan with some oil.</li>
        <li>When it’s hot, throw in all of the chosen meats and vegetables.</li>
        <li>
          Add some chilli powder, teriyaki sauce, oyster sauce, soy sauce and black peppers into the
          pan.
        </li>
        <li>
          Stir fry on medium-high heat for a few minutes before putting the cooked taro and rice
          into the pan.
        </li>
        <li>
          Add extra seasoning to your taste (Mum’s note: always taste your food while you’re cooking
          and season to your taste!).
        </li>
        <li>
          Stir fry everything together! You can leave on the heat for longer if you want to build a
          crunchy rice crust.
        </li>
        <li>Your taro rice is ready!</li>
      </ol>
    </Section>

    <Section align="center" width="100%" aos="fade-up">
      <Image src="{base}/img/taro-rice/photo-wok.jpg" alt="Cutting sugar cane together" />
    </Section>
  </SectionGroup>
</Article>
