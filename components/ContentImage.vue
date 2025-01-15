<template>
  <div class="custom-image">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.custom-image {
  display: block;
  text-align: center;
}
.custom-image img {
  max-width: 100%;
  height: auto;
}
</style>