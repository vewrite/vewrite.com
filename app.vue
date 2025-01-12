<template>
  <NuxtPage />
</template>

<script setup>

const { initialize } = useHotjar()

onMounted(() => {
  initialize()
})

</script>