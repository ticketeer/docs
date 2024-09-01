<script setup lang="ts">
  const props = defineProps({
    level: Number,
  })
</script>

<template>
  <discord-header :level="level"><slot /></discord-header>
</template>
