const title = 'Ticketeer'

export type Profile = {
  author?: string
  avatar?: string
  bot?: boolean
  roleColor?: string
}

export const avatars = {
  blue: 'https://cdn.discordapp.com/embed/avatars/0.png',
  gray: 'https://cdn.discordapp.com/embed/avatars/1.png',
  green: 'https://cdn.discordapp.com/embed/avatars/2.png',
  orange: 'https://cdn.discordapp.com/embed/avatars/3.png',
  red: 'https://cdn.discordapp.com/embed/avatars/4.png',
  pink: 'https://cdn.discordapp.com/embed/avatars/5.png',
} as const

export const options = {
  mode: 'cozy' as 'cozy' | 'compact',
  theme: 'dark' as 'dark' | 'light',
  profile: {
    author: title,
    avatar: '/icon.png',
    bot: true,
  } as Profile,
} as const

export const fallback = (url?: string) => {
  if (!url || url.match(/^\{\$([a-zA-Z0-9._-]+)\}/)) {
    return '/icon.png'
  }

  return url
}

export type TimestampOptions = {
  timestamp: Date | string
  format?: 'compact' | 'cozy' | string
}

export const defaultTimestamp = new Date()

export const parseTimestamp = ({ timestamp, format = 'cozy' }: TimestampOptions): string => {
  if (!(timestamp instanceof Date)) timestamp = new Date(timestamp)

  if (format === 'compact') {
    const [hour, minutes] = [timestamp.getHours(), timestamp.getMinutes()]
    return [hour > 12 ? hour - 12 : hour === 0 ? 12 : hour, `:${minutes.toString().padStart(2, '0')} `, hour >= 12 ? 'PM' : 'AM'].join('')
  }

  const [month, day, year] = [timestamp.getMonth() + 1, timestamp.getDate(), timestamp.getFullYear()]
  return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`
}
