<template>
  <footer id="Footer">
    <div class="container">
      <h2>Launching soon</h2>
      <p>If you’re interested in being one of the first to use our innovative new tool, make sure to join our waiting list below.</p>
      <Join wide="wide" />
      <p class="copyright">Vewrite &copy; 2024</p>
    </div>
  </footer>
</template>

<style lang="scss">

@import 'assets/_variables.scss';

#Footer {
  background-color: rgba($green, 0.1);
  color: $green-dark;
  padding: $spacing-xl 0;

  @media (max-width: 1400px) {
      width: 100%;
      margin: 0;
      border-radius: 0;
  }

  .join-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-lg;
    position: relative;
    width: 100%;

    svg {
      margin-top: $spacing-md;
    }
  }

  .copyright {
    width: 100%;
    font-size: $font-size-md;
    padding-top: $spacing-lg;
    margin: $spacing-xl 0;
    text-align: center;
    opacity: 0.25;
  }
}

</style>