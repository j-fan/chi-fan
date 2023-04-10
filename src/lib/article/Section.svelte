<script lang="ts">
  import type { anchorPlacementOptions, easingOptions } from 'aos';
  import type { AosType } from './aos-types';

  export let align: 'left' | 'right' | 'center' = 'left';
  export let width: string = 'auto';
  export let aos: AosType | undefined = 'fade-up';
  export let aosPlacement: anchorPlacementOptions | undefined = undefined;
  export let aosDelay: number | undefined = undefined;
  export let aosDuration: number | undefined = undefined;
  export let aosOffset: number | undefined = undefined;
  export let aosEasing: easingOptions | undefined = undefined;
  export let backgroundColor: string = 'transparent';
  export let title: string = '';
</script>

<section
  class={align}
  style="width: {width}; background: {backgroundColor};"
  data-aos={aos && aos !== 'none' ? aos : undefined}
  data-aos-anchor-placement={aosPlacement}
  data-aos-delay={aosDelay}
  data-aos-offset={aosOffset}
  data-aos-easing={aosEasing}
  data-aos-duration={aosDuration}
  data-aos-mirror="true"
  data-aos-once="false"
>
  {#if title}
    <h2>{title}</h2>
  {/if}
  <slot />
</section>

<style>
  h2 {
    color: var(--c-red);
    margin-bottom: 1rem;
  }

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
