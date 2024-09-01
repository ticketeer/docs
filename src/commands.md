---
title: Commands
---

# Ticketeer Commands

## Global Slash Commands

These commands can be ran by anyone in and out of the server.

### `/app about`

::: info
Prints out information about Ticketeer.
:::

### `/app invite`

::: info
Creates an invite link for Ticketeer.
:::

### `/app panel`

::: info
Shows you a link that opens the Ticketeer dashboard.
:::

### `/app help`

::: info
Displays help panel.
:::

### `/app premium`

::: info
Displays information about premium features, and status of your premium subscription.
:::

### `/app vote`

::: info
Vote for Ticketeer to redeem free premium keys! Displays how to vote and what your current vote stats are. You can also redeem your votes here.
:::

### `/help setup`

::: info
Displays information about how to set up your first ticket group.
:::

### `/help docs`

::: info
Displays information about the documentation and how to use it.
:::

## Ticket Slash Commands

These commands can only be ran inside a ticket channel. (except for the `/new` command)

### `/new {group}`

::: info
Creates a new ticket
:::

### `/open {message?}`

::: info
Reopens a previously closed ticket
:::

### `/close`

::: info
Closes an active ticket
:::

### `/priority {priority}`

::: info
Sets or changes the priority level of a ticket
:::

### `/lock`

::: info
Locks a ticket to prevent new replies
:::

### `/unlock`

::: info
Unlocks a ticket allowing new replies
:::

### `/delete`

::: info
Permanently deletes a ticket
:::

### `/add {user}`

::: info
Adds a user to the ticket
:::

### `/remove {user}`

::: info
Removes a user from the ticket
:::

### `/owner {user}`

::: info
Changes the owner of the ticket
:::

### `/claim`

::: info
Assigns a ticket to yourself
:::

### `/assign {user}`

::: info
Assigns the ticket to a specific user
:::

### `/unassign`

::: info
Removes an assigned user from the ticket
:::

### `/transcript`

::: info
Generates a transcript of the ticket conversation
:::

### `/save`

::: info
Save a transcript of a ticket
:::

### `/expire {time}`

::: info
Expire (close) a ticket after a certain time
:::

### `/eternal {eternal?=true}`

::: info
Makes a ticket eternal (immune to expiration)
:::

### `/menu`

::: info
Open up ticket menu
:::

### `/rate {rating}`

::: info
Rate your experience with the current ticket
:::

### `/feedback`

::: info
Give feedback about the current ticket
:::

### `/notes create {name}`

::: info
Creates a notes private thread attacked to the ticket (channel tickets only)
:::

### `/notes add {user}`

::: info
Adds a user to the private notes thread
:::

## Admin Slash Commands

These commands are only available to members with the `Manage Server` permission.

### `/setup`

::: info
A quickstart guide for setting up your first ticket group and panel.
:::

### `/group create {name} {role} {channel}`

::: info
Creates a new ticket group.
:::

### `/group delete {group}`

::: info
Deletes a ticket group.
:::

### `/panel create {name} {group} {channel?}`

::: info
Creates a new ticket panel.
:::

### `/panel send {panel}`

::: info
Send a ticket to a panel to a channel.
:::

### `/panel delete {panel}`

::: info
Deletes a ticket panel.
:::

### `/bulk close {group} {reason?}`

::: info
Bulk closes every ticket in a ticket group
:::

### `/bulk delete {group} {reason?}`

::: info
Bulk deletes every ticket in a ticket group
:::

## User Commands

### `Create Ticket`

::: info
Creates a new ticket for the selected user.
:::

### `Create Ticket with Message`

::: info
Creates a new ticket for the selected user with a message from you.
:::

## Message Commands

### `Create Ticket`

::: info
Creates a new ticket for the author of selected message.
:::

### `Create Ticket from Message`

::: info
Creates a new ticket for the author of selected message with a reference to the original message.
:::

### `Create Ticket with Message`

::: info
Creates a new ticket for the author of selected message with a message from you.
:::
