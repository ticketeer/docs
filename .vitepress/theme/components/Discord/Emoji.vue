<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    id: String,
    name: String,
    content: String,
    custom: Boolean,
    animated: Boolean,
  })

  const url = computed(() => {
    if (props.custom) {
      return `https://cdn.discordapp.com/emojis/${props.id}.${props.animated ? 'gif' : 'png'}`
    }

    return ''
  })
</script>

<template>
  <discord-custom-emoji v-if="url" :name="name">{{ content }}</discord-custom-emoji>
</template>
