<template>
  <NuxtLayout>
    <!-- <JoinPopup /> -->
    <v2Hero />
    <v2Problems />
    <v2Build />
  </NuxtLayout>
</template>

<script setup>

definePageMeta({
  layout: 'home'
});

import { useJoinStore } from '~/stores/useJoin';
import { storeToRefs } from 'pinia';

const joinStore = useJoinStore();
const { joining } = storeToRefs(joinStore);

</script>

<style lang="scss">

@use 'assets/variables' as *;

</style>