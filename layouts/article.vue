<template>
  <main>
    <Header />
    <main class="single-article">
        <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

.single-article {
}

</style>