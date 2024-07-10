---
title: Errors
---

# Errors

## Ticket Exceptions

### Error `TICKET_NOT_FOUND`

::: info `Ticket Not Found`

This error happens when you try to access a ticket that does not exist.

:::

### Error `TICKET_CATEGORY_NOT_FOUND`

::: info `Category Not Found`

This error happens when you try to create a ticket in a category that no longer exists.

:::

### Error `TOO_MANY_TICKETS_OPENED`

::: info `Too Many Opened`

This error happens when the maximum number of tickets for a group is reached.

:::

### Error `USER_TOO_MANY_TICKETS_OPENED`

::: info `Too Many Opened (User)`

This error happens when the maximum number of tickets for a user is reached.

:::

### Error `TICKET_OUT_OF_SCHEDULE`

::: info `Out of Schedule`

This happens when you try to open a ticket that is out of the scheduled time.

:::

### Error `TICKET_CHANNEL_MISSING`

::: info `Channel Missing`

This error happens when you try to open a ticket in a channel that no longer exists.

:::

### Error `INVALID_TICKET_STATUS`

::: info `Invalid Status`

This error happens when you try change the status of a ticket to an invalid status.

:::

### Error `TICKET_FEATURE_DISABLED`

::: info `Feature Disabled`

This error happens when you try access a feature that is disabled.

:::

### Error `TICKET_RATE_LIMITED`

::: info `Rate Limit`

This happens when you try to do something too many times in a short period of time.

:::

### Error `INVALID_USER`

::: info `Invalid User`

This happens when you provide an invalid user for an action.

:::

### Error `TICKET_PRIVATE_THREAD_EXISTS`

::: info `Ticket Private Thread Exists`

This happens when you try to create a thread for a ticket that already has a private thread.

:::

### Interaction Request Exception

### Error `REQUEST_FORBIDDEN`

::: info `Forbidden`

Ticketeer tried to access a resource from discord and it did not have permission to do so.

:::

### Error `REQUEST_INVALID`

::: info `Request Invalid`

Ticketeer tried to send something to discord that was not valid.

:::

### Error `REQUEST_RATE_LIMITED`

::: info `Too Many Requests`

Ticketeer is being rate limited.

:::

## Error Message Exceptions

### Error `MESSAGE_PARSING_ERROR`

::: info `Parsing Error`

The template could not be parsed due to a user error.

:::

## Other Exceptions

### Error `APPLICATION_NOT_FOUND`

::: info `Interaction Application Not Found Exception`

Make a bug report on the [support server](https://ticketeer.dev/support).

:::

### Error `INTERACTION_FORBIDDEN`

::: info `Interaction Forbidden Exception`

This error is thrown when ...

:::

### Error `INVALID_ARGUMENT`

::: info `Interaction Invalid Argument Exception`

This error is thrown when ...

:::

### Error `MODEL_NOT_FOUND`

::: info `Interaction Model Not Found Exception`

Make a bug report on the [support server](https://ticketeer.dev/support).

:::

### Error `PREMIUM_REQUIRED`

::: info `Premium Required Exception`

This can happen if you try to access a feature that requires a premium subscription.

:::

### Error `SUSPENDED`

::: info `Suspended Exception`

This error happens when a user or server is suspended from using Ticketeer.

:::

### Error `TOO_MANY_CHANNELS`

::: info `Too Many Channels Exception`

Discord has limited the number of channels you can create. This error happens when you try to create a channel that would exceed the limit.

:::

### Error `TOO_MANY_ERRORS`

::: info `Too Many Interaction Errors Exception`

This error happens when your server is creating too many errors in a short period of time.

:::

### Error `TOO_MANY_REQUESTS`

::: info `Too Many Requests Exception`

This error happens when you try interacting with Ticketeer too many times in a short period of time.

:::
