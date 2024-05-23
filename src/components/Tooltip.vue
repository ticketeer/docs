<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      required: true,
    },
    as: {
      type: String,
      default: 'button',
    },
    side: String as PropType<'top' | 'right' | 'bottom' | 'left'>,
    align: String as PropType<'start' | 'center' | 'end'>,
    alignOffset: Number,
    sideOffset: {
      type: Number,
      default: 5,
    },
    delayDuration: {
      type: Number,
      default: 0,
    },
  })
</script>

<template>
  <TooltipRoot :delay-duration="delayDuration">
    <TooltipTrigger :as="as" v-bind="$attrs">
      <slot />
    </TooltipTrigger>
    <Teleport to="body">
      <TooltipPortal>
        <TooltipContent
          as-child
          :side="side"
          :side-offset="sideOffset"
          :align="align"
          :align-offset="alignOffset"
          class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade z-top rounded-md bg-dark-800 px-3 py-2 text-sm font-bold text-white will-change-[transform,opacity]">
          <ul>
            {{
              text
            }}
            <TooltipArrow class="fill-dark-800" size="8" />
          </ul>
        </TooltipContent>
      </TooltipPortal>
    </Teleport>
  </TooltipRoot>
</template>
