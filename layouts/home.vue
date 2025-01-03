<template>
  <main>
    <v2Header />
    <main id="content">
      <slot />
    </main>
    <footer>
      <v2Footer />
    </footer>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use 'assets/variables' as *;

main {
  perspective: 1000px;
}

#content {
  transition: all 0.25s ease;
}

.dropdown-open #content {
  filter: blur(10px);
  transform: translateZ(-100px);
}

</style>