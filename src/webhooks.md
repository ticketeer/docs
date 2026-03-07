---
title: Webhooks
---

# Webhooks

Ticketeer can send HTTP POST requests to your server when ticket events occur. This allows you to build integrations that react to ticket activity in real time.

Webhooks are a **premium** feature.

## Setup

1. Navigate to **Server Settings > Webhooks**
2. Click **Create Webhook**
3. Enter a name, HTTPS URL, and select the events you want to receive
4. Save — copy the **secret** shown (it won't be displayed again)

## Authentication

Every webhook request includes an HMAC-SHA256 signature in the `X-Ticketeer-Signature` header:

```
X-Ticketeer-Signature: <hex_digest>
```

To verify a request, compute the HMAC-SHA256 of the raw request body using your webhook secret and compare it to the signature value.

### Verification examples

**Node.js**

```js
const crypto = require('crypto')

function verify(body, secret, signature) {
  const expected = crypto.createHmac('sha256', secret).update(body).digest('hex')
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature))
}
```

**Python**

```python
import hmac, hashlib

def verify(body: bytes, secret: str, signature: str) -> bool:
    expected = hmac.new(secret.encode(), body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)
```

**PHP**

```php
function verify(string $body, string $secret, string $signature): bool {
  $expected = hash_hmac('sha256', $body, $secret);
  return hash_equals($expected, $signature);
}
```

## Request format

All webhook deliveries are HTTP POST requests with the following headers:

| Header                  | Description                         |
| ----------------------- | ----------------------------------- |
| `Content-Type`          | `application/json`                  |
| `X-Ticketeer-Signature` | HMAC-SHA256 signature               |
| `X-Ticketeer-Event`     | Event name (e.g. `close`, `create`) |
| `User-Agent`            | `Ticketeer-Webhook/1.0`             |

### Payload structure

```json
{
  "event": "close",
  "guild_id": "123456789012345678",
  "ticket": {
    "id": "987654321098765432",
    "channel_id": "111222333444555666",
    "owner_id": "444555666777888999",
    "group_id": "555666777888999000",
    "status": "closed",
    "priority": 2,
    "name": "Support Request"
  },
  "user": {
    "id": "444555666777888999",
    "username": "example_user"
  },
  "timestamp": "2026-03-03T12:34:56+00:00"
}
```

The `user` field contains the user who triggered the event, or `null` for system-initiated events (e.g. expiry).

## Events

| Event                        | Description                          |
| ---------------------------- | ------------------------------------ |
| `create`                     | Ticket created                       |
| `open`                       | Ticket reopened                      |
| `close`                      | Ticket closed                        |
| `delete`                     | Ticket deleted                       |
| `lock`                       | Ticket locked                        |
| `unlock`                     | Ticket unlocked                      |
| `expired`                    | Ticket expired automatically         |
| `expire`                     | Expiry date set on ticket            |
| `eternal`                    | Ticket marked as eternal (no expiry) |
| `user_added`                 | User added to ticket                 |
| `user_removed`               | User removed from ticket             |
| `assign`                     | Ticket assigned to staff             |
| `unassign`                   | Ticket unassigned from staff         |
| `priority_changed`           | Ticket priority changed              |
| `owner_changed`              | Ticket owner changed                 |
| `name_set`                   | Ticket name set                      |
| `name_clear`                 | Ticket name cleared                  |
| `move`                       | Ticket moved to another group        |
| `rate`                       | Ticket rated by user                 |
| `feedback`                   | Feedback submitted on ticket         |
| `transcript_create`          | Transcript generated                 |
| `private_thread_create`      | Private notes thread created         |
| `private_thread_user_add`    | User added to private thread         |
| `private_thread_user_remove` | User removed from private thread     |

## Delivery behavior

- Requests time out after **30 seconds**
- Failed deliveries are retried up to **3 times**
- After **10 consecutive failures**, the webhook is automatically **disabled**
- All delivery attempts are logged and viewable in the webhook's **Logs** page

## Managing webhooks

From the webhooks page you can:

- **Edit** — update name, URL, or subscribed events
- **Toggle** — enable or disable a webhook without deleting it
- **Regenerate secret** — generate a new signing secret (invalidates the old one)
- **Test** — send a `ping` event to verify your endpoint is reachable
- **Delete** — permanently remove the webhook and its logs

## Responding to webhooks

Your endpoint should return a **2xx** status code to indicate successful receipt. The response body is logged but not processed.

If your endpoint is slow or does heavy processing, return `200` immediately and handle the event asynchronously.
