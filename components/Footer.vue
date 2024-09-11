<template>
  <footer id="Footer">
    <div class="container">
      <div class="join-us">
        <div>
          <h1>Launching soon</h1>
          <h2>If you’re interested in being one of the first to use our innovative new tool, make sure to join our waiting list below.</h2>
        </div>

        <Join wide="wide" />

      </div>
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

    h1 {
      margin: 0 0 $spacing-md 0;
      text-align: center;
    }

    h2 {
      font-size: $font-size-lg;
      font-family: $font-family-condensed;
      text-align: center;
      margin: 0 0 $spacing-md 0;
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