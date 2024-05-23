<script lang="ts">
  import { markdownToVue } from '@theme/lib/dmarkdown'

  import Timestamp from '@theme/components/Discord/Timestamp.vue'

  import { defineComponent, h, VNode } from 'vue'

  export default defineComponent({
    name: 'DiscordMarkdown',
    setup(_, { slots }) {
      return (): VNode => {
        const parsedContent = slots.default?.().map((vNode: VNode): VNode => {
          if (typeof vNode.children !== 'string' || !vNode.children.length) {
            return vNode
          }

          return markdownToVue(vNode.children, {
            components: {
              timestamp: Timestamp,
            },
          })
        })

        return h('span', { class: 'discord-markdown' }, h('div', { class: 'discord-markdown-content' }, parsedContent))
      }
    },
  })
</script>
