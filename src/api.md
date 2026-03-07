---
title: API
---

# API

Ticketeer provides a REST API that allows you to manage tickets, guilds, and channels programmatically. The API is a **premium** feature.

**Base URL:** `https://ticketeer.bot/api/v1`

For full endpoint details, request/response schemas, and interactive examples, see the **[API Reference](https://ticketeer.bot/api/docs)**.

## Authentication

All API requests require a Bearer token. You can generate an API token from the [Ticketeer dashboard](https://ticketeer.bot/guilds) under **Server Settings > API Tokens**.

Include the token in the `Authorization` header:

```
Authorization: Bearer <your-api-token>
```

### Token abilities

When creating a token, you can configure the following abilities:

- **Anonymous** — Actions performed by the token will not show a user attribution in ticket messages and logs.

## Rate limiting

API requests are rate limited. If you exceed the limit, you will receive a `429 Too Many Requests` response. Use the `Retry-After` header to determine when you can retry.

## Endpoints overview

Below is a quick reference of all available endpoints. For full details including request bodies, response schemas, and examples, visit the **[API Reference](https://ticketeer.bot/api/docs)**.

### User

| Method | Endpoint          | Description                          |
| ------ | ----------------- | ------------------------------------ |
| GET    | `/user/me`        | Get the authenticated user           |
| GET    | `/user/me/guilds` | List guilds accessible by the user   |

### Guild

| Method | Endpoint                 | Description                          |
| ------ | ------------------------ | ------------------------------------ |
| GET    | `/guild/{guild}`         | Get guild details                    |
| POST   | `/guild/{guild}/sync`    | Sync guild channels, roles, and tickets |
| GET    | `/guild/{guild}/groups`  | List ticket groups                   |
| GET    | `/guild/{guild}/panels`  | List ticket panels                   |
| GET    | `/guild/{guild}/stats`   | Get ticket statistics                |
| GET    | `/guild/{guild}/messages`| List custom messages                 |

### Ticket

All ticket endpoints accept either a ticket ID or a channel ID. When using a channel ID, replace `/ticket/{ticket}` with `/channel/{channel}/ticket`.

| Method | Endpoint                                    | Description                          |
| ------ | ------------------------------------------- | ------------------------------------ |
| POST   | `/guild/{guild}/ticket`                     | Create a new ticket                  |
| GET    | `/guild/{guild}/ticket/{ticket}`            | Get ticket details                   |
| DELETE | `/guild/{guild}/ticket/{ticket}`            | Delete a ticket                      |
| POST   | `/guild/{guild}/ticket/{ticket}/open`       | Reopen a closed ticket               |
| POST   | `/guild/{guild}/ticket/{ticket}/close`      | Close an open ticket                 |
| POST   | `/guild/{guild}/ticket/{ticket}/lock`       | Lock a ticket                        |
| POST   | `/guild/{guild}/ticket/{ticket}/unlock`     | Unlock a ticket                      |
| POST   | `/guild/{guild}/ticket/{ticket}/assign`     | Assign a user to the ticket          |
| POST   | `/guild/{guild}/ticket/{ticket}/unassign`   | Unassign the ticket                  |
| POST   | `/guild/{guild}/ticket/{ticket}/priority`   | Change ticket priority               |
| POST   | `/guild/{guild}/ticket/{ticket}/owner`      | Transfer ticket ownership            |
| POST   | `/guild/{guild}/ticket/{ticket}/add`        | Add a user to the ticket             |
| POST   | `/guild/{guild}/ticket/{ticket}/remove`     | Remove a user from the ticket        |
| POST   | `/guild/{guild}/ticket/{ticket}/name`       | Rename or clear the ticket name      |
| POST   | `/guild/{guild}/ticket/{ticket}/move`       | Move ticket to another group         |
| POST   | `/guild/{guild}/ticket/{ticket}/expire`     | Set ticket expiry                    |
| POST   | `/guild/{guild}/ticket/{ticket}/eternal`    | Toggle eternal status (no expiry)    |
| POST   | `/guild/{guild}/ticket/{ticket}/notes`      | Create a private notes thread        |
| POST   | `/guild/{guild}/ticket/{ticket}/notes/add`  | Add a user to the notes thread       |
| POST   | `/guild/{guild}/ticket/{ticket}/notes/remove`| Remove a user from the notes thread |
| GET    | `/guild/{guild}/ticket/{ticket}/transcript` | Get the ticket transcript            |
| POST   | `/guild/{guild}/ticket/{ticket}/save`       | Save the ticket transcript           |
| POST   | `/guild/{guild}/ticket/{ticket}/send/{user}`| Send transcript to a user via DM     |

### Channel

| Method | Endpoint                                                    | Description                          |
| ------ | ----------------------------------------------------------- | ------------------------------------ |
| POST   | `/guild/{guild}/channel/{channel}`                          | Send a message to a channel          |
| POST   | `/guild/{guild}/channel/{channel}/{message_id}`             | Update a message in a channel        |
| POST   | `/guild/{guild}/message/{custom_message_id}/{channel}`      | Send a custom message                |
| POST   | `/guild/{guild}/message/{custom_message_id}/{channel}/{message_id}` | Update a custom message      |

## Error handling

The API returns standard HTTP status codes:

| Code  | Description                                      |
| ----- | ------------------------------------------------ |
| `200` | Success                                          |
| `400` | Bad request — check your request body            |
| `401` | Unauthorized — invalid or missing token          |
| `403` | Forbidden — insufficient permissions             |
| `404` | Not found — resource does not exist              |
| `429` | Too many requests — rate limited                 |
| `500` | Internal server error                            |

Error responses include a JSON body with a `message` field describing the error.
