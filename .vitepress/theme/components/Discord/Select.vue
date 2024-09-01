<script setup lang="ts">
  import { vOnClickOutside } from '@vueuse/components'
  import { useFloating, flip } from '@floating-ui/vue'
  import { ref } from 'vue'

  const props = defineProps({
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

<style scoped lang="scss">
  .discord-select {
    max-width: 400px;
    min-width: 150px;
    width: 100%;

    .discord-select-button {
      cursor: pointer;
      user-select: none;
      border: 1px solid transparent;
      background-color: rgb(32, 34, 37);
      border-color: rgb(32, 34, 37);
      font-size: 16px;
      border-radius: 4px;
      padding: 5px;
      padding-left: 8px;
      display: flex;
      transition: border-color 250ms;

      &:hover {
        border-color: rgb(4, 4, 5);
      }

      &.open {
        &.top {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }

        &.bottom {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }

        .discord-select-icon {
          transform: rotate(180deg);
        }
      }

      .discord-select-placeholder {
        color: rgb(163, 166, 170);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .discord-select-icon {
        transition: all 250ms;
        margin-left: auto;
      }
    }
  }

  .discord-select-container {
    max-width: 400px;
    min-width: 150px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgb(33, 35, 38);
    border-top: none;
    background: rgb(43, 45, 49);

    &.top {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &.bottom {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
</style>

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
