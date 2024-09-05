<template>
  <form class="hero-waitlist">
    <input type="email" placeholder="Enter your email">
    <button class="green large">Join Waitlist ➔</button>
  </form>
</template>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

.hero-waitlist {
  display: flex;
  flex-direction: row;
  gap: $spacing-sm;
  width: 80%;
  position: relative;

  input {
    padding: $spacing-md;
    border: none;
    border-radius: 40px;
    font-size: $font-size-md;
    font-family: $font-family-condensed;
    width: 100%;
    background: $purple-dark;
    color: $white;
    outline: 2px solid transparent;
    outline-offset: 0px;

    &:active, &:focus {
      outline: 2px solid $white;
      outline-offset: 8px;
    }
  }

  button {
    position: absolute;
    right: 14px;
    top: 12px;
    font-size: $font-size-md;
    outline: 2px solid $green;
    outline-offset: 0px;

    &:hover {
      outline-offset: 2px;
      transform: scale(1.05);
    }
  }
}

</style>