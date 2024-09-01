import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import * as path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const messages = JSON.parse(readFileSync(path.join(__dirname, 'messages.json'), 'utf-8'))

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
    const message = messages[id]

    if (message.info.section === section) {
      let fields = ''

      templates[id] = message.template

      for (const key of Object.keys(message.fields)) {
        const field = message.fields[key]

        fields += `| \`${key}${field.nullable ? '?' : ''}\` | `
        if (messageFieldTypes[field.type]) {
          const { name, link } = messageFieldTypes[field.type]
          fields += `[${name}${field.array ? '[]' : ''}](${link})`
        } else {
          fields += `${field.type}${field.array ? '[]' : ''}`
        }

        if (field.nullable) {
          fields += ' \\| `null`'
        }

        fields += ` | ${field.description} |\n`
      }

      output += `### ${message.info.title} ${message.info.type == 'dm' ? 'Direct Message' : 'Message'} {#${id}}

<ClientOnly>
<MessagePreview class="mt-3" :message="templates['${id}']" />
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
`
    }
  }
}

const file = `---
title: Messages
---

<script setup lang="ts">
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
|\`server.tickets\`| \`number\` | Count of opended tickets for your server |
|\`server.tickets.opened\`| \`number\` | Count of opended tickets for your server |
|\`server.tickets.closed\`| \`number\` | Count of closed tickets for your server |
|\`server.tickets.deleted\`| \`number\` | Count of deleted tickets for your server |

### Group Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|\`group\`| \`string\` | Group name |
|\`group.id\`| \`string\` | Group ID |
|\`group.name\`| \`string\` | Group name|
|\`group.count\`| \`number\` | Group count |
|\`group.schedule_timestamp?\`| \`number\`\\|\`null\` | Group next open schedule slot timestamp  |

### Ticket Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|\`ticket\`| \`string\` | Ticket channel name or Ticket ID |
|\`ticket.id\`| \`string\` | Ticket ID |
|\`ticket.name?\`| \`string\`\\|\`null\` | Ticket channel name |
|\`ticket.number\`| \`number\` | Ticket number |
|\`ticket.link\`| \`string\` | Link to the first message of the ticket |
|\`ticket.priority\`| \`number\` | Ticket priority level |
|\`ticket.priority.label?\`| \`string\`\\|\`null\` | Ticket priority label |
|\`ticket.priority.description?\`| \`string\`\\|\`null\` | Ticket priority description |
|\`ticket.priority.emoji?\`| \`string\`\\|\`null\` | Ticket priority emoji |
|\`ticket.priority.color?\`| \`string\`\\|\`null\` | Ticket priority color |
|\`ticket.form?\`| \`Array[]\`\\|\`null\` | The filled out form from opening a ticket |
|\`ticket.form.[0-4?].title\`| \`string\`\\|\`null\` | Title of the form field |
|\`ticket.form.[0-4?].value\`| \`string\`\\|\`null\` | Value of the form field |
|\`ticket.closed_reason?\`| \`string\`\\|\`null\` | Reason for closing the ticket |
|\`ticket.owner\`| [User](#user-object) | Owner of ticket |
|\`ticket.assigned?\`| [User](#user-object)\\|\`null\` | Assigned user to ticket |
|\`ticket.group\`| [Group](#group-object) | Ticket Group |
|\`ticket.channel?\`| [Channel](#channel-object)\\|\`null\` | Ticket channel |
|\`ticket.thread?\`| [Channel](#channel-object)\\|\`null\` | Ticket private thread |
|\`ticket.users\`| [User[]](#user-object) | Array of all users in the ticket |
|\`ticket.rating\`| number | The agrage rating the ticket has recieved |
|\`ticket.ratings\`| \`Array[]\` | Array of ratings given to the ticket |
|\`ticket.ratings.[0-24?]\`| \`number\` | The rating in number form given to the ticket |
|\`ticket.ratings.[0-24?].rating\`| \`number\` | The rating in number form given to the ticket |
|\`ticket.ratings.[0-24?].label?\`| \`string\`\\|\`null\` | The rating level label |
|\`ticket.ratings.[0-24?].description?\`| \`string\`\\|\`null\` | The rating level description |
|\`ticket.ratings.[0-24?].emoji?\`| \`string\`\\|\`null\` | The rating level emoji |
|\`ticket.ratings.[0-24?].color?\`| \`string\`\\|\`null\` | The rating level color |
|\`ticket.ratings.[0-24?].user\`| [User](#user-object) | The user that gave the rating |
|\`ticket.feedback\`| \`Array[]\` | Array of feedback given to the ticket |
|\`ticket.feedback[0-24?].form\`| \`Array[]\` | The filled out feedback from |
|\`ticket.feedback[0-24?].form.[0-4?].title\`| \`string\`\\|\`null\` | Title of the form field |
|\`ticket.feedback[0-24?].form.[0-4?].value\`| \`string\`\\|\`null\` | Value of the form field |
|\`ticket.feedback[0-24?].user\`| [User[]](#user-object) | The user that gave the feedback |

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
|\`channel.users?\`| [User[]](#user-object)\\|\`null\` | Array of all users in the channel |

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
|\`user.roles\`| [Role[]](#role-object) | List of roles the user has in order of hierarchy |
|\`user.joined_at?\`| \`number\`\\|\`null\` | Timestamp when user joined server |
|\`user.steam?\`| [Steam User](#steam-user-object)\\|\`null\` | Steam account info of user if linked |


### Steam User Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|\`steam\`| \`string\` | SteamID (STEAM_0:1:########) |
|\`steam.id\`| \`string\` | SteamID (STEAM_0:1:########) |
|\`steam.id_3\`| \`string\` | SteamID v3 ([U:1:########]) |
|\`steam.id_64\`| \`number\` | SteamID 64 (7656119##########) |
|\`steam.account_id\`| \`number\` | Steam account id |
|\`steam.name\`| \`string\` | Steam account name |
|\`steam.avatar\`| \`string\` | URL to Steam account avatar |
|\`steam.profile\`| \`string\` | URL to Steam account profile |

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
`

writeFileSync(path.join(__dirname, '../../src/messages.md'), file)
