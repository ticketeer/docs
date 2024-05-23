<script setup lang="ts">
  import { computed } from 'vue'
  import { parseTimestamp } from './_options'
  import { fallback } from './_options'

  const props = defineProps({
    authorIcon: String,
    authorName: String,
    authorUrl: String,
    borderColor: [String, Number],
    embedTitle: String,
    footerIcon: String,
    image: String,
    thumbnail: String,
    timestamp: [Date, String],
    url: String,
  })

  const color = computed(() => {
    if (!props.borderColor) {
      return
    }

    if (typeof props.borderColor === 'number') {
      let number = props.borderColor
      if (number < 0) {
        number = 0xffffffff + number + 1
      }

      return '#' + number.toString(16).toUpperCase()
    }

    return props.borderColor
  })
</script>

<template>
  <div class="discord-embed">
    <div class="discord-embed-left-border" :style="{ 'background-color': color }"></div>
    <div class="discord-embed-container">
      <div class="discord-embed-content">
        <div>
          <div v-if="authorName" class="discord-embed-author">
            <img v-if="authorIcon" class="discord-embed-author-icon" :src="fallback(authorIcon)" alt="" />
            <a v-if="authorUrl" :href="authorUrl" target="_blank" rel="noopener noreferrer">
              {{ authorName }}
            </a>
            <span v-else>
              {{ authorName }}
            </span>
          </div>
          <div v-if="embedTitle" class="discord-embed-title">
            <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer">
              {{ embedTitle }}
            </a>
            <span v-else>
              {{ embedTitle }}
            </span>
          </div>
          <div class="discord-embed-description">
            <slot></slot>
          </div>
          <slot name="fields"></slot>
          <img v-if="image" class="discord-embed-image" :src="fallback(image)" alt="" />
        </div>
        <img v-if="thumbnail" class="discord-embed-thumbnail" :src="fallback(thumbnail)" alt="" />
      </div>
      <div v-if="$slots.footer || timestamp" class="discord-embed-footer">
        <img v-if="$slots.footer && footerIcon" class="discord-embed-footer-icon" :src="fallback(footerIcon)" alt="" />
        <div class="discord-embed-footer-content">
          <span class="discord-embed-footer-text">
            <slot name="footer"></slot>
          </span>
          <span v-if="$slots.footer && timestamp" class="discord-embed-footer-separator">&bull;</span>
          <span v-if="timestamp">
            {{ parseTimestamp({ timestamp }) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
