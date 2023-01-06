<script lang="ts">
  import { base } from '$app/paths';
  import Article from '$lib/article/Article.svelte';
  import FullWidthBanner from '$lib/article/FullWidthBanner.svelte';
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
    <Section align="center" width="100%">
      Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
      volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
      libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
      efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu.
      Curabitur a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
    </Section>
    <SectionWithImage
      aos="fade-left"
      imageAlign="right"
      imageSrc="{base}/img/sugar-cane-water/grandpa-cane.jpg"
      alt="Grandpa amongst the canes"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et lectus sit amet risus
      interdum maximus. Proin rhoncus magna ipsum, in luctus sapien fringilla eu. Vestibulum ante
      ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec malesuada velit
      ut commodo porttitor. Etiam et malesuada felis, a imperdiet mi. Aliquam felis dui, consequat
      in sapien nec, euismod pharetra magna. Integer vitae neque gravida, scelerisque quam eu,
      pellentesque urna.
    </SectionWithImage>

    <Section aos="fade-up" width="100%">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et lectus sit amet risus
      interdum maximus. Proin rhoncus magna ipsum, in luctus sapien fringilla eu. Vestibulum ante
      ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec malesuada velit
      ut commodo porttitor. Etiam et malesuada felis, a imperdiet mi. Aliquam felis dui, consequat
      in sapien nec, euismod pharetra magna. Integer vitae neque gravida, scelerisque quam eu,
      pellentesque urna.
    </Section>

    <Inventory
      itemsImageSrc={[
        {
          label: 'Cane',
          src: `${base}/img/sugar-cane-water/cane3.jpg`
        },
        {
          label: 'Cleaver',
          src: `${base}/img/sugar-cane-water/cleaver2.png`
        },
        {
          label: 'Chopping board',
          src: `${base}/img/sugar-cane-water/board.jpg`
        },
        {
          label: 'Carrot',
          src: `${base}/img/sugar-cane-water/carrot.jpg`
        },
        {
          label: 'Pot',
          src: `${base}/img/sugar-cane-water/pot.jpg`
        },
        {
          label: 'Scrub',
          src: `${base}/img/sugar-cane-water/scrub.jpg`
        },
        {
          label: 'Tub',
          src: `${base}/img/sugar-cane-water/tub.jpg`
        }
      ]}
    />

    <SectionWithImage
      aos="fade-right"
      imageAlign="left"
      imageSrc="{base}/img/sugar-cane-water/cutting-cane.jpg"
      alt="Cutting up the cane"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et lectus sit amet risus
      interdum maximus. Proin rhoncus magna ipsum, in luctus sapien fringilla eu. Vestibulum ante
      ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec malesuada velit
      ut commodo porttitor. Etiam et malesuada felis, a imperdiet mi. Aliquam felis dui, consequat
      in sapien nec, euismod pharetra magna. Integer vitae neque gravida, scelerisque quam eu,
      pellentesque urna.
    </SectionWithImage>

    <Section align="left" width="80%" aos="fade-right">
      Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
      volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
      libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
      efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu.
      Curabitur a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
    </Section>

    <Section align="right" width="80%" aos="fade-right">
      Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
      volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
      libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
      efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu.
      Curabitur a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
    </Section>

    <Section align="left" width="80%" aos="fade-right">
      Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
      volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
      libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
      efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu.
      Curabitur a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
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
