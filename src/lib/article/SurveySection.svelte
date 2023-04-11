<script lang="ts">
  import { base } from '$app/paths';
  import SectionWithImage from './SectionWithImage.svelte';
  import type { AosType } from './aos-types';

  export let aos: AosType | undefined = undefined;
</script>

<SectionWithImage
  title="Your feedback"
  imageAlign="right"
  imageSrc="{base}/img/qr-code-survey.jpg"
  alt="Survey QR code"
  imageObjectFit="contain"
  imageBgColor="white"
  {aos}
>
  The 吃饭 (Chi-Fan) team is conducting research about how audiences are experiencing 饭 (Chi-Fan).
  Please complete the voluntary survey via the QR.
</SectionWithImage>
