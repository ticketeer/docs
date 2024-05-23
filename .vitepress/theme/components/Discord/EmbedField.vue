<script setup lang="ts">
  defineProps({
    fieldTitle: {
      type: String,
      required: true,
    },
    inline: Boolean,
  })
</script>

<template>
  <div class="discord-embed-field" :class="{ 'discord-embed-field-inline': inline }">
    <div class="discord-embed-field-title">
      {{ fieldTitle }}
    </div>
    <slot></slot>
  </div>
</template>
