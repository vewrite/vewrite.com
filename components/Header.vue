<template>
  <main  id="Header" :class="{'scrolled': isScrolled}"> 
    <div class="container mid">
      <nuxt-link to="/"><Logo /></nuxt-link>
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
        <!-- <section class="home-links">
          <a href="#join">Join Waitlist</a>
          <a href="#teams">Teams</a>
          <a href="#writers">Writers</a>
        </section> -->
        <NuxtLink to="/articles">Articles</NuxtLink>
        <!-- <NuxtLink to="/contact">Contact</NuxtLink> -->
      </nav>
      <button class="primary large">Contact</button>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

#Header {
  background: $purple;
  background-size: cover;
  color: $black;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 0;

  z-index: 80;
  height: 80px;


  a svg {
    transition: all 0.3s ease-in-out;
    fill: $white;
  }

  @media (max-width: 1000px) {
      padding: 0 $spacing-xs;
  }

  &.scrolled {
    // background-color: rgba($white, 0.77);
    box-shadow: 0 6px 10px 0 rgba($black, 0.1), 0 20px 20px 0 rgba($purple, 0.04);
    // backdrop-filter: blur(14px);

    // svg {
    //   fill: $white;
    // }

    // .container nav a {
    //   color: rgba($white, 0.5);

    //   &.router-link-exact-active {
    //     color: $white;
    //   }
    // }
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: $spacing-md;

      section.home-links {
        display: flex;
        flex-direction: row;
        gap: $spacing-md;
        padding-right: $spacing-md;
        border-right: 1px solid rgba($white, 0.4);
      }

      a {
        color: rgba($white, 0.6);
        text-decoration: none;
        font-size: $font-size-lg;
        font-weight: 500;
        font-family: $font-family-condensed;
        transition: all 0.13s ease-in-out;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;

        &.router-link-exact-active {
          color: $white;
        }

        &:hover {
          color: $white;
        }
      }

    }
  }

}


</style>