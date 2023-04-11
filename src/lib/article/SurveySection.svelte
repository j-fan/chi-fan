<script lang="ts">
  import { base } from '$app/paths';
  import SectionWithImage from './SectionWithImage.svelte';
</script>

<SectionWithImage
  title="Your feedback"
  imageAlign="left"
  imageSrc="{base}/img/qr-code.jpg"
  alt="Survey QR code"
>
  The 吃饭 (Chi-Fan) team is conducting research about how audiences are experiencing 饭 (Chi-Fan).
  Please complete the voluntary survey via the QR.
</SectionWithImage>
