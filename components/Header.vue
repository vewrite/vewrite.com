<template>
  <main  id="Header" :class="{'scrolled': isScrolled}"> 
    <div class="container wide">
      <nuxt-link to="/"><Logo /></nuxt-link>
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
        <!-- <section class="home-links">
          <a href="#join">Join Waitlist</a>
          <a href="#teams">Teams</a>
          <a href="#writers">Writers</a>
        </section> -->
        <NuxtLink to="/articles">Articles</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
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
  background: $white;
  background-size: cover;
  color: $black;
  padding: 0 $spacing-lg;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 80;
  height: 80px;
  border-bottom: 2px solid rgba($white, 0.4);

  a svg {
    transition: all 0.3s ease-in-out;
    fill: $black;
  }

  @media (max-width: 1400px) {
      width: 100%;
      margin: 0;
      border-radius: 0;
  }

  &.scrolled {
    background-color: rgba($white, 0.77);
    backdrop-filter: blur(14px);
    // border-bottom: 2px solid rgba($black, 1);

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
        color: rgba($black, 0.6);
        text-decoration: none;
        font-size: $font-size-md;
        font-family: $font-family-condensed;
        transition: all 0.3s ease-in-out;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;

        &.router-link-exact-active {
          color: $black;
        }

        &:hover {
          color: $white;
        }
      }

    }
  }

}


</style>