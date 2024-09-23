<template>
  <footer id="Footer">
    <div class="container">
      <nuxt-link to="/"><Logo color="white" size="small" /></nuxt-link>
      <a href="mailto:support@vewrite.com" class="button clear">Contact Support</a>
      <p class="copyright">&copy; 2024</p>
    </div>
  </footer>
</template>

<style lang="scss">

@import 'assets/_variables.scss';

#Footer {
  background-color: rgba($brand, 1);
  color: $white;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-sm;
    padding: $spacing-xl;
    text-align: center;
  }

  @media (max-width: 1400px) {
      width: 100%;
      margin: 0;
      border-radius: 0;
  }

  .copyright {
    width: 100%;
    font-size: $font-size-xs;
    text-align: center;
    opacity: 0.7;
    margin: 0;
  }
}

</style>