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
          <nuxt-link to="/"><v2Logo /></nuxt-link>
        </section>
        <button class="button mobile-login primary large" @click="toggleJoin()">Join</button>
      </section>
      <section class="mobile-links">
        <section class="links-wrapper">
          <nuxt-link to="/" @click="toggleMobileNav">Home</nuxt-link>
          <!-- <nuxt-link to="https://docs.vewrite.com/getting-started" @click="toggleMobileNav">Getting Started</nuxt-link> -->
          <nuxt-link to="/articles" @click="toggleMobileNav">Articles</nuxt-link>
          <!-- <nuxt-link to="/pricing" @click="toggleMobileNav">Pricing</nuxt-link> -->
        </section>
        <section class="product-links">
          <nuxt-link to="/product/project-management" @click="toggleMobileNav">
            <img src="/images/icons/project.svg" alt="Learn about Vewrite Projects" />
            <span>Project management</span>
          </nuxt-link>
          <nuxt-link to="/product/content-creation" @click="toggleMobileNav">
            <img src="/images/icons/content.svg" alt="Learn about Vewrite Content Creation" />
            <span>Content creation</span>
          </nuxt-link>
          <!-- <nuxt-link to="/product/workflows" @click="toggleMobileNav">
            <img src="/images/icons/workflows.svg" alt="Learn about Vewrite Workflows" />
            <span>Workflows</span>
          </nuxt-link>
          <nuxt-link to="/product/clients-management" @click="toggleMobileNav">
            <img src="/images/icons/clients.svg" alt="Learn about Vewrite Clients Management" />
            <span>Clients</span>
          </nuxt-link>
          <nuxt-link to="/product/teams-management" @click="toggleMobileNav">
            <img src="/images/icons/teams.svg" alt="Learn about Vewrite Teams" />
            <span>Teams</span>
          </nuxt-link> -->
        </section>
      </section>
      <section :class="['blur', mobileState]" v-if="mobileState === 'open'" @click="toggleMobileNav"></section>
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
                <section class="product-links">
                  <span class="section-title">About Vewrite</span>
                  <nuxt-link to="/product/project-management">
                    <img src="/images/icons/project.svg" alt="Learn about Vewrite Projects" />
                    <span>Project</span>
                  </nuxt-link>
                  <nuxt-link to="/product/content-creation">
                    <img src="/images/icons/content.svg" alt="Learn about Vewrite Content Creation" />
                    <span>Content creation</span>
                  </nuxt-link>
                  <!-- <nuxt-link to="/product/workflows">
                    <img src="/images/icons/workflows.svg" alt="Learn about Vewrite Workflows" />
                    <span>Workflows</span>
                  </nuxt-link>
                  <nuxt-link to="/product/clients-management">
                    <img src="/images/icons/clients.svg" alt="Learn about Vewrite Clients Management" />
                    <span>Clients</span>
                  </nuxt-link>
                  <nuxt-link to="/product/teams-management">
                    <img src="/images/icons/teams.svg" alt="Learn about Vewrite Teams" />
                    <span>Teams</span>
                  </nuxt-link> -->
                </section>
              </template>
            </v2Dropdown>
          </li>
          <!-- <li><nuxt-link to="https://docs.vewrite.com/getting-started">Getting Started</nuxt-link></li> -->
          <li><nuxt-link to="/articles">Articles</nuxt-link></li>
          <!-- <li><nuxt-link to="/pricing">Pricing</nuxt-link></li> -->
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
    box-shadow: $main-shadow;

    .blur {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 99;
    }

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
        height: auto;
      }

      .left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: $spacing-xxs;

        .mobile-toggle {
          border: none;
          box-shadow: none;
          background: none;
          padding: $spacing-sm;
          outline: none;

          &:active, &:focus {
            background: rgba($brand, 0.1);
          }
        }
      }
    }

    &.open {

      .blur {
        display: block;
      }

      .mobile-links {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        min-width: 300px;
        max-width: calc(100% - 2 * $spacing-sm);
        position: absolute;
        top: 60px;
        left: $spacing-sm;
        background: $white;
        border-radius: $br-lg;
        box-shadow: inset 0 2px 1px 1px rgba(white, 0.42), inset 0 2px 2px 4px rgba(white, 0.32), inset 0 0 2px 10px rgba(white, 0.12), 0 6px 1px 0px rgba($brand, 0.05), 0 6px 10px 5px rgba($brand, 0.05);
        z-index: 100;

        .links-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: $spacing-sm;
          padding: $spacing-md;

          a {
            text-decoration: none;
            color: $black;
            font-size: $font-size-sm;

            &:hover,
            &:focus,
            &.router-link-active {
              color: $brand;
            }
          }
        }

        h4 {
          font-size: $font-size-sm;
          font-weight: bold;
          margin: $spacing-sm 0;
          width: 100%;
          text-align: center;
        }

        .product-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: $spacing-sm;
          padding: $spacing-md;
          border-top: 1px solid rgba($brand, 0.1);
          background: linear-gradient(to bottom, rgba($brand-light, 0.05) 60%, rgba($brand-light, 0.0) 100%);

          a {
            text-decoration: none;
            color: rgba($black, 0.7);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: $spacing-xs;
            border-radius: $br-md;
            background: rgba($white, 1);
            box-shadow: $main-shadow;
            text-align: center;
            font-size: $font-size-xs;
            gap: $spacing-xxs;

            img {
              width: 32px;
              height: 32px;
            }

            &:hover,
            &:focus,
            &.router-link-active {
              color: $brand;
            }
          }
        }
        
        a {
          text-decoration: none;
          color: $black;
        }
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

      .product-links {
        display: flex;
        flex-direction: column;
        gap: $spacing-xxs;
        min-width: 240px;

        .section-title {
          font-size: $font-size-xs;
          font-weight: bold;
          margin: $spacing-sm 0 0;
          width: 100%;
          text-align: left;
        }

        a {
          text-decoration: none;
          color: rgba($black, 0.7);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: $spacing-xxs;
          border-radius: $br-md;
          text-align: center;
          font-size: $font-size-xs;
          gap: $spacing-xxs;
          background: rgba($white, 0);

          img {
            width: 24px;
            height: 24px;
          }

          &:hover,
          &:focus,
          &.router-link-active {
            color: $brand;
            background: rgba($brand, 0.1);
          }
        }
      }

      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: $spacing-md;
        margin: 0;

        li {
          list-style: none;
          margin: 0;

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