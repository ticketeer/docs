<script setup lang="ts">
  import { PropType } from 'vue'

  const props = defineProps({
    label: String,
    description: String as PropType<string | null>,
    emoji: String as PropType<string | null>,
  })
</script>

<style scoped lang="scss">
  .discord-select-item {
    cursor: pointer;
    font-size: 14px;
    user-select: none;
    max-width: 400px;
    padding: 8px;
    display: flex;
    justify-items: center;
    align-items: center;

    &:hover {
      background-color: rgba(79, 84, 92, 0.4);
    }

    .discord-select-item-emoji {
      width: 22px;
      height: 22px;
      font-size: 20px;
      display: block;
      line-height: 22px;
      text-align: center;
      margin-right: 8px;

      .emoji {
        width: 22px;
        height: 22px;
        display: block;
      }
    }

    .discord-select-item-label-container {
      display: flex;
      flex-direction: column;

      .discord-select-item-label {
        color: rgb(242, 243, 245);
      }

      .discord-select-item-description {
        color: rgb(219, 222, 225);
      }
    }
  }
</style>

<template>
  <div class="discord-select-item">
    <div class="discord-select-item-emoji" v-if="emoji"><Emoji :value="emoji" /></div>
    <div class="discord-select-item-label-container">
      <span class="discord-select-item-label">{{ label }}</span>
      <span class="discord-select-item-description" v-if="description">{{ description }}</span>
    </div>
  </div>
</template>
