<script lang="ts">
  import { base } from '$app/paths';
  import SectionWithImage from './SectionWithImage.svelte';
</script>

<SectionWithImage
  title="Your feedback"
  imageAlign="right"
  imageSrc="{base}/img/qr-code-survey.jpg"
  alt="Survey QR code"
  imageObjectFit="contain"
  imageBgColor="white"
>
  The 吃饭 (Chi-Fan) team is conducting research about how audiences are experiencing 饭 (Chi-Fan).
  Please complete the voluntary survey via the QR.
</SectionWithImage>
