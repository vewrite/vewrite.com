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
    max-width: 100%;
    width: 100%;
    margin: $spacing-md 0;
    border-radius: $br-md;
    outline: 1px solid rgba($black, 0.05);
  }
}

</style>