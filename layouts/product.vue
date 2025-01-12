<template>
  <v2Header />
  <main class="product-layout">
    <slot />
  </main>
  <v2Footer />
  
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use 'assets/variables' as *;

.product-layout {
  margin: $spacing-md auto 0;
  background: linear-gradient(to bottom, $white 0%, rgba($brand, 0.05) 200px, $white 800px);
  overflow-x: hidden;
}

</style>