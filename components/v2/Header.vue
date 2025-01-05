<template>
  <nav :class="['nav-bar', isMenuHidden ? 'hidden' : '']" role="navigation">
    <section :class="['mobile', menu]">
      <section class="toggle-menu-logo">
        <button class="mobile-toggle large" @click="toggleMenu">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5H17" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M1 6.5H17" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M1 11.5H17" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <v2Logo />
      </section>
    </section>
    <section class="desktop">
      <v2Logo />
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>
            <v2Dropdown>
              <template v-slot:trigger>
                Product
              </template>
              <template v-slot:menu>
                Test
              </template>
            </v2Dropdown>
          </li>
          <li><nuxt-link to="/resources">Resources</nuxt-link></li>
          <li><nuxt-link to="/articles">Articles</nuxt-link></li>
          <li><nuxt-link to="/pricing">Pricing</nuxt-link></li>
        </ul>
        <button class="desktop-login large">Login</button>
      </nav>
    </section>
  </nav>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const menu = ref(true);

const toggleMenu = function(){
  return menu.value = !menu.value;
}

// When the user scrolls down, hide the menu. When the user scrolls up, show the menu.
let lastScrollTop = 0;
const isMenuHidden = ref(false);

const onScroll = function() {
  let st = window.scrollY || document.documentElement.scrollTop;
  if (st > lastScrollTop){
    isMenuHidden.value = true;
  } else {
    isMenuHidden.value = false;
  }
  lastScrollTop = st <= 0 ? 0 : st;
}

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});



</script>

<style lang="scss" scoped>

@use 'assets/variables' as *;

nav.nav-bar {
  z-index: 1000;
  top: 0;
  transform: translateY(0%);
  transition: all 0.3s;
  position: sticky;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff9c;
  backdrop-filter: blur(10px);
  overflow: visible;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, $white, transparent);
    z-index: -1;
  }

  &.hidden {
    transform: translateY(-120%);
  }

  .mobile {
    display: none;

    @media (max-width: $breakpoint-md) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .toggle-menu-logo {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      padding: $spacing-sm;
      gap: $spacing-sm;
    }
  }

  .desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: $spacing-sm $spacing-md;
    margin: 0 auto;

    @media (max-width: $breakpoint-md) {
      display: none;
    }

    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: $spacing-md;

      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: $spacing-md;

        li {
          list-style: none;

          a {
            text-decoration: none;
            color: $black;

            &:hover,
            &:focus,
            &.router-link-active {
              color: $brand;
            }
          }
        }
      }
    }
  }
}

</style>