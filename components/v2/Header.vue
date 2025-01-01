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
    <section class="desktop"></section>
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

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
}

</style>