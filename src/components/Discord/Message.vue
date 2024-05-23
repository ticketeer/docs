<script setup lang="ts">
  import { options, fallback } from './_options'

  const props = defineProps({
    author: String as PropType<string | null>,
    avatar: String as PropType<string | null>,
    bot: {
      type: Boolean,
      default: null,
    },
    edited: Boolean,
    roleColor: String,
    timestamp: {
      type: [Date, String],
      default: defaultTimestamp,
    },
  })

  const slots = useSlots()
  const compactMode = inject('compactMode')

  const user = computed(() => ({
    author: props.author || options.profile.author!,
    avatar: props.avatar || options.profile.avatar!,
    bot: props.bot ?? options.profile.bot,
    roleColor: props.roleColor || options.profile.roleColor,
  }))

  const ephemeralMessage = computed(() => {
    return slots.interactions?.().some((slot) => slot?.props?.ephemeral)
  })

  const highlightMessage = computed(() => {
    return (
      slots.default?.().some((slot) => slot?.props?.highlight && slot?.props?.type !== 'channel') ||
      slots.interactions?.().some((slot) => slot?.props?.highlight)
    )
  })

  const messageTimestamp = computed(() => {
    return parseTimestamp({
      timestamp: props.timestamp,
      format: compactMode ? 'compact' : 'cozy',
    })
  })
</script>

<template>
  <div
    class="discord-message"
    :class="{
      'discord-ephemeral-highlight': ephemeralMessage,
      'discord-mention-highlight': highlightMessage && !ephemeralMessage,
    }">
    <slot name="interactions"></slot>
    <div class="discord-message-content">
      <div class="discord-author-avatar">
        <img :src="fallback(user.avatar)" alt="" />
      </div>
      <div class="discord-message-body">
        <div v-if="!compactMode">
          <DiscordAuthorInfo :author="user.author" :bot="user.bot" :role-color="user.roleColor" />
          <span class="discord-message-timestamp">
            {{ messageTimestamp }}
          </span>
        </div>
        <template v-else>
          <span class="discord-message-timestamp">
            {{ messageTimestamp }}
          </span>
          <DiscordAuthorInfo :author="user.author" :bot="user.bot" :role-color="user.roleColor" />
        </template>
        <slot></slot>
        <span v-if="edited" class="discord-message-edited">(edited)</span>
        <slot name="embeds"></slot>
        <slot name="actions"></slot>
        <div v-if="ephemeralMessage" class="discord-message-ephemeral-notice">Only you can see this</div>
        <slot name="reactions"></slot>
      </div>
    </div>
  </div>
</template>
