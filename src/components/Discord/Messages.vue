<script setup lang="ts">
  import { options } from './_options'
  import { computed, provide } from 'vue'

  const props = defineProps({
    compactMode: {
      type: Boolean,
      default: null,
    },
    lightTheme: {
      type: Boolean,
      default: null,
    },
  })

  const layout = computed(() => ({
    compact: props.compactMode === true || (options.mode === 'compact' && props.compactMode !== false),
    light: props.lightTheme === true || (options.theme === 'light' && props.lightTheme !== false),
  }))

  provide('compactMode', layout.value.compact)
</script>

<template>
  <div class="discord-messages" :class="[layout.compact ? 'discord-compact-mode' : '', layout.light ? 'discord-light-theme' : '']">
    <slot></slot>
  </div>
</template>
