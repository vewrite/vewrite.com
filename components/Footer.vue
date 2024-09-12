<template>
  <footer id="Footer">
    <div class="container">
      <!-- <h2>Launching soon</h2> -->
      <!-- <p>If you’re interested in being one of the first to use our innovative new tool, make sure to join our waiting list below.</p> -->
      <!-- <Join wide="wide" /> -->
      <nuxt-link to="/"><Logo color="purple" size="small" /></nuxt-link>
      <p class="copyright">&copy; 2024</p>
    </div>
  </footer>
</template>

<style lang="scss">

@import 'assets/_variables.scss';

#Footer {
  background-color: rgba($purple, 0.1);
  color: $purple-light;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-sm;
    padding: $spacing-xl 0;
  }

  @media (max-width: 1400px) {
      width: 100%;
      margin: 0;
      border-radius: 0;
  }

  .copyright {
    width: 100%;
    font-size: $font-size-md;
    text-align: center;
    opacity: 0.25;
  }
}

</style>