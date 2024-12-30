<template>
  <nav>
    <section :class="['mobile', menu]">
      <button class="mobile-toggle" @click="toggleMenu">
        Menu
      </button>
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