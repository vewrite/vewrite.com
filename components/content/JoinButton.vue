<template>
  <button class="clear" @click="toggleJoin">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="7" fill="#1864DA"/>
      <path d="M3 7H11" stroke="white"/>
      <path d="M7 3L7 11" stroke="white"/>
    </svg>
    Join Waitlist
  </button>
</template>

<script setup>

import { useJoinStore } from '~/stores/useJoin';
const joinStore = useJoinStore();

const toggleJoin = () => {
  joinStore.toggleJoin();
};

</script>