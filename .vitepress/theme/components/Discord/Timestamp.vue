<script setup lang="ts">
  import Tooltip from '@theme/components/Tooltip.vue'
  import { TooltipProvider } from 'radix-vue'

  const props = defineProps({
    timestamp: String,
    format: String,
    full: String,
    formatted: String,
    date: Date,
  })
</script>

<template>
  <TooltipProvider>
    <discord-time>
      <Tooltip as="span" side="top" :text="full!">
        {{ formatted }}
      </Tooltip>
    </discord-time>
  </TooltipProvider>
</template>
