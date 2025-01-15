<template>
  <section class="get-started">
    <div class="container">
      <h2 id="get-started" class="get-started-header">We're accepting beta testers <span class="highlight brand big">right now</span></h2>
      <p class="get-started-convincer">To ensure that we stay focused, we are limiting access to the first users who apply. Don't miss your opportunity to try out the future of project management for content creation.</p>
      <spline-viewer class="spline-viewer" url="https://prod.spline.design/e-9M6KJB-YAmadkR/scene.splinecode" @click="toggleJoin()"></spline-viewer>
    </div>
  </section>
</template>

<script setup>

import { useJoinStore } from '~/stores/useJoin';
const joinStore = useJoinStore();

const toggleJoin = () => {
  joinStore.toggleJoin();
};

</script>

<style lang="scss" scoped>

@use 'assets/variables' as *;

.get-started {
  padding: $spacing-lg 0;
  background: linear-gradient(to bottom, rgba($mint-light, 0.3) 20%, rgba($white, 0) 50%);

  @media (max-width: $breakpoint-md) {
    padding: 0 0 $spacing-md;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    margin: $spacing-xl auto;
    width: 100%;
    max-width: $max-width;
    position: relative;

    @media (max-width: $breakpoint-md) {
      gap: 0;
      margin: $spacing-md auto;
    }

    .get-started-header {
      font-size: 52px;
      font-weight: bold;
      line-height: 1.2;
      text-align: center;
      color: $brand;
      display: inline-block;
      letter-spacing: -1px;
      width: 100%;
      font-weight: bold;
      text-wrap: balance;

      @media (max-width: $breakpoint-md) {
        position: relative;
        top: 0;
        text-align: center;
        width: 100%;
      }
    }

    p.get-started-convincer {
      max-width: 600px;
      margin: 0 auto;
      padding: 0 0 $spacing-md;
      font-size: $font-size-lg;
      color: $black;
      text-align: center;
    }

    .spline-viewer {
      height: 120px;
      cursor: pointer;
    }
  }
}

</style>