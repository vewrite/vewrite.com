<template>
  <section class="get-started">
    <div class="container">
      <h2 class="get-started-header">We're accepting applications for beta testers now.</h2>
      <p>To ensure that </p>
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
  background: linear-gradient(to bottom, $white, rgba($mint-light, 0.2) 20%, rgba($mint-light, 0.2) 80%, $white);

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
      line-height: 1;
      text-align: center;
      color: $brand;
      margin: $spacing-md;
      display: inline-block;
      letter-spacing: -1px;
      width: 100%;
      font-weight: bold;
      text-wrap: balance;

      @media (max-width: $breakpoint-md) {
        position: relative;
        top: 0;
        text-align: center;
        width: calc(100% - #{$spacing-md * 2});
      }
    }

    .spline-viewer {
      height: 120px;
    }
  }
}

</style>