# Ticket Messages


## Ticket Created {#created}

::: details This message is sent to the user that created the message

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Created Direct Message {#created_dm}

::: details This message is sent to the owner of the ticket in a DM

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`from?`| [User](#user-object) \| `null` | The user that created the ticket for owner |

:::

## Ticket Welcome Message {#created_welcome}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Created Log {#created_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 

:::

## Ticket Created from Message {#created_from_message}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`from?`| [User](#user-object) \| `null` | The user that created the ticket for owner |
|`message`| [Message](#message-object) | The original message the ticket was created from |

:::

## Ticket Created with Message {#created_with_message}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`from?`| [User](#user-object) \| `null` | The user that created the ticket for owner |
|`message?`| `string` \| `null` | A message from the user that created the ticket for owner |

:::

## Ticket Opened {#opened}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`message?`| `string` \| `null` | A message from the user that opened the ticket |

:::

## Ticket Opened Log {#opened_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 

:::

## Ticket Closed {#closed}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Close Confirm {#close_confirm}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Closed Direct Message {#closed_dm}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Closed Log {#closed_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 

:::

## Ticket Locked {#locked}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Locked Log {#locked_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 

:::

## Ticket Unlocked {#unlocked}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Unlocked Log {#unlocked_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 

:::

## Ticket Assigned {#assigned}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned`| [User](#user-object) | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Assigned Log {#assigned_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned`| [User](#user-object) | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 

:::

## Ticket Unassigned {#unassigned}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`unassigned`| [User](#user-object) | The unassigned user of the ticket |

:::

## Ticket Unassigned Log {#unassigned_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 
|`unassigned`| [User](#user-object) | The unassigned user of the ticket |

:::

## Ticket Deleting {#deleting}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Deleting Log {#deleted_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 

:::

## Ticket Transcript {#transcript}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |

:::

## Ticket Transcript Direct Message {#transcript_dm}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |

:::

## Ticket Transcript Saving {#transcript_saving}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |

:::

## Ticket Transcript Log {#transcript_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 

:::

## Ticket User Added {#user_added}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`added`| [User](#user-object) | The user added to the ticket |

:::

## Ticket User Added Direct Message {#user_added_dm}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`added`| [User](#user-object) | The user added to the ticket |

:::

## Ticket User Added Log {#user_added_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 
|`added`| [User](#user-object) | The user added to the ticket |

:::

## Ticket User Removed {#user_removed}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`removed`| [User](#user-object) | The user removed from the ticket |

:::

## Ticket User Removed Direct Message {#user_removed_dm}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`removed`| [User](#user-object) | The user removed from the ticket |

:::

## Ticket User Removed Log {#user_removed_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 
|`removed`| [User](#user-object) | The user removed from the ticket |

:::

## Ticket Owner Change {#owner_change}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`removed`| [User](#user-object) | The old owner of the ticket |

:::

## Ticket Owner Change Direct Message {#owner_change_dm}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`removed`| [User](#user-object) | The old owner of the ticket |

:::

## Ticket Owner Change Log {#owner_change_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 
|`removed`| [User](#user-object) | The old owner of the ticket |

:::

## Ticket Priority Change {#priority_change}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Priority Change Log {#priority_change_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 

:::

## Ticket Expired {#expired}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`expire.reason?`| `string` \| `null` | A message of the reason the ticket was expired |
|`expire.type`| `string` | The type of expiration |
|`expire.timestamp`| `number` | A timestamp of when the ticket expired |
|`expire.activity`| `boolean` | If ticket expired due to inactivity |

:::

## Ticket Expired Log {#expired_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 
|`expire.reason?`| `string` \| `null` | A message of the reason the ticket was expired |
|`expire.type`| `string` | The type of expiration |
|`expire.timestamp`| `number` | A timestamp of when the ticket expired |
|`expire.activity`| `boolean` | If ticket expired due to inactivity |

:::

## Ticket Expiring {#expiring}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`expire.time`| `string` | Time until ticket expires |
|`expire.timestamp`| `number` | A timestamp of when the ticket expires |
|`expire.activity`| `boolean` | If ticket expiring due to inactivity |

:::

## Ticket Expire {#expire}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`expire.time`| `string` | Time until ticket expires |
|`expire.timestamp`| `number` | A timestamp of when the ticket expires |
|`expire.activity`| `boolean` | If ticket expiring due to inactivity |

:::

## Ticket Expire Log {#expire_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 

:::

## Ticket Eternal {#eternal}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`eternal`| `boolean` | `true` if the ticket is eternal (immune from expiring) |

:::

## Ticket Eternal Log {#eternal_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 
|`eternal`| `boolean` | `true` if the ticket is eternal (immune from expiring) |

:::

## Ticket Schedule Error {#schedule_error}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Schedule Notice {#schedule_notice}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Feedback {#feedback_response}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Feedback Log {#feedback_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 
|`form`| `array` | The answers of the feedback given in array form | 

:::

## Ticket Rating {#rating_response}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Rating Menu {#rating_menu}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Rating Log {#rating_log}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |
|`event`| `string` | Ticket log event |
|`message`| `string` | Ticket log event message | 

:::

## Ticket Thread {#thread}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`users`| [User[]](#user-object) | An array of users accosted with the ticket |
|`roles`| [Role[]](#role-object) | An array of roles accosted with the ticket |

:::

## Ticket Menu (Opened) {#ticket_menu_opened}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Menu (Locked) {#ticket_menu_locked}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Menu (Assigned) {#ticket_menu_assigned}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Menu (Closed) {#ticket_menu_closed}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Ticket Menu (Deleted) {#ticket_menu_deleted}

::: details This message is sent to the 

| Template Options| Value |
|------------------|------------|
| Can be disabled? | `-` |
| Can be automatically deleted? | `-` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| [Server](#server-object) | The server that the ticket was created in |
|`ticket`| [Ticket](#ticket-object) | The ticket |
|`group`| [Group](#group-object) | The ticket group of the ticket |
|`owner`| [User](#user-object) | The owner of the ticket |
|`assigned?`| [User](#user-object) \| `null` | The assigned user of the ticket |
|`channel`| [Channel](#channel-object) | The channel the ticket was created in |
|`user`| [User](#user-object) | The user that triggered this action |

:::

## Object Types

### Server Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| `string` | Server name |
|`server.id`| `string` | Server ID |
|`server.name`| `string` | Server name |
|`server.icon`| `string` | Server icon |
|`server.description`| `string` | Server description |

### Group Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`group`| `string` | Group name |
|`group.id`| `string` | Group ID |
|`group.name`| `string` | Group name|
|`group.count`| `number` | Group count |
|`group.schedule_timestamp?`| `number`\|`null` | Group next open schedule slot timestamp  |

### Ticket Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`ticket`| `string` | Ticket channel name or Ticket ID |
|`ticket.id`| `string` | Ticket ID |
|`ticket.name?`| `string`\|`null` | Ticket channel name |
|`ticket.number`| `number` | Ticket number |
|`ticket.link`| `string` | Link to the first message of the ticket |
|`ticket.priority`| `number` | Ticket priority level |
|`ticket.priority.label?`| `string`\|`null` | Ticket priority label |
|`ticket.priority.description?`| `string`\|`null` | Ticket priority description |
|`ticket.priority.emoji?`| `string`\|`null` | Ticket priority emoji |
|`ticket.priority.color?`| `string`\|`null` | Ticket priority color |
|`ticket.rating`| `number` | Average rating given to ticket |
|`ticket.form?`| `array`\|`null` | The filled out form from opening a ticket |
|`ticket.form?.title`| `string`\|`null` | Title of the form field |
|`ticket.form?.value`| `string`\|`null` | Value of the form field |
|`ticket.closed_reason?`| `string`\|`null` | Reason for closing the ticket |
|`ticket.owner`| [User](#user-object) | Owner of ticket |
|`ticket.assigned?`| [User](#user-object)\|`null` | Assigned user to ticket |
|`ticket.group`| [Group](#group-object) | Ticket Group |
|`ticket.channel?`| [Channel](#user-channel)\|`null` | Ticket channel |

### Channel Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`channel`| `string` | Channel @ |
|`channel.id`| `string` | Channel ID |
|`channel.type`| `number` | Channel type |
|`channel.name`| `string` | Channel name |
|`channel.topic`| `string` | Channel topic |
|`channel.nsfw`| `boolean` | True if channel nsfw |
|`channel.locked`| `boolean` | True if channel is locked |
|`channel.invitable`| `boolean` | True if channel invitable |

### User Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`user`| `string` | User @ |
|`user.id`| `string` | User ID |
|`user.name`| `string` | User username |
|`user.nickname`| `string` | User nickname or username |
|`user.avatar`| `string` | User avatar |
|`user.icon`| `string` | User icon |
|`user.tag`| `string` |  User #tag (deprecated) |
|`user.full`| `string` | User username#tag (deprecated) |
|`user.joined_at?`| `number`\|`null` | Timestamp when user joined server |

### Role Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`role`| `string` | Role @ |
|`role.id`| `string` | Role ID |
|`role.name`| `string` | Role name |
|`role.color`| `string` | Role color |
|`role.position`| `number` | Role position |
|`role.icon`| `string` | Role icon |
|`role.unicode_emoji`| `string` | Role unicode_emoji |
|`role.admin`| `boolean` | True if role is admin |
|`role.bot_id`| `string` | Role bot ID |
|`role.created_at`| `number` | Timestamp when role was created |

### Message Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`message.content`| `string` | Message content |
|`message.link`| `string` | Link to message |
|`message.timestamp`| `number` | Timestamp of when message was created |
|`message.author`| [User](#user-object) | Author of message |
|`message.channel`| [Channel](#channel-object) | Channel message was created in |
