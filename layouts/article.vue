<template>
  <main>
    <v2Header />
    <JoinPopup />
    <main class="single-article">
        <slot />
    </main>
    <v2GetStarted />
    <v2Footer />
  </main>
</template>

<script setup>

import { useJoinStore } from '~/stores/useJoin';
import { storeToRefs } from 'pinia';

const joinStore = useJoinStore();
const { joining } = storeToRefs(joinStore);

</script>

<style lang="scss">

@import 'assets/_variables.scss';

.single-article {

  h2 {
    margin: $spacing-lg 0 $spacing-md;
  }

  h3 {
    margin: $spacing-md 0 $spacing-sm;
  }

  img {
    width: 100%;
    left: 0;
    right: 0;
    position: relative;
    margin: $spacing-md 0;
    border-radius: $br-md;
    outline: 1px solid rgba($black, 0.05);

    @media (min-width: $breakpoint-xxl) {
      width: 120%;
      left: -10%;
      right: -10%;
    }
  }
}

</style>