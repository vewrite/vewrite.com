<template>
  <nav :class="['nav-bar', isMenuHidden ? 'hidden' : '']" role="navigation">
    <section :class="['mobile', mobileState]">
      <section class="toggle-menu-logo">
        <section class="left">
          <button class="mobile-toggle large" @click="toggleMobileNav">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5H17" stroke="black" stroke-width="2" stroke-linecap="round"/>
              <path d="M1 6.5H17" stroke="black" stroke-width="2" stroke-linecap="round"/>
              <path d="M1 11.5H17" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <v2Logo />
        </section>
        <button class="button mobile-login large" @click="toggleJoin()">Join</button>
      </section>
      <section class="mobile-links">
        <nuxt-link to="/" @click="toggleMobileNav">Home</nuxt-link>
        <nuxt-link to="/articles" @click="toggleMobileNav">Articles</nuxt-link>
        <nuxt-link to="/pricing" @click="toggleMobileNav">Pricing</nuxt-link>
      </section>
    </section>
    <section class="desktop">
      <nuxt-link to="/"><v2Logo /></nuxt-link>
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>
            <v2Dropdown>
              <template v-slot:trigger>
                Product
              </template>
              <template v-slot:menu>
                <nuxt-link class="dropdown-item" to="/feature/projects">Project management</nuxt-link>
                <nuxt-link class="dropdown-item" to="/feature/projects">Content creation</nuxt-link>
                <nuxt-link class="dropdown-item" to="/feature/workflows">Workflows</nuxt-link>
                <nuxt-link class="dropdown-item" to="/feature/clients">Clients</nuxt-link>
                <nuxt-link class="dropdown-item" to="/feature/teams">Teams</nuxt-link>
              </template>
            </v2Dropdown>
          </li>
          <li><nuxt-link to="/resources">Getting Started</nuxt-link></li>
          <li><nuxt-link to="/articles">Articles</nuxt-link></li>
          <li><nuxt-link to="/pricing">Pricing</nuxt-link></li>
        </ul>
        <!-- <a href="https://app.vewrite.com" class="button desktop-login large">Login</a> -->
         <button class="button desktop-login large" @click="toggleJoin()">Join the waitlist</button>
      </nav>
    </section>
  </nav>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

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

// Join popup
import { useJoinStore } from '~/stores/useJoin';
const joinStore = useJoinStore();

const toggleJoin = () => {
  joinStore.toggleJoin();
};

// Mobile menu
const mobileState = ref('closed');

const toggleMobileNav = () => {
  mobileState.value = mobileState.value === 'open' ? 'closed' : 'open';
};

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
    overflow: hidden;
    opacity: 0;
  }

  .mobile {
    display: none;
    position: fixed;

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
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: $spacing-sm;
      height: 70px;
      background-color: #ffffffe9;
      backdrop-filter: blur(20px);

      .vewrite-logo {
        width: 100px;
        height: fit-content;
      }

      .left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: $spacing-sm;
      }
    }

    &.open {

      .mobile-links {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: $spacing-md;
        position: absolute;
        top: 70px;
        left: $spacing-sm;
        background: $white;
        padding: $spacing-md;
        border-radius: $br-lg;
        box-shadow: $big-shadow;
      }
    }

    .mobile-links {
      display: none;
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