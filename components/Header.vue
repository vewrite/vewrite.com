<template>
  <main  id="Header" :class="{'scrolled': isScrolled}"> 
    <div class="mobile-switch" @click="toggleMobileNav">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14Z" fill="#1864DA"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 11L8 11V10L20 10V11Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 18H8V17H20V18Z" fill="white"/>
      </svg>
      <Logo color="brand" size="tiny" />
    </div>
    <section class="nav-main">
      <nuxt-link to="/"><Logo color="brand" size="tiny" /></nuxt-link>
      <nuxt-link to="/" class="nav-item" v-if="!isHome">Home</nuxt-link>
      <nuxt-link to="/articles" class="nav-item">Articles</nuxt-link>
    </section>
    <div class="button clear" @click="toggleJoin()">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="7" fill="#1864DA"/>
        <path d="M3 7H11" stroke="white"/>
        <path d="M7 3L7 11" stroke="white"/>
      </svg>
      Join the beta
    </div>
  </main>
  <nav id="MobileNav" :class="mobileState">
    <div class="close" @click="toggleMobileNav">
      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.8995 24.799C18.4322 30.2663 9.56785 30.2663 4.10051 24.799C-1.36683 19.3317 -1.36683 10.4673 4.10051 5C9.56785 -0.467336 18.4322 -0.467336 23.8995 5C29.3668 10.4673 29.3668 19.3317 23.8995 24.799Z" fill="#1864DA"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3029 20.9099L7.98918 9.59619L8.69629 8.88908L20.01 20.2028L19.3029 20.9099Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98993 20.2028L19.3036 8.88907L20.0107 9.59618L8.69703 20.9099L7.98993 20.2028Z" fill="white"/>
      </svg>
    </div>
    <nuxt-link to="/" @click="toggleMobileNav">Home</nuxt-link>
    <nuxt-link to="/articles" @click="toggleMobileNav">Articles</nuxt-link>
  </nav>
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

const mobileState = ref('closed');

const toggleMobileNav = () => {
  mobileState.value = mobileState.value === 'open' ? 'closed' : 'open';
};

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

#MobileNav {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($black, 0.9);
  z-index: 100;
  padding: $spacing-md;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: $spacing-md;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  .close {
    position: absolute;
    top: $spacing-sm;
    right: $spacing-sm;
    cursor: pointer;
  }

  a {
    color: $white;
    text-decoration: none;
    font-size: $font-size-xl;
    font-weight: bold;
    font-family: $font-family-main;
    transition: all 0.13s ease-in-out;
  }

  .home-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: $spacing-md;
  }

  &.open {
    opacity: 1;
    pointer-events: all;
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

  .mobile-switch {
    display: none;
    cursor: pointer;
    z-index: 100;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: $spacing-sm;
    }
  }

  .nav-main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: $spacing-md;

    @media (max-width: 1000px) {
      display: none;
    }

    a.nav-item {
        color: rgba($brand, 0.6);
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
    //     color: rgba($brand, 0.6);
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
    box-shadow: 0 1px 1px 0 rgba($black, 0.05), 0 2px 2px 0 rgba($brand, 0.04);
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