<script lang="ts">
  import type { anchorPlacementOptions, easingOptions } from 'aos';
  import type { AosType } from './aos-types';

  export let align: 'left' | 'right' | 'center' = 'left';
  export let width: string = 'auto';
  export let aos: AosType | undefined = undefined;
  export let aosPlacement: anchorPlacementOptions | undefined = undefined;
  export let aosDelay: number | undefined = undefined;
  export let aosOffset: number | undefined = undefined;
  export let aosEasing: easingOptions | undefined = undefined;
</script>

<section
  class={align}
  style="width: {width}"
  data-aos={aos}
  data-aos-anchor-placement={aosPlacement}
  data-aos-delay={aosDelay}
  data-aos-offset={aosOffset}
  data-aos-easing={aosEasing}
  data-aos-mirror="true"
  data-aos-once="false"
>
  <slot />
</section>

<style>
  section.left {
    align-self: start;
    text-align: left;
  }

  section.right {
    align-self: end;
    text-align: right;
  }

  section.center {
    align-self: center;
    text-align: center;
  }
</style>
