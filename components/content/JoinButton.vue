<template>
  <section class="join-button-panel">
    <section class="left">
      <p class="left-header">Stay up to date</p>
      <p>Join our waiting list and get notified about new features and releases.</p>
    </section>
    <button class="button primary" @click="toggleJoin">
      Stay up to date
    </button>
  </section>
</template>

<script setup>

import { useJoinStore } from '~/stores/useJoin';
const joinStore = useJoinStore();

const toggleJoin = () => {
  joinStore.toggleJoin();
};

</script>

<style scoped lang="scss">

@use 'assets/variables' as *;

.join-button-panel {
  display: flex;
  justify-content: space-between;
  margin: $spacing-lg 0;
  padding: $spacing-md 0;
  border-top: $border;
  border-bottom: $border;
  gap: $spacing-lg;

  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .left-header {
      font-size: $font-size-md;
      font-weight: bold;
      margin-bottom: $spacing-xxs;
    }

    p {
      margin: 0;
      font-size: $font-size-sm;
    }
  }

  .button {
    align-self: center;
    min-width: 200px;
  }
}

</style>