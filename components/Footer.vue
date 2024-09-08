<template>
  <footer id="footer">
    <a name="join" class="target"></a>
    <div class="container">
      <div class="join-us">
        <Logo />
        <div>
          <h1>Launching soon</h1>
          <h2>If you’re interested in being one of the first to use our innovative new tool, make sure to join our waiting list below.</h2>
        </div>

        <Join />

      </div>
      <p class="copyright">Vewrite &copy; 2024</p>
    </div>
  </footer>
</template>

<style lang="scss">

@import 'assets/_variables.scss';

footer {
  color: $black;
  padding: $spacing-lg;
  overflow: hidden;
  width: calc(100% - 2 * $spacing-lg);
  margin: $spacing-xxl $spacing-lg 0;
  border-radius: $br-xl $br-xl 0 0;

  @media (max-width: 1400px) {
      width: 100%;
      margin: 0;
      border-radius: 0;
  }

  .join-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: $spacing-lg;
    gap: $spacing-lg;
    position: relative;

    svg {
      fill: $black;
    }

    // &:before {
    //   content: '';
    //   position: absolute;
    //   top: 200px;
    //   right: -780px;
    //   width: 700px;
    //   height: 700px;
    //   background: transparent url('/images/triangle.png') no-repeat center center;
    //   background-size: contain;
    //   z-index: 1;
    //   opacity: 0.5;
    // }

    // &:after {
    //   content: '';
    //   position: absolute;
    //   top: -100px;
    //   left: -680px;
    //   width: 600px;
    //   height: 600px;
    //   background: transparent url('/images/circle.png') no-repeat center center;
    //   background-size: contain;
    //   z-index: 1;
    //   opacity: 0.5;
    // }

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
  }
}

</style>