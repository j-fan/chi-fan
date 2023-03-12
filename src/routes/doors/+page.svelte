<script>
  import { base } from '$app/paths';
  import Doors from '$lib/doors/Doors.svelte';
</script>

<svelte:head>
  <title>Doors</title>
  <meta name="description" content="Doors" />
</svelte:head>

<div class="wrapper">
  <div class="message">← Scroll to explore the kitchens →</div>
  <div class="door-list">
    <Doors link="{base}/sugar-cane-water/intro">
      <img
        class="interior-img"
        slot="doorInside"
        src="{base}/img/sugar-cane-water/interior.jpg"
        alt="kitchen of the sugar cane water recipe"
      />
    </Doors>
    <Doors
      link="{base}/taro-rice/intro"
      doorImgLeft="{base}/img/taro-rice/door-left.jpg"
      doorImgRight="{base}/img/taro-rice/door-right.jpg"
      aspectRatio="500 / 847"
    >
      <img
        class="interior-img"
        slot="doorInside"
        src="{base}/img/sugar-cane-water/interior.jpg"
        alt="kitchen of the taro fried rice recipe"
      />
    </Doors>
  </div>
</div>

<style>
  .wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .message {
    position: fixed;
    top: 6rem;
    background: white;
    z-index: 1;
    border-radius: var(--border-radius);
    padding: 0.5rem;
  }

  .door-list {
    padding: 2rem;
    padding-top: 6rem;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    max-width: 100%;
    overflow: auto;
  }

  .interior-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-height: 820px) {
    .message {
      border: var(--border-style);
    }
  }
</style>
