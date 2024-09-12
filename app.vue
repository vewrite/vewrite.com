<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

const { initialize } = useHotjar()

initialize()

</script>