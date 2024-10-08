---
title: Messages
---

<script setup lang="ts">
  const templates = {
  "ticket_menu_opened": {
    "delete_after": 180,
    "flags": 64,
    "embeds": [
      {
        "description": "```{$ticket.channel.name} controls```",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ],
    "buttons": [
      {
        "label": "Close Ticket",
        "style": 2,
        "action": "close",
        "emoji": "<:ticket_close:1236057518313050163>"
      },
      {
        "label": "Lock Ticket",
        "style": 2,
        "action": "lock",
        "emoji": "<:ticket_lock:1236054510691025007>"
      }
    ]
  },
  "ticket_menu_locked": {
    "delete_after": 180,
    "flags": 64,
    "embeds": [
      {
        "description": "```{$ticket.channel.name} controls```",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ],
    "buttons": [
      {
        "label": "Unlock Ticket",
        "style": 2,
        "action": "unlock",
        "emoji": "<:ticket_unlock:1236054509298389004>"
      },
      {
        "label": "Close Ticket",
        "style": 2,
        "action": "close",
        "emoji": "<:ticket_close:1236057518313050163>"
      }
    ]
  },
  "ticket_menu_assigned": {
    "delete_after": 180,
    "flags": 64,
    "embeds": [
      {
        "description": "```{$ticket.channel.name} controls```",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ],
    "buttons": [
      {
        "label": "Unassign Ticket",
        "style": 2,
        "action": "unassign",
        "emoji": "<:ticket_unassign:1236060175664812092>"
      },
      {
        "label": "Close Ticket",
        "style": 2,
        "action": "close",
        "emoji": "<:ticket_close:1236057518313050163>"
      }
    ]
  },
  "ticket_menu_closed": {
    "delete_after": 180,
    "flags": 64,
    "embeds": [
      {
        "description": "```{$ticket.channel.name} controls```",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ],
    "buttons": [
      {
        "label": "Get Transcript",
        "style": 2,
        "action": "transcript-send",
        "emoji": "<:ticket_transcript:1236041551646556213>"
      },
      {
        "label": "Reopen",
        "style": 2,
        "action": "open",
        "emoji": "<:ticket:1236030923389145108>"
      },
      {
        "label": "Reopen with Message",
        "style": 2,
        "action": "open-message",
        "emoji": "<:ticket_message:1236055451314032670>"
      },
      {
        "label": "Delete",
        "style": 4,
        "action": "delete",
        "emoji": "<:ticket_trash:1236091353335857272>"
      }
    ]
  },
  "ticket_menu_deleted": {
    "delete_after": 180,
    "flags": 64,
    "embeds": [
      {
        "description": "```{$ticket.channel.name} controls```",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ],
    "buttons": [
      {
        "label": "Open New Ticket",
        "style": 2,
        "action": "new-ticket",
        "emoji": "<:ticket:1236030923389145108>"
      },
      {
        "label": "Get Transcript",
        "style": 2,
        "action": "transcript-send",
        "emoji": "<:ticket_transcript:1236041551646556213>"
      }
    ]
  },
  "created": {
    "delete_after": 60,
    "flags": 64,
    "content": "*👏 Ticket {$ticket.channel} created!*",
    "buttons": [
      {
        "label": "Go to {$ticket.channel.name}",
        "style": 5,
        "action": "none",
        "url": "{$ticket.link}",
        "emoji": "<:ticket:1236030923389145108>"
      }
    ]
  },
  "created_dm": {
    "disabled": true,
    "content": "{if $from}{$from} opened {$ticket.channel.name} for you{else}You opened {$ticket.channel.name}{/if} in {$server.name}, click the button below to continue!",
    "buttons": [
      {
        "label": "Go to {$ticket.channel.name}",
        "style": 5,
        "action": "none",
        "url": "{$ticket.link}",
        "emoji": "<:ticket:1236030923389145108>"
      }
    ]
  },
  "created_public_message": {
    "content": "{$owner} requested help for {$group.name}!",
    "embeds": [
      {
        "description": "Our team is ready to assist you and will respond shortly.",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "created_welcome": {
    "content": "Welcome {$ticket.owner}!",
    "embeds": [
      {
        "description": "Our team is ready to assist you and will respond shortly. If and when your issue is resolved, you can close this ticket using the button below.",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ],
    "buttons": [
      {
        "label": "Open Ticket Menu",
        "style": 2,
        "action": "ticket-menu",
        "emoji": "<:ticket_menu:1236049223276036136>"
      }
    ]
  },
  "created_from_message": {
    "embeds": [
      {
        "title": "Original Message",
        "description": "{$message.author} said in {$message.channel}:\n{$message.content|codeblock}",
        "fields": [
          {
            "name": "Channel",
            "value": "{$message.channel}",
            "inline": true
          },
          {
            "name": "Original Message",
            "value": "{$message.link}",
            "inline": true
          },
          {
            "name": "Opened By",
            "value": "{$from}"
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "created_with_message": {
    "embeds": [
      {
        "description": "Message from {$from|else:staff}\n{$message|codeblock}",
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "form_results": {
    "disabled": true,
    "embeds": [
      {
        "fields": [
          {
            "name": "{$ticket.form.0.title|else:Title 1}",
            "value": "{$ticket.form.0.value|length:1024|else:No Response}"
          },
          {
            "name": "{$ticket.form.1.title|else:Title 2}",
            "value": "{$ticket.form.1.value|length:1024|else:No Response}"
          },
          {
            "name": "{$ticket.form.2.title|else:Title 3}",
            "value": "{$ticket.form.2.value|length:1024|else:No Response}"
          },
          {
            "name": "{$ticket.form.3.title|else:Title 4}",
            "value": "{$ticket.form.3.value|length:1024|else:No Response}"
          },
          {
            "name": "{$ticket.form.4.title|else:Title 5}",
            "value": "{$ticket.form.4.value|length:1024|else:No Response}"
          }
        ],
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "opened": {
    "embeds": [
      {
        "description": "Ticket Opened by {$user}.{if $message}\nWith the following message:\n{$message|codeblock}{/if}",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "closed": {
    "embeds": [
      {
        "description": "Ticket closed by {$user}.",
        "fields": [
          {
            "name": "Reason",
            "value": "{$ticket.closed_reason|else:No reason provided.|codeblock}"
          }
        ],
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "close_confirm": {
    "delete_after": 120,
    "flags": 64,
    "content": "Are you sure you would like to close this ticket?",
    "buttons": [
      {
        "label": "Close Ticket",
        "style": 4,
        "action": "primary"
      },
      {
        "label": "Cancel",
        "style": 2,
        "action": "cancel"
      }
    ]
  },
  "closed_dm": {
    "disabled": true,
    "content": "Your ticket {$ticket.channel.name} in {$server.name} was closed by {$user}.",
    "buttons": [
      {
        "label": "Rate your experience",
        "style": 1,
        "action": "rate",
        "emoji": "<:ticket_rate:1236409758156849274>"
      },
      {
        "label": "Leave Feedback",
        "style": 1,
        "action": "feedback",
        "emoji": "<:ticket_feedback:1236409759129927731>"
      },
      {
        "label": "Reopen",
        "style": 2,
        "action": "open",
        "emoji": "<:ticket:1236030923389145108>"
      },
      {
        "label": "Reopen with Message",
        "style": 2,
        "action": "open-message",
        "emoji": "<:ticket_message:1236055451314032670>"
      },
      {
        "label": "Get Transcript",
        "style": 2,
        "action": "transcript-send",
        "emoji": "<:ticket_transcript:1236041551646556213>"
      }
    ]
  },
  "deleting": {
    "embeds": [
      {
        "description": "This ticket is queued to be deleted {$timestamp|time:r}...",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "missing_member": {
    "embeds": [
      {
        "description": "{$ticket.owner.name} has left the server.",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "locked": {
    "embeds": [
      {
        "description": "Ticket locked by {$user}.",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ],
    "buttons": [
      {
        "label": "Unlock",
        "style": 2,
        "action": "unlock",
        "emoji": "<:ticket_unlock:1236054509298389004>"
      }
    ]
  },
  "unlocked": {
    "embeds": [
      {
        "description": "Ticket unlocked by {$user}.",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "assigned": {
    "embeds": [
      {
        "description": "Ticket assigned to {$ticket.assigned}.",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "unassigned": {
    "embeds": [
      {
        "description": "Ticket was unassigned by {$user}.",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "user_added": {
    "embeds": [
      {
        "description": "{$user} added {$added}",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "user_added_dm": {
    "disabled": true,
    "content": "{$user} added you to ticket {$ticket.channel.name} in {$server.name}, click the button below to continue!",
    "buttons": [
      {
        "label": "Go to {$ticket.channel.name}",
        "style": 5,
        "action": "none",
        "url": "{$ticket.link}",
        "emoji": "<:ticket:1236030923389145108>"
      }
    ]
  },
  "user_removed": {
    "embeds": [
      {
        "description": "{$user} removed {$removed}",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "user_removed_dm": {
    "disabled": true,
    "content": "{$user} removed you from ticket {$ticket.channel.name} in {$server.name}",
    "buttons": [
      {
        "label": "Rate your experience",
        "style": 1,
        "action": "rate",
        "emoji": "<:ticket_rate:1236409758156849274>"
      },
      {
        "label": "Leave Feedback",
        "style": 1,
        "action": "feedback",
        "emoji": "<:ticket_feedback:1236409759129927731>"
      }
    ]
  },
  "owner_change": {
    "embeds": [
      {
        "description": "{$user} changed the ticket owner to {$ticket.owner}",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "owner_change_dm": {
    "disabled": true,
    "content": "{$user} changed the owner of ticket {$ticket.channel.name} in {$server.name} to {$ticket.owner}!",
    "buttons": [
      {
        "label": "Go to {$ticket.channel.name}",
        "style": 5,
        "action": "none",
        "url": "{$ticket.link}",
        "emoji": "<:ticket:1236030923389145108>"
      }
    ]
  },
  "thread": {
    "embeds": [
      {
        "description": "{$ticket.channel.name} notes thread",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "thread_created": {
    "delete_after": 60,
    "flags": 64,
    "content": "Notes {$ticket.notes} created!",
    "buttons": [
      {
        "label": "Go to notes",
        "style": 5,
        "action": "none",
        "url": "{$ticket.notes.link}",
        "emoji": "<:ticket_transcript:1236041551646556213>"
      }
    ]
  },
  "thread_member_added": {
    "embeds": [
      {
        "description": "{$user} added {$added} to notes",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "thread_member_removed": {
    "embeds": [
      {
        "description": "{$user} removed {$removed} from notes",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "priority_change": {
    "embeds": [
      {
        "description": "{$user} changed the ticket priority to \"{$ticket.priority.label}\"",
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "priority_menu": {
    "delete_after": 60,
    "flags": 64,
    "content": "Select a priority to change the ticket to."
  },
  "expired": {
    "embeds": [
      {
        "description": "This ticket has expired{if $expire.activity} due to inactivity{/if} and will automatically close.",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "expiring": {
    "embeds": [
      {
        "description": "Ticket will automatically close {$expire.timestamp|time:r}{if $expire.activity} if it remains inactive.{/if}",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "expire": {
    "embeds": [
      {
        "description": "Ticket will automatically expire {$expire.timestamp|time:r}{if $expire.activity} if it remains inactive.{/if}",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "expire_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} made {$ticket.channel.name} ({$ticket.channel}) expire at {$expire.timestamp|time:r}{if $expire.activity} if it remains inactive.{/if}",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "eternal": {
    "embeds": [
      {
        "description": "{if $eternal}This ticket will never expire.{else}This ticket is no longer immune to expiring.{/if}",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "schedule_error": {
    "delete_after": 60,
    "flags": 64,
    "embeds": [
      {
        "description": "Sorry our support team is currently `offline` and will be not be available until {$group.schedule_timestamp|time:r}",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "schedule_notice": {
    "embeds": [
      {
        "description": "**Please Note**: Our support team is currently `offline` and will be not be available until {$ticket.group.schedule_timestamp|time:r}",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "feedback_response": {
    "delete_after": 60,
    "flags": 64,
    "embeds": [
      {
        "description": "Thank you for your feedback!",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "transcript": {
    "embeds": [
      {
        "title": "Ticket #{$ticket.number} ({$ticket.channel.name}) transcript",
        "image": "{$ticket.owner.avatar}",
        "fields": [
          {
            "name": "Ticket Owner",
            "value": "{$ticket.owner}",
            "inline": true
          },
          {
            "name": "Group Name",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "transcript_dm": {
    "embeds": [
      {
        "description": "Here is your transcript for {$ticket.channel.name} in {$server.name}",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "transcript_saving": {
    "delete_after": 30,
    "flags": 64,
    "embeds": [
      {
        "title": "Saving Transcript",
        "description": "Transcript is being processed{if $transcript.channel} and will be saved in {$transcript.channel} when it is ready.{elseif $transcript.user} and will be sent to {$transcript.user} when it is ready{else} and will be available shortly{/if}.",
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "rating_response": {
    "delete_after": 60,
    "flags": 64,
    "embeds": [
      {
        "description": "Thank you for your feedback!{if $rating.number < 3} We will work hard to improve your experience!{/if}",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "rating_menu": {
    "delete_after": 60,
    "flags": 64,
    "content": "Please rate your experience!"
  },
  "created_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} created {$ticket.channel.name} ({$ticket.channel}) {if $from}from {$from}{/if}",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "opened_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} opened {$ticket.channel.name} ({$ticket.channel})",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "closed_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} closed {$ticket.channel.name} ({$ticket.channel})",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "locked_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} locked {$ticket.channel.name} ({$ticket.channel})",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "unlocked_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} unlocked {$ticket.channel.name} ({$ticket.channel})",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "assigned_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} assigned {$ticket.channel.name} ({$ticket.channel}) to {$assigned}",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "unassigned_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} unassigned {$assigned} from {$ticket.channel.name} ({$ticket.channel})",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "deleted_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} deleted {$ticket.channel.name}",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "transcript_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} created a transcript for {$ticket.channel.name} ({$ticket.channel})",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "user_added_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} added {$added} to ticket {$ticket.channel.name} ({$ticket.channel})",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "user_removed_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} removed {$removed} from ticket {$ticket.channel.name} ({$ticket.channel})",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "owner_change_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} changed the owner of ticket {$ticket.channel.name} ({$ticket.channel}) to {$ticket.owner}",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "priority_change_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} changed the priority of ticket {$ticket.channel.name} ({$ticket.channel}) to {$ticket.priority}",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "name_set_log": {
    "embeds": [
      {
        "description": "{$user} set the name for {$ticket.channel.name} ({$ticket.channel})!",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "name_cleared_log": {
    "embeds": [
      {
        "description": "{$user} cleared the name for {$ticket.channel.name} ({$ticket.channel})!",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "expired_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$ticket.channel.name} ({$ticket.channel}) expired!",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "eternal_log": {
    "embeds": [
      {
        "title": "Ticket Log",
        "description": "{$user} made {$ticket.channel.name} ({$ticket.channel}) {if $eternal}eternal{else}no longer immune to expiring{/if}!",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "feedback_log": {
    "embeds": [
      {
        "description": "{$user} gave ticket # {$ticket.number} from ticket group \"{$ticket.group}\" some feedback!",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "rating_log": {
    "embeds": [
      {
        "description": "{$user} gave {$ticket.channel.name} a \"{if $rating.emoji}{$rating.emoji} {/if}{$rating.label}\" rating!",
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "thread_created_log": {
    "embeds": [
      {
        "description": "{$user} created notes for {$ticket.channel.name} ({$ticket.channel})!",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "thread_member_added_log": {
    "embeds": [
      {
        "description": "{$user} added {$added} to notes for {$ticket.channel.name} ({$ticket.channel})!",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  },
  "thread_member_removed_log": {
    "embeds": [
      {
        "description": "{$user} removed {$removed} from notes for {$ticket.channel.name} ({$ticket.channel})!",
        "fields": [
          {
            "name": "Ticket",
            "value": "{$ticket.channel.name} ({$ticket.channel})"
          },
          {
            "name": "Author",
            "value": "{$user}",
            "inline": true
          },
          {
            "name": "Group",
            "value": "{$ticket.group.name}",
            "inline": true
          }
        ],
        "timestamp": true,
        "color": "#14b8a6",
        "footer": {
          "text": "Ticketeer Canary - Support Made Simple",
          "icon_url": "https://ticketeer.dev/icon.png"
        }
      }
    ]
  }
}
</script>

# Ticketeer Messages

This is a complete list of all the messages that can be used in Ticketeer along with their options, variables and default values.

## Menu Messages

### Ticket Menu (Opened) Message {#ticket_menu_opened}


<MessagePreview class="mt-3" :message="templates['ticket_menu_opened']" />


::: info

This is the ticket menu shown to the user when the ticket status is open.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 180,
  "flags": 64,
  "embeds": [
    {
      "description": "```{$ticket.channel.name} controls```",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ],
  "buttons": [
    {
      "label": "Close Ticket",
      "style": 2,
      "action": "close",
      "emoji": "<:ticket_close:1236057518313050163>"
    },
    {
      "label": "Lock Ticket",
      "style": 2,
      "action": "lock",
      "emoji": "<:ticket_lock:1236054510691025007>"
    }
  ]
}
```

:::
### Ticket Menu (Locked) Message {#ticket_menu_locked}


<MessagePreview class="mt-3" :message="templates['ticket_menu_locked']" />


::: info

This is the ticket menu shown to the user when the ticket status is locked.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 180,
  "flags": 64,
  "embeds": [
    {
      "description": "```{$ticket.channel.name} controls```",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ],
  "buttons": [
    {
      "label": "Unlock Ticket",
      "style": 2,
      "action": "unlock",
      "emoji": "<:ticket_unlock:1236054509298389004>"
    },
    {
      "label": "Close Ticket",
      "style": 2,
      "action": "close",
      "emoji": "<:ticket_close:1236057518313050163>"
    }
  ]
}
```

:::
### Ticket Menu (Assigned) Message {#ticket_menu_assigned}


<MessagePreview class="mt-3" :message="templates['ticket_menu_assigned']" />


::: info

This is the ticket menu shown to the user when the ticket status is assigned.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 180,
  "flags": 64,
  "embeds": [
    {
      "description": "```{$ticket.channel.name} controls```",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ],
  "buttons": [
    {
      "label": "Unassign Ticket",
      "style": 2,
      "action": "unassign",
      "emoji": "<:ticket_unassign:1236060175664812092>"
    },
    {
      "label": "Close Ticket",
      "style": 2,
      "action": "close",
      "emoji": "<:ticket_close:1236057518313050163>"
    }
  ]
}
```

:::
### Ticket Menu (Closed) Message {#ticket_menu_closed}


<MessagePreview class="mt-3" :message="templates['ticket_menu_closed']" />


::: info

This is the ticket menu shown to the user when the ticket status is closed.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 180,
  "flags": 64,
  "embeds": [
    {
      "description": "```{$ticket.channel.name} controls```",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ],
  "buttons": [
    {
      "label": "Get Transcript",
      "style": 2,
      "action": "transcript-send",
      "emoji": "<:ticket_transcript:1236041551646556213>"
    },
    {
      "label": "Reopen",
      "style": 2,
      "action": "open",
      "emoji": "<:ticket:1236030923389145108>"
    },
    {
      "label": "Reopen with Message",
      "style": 2,
      "action": "open-message",
      "emoji": "<:ticket_message:1236055451314032670>"
    },
    {
      "label": "Delete",
      "style": 4,
      "action": "delete",
      "emoji": "<:ticket_trash:1236091353335857272>"
    }
  ]
}
```

:::
### Ticket Menu (Deleted) Message {#ticket_menu_deleted}


<MessagePreview class="mt-3" :message="templates['ticket_menu_deleted']" />


::: info

This is the ticket menu shown to the user when the ticket status is deleted.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 180,
  "flags": 64,
  "embeds": [
    {
      "description": "```{$ticket.channel.name} controls```",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ],
  "buttons": [
    {
      "label": "Open New Ticket",
      "style": 2,
      "action": "new-ticket",
      "emoji": "<:ticket:1236030923389145108>"
    },
    {
      "label": "Get Transcript",
      "style": 2,
      "action": "transcript-send",
      "emoji": "<:ticket_transcript:1236041551646556213>"
    }
  ]
}
```

:::
## Opening Messages

### Ticket Created Message {#created}


<MessagePreview class="mt-3" :message="templates['created']" />


::: info

This message is a reply to the user when a ticket is created.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 60,
  "flags": 64,
  "content": "*👏 Ticket {$ticket.channel} created!*",
  "buttons": [
    {
      "label": "Go to {$ticket.channel.name}",
      "style": 5,
      "action": "none",
      "url": "{$ticket.link}",
      "emoji": "<:ticket:1236030923389145108>"
    }
  ]
}
```

:::
### Ticket Created Direct Message {#created_dm}


<MessagePreview class="mt-3" :message="templates['created_dm']" />


::: info

This message is sent to The owner/creator of the ticket in a direct message when a ticket is created.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `dm` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `from?` | [User](#user-object) \| `null` | The user that created the ticket for owner |

:::

::: details Expand to see default json template

```json
{
  "disabled": true,
  "content": "{if $from}{$from} opened {$ticket.channel.name} for you{else}You opened {$ticket.channel.name}{/if} in {$server.name}, click the button below to continue!",
  "buttons": [
    {
      "label": "Go to {$ticket.channel.name}",
      "style": 5,
      "action": "none",
      "url": "{$ticket.link}",
      "emoji": "<:ticket:1236030923389145108>"
    }
  ]
}
```

:::
### Ticket Public Message {#created_public_message}


<MessagePreview class="mt-3" :message="templates['created_public_message']" />


::: info

This message is sent in the channel the ticket will be created in, this message will be used as the start of a public thread.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `user` | [User](#user-object) | The user that triggered this action |
| `from?` | [User](#user-object) \| `null` | The user that created the ticket for owner |
| `form` | array | The answers of the form filled out before the ticket was created |
| `form.*.title` | string | Title for the form field |
| `form.*.value` | string | Value for the form field |

:::

::: details Expand to see default json template

```json
{
  "content": "{$owner} requested help for {$group.name}!",
  "embeds": [
    {
      "description": "Our team is ready to assist you and will respond shortly.",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Welcome Message {#created_welcome}


<MessagePreview class="mt-3" :message="templates['created_welcome']" />


::: info

This message is sent as the first message in the ticket's channel when it is created.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `from?` | [User](#user-object) \| `null` | The user that created the ticket for owner |

:::

::: details Expand to see default json template

```json
{
  "content": "Welcome {$ticket.owner}!",
  "embeds": [
    {
      "description": "Our team is ready to assist you and will respond shortly. If and when your issue is resolved, you can close this ticket using the button below.",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ],
  "buttons": [
    {
      "label": "Open Ticket Menu",
      "style": 2,
      "action": "ticket-menu",
      "emoji": "<:ticket_menu:1236049223276036136>"
    }
  ]
}
```

:::
### Ticket Created from Message {#created_from_message}


<MessagePreview class="mt-3" :message="templates['created_from_message']" />


::: info

This message is sent to the ticket channel (after the welcome message) when a ticket is created from a message.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `from` | [User](#user-object) | The user that created the ticket for owner |
| `message` | [Message](#message-object) | The original message the ticket was created from |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Original Message",
      "description": "{$message.author} said in {$message.channel}:\n{$message.content|codeblock}",
      "fields": [
        {
          "name": "Channel",
          "value": "{$message.channel}",
          "inline": true
        },
        {
          "name": "Original Message",
          "value": "{$message.link}",
          "inline": true
        },
        {
          "name": "Opened By",
          "value": "{$from}"
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Created with Message {#created_with_message}


<MessagePreview class="mt-3" :message="templates['created_with_message']" />


::: info

This message is sent to the ticket channel (after the welcome message) when a ticket is created with a message from another user.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `from` | [User](#user-object) | The user that created the ticket for owner |
| `message?` | string \| `null` | A message from the user that created the ticket for owner |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "Message from {$from|else:staff}\n{$message|codeblock}",
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Form Results Message {#form_results}


<MessagePreview class="mt-3" :message="templates['form_results']" />


::: info

This message is sent right after the welcome message if a form is submitted.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |

:::

::: details Expand to see default json template

```json
{
  "disabled": true,
  "embeds": [
    {
      "fields": [
        {
          "name": "{$ticket.form.0.title|else:Title 1}",
          "value": "{$ticket.form.0.value|length:1024|else:No Response}"
        },
        {
          "name": "{$ticket.form.1.title|else:Title 2}",
          "value": "{$ticket.form.1.value|length:1024|else:No Response}"
        },
        {
          "name": "{$ticket.form.2.title|else:Title 3}",
          "value": "{$ticket.form.2.value|length:1024|else:No Response}"
        },
        {
          "name": "{$ticket.form.3.title|else:Title 4}",
          "value": "{$ticket.form.3.value|length:1024|else:No Response}"
        },
        {
          "name": "{$ticket.form.4.title|else:Title 5}",
          "value": "{$ticket.form.4.value|length:1024|else:No Response}"
        }
      ],
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Opened Message {#opened}


<MessagePreview class="mt-3" :message="templates['opened']" />


::: info

This message is sent to the ticket channel when a ticket is opened.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `message?` | string \| `null` | A message from the user that created the ticket for owner |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "Ticket Opened by {$user}.{if $message}\nWith the following message:\n{$message|codeblock}{/if}",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
## Closing Messages

### Ticket Closed Message {#closed}


<MessagePreview class="mt-3" :message="templates['closed']" />


::: info

This message is sent to the ticket channel when a ticket is closed.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "Ticket closed by {$user}.",
      "fields": [
        {
          "name": "Reason",
          "value": "{$ticket.closed_reason|else:No reason provided.|codeblock}"
        }
      ],
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Close Confirm Message {#close_confirm}


<MessagePreview class="mt-3" :message="templates['close_confirm']" />


::: info

This message is sent to the user to confirm they want to close a ticket.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 120,
  "flags": 64,
  "content": "Are you sure you would like to close this ticket?",
  "buttons": [
    {
      "label": "Close Ticket",
      "style": 4,
      "action": "primary"
    },
    {
      "label": "Cancel",
      "style": 2,
      "action": "cancel"
    }
  ]
}
```

:::
### Ticket Closed Direct Message {#closed_dm}


<MessagePreview class="mt-3" :message="templates['closed_dm']" />


::: info

This message is sent to all members of the ticket in a direct message when a it is closed.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `dm` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "disabled": true,
  "content": "Your ticket {$ticket.channel.name} in {$server.name} was closed by {$user}.",
  "buttons": [
    {
      "label": "Rate your experience",
      "style": 1,
      "action": "rate",
      "emoji": "<:ticket_rate:1236409758156849274>"
    },
    {
      "label": "Leave Feedback",
      "style": 1,
      "action": "feedback",
      "emoji": "<:ticket_feedback:1236409759129927731>"
    },
    {
      "label": "Reopen",
      "style": 2,
      "action": "open",
      "emoji": "<:ticket:1236030923389145108>"
    },
    {
      "label": "Reopen with Message",
      "style": 2,
      "action": "open-message",
      "emoji": "<:ticket_message:1236055451314032670>"
    },
    {
      "label": "Get Transcript",
      "style": 2,
      "action": "transcript-send",
      "emoji": "<:ticket_transcript:1236041551646556213>"
    }
  ]
}
```

:::
### Ticket Deleting Message {#deleting}


<MessagePreview class="mt-3" :message="templates['deleting']" />


::: info

This message is sent to the ticket channel when a ticket is about to be deleted.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "This ticket is queued to be deleted {$timestamp|time:r}...",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Member Missing Message {#missing_member}


<MessagePreview class="mt-3" :message="templates['missing_member']" />


::: info

This message is sent to the ticket channel when the owner/creator of the ticket leaves the server.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned` | [User](#user-object) | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$ticket.owner.name} has left the server.",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
## Locking Messages

### Ticket Locked Message {#locked}


<MessagePreview class="mt-3" :message="templates['locked']" />


::: info

This message is sent to the ticket channel when a ticket is locked.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "Ticket locked by {$user}.",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ],
  "buttons": [
    {
      "label": "Unlock",
      "style": 2,
      "action": "unlock",
      "emoji": "<:ticket_unlock:1236054509298389004>"
    }
  ]
}
```

:::
### Ticket Unlocked Message {#unlocked}


<MessagePreview class="mt-3" :message="templates['unlocked']" />


::: info

This message is sent to the ticket channel when a ticket is unlocked.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "Ticket unlocked by {$user}.",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
## Assigning Messages

### Ticket Assigned Message {#assigned}


<MessagePreview class="mt-3" :message="templates['assigned']" />


::: info

This message is sent to the ticket channel when a ticket is assigned.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned` | [User](#user-object) | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "Ticket assigned to {$ticket.assigned}.",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Unassigned Message {#unassigned}


<MessagePreview class="mt-3" :message="templates['unassigned']" />


::: info

This message is sent to the ticket channel when a ticket is unassigned.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `unassigned` | [User](#user-object) | The unassigned user of the ticket |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "Ticket was unassigned by {$user}.",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
## User Messages

### Ticket User Added Message {#user_added}


<MessagePreview class="mt-3" :message="templates['user_added']" />


::: info

This message is sent to the ticket channel when a user is added to the ticket.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `added` | [User](#user-object) | The user added to the ticket |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} added {$added}",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket User Added Direct Message {#user_added_dm}


<MessagePreview class="mt-3" :message="templates['user_added_dm']" />


::: info

This message is sent to the user added to the ticket in a direct message.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `dm` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `added` | [User](#user-object) | The user added to the ticket |

:::

::: details Expand to see default json template

```json
{
  "disabled": true,
  "content": "{$user} added you to ticket {$ticket.channel.name} in {$server.name}, click the button below to continue!",
  "buttons": [
    {
      "label": "Go to {$ticket.channel.name}",
      "style": 5,
      "action": "none",
      "url": "{$ticket.link}",
      "emoji": "<:ticket:1236030923389145108>"
    }
  ]
}
```

:::
### Ticket User Removed Message {#user_removed}


<MessagePreview class="mt-3" :message="templates['user_removed']" />


::: info

This message is sent to the ticket channel when a user is removed from the ticket.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `removed` | [User](#user-object) | The user removed from the ticket |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} removed {$removed}",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket User Removed Direct Message {#user_removed_dm}


<MessagePreview class="mt-3" :message="templates['user_removed_dm']" />


::: info

This message is sent to the user removed from the ticket in a direct message.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `dm` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `removed` | [User](#user-object) | The user removed from the ticket |

:::

::: details Expand to see default json template

```json
{
  "disabled": true,
  "content": "{$user} removed you from ticket {$ticket.channel.name} in {$server.name}",
  "buttons": [
    {
      "label": "Rate your experience",
      "style": 1,
      "action": "rate",
      "emoji": "<:ticket_rate:1236409758156849274>"
    },
    {
      "label": "Leave Feedback",
      "style": 1,
      "action": "feedback",
      "emoji": "<:ticket_feedback:1236409759129927731>"
    }
  ]
}
```

:::
### Ticket Owner Change Message {#owner_change}


<MessagePreview class="mt-3" :message="templates['owner_change']" />


::: info

This message is sent to the ticket channel when The owner/creator of the ticket has changed.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `removed` | [User](#user-object) | The old owner of the ticket |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} changed the ticket owner to {$ticket.owner}",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Owner Change Direct Message {#owner_change_dm}


<MessagePreview class="mt-3" :message="templates['owner_change_dm']" />


::: info

This message is sent to the new and old owner of the ticket in a direct message when The owner/creator of the ticket has changed.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `dm` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `removed` | [User](#user-object) | The old owner of the ticket |

:::

::: details Expand to see default json template

```json
{
  "disabled": true,
  "content": "{$user} changed the owner of ticket {$ticket.channel.name} in {$server.name} to {$ticket.owner}!",
  "buttons": [
    {
      "label": "Go to {$ticket.channel.name}",
      "style": 5,
      "action": "none",
      "url": "{$ticket.link}",
      "emoji": "<:ticket:1236030923389145108>"
    }
  ]
}
```

:::
## Thread Messages

### Ticket Notes Thread Message {#thread}


<MessagePreview class="mt-3" :message="templates['thread']" />


::: info

This is the first message that is sent in the notes private thread when a ticket is created.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `users` | [User[]](#user-object) | An array of users with the "Include In Thread" permission |
| `roles` | [Role[]](#role-object) | An array of roles with the "Include In Thread" permission |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$ticket.channel.name} notes thread",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Notes Thread Created Message {#thread_created}


<MessagePreview class="mt-3" :message="templates['thread_created']" />


::: info



:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 60,
  "flags": 64,
  "content": "Notes {$ticket.notes} created!",
  "buttons": [
    {
      "label": "Go to notes",
      "style": 5,
      "action": "none",
      "url": "{$ticket.notes.link}",
      "emoji": "<:ticket_transcript:1236041551646556213>"
    }
  ]
}
```

:::
### Ticket Notes User Added Message {#thread_member_added}


<MessagePreview class="mt-3" :message="templates['thread_member_added']" />


::: info

This message is sent to the ticket notes thread when a user is added to the notes.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `added` | [User](#user-object) | The user added to the notes |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} added {$added} to notes",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Notes User Removed Message {#thread_member_removed}


<MessagePreview class="mt-3" :message="templates['thread_member_removed']" />


::: info

This message is sent to the notes thread when a user is removed from the notes.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `removed` | [User](#user-object) | The user removed from the notes |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} removed {$removed} from notes",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
## Priority Messages

### Ticket Priority Change Message {#priority_change}


<MessagePreview class="mt-3" :message="templates['priority_change']" />


::: info

This message is sent to the ticket channel when the priority of the ticket has changed.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} changed the ticket priority to \"{$ticket.priority.label}\"",
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Priority Menu Message {#priority_menu}


<MessagePreview class="mt-3" :message="templates['priority_menu']" />


::: info

This message is the menu shown to the user when they are changing the priority of a ticket.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 60,
  "flags": 64,
  "content": "Select a priority to change the ticket to."
}
```

:::
## Expiration Messages

### Ticket Expired Message {#expired}


<MessagePreview class="mt-3" :message="templates['expired']" />


::: info

This message is sent to the ticket channel when a ticket has expired.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `expire.reason?` | string \| `null` | A message of the reason the ticket was expired |
| `expire.type` | string | The type of expiration |
| `expire.timestamp` | number | A timestamp of when the ticket expired |
| `expire.activity` | boolean | If ticket expired due to inactivity |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "This ticket has expired{if $expire.activity} due to inactivity{/if} and will automatically close.",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Expiring Message {#expiring}


<MessagePreview class="mt-3" :message="templates['expiring']" />


::: info

This message is sent to the ticket channel when a ticket is going to automatically expire.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `expire.time` | string | Time until ticket expires |
| `expire.timestamp` | number | A timestamp of when the ticket expired |
| `expire.activity` | boolean | If ticket expired due to inactivity |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "Ticket will automatically close {$expire.timestamp|time:r}{if $expire.activity} if it remains inactive.{/if}",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Expire Message {#expire}


<MessagePreview class="mt-3" :message="templates['expire']" />


::: info

This message is sent when the <code>/expire</code> command is ran.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `hybrid` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `expire.time` | string | Time until ticket expires |
| `expire.timestamp` | number | A timestamp of when the ticket expired |
| `expire.activity` | boolean | If ticket expired due to inactivity |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "Ticket will automatically expire {$expire.timestamp|time:r}{if $expire.activity} if it remains inactive.{/if}",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Expire Log Message {#expire_log}


<MessagePreview class="mt-3" :message="templates['expire_log']" />


::: info

This message is sent in the log channels when the expire is set to expire.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} made {$ticket.channel.name} ({$ticket.channel}) expire at {$expire.timestamp|time:r}{if $expire.activity} if it remains inactive.{/if}",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Eternal Message {#eternal}


<MessagePreview class="mt-3" :message="templates['eternal']" />


::: info

This message is sent when the <code>/eternal</code> command is ran.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `hybrid` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `eternal` | boolean | <code>true</code> if the ticket is eternal (immune from expiring) |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{if $eternal}This ticket will never expire.{else}This ticket is no longer immune to expiring.{/if}",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
## Schedule Messages

### Ticket Schedule Error Message {#schedule_error}


<MessagePreview class="mt-3" :message="templates['schedule_error']" />


::: info

This message is sent to the user when they attempt to open a ticket while out of the ticket's scheduled time.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 60,
  "flags": 64,
  "embeds": [
    {
      "description": "Sorry our support team is currently `offline` and will be not be available until {$group.schedule_timestamp|time:r}",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Schedule Notice Message {#schedule_notice}


<MessagePreview class="mt-3" :message="templates['schedule_notice']" />


::: info

This message is sent to the ticket channel (after the welcome message) when a ticket is opened outside of the scheduled time.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "**Please Note**: Our support team is currently `offline` and will be not be available until {$ticket.group.schedule_timestamp|time:r}",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
## Feedback Messages

### Ticket Feedback Message {#feedback_response}


<MessagePreview class="mt-3" :message="templates['feedback_response']" />


::: info

This message is sent to the user when they give feedback on a ticket.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 60,
  "flags": 64,
  "embeds": [
    {
      "description": "Thank you for your feedback!",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
## Transcript Messages

### Ticket Transcript Message {#transcript}


<MessagePreview class="mt-3" :message="templates['transcript']" />


::: info

This message is sent to the transcript channel when a transcript is created.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket #{$ticket.number} ({$ticket.channel.name}) transcript",
      "image": "{$ticket.owner.avatar}",
      "fields": [
        {
          "name": "Ticket Owner",
          "value": "{$ticket.owner}",
          "inline": true
        },
        {
          "name": "Group Name",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Transcript Direct Message {#transcript_dm}


<MessagePreview class="mt-3" :message="templates['transcript_dm']" />


::: info

This message is sent in a direct message to a user that has requested a transcript.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `dm` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "Here is your transcript for {$ticket.channel.name} in {$server.name}",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Transcript Saving Message {#transcript_saving}


<MessagePreview class="mt-3" :message="templates['transcript_saving']" />


::: info

This message is sent to the user that has requested a transcript.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 30,
  "flags": 64,
  "embeds": [
    {
      "title": "Saving Transcript",
      "description": "Transcript is being processed{if $transcript.channel} and will be saved in {$transcript.channel} when it is ready.{elseif $transcript.user} and will be sent to {$transcript.user} when it is ready{else} and will be available shortly{/if}.",
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
## Rating Messages

### Ticket Rating Message {#rating_response}


<MessagePreview class="mt-3" :message="templates['rating_response']" />


::: info

This message is sent to the user when they give a rating on a ticket.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `Yes` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `rating.number` | number | The rating number in the list of ratings |
| `rating.label` | string | The rating label configured in the ticket group |
| `rating.description?` | string \| `null` | The rating description configured in the ticket group |
| `rating.emoji?` | string \| `null` | The rating emoji configured in the ticket group |
| `rating.color` | string | The rating color configured in the ticket group |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 60,
  "flags": 64,
  "embeds": [
    {
      "description": "Thank you for your feedback!{if $rating.number < 3} We will work hard to improve your experience!{/if}",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Rating Menu Message {#rating_menu}


<MessagePreview class="mt-3" :message="templates['rating_menu']" />


::: info

This message is the menu shown to the user when they are rating a ticket.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `Yes` |
| Type | `reply` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |

:::

::: details Expand to see default json template

```json
{
  "delete_after": 60,
  "flags": 64,
  "content": "Please rate your experience!"
}
```

:::
## Logs Messages

### Ticket Created Log Message {#created_log}


<MessagePreview class="mt-3" :message="templates['created_log']" />


::: info

This message is sent in the log channels when a ticket is created.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |
| `from?` | [User](#user-object) \| `null` | The user that created the ticket for owner |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} created {$ticket.channel.name} ({$ticket.channel}) {if $from}from {$from}{/if}",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Opened Log Message {#opened_log}


<MessagePreview class="mt-3" :message="templates['opened_log']" />


::: info

This message is sent in the log channels when a ticket is opened.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} opened {$ticket.channel.name} ({$ticket.channel})",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Closed Log Message {#closed_log}


<MessagePreview class="mt-3" :message="templates['closed_log']" />


::: info

This message is sent in the log channels when a ticket is closed.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} closed {$ticket.channel.name} ({$ticket.channel})",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Locked Log Message {#locked_log}


<MessagePreview class="mt-3" :message="templates['locked_log']" />


::: info

This message is sent in the log channels when a ticket is locked.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} locked {$ticket.channel.name} ({$ticket.channel})",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Unlocked Log Message {#unlocked_log}


<MessagePreview class="mt-3" :message="templates['unlocked_log']" />


::: info

This message is sent in the log channels when a ticket is unlocked.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} unlocked {$ticket.channel.name} ({$ticket.channel})",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Assigned Log Message {#assigned_log}


<MessagePreview class="mt-3" :message="templates['assigned_log']" />


::: info

This message is sent in the log channels when a ticket is assigned.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned` | [User](#user-object) | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} assigned {$ticket.channel.name} ({$ticket.channel}) to {$assigned}",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Unassigned Log Message {#unassigned_log}


<MessagePreview class="mt-3" :message="templates['unassigned_log']" />


::: info

This message is sent in the log channels when a ticket is unassigned.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |
| `unassigned` | [User](#user-object) | The unassigned user of the ticket |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} unassigned {$assigned} from {$ticket.channel.name} ({$ticket.channel})",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Deleting Log Message {#deleted_log}


<MessagePreview class="mt-3" :message="templates['deleted_log']" />


::: info

This message is sent in the log channels when a ticket has been deleted.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} deleted {$ticket.channel.name}",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Transcript Log Message {#transcript_log}


<MessagePreview class="mt-3" :message="templates['transcript_log']" />


::: info

This message is sent in the log channels when a transcript is created.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} created a transcript for {$ticket.channel.name} ({$ticket.channel})",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket User Added Log Message {#user_added_log}


<MessagePreview class="mt-3" :message="templates['user_added_log']" />


::: info

This message is sent in the log channels when a user is added to a ticket.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |
| `added` | [User](#user-object) | The user added to the ticket |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} added {$added} to ticket {$ticket.channel.name} ({$ticket.channel})",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket User Removed Log Message {#user_removed_log}


<MessagePreview class="mt-3" :message="templates['user_removed_log']" />


::: info

This message is sent in the log channels when a user is removed from a ticket.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |
| `removed` | [User](#user-object) | The user removed from the ticket |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} removed {$removed} from ticket {$ticket.channel.name} ({$ticket.channel})",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Owner Change Log Message {#owner_change_log}


<MessagePreview class="mt-3" :message="templates['owner_change_log']" />


::: info

This message is sent in the log channels when The owner/creator of the ticket has changed.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |
| `removed` | [User](#user-object) | The old owner of the ticket |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} changed the owner of ticket {$ticket.channel.name} ({$ticket.channel}) to {$ticket.owner}",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Priority Change Log Message {#priority_change_log}


<MessagePreview class="mt-3" :message="templates['priority_change_log']" />


::: info

This message is sent in the log channels when the priority of a ticket has changed.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} changed the priority of ticket {$ticket.channel.name} ({$ticket.channel}) to {$ticket.priority}",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Name Set Log Message {#name_set_log}


<MessagePreview class="mt-3" :message="templates['name_set_log']" />


::: info

This message is sent in the log channels when a ticket name is set.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} set the name for {$ticket.channel.name} ({$ticket.channel})!",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Name Cleared Log Message {#name_cleared_log}


<MessagePreview class="mt-3" :message="templates['name_cleared_log']" />


::: info

This message is sent in the log channels when a tickets name is cleared.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} cleared the name for {$ticket.channel.name} ({$ticket.channel})!",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Expired Log Message {#expired_log}


<MessagePreview class="mt-3" :message="templates['expired_log']" />


::: info

This message is sent in the log channels when a ticket has expired.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |
| `expire.reason?` | string \| `null` | A message of the reason the ticket was expired |
| `expire.type` | string | The type of expiration |
| `expire.timestamp` | number | A timestamp of when the ticket expired |
| `expire.activity` | boolean | If ticket expired due to inactivity |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$ticket.channel.name} ({$ticket.channel}) expired!",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Eternal Log Message {#eternal_log}


<MessagePreview class="mt-3" :message="templates['eternal_log']" />


::: info

This message is sent in the log channels when the ticket eternal status changes.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |
| `eternal` | boolean | <code>true</code> if the ticket is eternal (immune from expiring) |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "title": "Ticket Log",
      "description": "{$user} made {$ticket.channel.name} ({$ticket.channel}) {if $eternal}eternal{else}no longer immune to expiring{/if}!",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Feedback Log Message {#feedback_log}


<MessagePreview class="mt-3" :message="templates['feedback_log']" />


::: info

This message is sent in the log channels when a ticket is given feedback.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |
| `form` | array | The answers of the feedback given in array form |
| `form.*.title` | string | Title for the form field |
| `form.*.value` | string | Value for the form field |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} gave ticket # {$ticket.number} from ticket group \"{$ticket.group}\" some feedback!",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Rating Log Message {#rating_log}


<MessagePreview class="mt-3" :message="templates['rating_log']" />


::: info

This message is sent in the log channels when a ticket is given a rating.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |
| `rating.number` | number | The rating number in the list of ratings |
| `rating.label` | string | The rating label configured in the ticket group |
| `rating.description?` | string \| `null` | The rating description configured in the ticket group |
| `rating.emoji?` | string \| `null` | The rating emoji configured in the ticket group |
| `rating.color` | string | The rating color configured in the ticket group |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} gave {$ticket.channel.name} a \"{if $rating.emoji}{$rating.emoji} {/if}{$rating.label}\" rating!",
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Notes Created Log Message {#thread_created_log}


<MessagePreview class="mt-3" :message="templates['thread_created_log']" />


::: info

This message is sent in the log channels when a ticket notes are created.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} created notes for {$ticket.channel.name} ({$ticket.channel})!",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Notes Member Added Log Message {#thread_member_added_log}


<MessagePreview class="mt-3" :message="templates['thread_member_added_log']" />


::: info

This message is sent in the log channels when a member is added to a ticket notes.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |
| `added` | [User](#user-object) | The user added to the notes |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} added {$added} to notes for {$ticket.channel.name} ({$ticket.channel})!",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

:::
### Ticket Notes Member Removed Log Message {#thread_member_removed_log}


<MessagePreview class="mt-3" :message="templates['thread_member_removed_log']" />


::: info

This message is sent in the log channels when a member is removed from a ticket notes.

:::

::: details Expand to see options and variables

| Template Option  | Value      |
|------------------|------------|
| Can be disabled? | `No` |
| Can be automatically deleted? | `No` |
| Type | `message` |

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
| `server` | [Server](#server-object) | The server that the ticket was created in |
| `ticket` | [Ticket](#ticket-object) | The ticket |
| `group` | [Group](#group-object) | The ticket group of the ticket |
| `owner` | [User](#user-object) | The owner/creator of the ticket |
| `assigned?` | [User](#user-object) \| `null` | The assigned user of the ticket |
| `channel` | [Channel](#channel-object) | The channel the ticket was created in |
| `user` | [User](#user-object) | The user that triggered this action |
| `event` | string | Ticket log event |
| `message` | string | Ticket log event message |
| `removed` | [User](#user-object) | The user removed from the notes |

:::

::: details Expand to see default json template

```json
{
  "embeds": [
    {
      "description": "{$user} removed {$removed} from notes for {$ticket.channel.name} ({$ticket.channel})!",
      "fields": [
        {
          "name": "Ticket",
          "value": "{$ticket.channel.name} ({$ticket.channel})"
        },
        {
          "name": "Author",
          "value": "{$user}",
          "inline": true
        },
        {
          "name": "Group",
          "value": "{$ticket.group.name}",
          "inline": true
        }
      ],
      "timestamp": true,
      "color": "#14b8a6",
      "footer": {
        "text": "Ticketeer Canary - Support Made Simple",
        "icon_url": "https://ticketeer.dev/icon.png"
      }
    }
  ]
}
```

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
|`server.tickets`| `number` | Count of opended tickets for your server |
|`server.tickets.opened`| `number` | Count of opended tickets for your server |
|`server.tickets.closed`| `number` | Count of closed tickets for your server |
|`server.tickets.deleted`| `number` | Count of deleted tickets for your server |

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
|`ticket.form?`| `Array[]`\|`null` | The filled out form from opening a ticket |
|`ticket.form.[0-4?].title`| `string`\|`null` | Title of the form field |
|`ticket.form.[0-4?].value`| `string`\|`null` | Value of the form field |
|`ticket.closed_reason?`| `string`\|`null` | Reason for closing the ticket |
|`ticket.owner`| [User](#user-object) | Owner of ticket |
|`ticket.assigned?`| [User](#user-object)\|`null` | Assigned user to ticket |
|`ticket.group`| [Group](#group-object) | Ticket Group |
|`ticket.channel?`| [Channel](#channel-object)\|`null` | Ticket channel |
|`ticket.thread?`| [Channel](#channel-object)\|`null` | Ticket private thread |
|`ticket.users`| [User[]](#user-object) | Array of all users in the ticket |
|`ticket.rating`| number | The agrage rating the ticket has recieved |
|`ticket.ratings`| `Array[]` | Array of ratings given to the ticket |
|`ticket.ratings.[0-24?]`| `number` | The rating in number form given to the ticket |
|`ticket.ratings.[0-24?].rating`| `number` | The rating in number form given to the ticket |
|`ticket.ratings.[0-24?].label?`| `string`\|`null` | The rating level label |
|`ticket.ratings.[0-24?].description?`| `string`\|`null` | The rating level description |
|`ticket.ratings.[0-24?].emoji?`| `string`\|`null` | The rating level emoji |
|`ticket.ratings.[0-24?].color?`| `string`\|`null` | The rating level color |
|`ticket.ratings.[0-24?].user`| [User](#user-object) | The user that gave the rating |
|`ticket.feedback`| `Array[]` | Array of feedback given to the ticket |
|`ticket.feedback[0-24?].form`| `Array[]` | The filled out feedback from |
|`ticket.feedback[0-24?].form.[0-4?].title`| `string`\|`null` | Title of the form field |
|`ticket.feedback[0-24?].form.[0-4?].value`| `string`\|`null` | Value of the form field |
|`ticket.feedback[0-24?].user`| [User[]](#user-object) | The user that gave the feedback |

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
|`channel.users?`| [User[]](#user-object)\|`null` | Array of all users in the channel |

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
|`user.roles`| [Role[]](#role-object) | List of roles the user has in order of hierarchy |
|`user.joined_at?`| `number`\|`null` | Timestamp when user joined server |
|`user.steam?`| [Steam User](#steam-user-object)\|`null` | Steam account info of user if linked |


### Steam User Object

| Variable Name  | Type       | Description                                |
|----------------|------------|--------------------------------------------|
|`steam`| `string` | SteamID (STEAM_0:1:########) |
|`steam.id`| `string` | SteamID (STEAM_0:1:########) |
|`steam.id_3`| `string` | SteamID v3 ([U:1:########]) |
|`steam.id_64`| `number` | SteamID 64 (7656119##########) |
|`steam.account_id`| `number` | Steam account id |
|`steam.name`| `string` | Steam account name |
|`steam.avatar`| `string` | URL to Steam account avatar |
|`steam.profile`| `string` | URL to Steam account profile |

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
