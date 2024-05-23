<script setup lang="ts">
  import Emoji from '@/components/Emoji.vue';
  import DiscordOutboundLinkIcon from '@/components/Discord/OutboundLinkIcon.vue';

  import { computed, PropType } from 'vue'

  const props = defineProps({
    disabled: Boolean,
    emoji: String as PropType<string | null>,
    url: String,
    type: {
      type: [String, Number] as PropType<string | number>,
      default: 'primary',
    },
  })

  const type = computed(() => {
    if (typeof props.type === 'string') {
      return props.type
    }

    switch (props.type) {
      case 1:
        return 'primary'
      case 2:
        return 'secondary'
      case 3:
        return 'success'
      case 4:
        return 'danger'
      case 5:
        return 'link'
    }

    return 'primary'
  })
</script>

<template>
  <a v-if="type === 'link' && url && !disabled" class="discord-button discord-button-link" :href="url" target="_blank" rel="noopener noreferrer">
    <Emoji v-if="emoji" class="discord-button-emoji" :value="emoji" />
    <div class="discord-button-text">
      <slot></slot>
    </div>
    <DiscordOutboundLinkIcon />
  </a>
  <button v-else class="discord-button" :class="[`discord-button-${type}`, disabled ? 'discord-button-disabled' : '']" :disabled="disabled">
    <Emoji v-if="emoji" class="discord-button-emoji" :value="emoji" />
    <div class="discord-button-text">
      <slot></slot>
    </div>
    <DiscordOutboundLinkIcon v-if="type === 'link'" />
  </button>
</template>
