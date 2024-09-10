<template>
  <main>
    <!-- <Header /> -->
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

<style lang="scss">

@import 'assets/_variables.scss';

.single-article {

  h2 {
    margin: $spacing-xl 0 $spacing-md;

    &:first-of-type {
      margin-top: 0;
    }
  }
}

</style>