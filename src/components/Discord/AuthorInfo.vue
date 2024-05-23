<script setup lang="ts">
  defineProps({
    author: String,
    bot: Boolean,
    roleColor: String,
  })
</script>

<template>
  <span class="discord-author-info">
    <span class="discord-author-username" :style="{ color: roleColor }">
      {{ author }}
    </span>
    <span v-if="bot" class="discord-author-bot-tag">App</span>
  </span>
</template>
