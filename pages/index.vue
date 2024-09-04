<template>
  <main id="hero">
    <a name="join" class="target"></a>
    <div class="container">
      <div class="hero-article">
        <span class="new">
          <span class="bubble"></span>
          New
        </span>
        <nuxt-link to="/" class="hero-article-title">Introducing Vewrite ➔</nuxt-link>
      </div>
      <h1>
        More writing,<br>
        less hassle
      </h1>
      <h2>
        Vewrite is launching an integrated project management and talent marketplace for technical writing teams.
      </h2>
      <form class="hero-waitlist">
        <input type="email" placeholder="Enter your email">
        <button class="green large">Join Waitlist ➔</button>
      </form>
    </div>
  </main>
  <div id="Personas">
    Teams
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'home'
});
</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

@keyframes pulse {
  0% {
    transform: scale(0.4);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.4);
  }
}

#hero {
  background: $purple;
  background-size: cover;
  color: $white;
  padding-top: $spacing-xxl;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .target {
    height: 0;
    width: 0;
    visibility: hidden;
    display: none;
  }

  .container {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
    padding-bottom: $spacing-xxl;

    &:after {
      content: '';
      position: absolute;
      bottom: -1px;
      right: -300px;
      width: 300px;
      height: 400px;
      background: transparent url('/images/white_overlay.svg') no-repeat center center;
      background-size: cover;
      z-index: 1;
    }

    .hero-article {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: $spacing-sm;

      .new {
        font-size: $font-size-xs;
        font-family: $font-family-condensed;
        font-weight: bold;
        color: $white;
        background: $purple-dark;
        padding: 6px 8px 6px 32px;
        border-radius: $br-md;
        position: relative;

        .bubble {
          width: 18px;
          height: 18px;
          position: relative;
          background: $purple;
          mix-blend-mode: normal;
          box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.6);
          border-radius: 30px;
          position: absolute;
          left: 5px;
          top: 3px;
          transform: scale(0.4);
          animation: pulse 2s infinite;

          &:before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 8px;
            height: 8px;
            background: $white;
            mix-blend-mode: normal;
            border-radius: 30px;
          }

        }

      }

      a {
        color: $white;
        text-decoration: none;
        font-size: $font-size-md;
        font-family: $font-family-condensed;
      }

    }

    h1 {
      font-size: $font-size-mega;
      line-height: 90%;
      font-weight: bold;
      margin: $spacing-md 0;
      position: relative;
      width: 80%;

      &:before {
        content: '';
        position: absolute;
        top: -200px;
        left: -680px;
        width: 600px;
        height: 600px;
        background: transparent url('/images/triangle.png') no-repeat center center;
        background-size: contain;
        z-index: -1;
      }
    }

    h2 {
      font-size: $font-size-xl;
      font-family: $font-family-condensed;
      line-height: 150%;
      font-weight: normal;
      margin: $spacing-md 0 $spacing-lg 0;
      position: relative;
      width: 80%;

      &:before {
        content: '';
        position: absolute;
        top: -200px;
        right: -780px;
        width: 700px;
        height: 700px;
        background: transparent url('/images/circle.png') no-repeat center center;
        background-size: contain;
        z-index: -1;
      }

    }

    form {
      display: flex;
      flex-direction: row;
      gap: $spacing-sm;
      width: 80%;
      position: relative;

      input {
        padding: $spacing-md;
        border: none;
        border-radius: 40px;
        font-size: $font-size-md;
        font-family: $font-family-condensed;
        width: 100%;
        background: $purple-dark;
        color: $white;
      }

      button {
        position: absolute;
        right: 14px;
        top: 12px;
        font-size: $font-size-md;
        outline: 2px solid $green;
        outline-offset: 4px;

        &:hover {
          outline-offset: 2px;
        }
      }
    }
  }

}

</style>