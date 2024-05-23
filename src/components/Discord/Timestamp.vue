<script setup lang="ts">
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
