<template>
  <div>
    <component :is="resolvedComponent" />
    <slot />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { resolveComponent } from 'vue'

const props = defineProps({
  component: {
    type: String,
    required: true
  }
})

const resolvedComponent = computed(() => resolveComponent(props.component))
</script>