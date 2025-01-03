<template>
  <section class="home-hero">
    <div class="home-hero-content">
      <section class="hero-text">
        <h1>Unleash the full power of your writing team</h1>
        <p class="hero-description">Reduce your project’s timelines by leveraging our structured workflows, a modern writing experience, and built-in stakeholder review and approval.</p>
        <section class="hero-button">
          <nuxt-link to="/"><spline-viewer class="spline-viewer" url="https://prod.spline.design/e-9M6KJB-YAmadkR/scene.splinecode"></spline-viewer></nuxt-link>
          <!-- <button class="primary large">Get started</button> -->
        </section>
        <p class="legal-text">Free for beta users. Limited to 1 project. No credit card required.</p>
      </section>
      <section class="hero-image">
        <div class="image-wrapper">
          <img src="/public/images/hero-preview.png" alt="Vewrite" />
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>

@use 'assets/variables' as *;

.home-hero {
  width: 100%;

  .home-hero-content {
    max-width: $max-width;
    margin: 0 auto;
    padding: $spacing-lg $spacing-md;
    min-height: 400px;
    display: flex;
    flex-direction: column;

    .hero-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 0 $spacing-md $spacing-lg;
      perspective: 1000px;

      h1 {
        font-size: 5vw;
        font-weight: bold;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1;
        padding: $spacing-md 0;
        background: linear-gradient(to right, #4D70E7 60%, #3F5CBE 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      }

      p.hero-description {
        max-width: 600px;
        margin: 0 auto;
        padding: 0 0 $spacing-md;
      }

      p.legal-text {
        color: rgba($black, 0.25);
      }

      .hero-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: $spacing-xs;
        transition: transform 0.2s ease;

        &:hover {
          transform: scale(1.05);
        }

        .spline-viewer {
          height: 120px;
        }
      }
    }

    .hero-image {
      position: relative;

      .image-wrapper {
        position: relative;
        overflow: visible;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          overflow: hidden;
          border: $border;
          border-radius: $br-lg;
        }

        &:before {
          content: '';
          position: absolute;
          top: 0px;
          left: calc(50% - 200px);
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: $brand;
          opacity: 0.5;
          filter: blur(400px);
          z-index: -1;
        }

        &:after {
          content: '';
          position: absolute;
          top: 0px;
          left: calc(50% - 400px);
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: $mint;
          opacity: 0.5;
          filter: blur(400px);
          z-index: -1;
        }
      }
      
    }
  }
}

</style>