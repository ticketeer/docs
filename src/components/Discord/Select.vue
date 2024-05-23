<script setup lang="ts">
  import { vOnClickOutside } from '@vueuse/components'
  import { useFloating, flip } from '@floating-ui/vue'

  defineProps({
    placeholder: {
      type: String,
      default: 'Make a selection',
    },
  })

  const open = ref(false)
  const referenceEle = ref<HTMLElement>()
  const floatingEle = ref<HTMLElement>()

  function onClickOutside(e: MouseEvent) {
    if (!referenceEle.value) {
      return
    }

    if (referenceEle.value.contains(e.target as any) || !referenceEle.value) {
      return
    }

    open.value = false
  }

  const { placement, floatingStyles } = useFloating(referenceEle, floatingEle, {
    open,
    placement: 'bottom',
    middleware: [flip()],
  })
</script>

<template>
  <div class="discord-select">
    <div :class="['discord-select-button', open ? 'open' : '', placement]" @click="open = !open" v-on-click-outside="onClickOutside" ref="referenceEle">
      <span class="discord-select-placeholder">{{ placeholder }}</span>
      <div class="discord-select-icon">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path>
        </svg>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" :class="['discord-select-container', placement]" ref="floatingEle" :style="floatingStyles">
        <slot />
      </div>
    </Teleport>
  </div>
</template>
