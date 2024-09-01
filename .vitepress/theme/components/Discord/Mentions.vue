<script setup lang="ts">
  import { computed, PropType } from 'vue'

  const props = defineProps({
    id: String,
    context: String,
    color: Object as PropType<{ r: number; g: number; b: number; a: number }>,
    info: Object,
  })

  const type = computed(() => {
    if (!props.context) {
      return 'user'
    }

    switch (props.context) {
      case 'everyone':
      case 'here':
      case 'user':
        return 'user'
      case 'channel':
        return 'channel'
      case 'role':
        return 'role'
      default:
        return 'user'
    }
  })

  const color = computed(() => {
    if (!props.color) {
      return null
    }

    return `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`
  })
</script>

<template>
  <discord-mention :type="type" :color="color"><slot /></discord-mention>
</template>
