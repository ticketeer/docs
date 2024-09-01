<script lang="ts" setup>
  import DiscordMarkdown from './Discord/Markdown.vue'
  import DiscordButton from './Discord/Button.vue'
  import DiscordSelect from './Discord/Select.vue'
  import DiscordSelectItem from './Discord/SelectItem.vue'

  const STYLE: Record<number, string> = {
    1: 'primary',
    2: 'secondary',
    3: 'success',
    4: 'destructive',
    5: 'secondary',
  }

  defineProps({
    message: {
      type: Object,
      default: () => ({
        content: '',
        embeds: [],
        buttons: [],
      }),
    },
  })
</script>

<template>
  <discord-messages class="p-2 rounded-md">
    <template
      v-if="
        (message.embeds && message.embeds.length > 0) ||
        (message.buttons && message.buttons.length > 0) ||
        (message.dropdown && message.dropdown.length > 0) ||
        message.content
      ">
      <discord-message author="Ticketeer" avatar="/icon.png" bot verified class="my-0">
        <DiscordMarkdown>
          {{ message.content }}
        </DiscordMarkdown>

        <discord-embed
          v-for="embed in message.embeds"
          :embed-title="embed.title"
          :url="embed.url"
          :timestamp="embed.timestamp ? new Date() : ''"
          :thumbnail="embed.thumbnail"
          :image="embed.image"
          :color="embed.color"
          :author-url="embed.author ? embed.author.url : ''"
          :author-name="embed.author ? embed.author.name : ''"
          :author-icon="embed.author ? embed.author.icon_url : ''"
          slot="embeds">
          <discord-embed-description slot="description">
            <DiscordMarkdown>
              {{ embed.description }}
            </DiscordMarkdown>
          </discord-embed-description>

          <discord-embed-fields slot="fields" v-if="embed.fields && embed.fields.length">
            <discord-embed-field v-for="field in embed.fields" :field-title="field.name" :inline="field.inline">
              <DiscordMarkdown>
                {{ field.value }}
              </DiscordMarkdown>
            </discord-embed-field>
          </discord-embed-fields>

          <discord-embed-footer
            v-if="embed.footer || embed.timestamp"
            slot="footer"
            :footer-image="embed.footer?.icon_url"
            :timestamp="embed.timestamp ? new Date() : ''">
            <DiscordMarkdown>
              {{ embed.footer?.text }}
            </DiscordMarkdown>
          </discord-embed-footer>
        </discord-embed>
        <discord-attachments slot="components">
          <discord-action-row v-if="message.buttons && message.buttons.length > 0">
            <DiscordButton v-for="button in message.buttons" :type="STYLE[button.style]" :emoji="button.emoji">{{ button.label }}</DiscordButton>
          </discord-action-row>

          <discord-action-row v-if="message.dropdown && message.dropdown.length > 0">
            <DiscordSelect>
              <DiscordSelectItem v-for="option in message.dropdown" :label="option.label" :description="option.description" :emoji="option.emoji" />
            </DiscordSelect>
          </discord-action-row>
        </discord-attachments>
      </discord-message>
    </template>
    <div v-else class="py-4 text-center">
      <h3 class="mt-2 text-sm font-medium text-white">No message content</h3>
    </div>
  </discord-messages>
</template>
