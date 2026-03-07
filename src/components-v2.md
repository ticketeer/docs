---
title: Components V2
---

# Components V2

Components V2 is Discord's new message layout system. Instead of being limited to text content and embeds, you can now build messages using rich building blocks like text displays, sections, media galleries, containers, and more.

Ticketeer fully supports Components V2 in the message editor for both ticket group messages and custom messages.

## Available components

| Component         | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| **Text Display**  | Renders markdown text within the message                              |
| **Section**       | Groups text and an optional thumbnail or button side by side          |
| **Thumbnail**     | Displays a small image, typically used inside a section               |
| **Media Gallery** | Displays one or more images or videos in a gallery layout             |
| **File**          | Attaches a file to the message                                        |
| **Separator**     | Adds a visual divider between components                              |
| **Container**     | Wraps other components in a styled card with an optional accent color |

## How to use

In the message editor, toggle the **Components V2** switch to enable the new layout mode. Once enabled, the editor will switch to a component-based view where you can add and arrange components visually.

You must add at least one component — the message will not send if the component list is empty.

::: tip
Components V2 messages fully support the [template engine](/template-engine). You can use template variables like `{$ticket.owner}` or `{$ticket.number}` inside any text display.
:::
