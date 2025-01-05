<template>
  <section class="home-hero">
    <div class="home-hero-content">
      <section class="hero-text">
        <h1>Unleash the full power of your writing team</h1>
        <p class="hero-description">Shorten your project’s timelines by leveraging our structured workflows, a modern writing experience, and built-in stakeholder review and approval.</p>
        <section class="hero-button">
          <nuxt-link to="/"><spline-viewer class="spline-viewer" url="https://prod.spline.design/e-9M6KJB-YAmadkR/scene.splinecode"></spline-viewer></nuxt-link>
          <!-- <button class="primary large">Get started</button> -->
        </section>
        <p class="legal-text">Free for beta users. Limited to 1 project. No credit card required.</p>
      </section>
      <section class="hero-image">
        <div class="desktop-image-wrapper" v-gsap.parallax.faster>
          <img src="/public/images/hero-preview.png" alt="Vewrite" />
        </div>
        <div class="mobile-image-wrapper" v-gsap.parallax.faster-10>
          <img src="/public/images/hero-preview-mobile.png" alt="Vewrite" />
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>

@use 'assets/variables' as *;

.home-hero {
  width: 100%;
  background: linear-gradient(to top, $white 0%, #EAECEE 80%, $white 100%);

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
        font-size: 84px;
        font-weight: bold;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1;
        padding: $spacing-md 0;
        background: linear-gradient(to right, #4D70E7 60%, #3F5CBE 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
        letter-spacing: -2px;
      }

      p.hero-description {
        max-width: 600px;
        margin: 0 auto;
        padding: 0 0 $spacing-md;
        font-size: $font-size-lg;
      }

      p.legal-text {
        color: rgba($black, 0.25);
        font-size: $font-size-xs;
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
      width: 100%;
      height: 100%;

      .mobile-image-wrapper {
        position: absolute;
        overflow: visible;
        width: 20%;
        aspect-ratio: 9/16;
        right: 10%;
        top: -10%;
        z-index: 2;
        box-shadow: $big-shadow;
        border-radius: $br-lg;
        background: $white;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          overflow: hidden;
          border: $border;
          opacity: 0;
        }
      }

      .desktop-image-wrapper {
        position: relative;
        overflow: visible;
        width: 90%;
        height: 100%;
        max-width: 800px;
        margin: 0 auto;
        z-index: 1;
        perspective: 1000px;

        &:before {
          content: '';
          position: absolute;
          top: 0px;
          width: 100%;
          height: 90%;
          transform: rotate3d(1, 0, 0, -10deg);
          background: linear-gradient(115deg, $white, $mint-light ,$brand, $white);
          background-size: 200% 200%;
          animation: gradientGlow 12s infinite;
          filter: blur(20px);
          z-index: -1;
          opacity: 0.25;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          overflow: hidden;
          border: $border;
          border-radius: $br-lg;
        }


      }
      
    }
  }
}

@keyframes gradientGlow {
  0% { 
    opacity: 0.25;
    background-position: 0% 50%; 
  }
  50% { 
    opacity: 0.5;
    background-position: 100% 50%; 
  }
  100% { 
    opacity: 0.25;
    background-position: 0% 50%; 
  }
}

</style>