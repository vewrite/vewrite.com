<template>
  <main  id="Header" :class="{'scrolled': isScrolled}"> 
    <div class="container wide">
      <nuxt-link to="/"><Logo /></nuxt-link>
      <nav>
        <a href="#join">Join Waitlist</a>
        <a href="#teams">Teams</a>
        <a href="#writers">Writers</a>
        <NuxtLink to="/articles">Articles</NuxtLink>
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
  background: $purple;
  background-size: cover;
  color: $white;
  padding: 0 $spacing-lg;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 2 * $spacing-lg);
  margin: 0 $spacing-lg 0 $spacing-lg;
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 100px;

  @media (max-width: 1400px) {
      width: 100%;
      margin: 0;
      border-radius: 0;
  }

  &.scrolled {
    border-radius: 0 0 $br-xl $br-xl;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: rgba($purple, 0.9);
    backdrop-filter: blur(8px);
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

      a {
        color: $white;
        text-decoration: none;
        font-size: $font-size-lg;
        font-family: $font-family-condensed;
      }

    }
  }

}


</style>