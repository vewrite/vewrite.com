<template>
  <section class="home-hero">
    <div class="home-hero-content">
      <section class="hero-text">
        <h1>Unleash the full power of your writing team</h1>
        <p class="hero-description">Shorten your project’s timelines by leveraging our structured workflows, a modern writing experience, and built-in stakeholder review and approval.</p>
        <section class="hero-button">
          <div class="loader"></div>
          <nuxt-link to="/"><spline-viewer class="spline-viewer" url="https://prod.spline.design/e-9M6KJB-YAmadkR/scene.splinecode"></spline-viewer></nuxt-link>
          <!-- <button class="primary large">Get started</button> -->
        </section>
        <p class="legal-text">Free for beta users. Limited to 1 project. No credit card required.</p>
      </section>
      <section class="hero-image">
        <div class="desktop-image-wrapper">
          <img src="/public/images/hero-preview.png" alt="Vewrite" />
        </div>
        <div class="mobile-image-wrapper" v-gsap.parallax.faster>
          <div class="screen">
            <div class="notch"></div>
            <img src="/public/images/hero-preview-mobile.png" alt="Vewrite" />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>

@use 'assets/variables' as *;

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes topSlide {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

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
    opacity: 0;
    animation: fadeIn 1s forwards;

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
        min-height: 120px;
        position: relative;

        .loader {
          position: absolute;
          top: 50px;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: spin .5s linear infinite;
          border: 2px solid rgba($black, 0.1);
          border-top: 2px solid $brand;
          border-radius: 50%;
          width: 24px;
          height: 24px;
        }

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
      opacity: 0;
      animation: topSlide 1s forwards;

      .mobile-image-wrapper {
        position: absolute;
        overflow: visible;
        width: 25%;
        aspect-ratio: 7.5/16;
        right: -5%;
        top: 10%;
        z-index: 2;
        opacity: 0;
        background: rgba($black, 1);
        box-shadow: inset 0 4px 0px 0px rgba(white, 0.22), inset 0 0 2px 4px rgba(white, 0.12), 0 14px 1px 0px rgba($brand, 0.05), 0 16px 20px 5px rgba($brand, 0.12);
        margin: 15px;
        border-radius: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 8px;
        transition: all 0.3s;

        @media (max-width: $breakpoint-xxl) {
          right: 5%;
        }

        @media (max-width: $breakpoint-xl) {
          display: none;
        }

        .screen {
          background: $black;
          width: 100%;
          height: 100%;
          border-radius: 30px;
          border: 1px solid rgba($black, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            overflow: hidden;
            border: $border;
          }

        }

      }

      .desktop-image-wrapper {
        position: relative;
        overflow: visible;
        width: 100%;
        height: 100%;
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