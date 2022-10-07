<script lang="ts">
  import { base } from '$app/paths';
  import Article from '$lib/article/Article.svelte';
  import Inventory from '$lib/article/Inventory.svelte';
  import Section from '$lib/article/Section.svelte';
  import SectionWithImage from '$lib/article/SectionWithImage.svelte';
</script>

<Article gap="4rem">
  <h1>Sugar cane water</h1>
  <Section align="center" width="300px">
    <img src="{base}/img/sugar-cane-water/cane3.jpg" alt="a single cane" width="300px" />
  </Section>

  <SectionWithImage
    aos="fade-left"
    imageAlign="right"
    imageSrc="{base}/img/sugar-cane-water/grandpa-cane.jpg"
    alt="Grandpa amongst the canes"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et lectus sit amet risus
    interdum maximus. Proin rhoncus magna ipsum, in luctus sapien fringilla eu. Vestibulum ante
    ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec malesuada velit ut
    commodo porttitor. Etiam et malesuada felis, a imperdiet mi. Aliquam felis dui, consequat in
    sapien nec, euismod pharetra magna. Integer vitae neque gravida, scelerisque quam eu,
    pellentesque urna.
  </SectionWithImage>

  <Section width="80%" aos="fade-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et lectus sit amet risus
    interdum maximus. Proin rhoncus magna ipsum, in luctus sapien fringilla eu. Vestibulum ante
    ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec malesuada velit ut
    commodo porttitor. Etiam et malesuada felis, a imperdiet mi. Aliquam felis dui, consequat in
    sapien nec, euismod pharetra magna. Integer vitae neque gravida, scelerisque quam eu,
    pellentesque urna.
  </Section>

  <Inventory itemsImageSrc={[]} />

  <SectionWithImage
    aos="fade-up"
    imageAlign="left"
    imageSrc="{base}/img/sugar-cane-water/cutting-cane.jpg"
    alt="Cutting up the cane"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et lectus sit amet risus
    interdum maximus. Proin rhoncus magna ipsum, in luctus sapien fringilla eu. Vestibulum ante
    ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec malesuada velit ut
    commodo porttitor. Etiam et malesuada felis, a imperdiet mi. Aliquam felis dui, consequat in
    sapien nec, euismod pharetra magna. Integer vitae neque gravida, scelerisque quam eu,
    pellentesque urna.
  </SectionWithImage>

  <Section align="left" width="80%" aos="fade-right">
    Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
    volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
    libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
    efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu. Curabitur
    a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
  </Section>

  <Section align="center" width="80%">
    Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
    volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
    libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
    efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu. Curabitur
    a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
  </Section>

  <Section align="center" width="80%">
    Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
    volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
    libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
    efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu. Curabitur
    a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
  </Section>

  <Section align="center" width="80%">
    Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
    volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
    libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
    efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu. Curabitur
    a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
  </Section>

  <Section align="center" width="80%">
    Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
    volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
    libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
    efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu. Curabitur
    a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
  </Section>

  <Section align="center" width="80%">
    Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
    volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
    libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
    efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu. Curabitur
    a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
  </Section>
  <Section align="center" width="80%">
    Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
    volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
    libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
    efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu. Curabitur
    a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
  </Section>

  <Section align="center" width="80%">
    Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
    volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
    libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
    efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu. Curabitur
    a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
  </Section>
  <Section align="center" width="80%">
    Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
    volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
    libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
    efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu. Curabitur
    a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
  </Section>

  <Section align="center" width="80%">
    Nam dui enim, tristique et maximus at, fringilla sed odio. Nullam sollicitudin nunc orci, vel
    volutpat augue lobortis a. Morbi tortor massa, imperdiet iaculis magna eu, laoreet rutrum
    libero. Mauris nunc dui, laoreet ut velit quis, pharetra aliquam nisl. Duis finibus, odio quis
    efficitur elementum, dolor ligula sollicitudin sapien, eu egestas erat elit eget arcu. Curabitur
    a tortor volutpat, dignissim libero in, scelerisque neque. Duis ac varius est.
  </Section>
</Article>

<style>
  h1 {
    color: var(--c-red);
    text-align: center;
  }
</style>
