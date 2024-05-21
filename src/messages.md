
# Ticket Created

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

# Ticket Created Direct Message

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

# Ticket Welcome Message

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

# Ticket Created Log

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

# Ticket Created from Message

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

# Ticket Created with Message

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

# Ticket Opened

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

# Ticket Opened Log

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

# Ticket Closed

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

# Ticket Close Confirm

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

# Ticket Closed Direct Message

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

# Ticket Closed Log

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

# Ticket Locked

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

# Ticket Locked Log

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

# Ticket Unlocked

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

# Ticket Unlocked Log

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

# Ticket Assigned

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

# Ticket Assigned Log

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

# Ticket Unassigned

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

# Ticket Unassigned Log

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

# Ticket Deleting

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

# Ticket Deleting Log

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

# Ticket Transcript

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

# Ticket Transcript Direct Message

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

# Ticket Transcript Saving

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

# Ticket Transcript Log

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

# Ticket User Added

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

# Ticket User Added Direct Message

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

# Ticket User Added Log

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

# Ticket User Removed

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

# Ticket User Removed Direct Message

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

# Ticket User Removed Log

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

# Ticket Owner Change

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

# Ticket Owner Change Direct Message

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

# Ticket Owner Change Log

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

# Ticket Priority Change

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

# Ticket Priority Change Log

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

# Ticket Expired

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

# Ticket Expired Log

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

# Ticket Expiring

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

# Ticket Expire

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

# Ticket Expire Log

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

# Ticket Eternal 

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

# Ticket Eternal Log

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

# Ticket Schedule Error

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

# Ticket Schedule Notice

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

# Ticket Feedback

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

# Ticket Feedback Log

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

# Ticket Rating

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

# Ticket Rating Menu

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

# Ticket Rating Log

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

# Ticket Thread

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

# Ticket Menu (Opened)

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

# Ticket Menu (Locked)

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

# Ticket Menu (Assigned)

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

# Ticket Menu (Closed)

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

# Ticket Menu (Deleted)

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

# Object Types

## Server Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`server`| `string` | Server name |
|`server.id`| `string` | Server ID |
|`server.name`| `string` | Server name |
|`server.icon`| `string` | Server icon |
|`server.description`| `string` | Server description |

## Group Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`group`| `string` | Group name |
|`group.id`| `string` | Group ID |
|`group.name`| `string` | Group name|
|`group.count`| `number` | Group count |
|`group.schedule_timestamp?`| `number`\|`null` | Group next open schedule slot timestamp  |

## Ticket Object

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

## Channel Object

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

## User Object

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

## Role Object

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

## Message Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`message.content`| `string` | Message content |
|`message.link`| `string` | Link to message |
|`message.timestamp`| `number` | Timestamp of when message was created |
|`message.author`| [User](#user-object) | Author of message |
|`message.channel`| [Channel](#channel-object) | Channel message was created in |
