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
      <h3>Join our journey</h3>
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

#JoinPopup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;

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
    background: rgba($black, 0.2);
    z-index: 1;
    pointer-events: none;
  }

  &.joining {
    pointer-events: all;
    animation: fadeIn .35s ease-in-out forwards;

    .blur {
      pointer-events: all;
      animation: fadeIn .35s ease-in-out forwards;
    }
  }

  .popup {
    max-width: 600px;
    border-radius: $br-xl;
    background: $white;
    z-index: 2;
    position: relative;

    @media (max-width: 600px) {
      border-radius: 0;
      max-width: 100%;
      width: 100dvw;
      height: 100dvh;
    }

    #hero-join {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: $spacing-sm;
      padding: $spacing-lg;
      border-top: 1px solid rgba($green, 0.4);

      @media (max-width: 600px) {
        padding: $spacing-lg $spacing-md $spacing-lg $spacing-md;
      }
    }

    h3 {
      margin: $spacing-lg $spacing-lg 0 $spacing-lg;

      @media (max-width: 600px) {
        margin: $spacing-lg $spacing-md 0 $spacing-md;
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