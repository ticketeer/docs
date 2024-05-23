<script lang="ts" setup>
  import DiscordMessages from '@theme/components/Discord/Messages.vue'
  import DiscordMessage from '@theme/components/Discord/Message.vue'
  import DiscordMarkdown from '@theme/components/Discord/Markdown.vue'
  import DiscordEmbed from '@theme/components/Discord/Embed.vue'
  import DiscordEmbedFields from '@theme/components/Discord/EmbedFields.vue'
  import DiscordEmbedField from '@theme/components/Discord/EmbedField.vue'
  import DiscordSelect from '@theme/components/Discord/Select.vue'
  import DiscordSelectItem from '@theme/components/Discord/SelectItem.vue'
  import DiscordButtons from '@theme/components/Discord/Buttons.vue'
  import DiscordButton from '@theme/components/Discord/Button.vue'

  const STYLE: Record<number, string> = {
    1: 'primary',
    2: 'secondary',
    3: 'success',
    4: 'danger',
    5: 'link',
  }

  defineProps({
    title: {
      type: String,
      default: '',
    },
    message: {
      type: Object,
      default: () =>
        ({
          content: '',
          embeds: [],
          buttons: [],
        }),
    },
  })
</script>

<template>
  <DiscordMessages class="p-2 rounded-md">
    <template
      v-if="
        (message.embeds && message.embeds.length > 0) ||
        (message.buttons && message.buttons.length > 0) ||
        (message.dropdown && message.dropdown.length > 0) ||
        message.content
      ">
      <DiscordMessage profile="bot" :author="title">
        <DiscordMarkdown>
          {{ message.content }}
        </DiscordMarkdown>
        <DiscordEmbed
          v-for="embed in message.embeds"
          :url="embed.url"
          :timestamp="embed.timestamp ? new Date() : undefined"
          :thumbnail="embed.thumbnail"
          :image="embed.image"
          :footer-icon="embed.footer ? embed.footer.icon_url : ''"
          :embed-title="embed.title"
          :border-color="embed.color"
          :author-url="embed.author ? embed.author.url : ''"
          :author-name="embed.author ? embed.author.name : ''"
          :author-icon="embed.author ? embed.author.icon_url : ''">
          <DiscordMarkdown>
            {{ embed.description }}
          </DiscordMarkdown>
          <template v-if="embed.footer ? embed.footer.text : false" #footer>{{ embed.footer!.text }}</template>
          <template v-if="embed.fields && embed.fields.length" #fields>
            <DiscordEmbedFields>
              <DiscordEmbedField v-for="field in embed.fields" :field-title="field.name" :inline="field.inline">{{ field.value }}</DiscordEmbedField>
            </DiscordEmbedFields>
          </template>
        </DiscordEmbed>
        <DiscordSelect v-if="message.dropdown && message.dropdown.length > 0">
          <DiscordSelectItem v-for="option in message.dropdown" :label="option.label" :description="option.description" :emoji="option.emoji" />
        </DiscordSelect>
        <DiscordButtons v-if="message.buttons && message.buttons.length > 0">
          <DiscordButton v-for="button in message.buttons" :type="STYLE[button.style]" :emoji="button.emoji">{{ button.label }}</DiscordButton>
        </DiscordButtons>
      </DiscordMessage>
    </template>
    <DiscordMessage v-else profile="bot" :author="title">
      <div class="mr-14 py-4 text-center">
        <h3 class="mt-2 text-sm font-medium text-white">No message content</h3>
      </div>
    </DiscordMessage>
  </DiscordMessages>
</template>
