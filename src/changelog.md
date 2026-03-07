---
title: Changelogs
---

::: timeline March 2026

- Added [Components V2](/components-v2) support — build fully component-driven messages using Discord's new component system
- Added [REST API](/api) — manage tickets, guilds, and channels programmatically with Bearer token authentication
- Added [Webhooks](/webhooks) — receive real-time HTTP POST notifications for ticket events with HMAC-SHA256 verification
- Various bug fixes

:::

::: timeline February 2026

- Added new bot profile setting — you can now change the bot nick, avatar, banner, and bio!
- Fixed an issue with user caching (you should see much less rate limit errors)
- Various bug fixes

:::

::: timeline February 2025 Part 2

Wow we have 2400+ servers using Ticketeer! That's a lot of servers, and we are still growing!

- Added a `/move` command, this allows you to move a ticket to another ticket group
  - You must have the "Move Ticket" permission in both the source and destination ticket groups
  - You can only move tickets that share the same mode (channel or thread)
- Added custom messages, you can send preset messages from Ticketeer! And custom messages support polls!
- Attachment files got bigger! We now save up to 25MB images (these will be compressed) and up to 10MB text files!
- You can now close tickets by clicking the "close thread" button in Discord! (can be enabled in group settings, under closing section)
- Fixed a decent amount of bugs and made some good general improvements, please report any bugs you find!

:::

::: timeline February 2025

Ticketeer is now out of beta!

- Ticket forms are now not premium only, they are limited to 2 questions without premium
- Added a bulk message JSON editor
- Added a bulk embed editor
- Bug fixes and general improvements, please report any bugs you find!

:::

::: timeline October 2024

- Working on a big new feature — an Activity! This will be like a mini dashboard to configure Ticketeer right in Discord!
- Pushed a few bug fixes and general improvements, please report any new bugs you find!

:::

::: timeline September 2024

- Added custom permission presets to ticket group permissions
- Added help "stubs" to all ticket group options, click on the question mark and it will take you to the docs
- Added make public thread option to ticket notes (thread) section
- Added a new "Expire Reason" field to the ticket group settings
- Added a `condition` field for buttons, dropdowns, embeds, embed fields and messages that can be disabled
- No longer need to own server to subscribe to premium
- Bug fixes and general improvements, please report any bugs you find!

:::

::: timeline August 2024

- Added Steam Account integration, you can now require your users to link their steam account to open tickets
- Transcript attachments are now encrypted, this means our data providers and Ticketeer will not be liable for any potential nsfw content in your transcripts and we can allow nsfw servers
- Ticket Permissions now have a strict mode, by default, anyone with the "Manage Server" permission has administrator access to all ticket groups. With strict mode enabled, ticket permissions will only be applied to the user's roles.
- There is now a global ticket counter for the server, this counter can be changed in the server settings. You can toggle this on for a ticket group in the "Opening Ticket Settings" section
- Added a new button action "Close Ticket without Reason". This will close the ticket without confirmation or a reason
- Added ticket logs to the dashboard (in the logs section), this will show you all the actions that have been taken on all tickets
- Added two new export options for ticket groups, one for forms (feedback forms and opening forms) and one for completed ticket, these can be accessed from the 3 dot menu in the ticket group page
- Added new commands `/bulk close` and `/bulk delete`, these are experimental and will likely fail if it tries to close a lot of tickets at once
- Added a new button action "Change Priority", this will allow you to change the priority of a ticket through a button/dropdown interaction
- Added new "Form Results" message, this message is sent right after the welcome message if a form is submitted. (Disabled by default)
- Added view mode ticket group editor, the "List View" mode will display all the settings for the ticket group on one page where you can toggle each section on/off.
- A **_ton_** of bug fixes and general/ui improvements, please report any bugs you find!

:::

::: timeline July 2024

Ticketeer beta release!

- Released premium subscriptions and keys
- Added `/app vote` command, this allows you to vote for the bot on top.gg and receive premium keys for voting. (this is a work in progress and subject to change)
- Redesigned welcome and info messages
- Added the ability to make transcripts public or private
- Added the ability turn off attachments in transcripts
- Added more "On Member Missing" options
  - Close ticket
  - Delete ticket
  - Send Notice - A new message has been added for this called "Ticket Missing Member"
- Added new Ticket expire options
  - Delete on Expiration - Deletes ticket after expiration instead of closing it
  - Prevent Expiration on Initial Activity - Prevents the ticket from expiring automatically after the user that opens the ticket and first interacts with it
  - Prevent Expiration on User Activity - Prevents the ticket from all expiring automatically after any user interacts with it
- Bug fixes and general improvements, please report any bugs you find!

:::

::: timeline June 2024

- Added "Tickets" section in the dashboard, this is a list of all your tickets and their status! You can now see your tickets w/o logging into discord!
- Added a small graph to the dashboard, this shows the number of open tickets and closed tickets in the last 7 days
- Changed the style of lists on the dashboard, it is now a little more modern and easier to use
- Bug fixes and general improvements, please report any bugs you find!

:::

::: timeline May 2024

Ticketeer alpha release!

- Added `/name set` and `/name clear` commands, lets you set and clear the name of the ticket, this includes new messages, logs and permissions
- Added `/notes create` command, creates a private thread for the ticket, this includes new messages, logs and permissions
- Added `/notes add` and `/notes remove` commands, adds or removes users from the notes
- Added "Lock Thread" toggle for thread tickets, this will lock the thread when the ticket is closed (and unlock when reopened)
- Added "Remove Members on Close" toggle for thread tickets, this will remove members from the thread when the ticket is closed (and add them back when reopened)
- Bot status will now cycle through, servers, tickets opened/closed and users
- Bug fixes and general improvements, please report any bugs you find!

:::
