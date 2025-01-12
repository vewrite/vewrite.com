<template>
  <main>
    <v2Header />
    <JoinPopup />
    <main class="single-article">
        <slot />
    </main>
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
    margin: $spacing-xl 0 $spacing-md;

    &:first-of-type {
      margin-top: 0;
    }
  }

  h3 {
    margin: $spacing-lg 0 $spacing-md;
  }

  img {
    max-width: 100%;
  }
}

</style>