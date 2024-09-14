<template>
  <main  id="Header" :class="{'scrolled': isScrolled}"> 
    <section class="nav-main">
      <nuxt-link to="/"><Logo color="purple" size="small" /></nuxt-link>
      <nuxt-link to="/" class="nav-item" v-if="!isHome">Home</nuxt-link>
      <nuxt-link to="/articles" class="nav-item">Articles</nuxt-link>
    </section>
    <!-- <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <section class="home-links">
        <a href="#join">Join Waitlist</a>
        <a href="#teams">Teams</a>
        <a href="#writers">Writers</a>
      </section>
      <NuxtLink to="/articles">Articles</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav> -->
    <div class="button clear" @click="toggleJoin()">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="7" fill="#8D00FB"/>
        <path d="M3 7H11" stroke="white"/>
        <path d="M7 3L7 11" stroke="white"/>
      </svg>
      Join the beta
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import { useJoinStore } from '~/stores/useJoin';
const joinStore = useJoinStore();

const toggleJoin = () => {
  joinStore.toggleJoin();
};

const router = useRouter();

// console.log(router);

const isHome = router.currentRoute.value.path === '/';
const isArticle = router.currentRoute.value.path.includes('articles');

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

@keyframes topSlideDown {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

#Header {
  background: transparent;
  background-size: cover;
  color: $black;
  padding: $spacing-sm;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 0;
  z-index: 80;
  opacity: 0;
  animation: topSlideDown 0.5s 0.5s forwards;

  .nav-main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: $spacing-md;

    a.nav-item {
        color: rgba($purple, 0.6);
        text-decoration: none;
        font-size: $font-size-md;
        font-weight: 500;
        font-family: $font-family-condensed;
        transition: all 0.13s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: $spacing-xxs;
    }

    // nav {
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   gap: $spacing-md;

    //   a {
    //     color: rgba($purple, 0.6);
    //     text-decoration: none;
    //     font-size: $font-size-md;
    //     font-weight: 500;
    //     font-family: $font-family-condensed;
    //     transition: all 0.13s ease-in-out;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;

    //     &.router-link-exact-active {
    //       color: $white;
    //     }

    //     &:hover {
    //       color: $white;
    //     }
    //   }

    // }
  }

  &.scrolled {
    background-color: rgba($white, 0.17);
    box-shadow: 0 1px 1px 0 rgba($black, 0.05), 0 2px 2px 0 rgba($purple, 0.04);
    backdrop-filter: blur(14px);
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  }

}


</style>