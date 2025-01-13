<template>
  <v2Header />
  <main class="default-layout container">
    <slot />
  </main>
  <v2Footer />
  
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use 'assets/variables' as *;

.default-layout {
  margin: 0 auto;
  overflow-x: hidden;
  padding: $spacing-xl $spacing-md;
}

</style>