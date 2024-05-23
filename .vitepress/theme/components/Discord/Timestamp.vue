<script setup lang="ts">
  import Tooltip from '@theme/components/Tooltip.vue'
  import { TooltipProvider } from 'radix-vue'

  defineProps({
    timestamp: String,
    format: String,
    full: String,
    formatted: String,
    date: Date,
  })
</script>

<template>
  <span class="timestamp">
    <TooltipProvider>
      <Tooltip side="top" :text="full!">
        {{ formatted }}
      </Tooltip>
    </TooltipProvider>
  </span>
</template>
