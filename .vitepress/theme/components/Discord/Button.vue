<script setup lang="ts">
  import { computed, PropType } from 'vue'

  const props = defineProps({
    type: {
      type: [String, Number] as PropType<string | number>,
      default: 'primary',
      required: true,
    },
    content: String,
    emoji: String as PropType<string | null | undefined>,
  })

  const STYLES: Record<number, string> = {
    1: 'primary',
    2: 'secondary',
    3: 'success',
    4: 'destructive',
    5: 'secondary',
  }

  const type = computed(() => {
    if (!props.type) {
      return 'primary'
    }

    let type = props.type as any
    if (!isNaN(type) && typeof props.type !== 'number') {
      type = parseInt(props.type)
    }

    if (typeof props.type == 'number' && STYLES[props.type]) {
      return STYLES[props.type]
    }

    return props.type
  })

  const emojiRegex = /^<(a?):(\w+):(\d{5,32})>$/i

  const emoji = computed(() => {
    if (props.emoji && emojiRegex.test(props.emoji)) {
      const capture = emojiRegex.exec(props.emoji)
      if (capture === null) {
        return null
      }

      const [_, _animated, name, id] = capture
      const animated = _animated === 'a'

      return {
        id,
        name,
        url: `https://cdn.discordapp.com/emojis/${id}.${animated ? 'gif' : 'png'}`,
        animated,
      }
    }

    return { id: null, name: props.emoji, url: null, animated: false }
  })
</script>

<template>
  <discord-button :type="type" :emoji="emoji?.url || ''" :emoji-name="emoji?.name || ''"><slot /></discord-button>
</template>
