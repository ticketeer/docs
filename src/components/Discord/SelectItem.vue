<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    label: String,
    description: String as PropType<string | null>,
    emoji: String as PropType<string | null>,
  })
</script>

<template>
  <div class="discord-select-item">
    <div class="discord-select-item-emoji" v-if="emoji"><Emoji :value="emoji" /></div>
    <div class="discord-select-item-label-container">
      <span class="discord-select-item-label">{{ label }}</span>
      <span class="discord-select-item-description" v-if="description">{{ description }}</span>
    </div>
  </div>
</template>
