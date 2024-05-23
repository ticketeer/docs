---
next: 
  text: 'Commands'
  link: '/commands'
---

# Getting Started

Ticketeer is a Discord ticket support bot, designed to be one of the most customizable and easy-to-use ticket bots available.

## Features

- Fully customizable messages with an [advanced templating engine](/template-engine.md) (over 50 messages)
- Advanced menus, buttons, and dropdown support
- Highly customizable role and user permissions
- Thread-based tickets (private or public threads)
- Forum-based tickets (public threads)
- Channel-based tickets (under a category)
- Ticket locking to stop conversations
- Ticket claiming & assigning for staff collaboration
- Ticket expiration for automatic closure after inactivity
- Ticket priorities to set the urgency of the ticket
- Ticket feedback and ratings to gather user experiences
- Ticket transcripts to save conversations
- Ticket limits to control the number of open tickets
- Ticket forms to survey users before opening a ticket
- Ticket scheduling to restrict ticket creation to specific hours
- Ticket logs to track all ticket actions
- Private threads for support staff (only for channel tickets)
- Custom user identity for opening tickets

And more!

## Quickstart Guide

If you are familiar with Discord bots, follow this quickstart guide to get Ticketeer up and running:

1. [Invite Ticketeer](https://ticketeer.dev/invite) to your server.
2. [Log in to the dashboard](https://ticketeer.dev/guilds).
3. [Create a Ticket Group](#creating-a-group-via-web-portal).
4. [Create a Ticket Panel](#creating-a-panel-via-web-portal).
5. You're ready to go! You can now open a new ticket from the ticket panel or via the `/new` command.

## Inviting Ticketeer

First, invite Ticketeer to your server. Click the invite link and follow the prompts to select your server and grant Ticketeer the necessary permissions.

<p align="center">
  <img src="/images/invite.gif" loading="lazy" class="rounded-md" />
</p>

::: info
Ensure you have the `Manage Server` permission or you will not be able to access your server in the dashboard.
:::
## Setting Up Your First Ticket Group

### Creating a Group via Web Portal

1. Log in to the [Ticketeer dashboard](https://ticketeer.dev/guilds).
2. Navigate to the "Groups" section.
3. Click "Create Group" and follow the prompts to set up your first ticket group. 

<p align="center">
  <img src="/images/create_group.gif" loading="lazy" class="rounded-md" />
</p>

### Creating a Group via Command

1. Once Ticketeer is in your server, run the `/group create` command.

<p align="center">
  <img src="/images/create_group_cmd.gif" loading="lazy" class="rounded-md" />
</p>

::: info
You are required to have the `Manage Server` permission to create a ticket group.
:::

## Creating Your First Ticket Panel

A ticket panel is a message sent via Ticketeer that allows your users to open a ticket from one or several ticket groups. There are two ways to create a ticket panel:

### Creating a Panel via Web Portal

1. Log in to the [web portal](https://ticketeer.dev/guilds).
2. Navigate to the "Panels" section.
3. Click "Create Panel" and attach one or more ticket groups to it. Customize the message and buttons as needed.

<p align="center">
  <img src="/images/create_panel.gif" loading="lazy" class="rounded-md" />
</p>

### Creating a Panel via Command

1. Run the `/panel create` command to create a simple ticket panel.

::: info
The `/panel create` command offers limited customization options and you can only attach one ticket group. It is recommended to use the web portal for more advanced customization.
:::

<p align="center">
  <img src="/images/create_panel_cmd.gif" loading="lazy" class="rounded-md" />
</p>

## Opening Your First Ticket

Once your ticket panel is set up, you can open a ticket:

1. Send a message to the panel using the `/new` command.
2. Alternatively, click the button in the ticket panel.

<p align="center">
  <img src="/images/creating_ticket.gif" class="rounded-md" />
</p>
