<template>
  <section id="JoinPopup" :class="{ joining: joinStore.joining }">
    <div class="blur" @click="joinStore.toggleJoin"></div>
    <div class="popup">
      <div class="close" @click="joinStore.toggleJoin">
        <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="7" r="7" fill="#000000"/>
          <path d="M3 7H11" stroke="white"/>
          <path d="M7 3L7 11" stroke="white"/>
        </svg>
      </div>
      <v2Logo />
      <p class="light">We are looking to work with experienced technical writing teams and freelance writers who are interested in improving their workflows and making more money along the way.</p>
      <Join id="hero-join" />
    </div>
  </section>
</template>

<script setup>

import { useJoinStore } from '~/stores/useJoin';
import { storeToRefs } from 'pinia';

const joinStore = useJoinStore();
const { joining } = storeToRefs(joinStore);

</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

@keyframes popUp {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  70% {
    opacity: 1;
    transform: scale(1.02);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

#JoinPopup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: all .15s ease-in;

  .close {
    position: absolute;
    top: $spacing-md;
    right: $spacing-md;
    cursor: pointer;
    z-index: 2;
    transform: rotate(45deg);
  }

  .blur {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to top, rgba($brand-light, 0.3) 20%, rgba($brand-light, 0.05) 50%);
    backdrop-filter: blur(20px);
    z-index: 1;
    pointer-events: none;
  }

  &.joining {
    pointer-events: all;
    animation: fadeIn .35s ease-in forwards;
    opacity: 1;

    .blur {
      pointer-events: all;
      animation: fadeIn .35s ease-in forwards;
    }

    .popup {
      animation: popUp .35s ease-in forwards;
    }
  }

  .popup {
    max-width: 600px;
    border-radius: $br-xl;
    background: $white;
    z-index: 2;
    position: relative;
    box-shadow: inset 0 2px 1px 1px rgba(white, 0.42), inset 0 2px 2px 4px rgba(white, 0.32), inset 0 0 2px 10px rgba(white, 0.12), 0 6px 1px 0px rgba($brand, 0.05), 0 6px 10px 5px rgba($brand, 0.05);

    @media (max-width: 600px) {
      border-radius: 0;
      max-width: 100%;
      width: 100dvw;
      height: 100dvh;
      position: fixed;
      top: 0;
      left: 0;
    }

    .vewrite-logo {
      margin: $spacing-lg $spacing-lg $spacing-md $spacing-lg;

      @media (max-width: 600px) {
        margin: $spacing-lg $spacing-md $spacing-md $spacing-md;
      }
    }

    #hero-join {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: $spacing-sm;
      padding: $spacing-lg;
      border-top: 1px solid rgba($brand, 0.1);
      background: linear-gradient(to bottom, rgba($brand-light, 0.05) 20%, rgba($brand-light, 0.0) 50%);

      @media (max-width: 600px) {
        padding: $spacing-md $spacing-md $spacing-lg $spacing-md;
      }
    }

    p {
      margin: $spacing-sm $spacing-lg $spacing-lg $spacing-lg;

      @media (max-width: 600px) {
        margin: $spacing-sm $spacing-md $spacing-lg $spacing-md;
      }
    }
  }
}

</style>