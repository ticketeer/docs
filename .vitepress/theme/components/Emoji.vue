<script setup lang="ts">
  import { computed, PropType } from 'vue'

  const props = defineProps({
    value: String as PropType<string | null>,
  })

  const emojiRegex = /^<(a?):(\w+):(\d{5,32})>$/i

  const emoji = computed(() => {
    if (props.value && emojiRegex.test(props.value)) {
      const capture = emojiRegex.exec(props.value)
      if (capture === null) {
        return ''
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

    return { id: null, name: props.value, url: null, animated: false }
  })
</script>

<template>
  <img
    v-if="emoji && emoji.id"
    class="emoji blank"
    :src="`https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? 'gif' : 'webp'}?size=96&quality=lossless`" />
  <span v-else-if="emoji" class="emoji h-5 w-5" :data-emoji="emoji.name" />
  <span v-else>{{ value }}</span>
</template>
