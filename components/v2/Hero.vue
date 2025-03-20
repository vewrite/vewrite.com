<template>
  <section class="home-hero">
    <div class="home-hero-content">
      <spline-viewer class="hero-spiral" url="https://prod.spline.design/M0V-7n8yBKCYw0oC/scene.splinecode"></spline-viewer>
      <spline-viewer class="hero-cube" url="https://prod.spline.design/XpyEEeds12UTqHgT/scene.splinecode"></spline-viewer>
      <section class="hero-text">
        <h1>Project management for content writers</h1>
        <p class="hero-description">Vewrite is a project management and writing tool that can shorten your timelines using structured workflows, a modern writing experience, and built-in stakeholder review and approval.</p>
        <section class="hero-button">
          <a href="https://app.vewrite.com" class="button large">Get Started</a>
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

<script setup>

import { useJoinStore } from '~/stores/useJoin';
const joinStore = useJoinStore();

const toggleJoin = () => {
  joinStore.toggleJoin();
};

</script>

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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.home-hero {
  width: 100%;
  background: linear-gradient(to top, $white 0%, rgba($brand, 0.1) 80%, $white 100%);
  perspective: 1000px;
  padding: 0 0 $spacing-xxl;
  overflow: hidden;

  .home-hero-content {
    max-width: $max-width;
    margin: 0 auto;
    padding: $spacing-lg $spacing-md;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    animation: fadeIn 1s forwards;
    position: relative;

    .hero-spiral {
      position: absolute;
      left: -300px;
      top: 0;
      width: 600px;
      height: 600px;

      @media (max-width: $breakpoint-md) {
        display: none;
      }
    }

    .hero-cube {
      position: absolute;
      right: -400px;
      bottom: 450px;
      width: 600px;
      height: 600px;

      @media (max-width: $breakpoint-md) {
        display: none;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) rotate3d(1, 1, 1, 45deg);
      width: 600px;
      height: 600px;
      background: $white;
      filter: blur(200px);
      z-index: -1;
      opacity: 0.5;
    }

    .hero-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 0 $spacing-md $spacing-lg;
      perspective: 1000px;

      @media (max-width: $breakpoint-md) {
        padding: $spacing-lg 0;
      }

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

        @media (max-width: $breakpoint-md) {
          font-size: 52px;
        }
      }

      p.hero-description {
        max-width: 600px;
        margin: 0 auto;
        padding: 0 0 $spacing-md;
        font-size: $font-size-lg;
        color: $black;
      }

      p.legal-text {
        color: rgba($black, 0.85);
        font-size: $font-size-xs;
      }

      .hero-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: $spacing-xs;
        transition: transform 0.2s ease;
        height: 120px;
        position: relative;
        width: 300px;
        margin: 0 auto;

        .button {
          display: flex;
          flex-direction: row;
          gap: $spacing-xs;
          background: $brand;
          color: $white;
          font-size: $font-size-lg;
          padding: $spacing-md $spacing-lg;
        }
      }
    }

    .hero-image {
      position: relative;
      width: 100%;
      height: 100%;
      opacity: 0;
      animation: fadeIn 1s forwards;
      animation-delay: 0.5s;

      .mobile-image-wrapper {
        position: absolute;
        overflow: visible;
        width: 25%;
        aspect-ratio: 7.5/16;
        right: -5%;
        top: 10%;
        z-index: 2;
        opacity: 0;
        background: linear-gradient(165deg, rgba($brand, 0.4) 70%, #c8d3f7b8 100%);
        backdrop-filter: blur(4px);
        box-shadow: inset 0 2px 1px 1px rgba(white, 0.42), inset 0 2px 2px 4px rgba(white, 0.32), inset 0 0 2px 10px rgba(white, 0.12), 0 14px 1px 0px rgba($brand, 0.05), 0 16px 20px 5px rgba($brand, 0.12);
        border-radius: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 12px;

        @media (max-width: $breakpoint-xxl) {
          right: 5%;
        }

        @media (max-width: $breakpoint-xl) {
          display: none;
        }

        .screen {
          background: $brand;
          width: 100%;
          height: 100%;
          border-radius: 30px;
          border: 1px solid rgba($brand, 0.1);
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
            border: 1px solid transparent;
            border-radius: 28px;
            outline: 4px solid rgba($black, 0.1);
            outline-offset: -4px;
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
        backdrop-filter: blur(24px);
        background: linear-gradient(165deg, rgba($brand, 0.3) 70%, #C8D3F7 100%);
        box-shadow: inset 0 2px 1px 1px rgba(white, 0.42), inset 0 2px 2px 4px rgba(white, 0.32), inset 0 0 2px 10px rgba(white, 0.12), 0 6px 1px 0px rgba($brand, 0.05), 0 6px 10px 5px rgba($brand, 0.05);
        padding: $spacing-sm $spacing-sm 8px;
        border-radius: $br-xl;

        &:before {
          content: '';
          position: absolute;
          top: 0px;
          left: -5%;
          width: 110%;
          height: 110%;
          transform: rotate3d(4, 0, 0, -10deg);
          background: linear-gradient(115deg, $white, $mint-light, $white, rgba($brand-light, 0.65), $mint-light, $white);
          background-size: 200% 200%;
          animation: gradientGlow 10s infinite;
          filter: blur(100px);
          z-index: -1;
          opacity: 1;
          mix-blend-mode: overlay;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          overflow: hidden;
          border-radius: $br-lg;
        }


      }
      
    }
  }
}

@keyframes gradientGlow {
  0% { 
    opacity: 0.45;
    background-position: 0% 50%; 
  }
  50% { 
    opacity: 0.75;
    background-position: 100% 50%; 
  }
  100% { 
    opacity: 0.45;
    background-position: 0% 50%; 
  }
}

</style>