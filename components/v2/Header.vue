<template>
  <nav>
    <section :class="['mobile', menu]">
      <section class="toggle-menu-logo">
        <button class="mobile-toggle large" @click="toggleMenu">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5H17" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M1 6.5H17" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M1 11.5H17" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <v2Logo />
      </section>
    </section>
    <section class="desktop">
      <v2Logo />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button class="desktop-login large">Login</button>
      </nav>
    </section>
  </nav>
</template>

<script setup>

const menu = ref(true);

const toggleMenu = function(){
  return menu.value = !menu.value;
}

</script>

<style lang="scss" scoped>

@use 'assets/variables' as *;

nav {

  .mobile {
    display: none;

    @media (max-width: $breakpoint-md) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .toggle-menu-logo {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      padding: $spacing-sm;
      gap: $spacing-sm;
    }
  }

  .desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: $spacing-sm;
    max-width: $max-width;
    margin: 0 auto;

    @media (max-width: $breakpoint-md) {
      display: none;
    }

    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: $spacing-md;

      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: $spacing-md;

        li {
          list-style: none;

          a {
            text-decoration: none;
            color: $brand;
            font-weight: bold;
          }
        }
      }
    }
  }
}

</style>