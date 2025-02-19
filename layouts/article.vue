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
  padding-bottom: $spacing-xl;

  strong {
    font-weight: bold;
    background: rgba($brand, 0.1);
    padding: 0 $spacing-xxxs;
    border-radius: $br-md;
    transform: skew(-5deg);
    display: inline-block;
  }

  img {
    width: 100%;
    left: 0;
    right: 0;
    position: relative;
    margin: $spacing-md 0;
    outline: 1px solid rgba($black, 0.05);
    backdrop-filter: blur(24px);
    background: linear-gradient(165deg, rgba($white, 0.3) 70%, rgba(#C8D3F7, .2) 100%);
    box-shadow: inset 0 2px 1px 1px rgba(white, 0.42), inset 0 2px 2px 4px rgba(white, 0.32), inset 0 0 2px 10px rgba(white, 0.12), 0 6px 1px 0px rgba($brand, 0.05), 0 6px 10px 5px rgba($brand, 0.05);
    padding: $spacing-sm;
    border-radius: $br-xl;

    @media (min-width: $breakpoint-xxl) {
      width: 120%;
      left: -10%;
      right: -10%;
    }
  }
}

</style>