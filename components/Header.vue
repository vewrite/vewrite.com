<template>
  <main id="Header">
    <div class="container">
      <Logo />
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </div>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

#Header {
  background: $purple url('/images/main.jpg') no-repeat center center;
  background-size: cover;
  color: $white;
  padding: $spacing-lg 0;
  width: 100%;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: $spacing-md;

      a {
        color: $white;
        text-decoration: none;
      }

    }
  }

}


</style>