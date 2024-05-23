<script setup lang="ts">
  import DiscordAuthorInfo from '@theme/components/Discord/AuthorInfo.vue'

  import { options, fallback } from './_options'

  const props = defineProps({
    author: String,
    avatar: String,
    bot: {
      type: Boolean,
      default: null,
    },
    command: Boolean,
    edited: Boolean,
    ephemeral: Boolean,
    highlight: Boolean,
    roleColor: String,
  })

  const user = computed(() => ({
    author: props.author || options.profile.author!,
    avatar: props.avatar || options.profile.avatar!,
    bot: props.bot ?? options.profile.bot,
    roleColor: props.roleColor || options.profile.roleColor,
  }))
</script>

<template>
  <div class="discord-interaction">
    <img class="discord-interaction-author-avatar" :src="fallback(user.avatar)" alt="" />
    <DiscordAuthorInfo
      class="discord-interaction-author-info"
      :author="highlight ? `@${user.author}` : user.author"
      :bot="user.bot"
      :role-color="user.roleColor" />
    <span v-if="command" class="discord-interaction-command">
      used
      <span class="discord-interaction-command-name">
        /
        <slot></slot>
      </span>
    </span>
    <span v-else class="discord-interaction-reply">
      <slot></slot>
      <span v-if="edited" class="discord-interaction-reply-edited">(edited)</span>
    </span>
  </div>
</template>
