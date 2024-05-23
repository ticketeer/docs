<script setup lang="ts">
  defineProps({
    active: Boolean,
    count: {
      type: Number,
      default: 1,
    },
    image: {
      type: String,
      required: true,
    },
    name: String,
  })
</script>

<template>
  <div class="discord-reaction" :class="{ 'discord-reaction-active': active }" :title="name">
    <img class="discord-reaction-emoji" :src="image" :alt="name" />
    <span class="discord-reaction-count">{{ count }}</span>
  </div>
</template>
