<script lang="ts">
  import hljs from 'highlight.js/lib/common'

  import { defineComponent, h } from 'vue'

  export default defineComponent({
    name: 'DiscordMarkdown',
    props: {
      lang: String,
      content: {
        type: String,
        required: true,
      },
    },
    setup(props, { slots }) {
      return () =>
        h(
          'pre',
          { 'data-language': props.lang || 'plaintext' },
          h('code', { innerHTML: hljs.highlight(props.content, { language: props.lang || 'plaintext' }).value }),
        )
    },
  })
</script>
