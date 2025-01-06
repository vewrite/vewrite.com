<template>
  <section class="get-started">
    <div class="container">
      <h2 class="get-started-header">We're accepting beta testers <span class="highlight">right now</span>.</h2>
      <p class="get-started-convincer">To ensure that we stay focused, we are limiting access to the first 100 users who apply. Don't miss your opportunity to try out the future of project management for content creation.</p>
      <!-- <div class="column-right">
        <p>Having a project be successful is not just about what you deliver, but also is about the back and forth with your writers and stakeholders to get you across the finish line.</p>
        <p><button class="button light">Explore Reviews</button></p>
      </div> -->
      <nuxt-link to="/"><spline-viewer class="spline-viewer" url="https://prod.spline.design/e-9M6KJB-YAmadkR/scene.splinecode"></spline-viewer></nuxt-link>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use 'assets/variables' as *;

.get-started {
  padding: $spacing-lg 0;
  background: linear-gradient(to bottom, $white, rgba($brand-light, 0.1) 20%, rgba($brand-light, 0.2) 80%, $white);

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

      .highlight {
        background:  linear-gradient(165deg, rgba($brand, 0.1) 70%, rgba($brand, 0.5) 100%);
        padding: 0px $spacing-sm;
        border-radius: $br-lg;
        transform: skew(-7.5deg);
        display: inline-block;
      }

      @media (max-width: $breakpoint-md) {
        position: relative;
        top: 0;
        text-align: center;
        width: calc(100% - #{$spacing-md * 2});
      }
    }

    p.get-started-convincer {
      max-width: 600px;
      margin: 0 auto;
      padding: 0 0 $spacing-md;
      font-size: $font-size-lg;
      color: $brand;
      text-align: center;
    }

    .spline-viewer {
      height: 120px;
    }
  }
}

</style>