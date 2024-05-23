import * as path from 'path'
import { fileURLToPath } from 'url'

import { HeadConfig, defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

const name = "Ticketeer Docs"
const tagline = "Support Made Simple"
const description = "Official documentation for Ticketeer - A Discord ticket support bot!"
const domain = "docs.ticketeer.bot"
const hostname = `https://${domain}`

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: tagline,
  titleTemplate: `${name} :: :title`,
  description,
  srcDir: 'src',
  lang: 'en-US',
  cleanUrls: true,

  head: [
    [ 'link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'} ],
    [ 'link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' } ],
    [ 'link', { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' } ],
    [ 'link', { rel: 'manifest', href: '/site.webmanifest' } ],
    [ 'link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#14b8a6' } ],
    [ 'link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' } ],
    [ 'meta', { name: 'apple-mobile-web-app-title', content: name } ],
    [ 'meta', { name: 'application-name', content: name } ],
    [ 'meta', { name: 'msapplication-TileColor', content: '#ffffff' } ],
    [ 'meta', { name: 'msapplication-config', content: '/browserconfig.xml' } ],
    [ 'meta', { name: 'theme-color', content: '#14b8a6' } ],
    [ 'meta', { name: 'description', content: description } ],
  ],

  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    const canonicalUrl = `${hostname}/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')

    head.push([ 'link', { property: 'canonical', href: canonicalUrl  } ])
    head.push([ 'meta', { property: 'og:url', content: canonicalUrl  } ])
    head.push([ 'meta', { property: 'og:type', content: 'website' } ])
    head.push([ 'meta', { property: 'og:title', content: `${name} :: ${pageData.frontmatter.title || tagline}` } ])
    head.push([ 'meta', { property: 'og:description', content: pageData.frontmatter.description || description } ])
    head.push([ 'meta', { property: 'og:image', content: `${hostname}/banner.jpg` } ])
    head.push([ 'meta', { property: 'twitter:card', content: 'summary_large_image' } ])
    head.push([ 'meta', { property: 'twitter:domain', content: domain } ])
    head.push([ 'meta', { property: 'twitter:url', content: canonicalUrl } ])
    head.push([ 'meta', { property: 'twitter:title', content: `${name} :: ${pageData.frontmatter.title || tagline}` } ])
    head.push([ 'meta', { property: 'twitter:description', content: pageData.frontmatter.description || description } ])
    head.push([ 'meta', { property: 'twitter:image', content: `${hostname}/banner.jpg` } ])

    return head
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { alt: 'Ticketeer', light: '/icon-dark.svg', dark: '/icon.svg' },
    siteTitle: 'Ticketeer',
    outline: { level: [2, 3,] },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Invite Bot', link: 'https://ticketeer.bot/invite' },
      { text: 'Dashboard', link: 'https://ticketeer.bot/guilds' },
    ],

    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Change Logs', link: '/changelog' },
      { text: 'FAQs', link: '/faq' },
      {
        text: 'General',
        items: [
          { text: 'Commands', link: '/commands' },
          {
            text: 'Dashboard Tour',
            link: '/dashboard',
            items: [
              { text: 'Server Dashboard', link: '/dashboard#server-dashboard' },
              { text: 'Ticket Groups', link: '/dashboard#ticket-groups' },
              { text: 'Ticket Panels', link: '/dashboard#ticket-panels' },
              { text: 'Ticket Statistics', link: '/dashboard#ticket-statistics' },
              { text: 'Ticket Transcripts', link: '/dashboard#ticket-transcripts' },
              { text: 'Ticket Logs', link: '/dashboard#ticket-logs' },
              { text: 'Server Settings', link: '/dashboard#server-settings' },
              { text: 'Message Editor', link: '/dashboard#message-editor' },
            ]
          },
          { text: 'Messages', link: '/messages' },
          { text: 'Template Engine', link: '/template-engine' },
        ]
      },
      {
        text: 'DEBUGGING',
        items: [
          { text: 'Errors', link: '/errors' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
        ]
      },
      {
        text: 'POLICY',
        items: [
          { text: 'Privacy Policy', link: '/policies#privacy-policy' },
          { text: 'Terms of Service', link: '/policies#terms-of-service' },
          { text: 'Refund Policy', link: '/policies#refund-policy' },
        ]
      },
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ticketeer/docs' },
      { icon: 'discord', link: 'https://ticketeer.bot/support' },
      { icon: 'twitter', link: 'https://twitter.com/ticketeering' },
    ],

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    editLink: {
      pattern: 'https://github.com/ticketeer/docs/edit/main/src/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      copyright: 'Copyright © 2024-present Ticketeer'
    }
  },

  sitemap: {
    hostname
  },

  markdown: {
    config: (md) => {
      // @ts-ignore
      md.use(timeline)
      // @ts-ignore
      md.use(tabsMarkdownPlugin)
    },
  },

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src'),
      }
    },
  }
})
