import * as path from 'path'
import { fileURLToPath } from 'url'

import { HeadConfig, defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

const name = 'Ticketeer Docs'
const tagline = 'Support Made Simple'
const description = 'Official documentation for Ticketeer - A Discord ticket support bot!'
const domain = 'docs.ticketeer.bot'
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
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#14b8a6' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: name }],
    ['meta', { name: 'application-name', content: name }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#14b8a6' }],
    ['meta', { name: 'description', content: description }],
    [
      'script',
      {
        content: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TGQFRPG4');`,
      },
    ],
  ],

  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    const canonicalUrl = `${hostname}/${pageData.relativePath}`.replace(/index\.md$/, '').replace(/\.md$/, '')

    head.push(['link', { property: 'canonical', href: canonicalUrl }])
    head.push(['meta', { property: 'og:url', content: canonicalUrl }])
    head.push(['meta', { property: 'og:type', content: 'website' }])
    head.push(['meta', { property: 'og:title', content: `${name} :: ${pageData.frontmatter.title || tagline}` }])
    head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description || description }])
    head.push(['meta', { property: 'og:image', content: `${hostname}/banner.jpg` }])
    head.push(['meta', { property: 'twitter:card', content: 'summary_large_image' }])
    head.push(['meta', { property: 'twitter:domain', content: domain }])
    head.push(['meta', { property: 'twitter:url', content: canonicalUrl }])
    head.push(['meta', { property: 'twitter:title', content: `${name} :: ${pageData.frontmatter.title || tagline}` }])
    head.push(['meta', { property: 'twitter:description', content: pageData.frontmatter.description || description }])
    head.push(['meta', { property: 'twitter:image', content: `${hostname}/banner.jpg` }])

    return head
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { alt: 'Ticketeer', light: '/icon-dark.svg', dark: '/icon.svg' },
    siteTitle: 'Ticketeer',
    outline: { level: [2, 3] },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Invite Bot', link: 'https://ticketeer.bot/invite' },
      { text: 'Dashboard', link: 'https://ticketeer.bot/guilds' },
    ],

    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Change Logs', link: '/changelog' },
      { text: 'Web Panel Tour', link: '/tour' },
      { text: 'FAQs', link: '/faq' },
      {
        text: 'General Help',
        items: [
          {
            text: 'Dashboard',
            link: '/server/dashboard',
          },
          {
            text: 'Ticket Group',
            link: '/ticket/group',
            items: [
              { text: 'Open Section', link: '/ticket/group/open' },
              { text: 'Private Thread Section', link: '/ticket/group/private-thread' },
              { text: 'Closing Section', link: '/ticket/group/closing' },
              { text: 'Locking Section', link: '/ticket/group/locking' },
              { text: 'Assigning Section', link: '/ticket/group/assigning' },
              { text: 'Expiring Section', link: '/ticket/group/expiring' },
              { text: 'Transcripts Section', link: '/ticket/group/transcripts' },
              { text: 'Form & Feedback Section', link: '/ticket/group/form-feedback' },
              { text: 'Ratings & Priorities Section', link: '/ticket/group/rating-priority' },
              { text: 'Logging Section', link: '/ticket/group/logging' },
              { text: 'Scheduling Section', link: '/ticket/group/scheduling' },
              { text: 'Permissions Section', link: '/ticket/group/permissions' },
              { text: 'Message Editor', link: '/ticket/group/message' },
            ],
          },
          {
            text: 'Ticket Panel',
            link: '/ticket/panel',
          },
          {
            text: 'Ticket View',
            link: '/ticket/view',
          },
          {
            text: 'Logs & Statistics',
            items: [
              { text: 'Server Logs', link: '/server/logs' },
              { text: 'Ticket Logs', link: '/ticket/logs' },
              { text: 'Ticket Statistics', link: '/ticket/stats' },
            ],
          },
          {
            text: 'Settings',
            items: [
              { text: 'Server Settings', link: '/server/settings' },
              { text: 'Server Permissions', link: '/server/permissions' },
            ],
          },
          { text: 'Commands', link: '/commands' },
          { text: 'Messages', link: '/messages' },
          { text: 'Markdown 101', link: '/markdown' },
          { text: 'Template Engine', link: '/template-engine' },
        ],
      },
      {
        text: 'DEBUGGING',
        items: [
          { text: 'Errors', link: '/errors' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
        ],
      },
    ],

    search: {
      provider: 'local',
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
        timeStyle: 'medium',
      },
    },

    editLink: {
      pattern: 'https://github.com/ticketeer/docs/edit/main/src/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      copyright: 'Copyright © 2024-present Ticketeer',
    },
  },

  sitemap: {
    hostname,
  },

  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true,
    },
    config: (md) => {
      // @ts-ignore
      md.use(timeline)
      // @ts-ignore
      md.use(tabsMarkdownPlugin)
    },
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.startsWith('discord-')
        },
      },
    },
  },
})
