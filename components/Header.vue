<template>
  <main id="Header">
    <div class="container wide">
      <Logo />
      <nav>
        <a href="#join">Join Waitlist</a>
        <a href="#teams">Teams</a>
        <a href="#writers">Writers</a>
        <NuxtLink to="/articles">Articles</NuxtLink>
      </nav>
    </div>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

#Header {
  background: $purple;
  background-size: cover;
  color: $white;
  padding: $spacing-lg;
  width: calc(100% - 2 * $spacing-lg);
  margin: 0 $spacing-lg 0 $spacing-lg;

  @media (max-width: 1400px) {
      width: 100%;
      margin: 0;
      border-radius: 0;
  }

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
        font-size: $font-size-lg;
        font-family: $font-family-condensed;
      }

    }
  }

}


</style>