<template>
  <section id="JoinPopup" :class="{ joining: joinStore.joining }">
    <div class="blur" @click="joinStore.toggleJoin"></div>
    <div class="container">
      <div class="row">
        <div class="col full">
          <div class="popup">
            <h2>Join our journey</h2>
            <p>We are looking to work with experienced technical writing teams and freelance writers who are interested in improving their workflows and making more money along the way.</p>
            <Join id="hero-join" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import { useJoinStore } from '~/stores/useJoin';
import { storeToRefs } from 'pinia';

const joinStore = useJoinStore();
const { joining } = storeToRefs(joinStore);

</script>