<template>
  <div :class="[ 'dropdown', isOpen ? 'open' : '', props.position ]">
    <div @click="toggleDropdown" :class="['dropdown-anchor', props.primary ? 'primary' : '']">
      <slot name="trigger"></slot>
      <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5.5 5.5L10 1" stroke="black"/>
      </svg>
    </div>
    <div class="dropdown-content" @click="toggleDropdown">
      <slot name="menu"></slot>
    </div>
    <div class="blur" v-if="isOpen" @click="toggleDropdown"></div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const isOpen = ref(false);
const props = defineProps(['position', 'primary']);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

</script>

<style lang="scss">

@use 'assets/variables' as *;


@keyframes scaleBounce {
  0% {
    transform: translateX(50%) scale(0.5);
    opacity: 0;
  }
  60% {
    transform: translateX(50%) scale(1.005);
    opacity: 1;
  }
  100% {
    transform: translateX(50%) scale(1);
  }
}

.dropdown {
  position: relative;
  display: inline-block;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .dropdown-anchor {
    display: flex;
    align-items: center;
    gap: $spacing-xxs;
    cursor: pointer;

    &:hover {
      color: $brand;
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: rgba($white, 0.65);
    backdrop-filter: blur(20px);
    min-width: 240px;
    box-shadow: $big-shadow;
    z-index: 100;
    right: 50%;
    top: $spacing-md;
    transform: translateX(50%);
    padding: $spacing-sm;
    border-radius: $br-lg;
    animation: scaleBounce 0.2s ease;
    transform-origin: top center;
  }

  &.top {
    .dropdown-content {
      bottom: 100%;
      transform-origin: bottom right;
    }
  }

  &.open {
    .dropdown-content {
      display: flex;
      flex-direction: column;
      gap: $spacing-xxs;
      animation: scaleBounce 0.2s ease;
    }
  }
}

.dropdown-item {
  padding: $spacing-xs $spacing-sm;
  cursor: pointer !important;
  border-radius: $br-md;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  font-size: $font-size-sm;
  color: $black;
  font-weight: bold;

  &.active {
    background-color: rgba($brand, 1);
    color: $white;
  }

  &:hover {
    background-color: rgba($brand, 0.05);

    &.active {
      background-color: rgba($brand, 0.9);
    }
  }
}

.blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
}

</style>