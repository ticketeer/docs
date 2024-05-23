import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import * as path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const messages = JSON.parse(readFileSync(path.join(__dirname, 'messages.json'), 'utf-8'));

const messageFieldTypes = {
  server: { name: 'Server', link: '#server-object' },
  ticket: { name: 'Ticket', link: '#ticket-object' },
  group: { name: 'Group', link: '#group-object' },
  channel: { name: 'Channel', link: '#channel-object' },
  user: { name: 'User', link: '#user-object' },
  role: { name: 'Role', link: '#role-object' },
  message: { name: 'Message', link: '#message-object' },
}

const messageSections = {
  menu: 'Menu',
  open: 'Opening',
  close: 'Closing',
  lock: 'Locking',
  assign: 'Assigning',
  user: 'User',
  thread: 'Thread',
  priority: 'Priority',
  expire: 'Expiration',
  schedule: 'Schedule',
  feedback: 'Feedback',
  transcript: 'Transcript',
  rating: 'Rating',
  log: 'Logs',
}

const templates = {}

let output = ''

for (const section of Object.keys(messageSections)) {
  output += `## ${messageSections[section]} Messages\n\n`

  for (const id of Object.keys(messages)) {
    const message = messages[id];

    if (message.info.section === section) {
      let fields = ''

      templates[id] = message.template

      for (const key of Object.keys(message.fields)) {
        const field = message.fields[key]

        fields += `| \`${key}${field.nullable ? '?' : ''}\` | `
        if (messageFieldTypes[field.type]) {
          const { name, link } = messageFieldTypes[field.type]
          fields += `[${name}${field.array? '[]' : ''}](${link})`
        } else {
          fields += `${field.type}${field.array? '[]' : ''}`
        }

        if (field.nullable) {
          fields += ' \\| `null`'
        }

        fields += ` | ${ field.description } |\n`
      }

      output += `### ${message.info.title} {#${id}}

<ClientOnly>
<MessagePreview class="mt-3" title="${message.info.title}" :message="templates['${id}']" />
</ClientOnly>

::: info

${message.info.description}

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | \`${message.info.can_disable ? 'Yes' : 'No'}\` |
| Can be automatically deleted? | \`${message.info.can_delete ? 'Yes' : 'No'}\` |
| Type | \`${message.info.type}\` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
${fields}
:::

::: details Expand to see default json template

\`\`\`json
${JSON.stringify(message.template, null, 2)}
\`\`\`

:::
`;
    }
  }
}

const file = `
<script setup lang="ts">
  import MessagePreview from '@/components/MessagePreview.vue'
  const templates = ${JSON.stringify(templates, null, 2)}
</script>

# Ticketeer Messages

This is a complete list of all the messages that can be used in Ticketeer along with their options, variables and default values.

${output}## Object Types

### Server Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|\`server\`| \`string\` | Server name |
|\`server.id\`| \`string\` | Server ID |
|\`server.name\`| \`string\` | Server name |
|\`server.icon\`| \`string\` | Server icon |
|\`server.description\`| \`string\` | Server description |

### Group Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|\`group\`| \`string\` | Group name |
|\`group.id\`| \`string\` | Group ID |
|\`group.name\`| \`string\` | Group name|
|\`group.count\`| \`number\` | Group count |
|\`group.schedule_timestamp?\`| \`number\`\|\`null\` | Group next open schedule slot timestamp  |

### Ticket Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|\`ticket\`| \`string\` | Ticket channel name or Ticket ID |
|\`ticket.id\`| \`string\` | Ticket ID |
|\`ticket.name?\`| \`string\`\|\`null\` | Ticket channel name |
|\`ticket.number\`| \`number\` | Ticket number |
|\`ticket.link\`| \`string\` | Link to the first message of the ticket |
|\`ticket.priority\`| \`number\` | Ticket priority level |
|\`ticket.priority.label?\`| \`string\`\|\`null\` | Ticket priority label |
|\`ticket.priority.description?\`| \`string\`\|\`null\` | Ticket priority description |
|\`ticket.priority.emoji?\`| \`string\`\|\`null\` | Ticket priority emoji |
|\`ticket.priority.color?\`| \`string\`\|\`null\` | Ticket priority color |
|\`ticket.rating\`| \`number\` | Average rating given to ticket |
|\`ticket.form?\`| \`array\`\|\`null\` | The filled out form from opening a ticket |
|\`ticket.form?.title\`| \`string\`\|\`null\` | Title of the form field |
|\`ticket.form?.value\`| \`string\`\|\`null\` | Value of the form field |
|\`ticket.closed_reason?\`| \`string\`\|\`null\` | Reason for closing the ticket |
|\`ticket.owner\`| [User](#user-object) | Owner of ticket |
|\`ticket.assigned?\`| [User](#user-object)\|\`null\` | Assigned user to ticket |
|\`ticket.group\`| [Group](#group-object) | Ticket Group |
|\`ticket.channel?\`| [Channel](#user-channel)\|\`null\` | Ticket channel |

### Channel Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|\`channel\`| \`string\` | Channel @ |
|\`channel.id\`| \`string\` | Channel ID |
|\`channel.type\`| \`number\` | Channel type |
|\`channel.name\`| \`string\` | Channel name |
|\`channel.topic\`| \`string\` | Channel topic |
|\`channel.nsfw\`| \`boolean\` | True if channel nsfw |
|\`channel.locked\`| \`boolean\` | True if channel is locked |
|\`channel.invitable\`| \`boolean\` | True if channel invitable |

### User Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|\`user\`| \`string\` | User @ |
|\`user.id\`| \`string\` | User ID |
|\`user.name\`| \`string\` | User username |
|\`user.nickname\`| \`string\` | User nickname or username |
|\`user.avatar\`| \`string\` | User avatar |
|\`user.icon\`| \`string\` | User icon |
|\`user.tag\`| \`string\` |  User #tag (deprecated) |
|\`user.full\`| \`string\` | User username#tag (deprecated) |
|\`user.joined_at?\`| \`number\`\|\`null\` | Timestamp when user joined server |

### Role Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|\`role\`| \`string\` | Role @ |
|\`role.id\`| \`string\` | Role ID |
|\`role.name\`| \`string\` | Role name |
|\`role.color\`| \`string\` | Role color |
|\`role.position\`| \`number\` | Role position |
|\`role.icon\`| \`string\` | Role icon |
|\`role.unicode_emoji\`| \`string\` | Role unicode_emoji |
|\`role.admin\`| \`boolean\` | True if role is admin |
|\`role.bot_id\`| \`string\` | Role bot ID |
|\`role.created_at\`| \`number\` | Timestamp when role was created |

### Message Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|\`message.content\`| \`string\` | Message content |
|\`message.link\`| \`string\` | Link to message |
|\`message.timestamp\`| \`number\` | Timestamp of when message was created |
|\`message.author\`| [User](#user-object) | Author of message |
|\`message.channel\`| [Channel](#channel-object) | Channel message was created in |
`;

writeFileSync(path.join(__dirname, '../../src/messages.md'), file)
