<script lang="ts">
  import { markdownToVue } from '../../lib/dmarkdown'
  import { defineComponent, VNode } from 'vue'

  import Timestamp from './Timestamp.vue'
  import Headings from './Headings.vue'
  import Mentions from './Mentions.vue'
  import Emoji from './Emoji.vue'

  export default defineComponent({
    name: 'DiscordMarkdown',
    setup(_, { slots }) {
      return () =>
        slots.default?.().map((vNode: VNode): VNode => {
          if (typeof vNode.children !== 'string' || !vNode.children.length) {
            return vNode
          }

          return markdownToVue(vNode.children, {
            tags: {
              text: 'span',
              orderedList: 'discord-ordered-list',
              unorderedList: 'discord-unordered-list',
              listItem: 'discord-list-item',
              blockQuote: 'discord-quote',
              spoiler: 'discord-spoiler',
              anchor: 'discord-link',
              underline: 'discord-underlined',
              inlineCode: 'discord-code',
              emphasized: 'discord-italic',
              strong: 'discord-bold',
              subtext: 'discord-subscript',
            },
            components: {
              heading: Headings,
              timestamp: Timestamp,
              mention: Mentions,
              emoji: Emoji,
            },
            resolve: {
              user: (id: string) => {
                return {
                  id,
                  name: 'user',
                }
              },
              channel: (id: string) => {
                return {
                  id,
                  name: 'channel',
                }
              },
              role: (id: string) => {
                return {
                  id,
                  name: 'role',
                  color: '#ffffff',
                }
              },
            },
          })
        })
    },
  })
</script>

<style lang="scss" scoped>
  span {
    white-space: break-spaces;
  }

  p {
    margin: 0;
  }

  discord-italic,
  discord-spoiler,
  discord-link,
  discord-bold,
  discord-underlined {
    display: inline-block;
  }

  discord-unordered-list {
    white-space: normal;
  }
</style>
