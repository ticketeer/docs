/**
 * Discord Markdown
 * ===============
 *
 * This is a faithful recreation of discord flavored markdown as of 2024.
 *
 * Required: [vue-markdown.ts](https://gist.github.com/nurdism/f2e8a8d21aa11969b595f6b7698d7d62)
 * Made by [nurdism](https://github.com/nurdism)
 */

import type { State as MDState, VueOutput, HtmlOutput, Capture } from './markdown'
import { defaultRules, outputFor, parserFor, anyScopeRegex, htmlTag, inlineRegex, parseInline } from './markdown'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { format as formatDate } from 'date-fns/format'
import { VNode, Component, h } from 'vue'

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return { r, g, b };
}

type SingleASTNode = {
  type: string
  [key: string]: any
}

type UnTypedASTNode = {
  [key: string]: any
}

type ASTNode = SingleASTNode | Array<SingleASTNode>

interface State extends MDState {
  allowHeading?: boolean
  allowEscape?: boolean
  allowList?: boolean
  resolve?: {
    user?: ResolveUserFn
    channel?: ResolveChannelFn
    role?: ResolveRoleFn
    customEmoji?: ResolveCustomEmojiFn
    emoji?: ResolveEmojiFn
  }
}

type MatchFunction = {
  regex?: RegExp
} & ((source: string, state: State, prevCapture: string) => Capture | null | undefined)

type Parser = (source: string, state?: State | null | undefined) => Array<SingleASTNode>

type SingleNodeParseFunction = (capture: Capture, nestedParse: Parser, state: State) => UnTypedASTNode

type Output<Result> = (node: ASTNode, state?: State | null | undefined) => Result

type NodeOutput<Result> = (node: SingleASTNode, nestedOutput: Output<Result>, state: State) => Result

type VueNodeOutput = NodeOutput<VNode | string | number>
type HtmlNodeOutput = NodeOutput<string>

type SingleNodeParserRule = {
  readonly order: number
  readonly match: MatchFunction
  readonly requiredFirstCharacters?: string[]
  readonly quality?: (capture: Capture, state: State, prevCapture: string) => number
  readonly parse: SingleNodeParseFunction
}

type VueOutputRule = {
  // we allow null because some rules are never output results, and that's
  // legal as long as no parsers return an AST node matching that rule.
  // We don't use ? because this makes it be explicitly defined as either
  // a valid function or null, so it can't be forgotten.
  readonly vue: VueNodeOutput | null
}

type HtmlOutputRule = {
  readonly html: HtmlNodeOutput | null
}

type ElementVueOutputRule = {
  readonly vue: NodeOutput<VNode>
}
type TextVueOutputRule = {
  readonly vue: NodeOutput<VNode | string>
}
type NonNullHtmlOutputRule = {
  readonly html: HtmlNodeOutput
}

type DefaultInRule = SingleNodeParserRule & VueOutputRule & HtmlOutputRule
type TextInOutRule = SingleNodeParserRule & TextVueOutputRule & NonNullHtmlOutputRule
type DefaultInOutRule = SingleNodeParserRule & ElementVueOutputRule & NonNullHtmlOutputRule

type Rules = {
  readonly newline: TextInOutRule
  readonly paragraph: DefaultInOutRule
  readonly escape: DefaultInRule
  readonly blockQuote: DefaultInOutRule
  readonly link: DefaultInOutRule
  readonly autolink: DefaultInRule
  readonly url: DefaultInRule
  readonly strong: DefaultInOutRule
  readonly em: DefaultInOutRule
  readonly u: DefaultInOutRule
  readonly br: DefaultInOutRule
  readonly text: TextInOutRule
  readonly inlineCode: DefaultInOutRule
  readonly emoticon: DefaultInRule
  readonly codeBlock: DefaultInOutRule
  readonly roleMention: DefaultInRule
  readonly channelMention: DefaultInRule
  readonly mention: DefaultInOutRule
  readonly customEmoji: DefaultInRule
  readonly emote: DefaultInRule
  readonly emoji: DefaultInOutRule
  readonly timestamp: DefaultInOutRule
  readonly strike: DefaultInOutRule
  readonly spoiler: DefaultInOutRule
  readonly heading: DefaultInOutRule
  readonly subtext: DefaultInOutRule
  readonly list: DefaultInOutRule
}

const BLOCKQUOTE = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/
const BLOCKQUOTE_MULTILINE = /^ *>>> ?/
const BLOCKQUOTE_MULTILINE_REPLACE = /^ *> ?/gm

const LINES = /^$|\n *$/

// recognize a `*` `-`, `1.`, `2.`... list bullet
const LIST_BULLET = '(?:[*-]|\\d+\\.)'
// recognize the start of a list item:
// leading space plus a bullet plus a space (`   * `)
const LIST_ITEM_PREFIX = '( *)(' + LIST_BULLET + ') +'
const LIST_ITEM_PREFIX_R = new RegExp('^' + LIST_ITEM_PREFIX)
// recognize an individual list item:
//  * hi
//    this is part of the same item
//
//    as is this, which is a new paragraph in the same item
//
//  * but this is not part of the same item
const LIST_ITEM_R = new RegExp(LIST_ITEM_PREFIX + '[^\\n]*(?:\\n(?!\\1' + LIST_BULLET + ' )[^\\n]*)*(\n|$)', 'gm')
const BLOCK_END_R = /\n{2,}$/
// recognize the end of a paragraph block inside a list item:
// two or more newlines at end end of the item
const LIST_BLOCK_END_R = BLOCK_END_R
const LIST_ITEM_END_R = / *\n+$/
// check whether a list item has paragraphs: if it does,
// we leave the newlines at the end
const LIST_R = new RegExp('^( *)(' + LIST_BULLET + ') [\\s\\S]+?(?:\\n(?! )(?!\\1' + LIST_BULLET + ' )\\n*|\\s*\n*$)')
const LIST_LOOKBEHIND_R = /(?:^|\n)( *)$/
const LIST_WHITESPACE = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/

const EMOTE_REGEX =
  /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/

const EMOTES: Record<string, string> = {
  '>:(': 'angry',
  '>:-(': 'angry',
  '>=(': 'angry',
  '>=-(': 'angry',
  ':")': 'blush',
  ':-")': 'blush',
  '=")': 'blush',
  '=-")': 'blush',
  '</3': 'broken_heart',
  '<\\3': 'broken_heart',
  ':-\\': 'confused',
  ':-/': 'confused',
  '=-\\': 'confused',
  '=-/': 'confused',
  ":'(": 'cry',
  ":'-(": 'cry',
  ':,(': 'cry',
  ':,-(': 'cry',
  "='(": 'cry',
  "='-(": 'cry',
  '=,(': 'cry',
  '=,-(': 'cry',
  ':(': 'frowning',
  ':-(': 'frowning',
  '=(': 'frowning',
  '=-(': 'frowning',
  '<3': 'heart',
  '♡': 'heart',
  ']:(': 'imp',
  ']:-(': 'imp',
  ']=(': 'imp',
  ']=-(': 'imp',
  'o:)': 'innocent',
  'O:)': 'innocent',
  'o:-)': 'innocent',
  'O:-)': 'innocent',
  '0:)': 'innocent',
  '0:-)': 'innocent',
  'o=)': 'innocent',
  'O=)': 'innocent',
  'o=-)': 'innocent',
  'O=-)': 'innocent',
  '0=)': 'innocent',
  '0=-)': 'innocent',
  ":'D": 'joy',
  ":'-D": 'joy',
  ':,D': 'joy',
  ':,-D': 'joy',
  "='D": 'joy',
  "='-D": 'joy',
  '=,D': 'joy',
  '=,-D': 'joy',
  ':*': 'kissing',
  ':-*': 'kissing',
  '=*': 'kissing',
  '=-*': 'kissing',
  'x-)': 'laughing',
  'X-)': 'laughing',
  ':|': 'neutral_face',
  ':-|': 'neutral_face',
  '=|': 'neutral_face',
  '=-|': 'neutral_face',
  ':o': 'open_mouth',
  ':-o': 'open_mouth',
  ':O': 'open_mouth',
  ':-O': 'open_mouth',
  '=o': 'open_mouth',
  '=-o': 'open_mouth',
  '=O': 'open_mouth',
  '=-O': 'open_mouth',
  ':@': 'rage',
  ':-@': 'rage',
  '=@': 'rage',
  '=-@': 'rage',
  ':D': 'smile',
  ':-D': 'smile',
  '=D': 'smile',
  '=-D': 'smile',
  ":')": 'smiling_face_with_tear',
  ":'-)": 'smiling_face_with_tear',
  ':,)': 'smiling_face_with_tear',
  ':,-)': 'smiling_face_with_tear',
  "=')": 'smiling_face_with_tear',
  "='-)": 'smiling_face_with_tear',
  '=,)': 'smiling_face_with_tear',
  '=,-)': 'smiling_face_with_tear',
  ':)': 'slight_smile',
  ':-)': 'slight_smile',
  '=)': 'slight_smile',
  '=-)': 'slight_smile',
  ']:)': 'smiling_imp',
  ']:-)': 'smiling_imp',
  ']=)': 'smiling_imp',
  ']=-)': 'smiling_imp',
  ":,'(": 'sob',
  ":,'-(": 'sob',
  ';(': 'sob',
  ';-(': 'sob',
  "=,'(": 'sob',
  "=,'-(": 'sob',
  ':P': 'stuck_out_tongue',
  ':-P': 'stuck_out_tongue',
  '=P': 'stuck_out_tongue',
  '=-P': 'stuck_out_tongue',
  '8-)': 'sunglasses',
  'B-)': 'sunglasses',
  ',:(': 'sweat',
  ',:-(': 'sweat',
  ',=(': 'sweat',
  ',=-(': 'sweat',
  ',:)': 'sweat_smile',
  ',:-)': 'sweat_smile',
  ',=)': 'sweat_smile',
  ',=-)': 'sweat_smile',
  ':s': 'unamused',
  ':-S': 'unamused',
  ':z': 'unamused',
  ':-Z': 'unamused',
  ':$': 'unamused',
  ':-$': 'unamused',
  '=s': 'unamused',
  '=-S': 'unamused',
  '=z': 'unamused',
  '=-Z': 'unamused',
  '=$': 'unamused',
  '=-$': 'unamused',
  ';)': 'wink',
  ';-)': 'wink',
}

type ResolveRoleFn = (id: string) => Role | null
interface Role {
  id: string
  name: string
  color: string
}

const defaultRoleResolver: ResolveRoleFn = () => null

type ResolveChannelFn = (id: string) => Channel | null
interface Channel {
  id: string
  name: string
}

const defaultChannelResolver: ResolveChannelFn = () => null

type ResolveUserFn = (id: string) => User | null
interface User {
  id: string
  name: string
  color?: string
}

const defaultUserResolver: ResolveUserFn = () => null

type ResolveCustomEmojiFn = (id: string, name: string, animated: boolean) => CustomEmoji
interface CustomEmoji {
  id: string
  name: string
  url: string
  animated: boolean
}

const defaultCustomEmojiResolver: ResolveCustomEmojiFn = (id, name, animated) => ({
  id,
  name,
  url: `https://cdn.discordapp.com/emojis/${id}.${animated ? 'gif' : 'png'}`,
  animated,
})

type ResolveEmojiFn = (name: string) => Emoji | null
interface Emoji {
  name: string
  char?: string
}

const defaultEmojiResolver: ResolveEmojiFn = (name: string) => ({ name })

const timestampFormats = {
  t: (date: Date) => formatDate(date, 'h:mm aa'), // LT
  T: (date: Date) => formatDate(date, 'h:mm:ss aa'), // LTS
  d: (date: Date) => formatDate(date, 'MM/dd/yyyy'), // L
  D: (date: Date) => formatDate(date, 'MMMM d, yyyy'), // LL
  f: (date: Date) => formatDate(date, 'MMMM d, yyyy h:mm aa'), // LLL
  F: (date: Date) => formatDate(date, 'iiii, MMMM d, yyyy h:mm aa'), // LLLL
  R: (date: Date) =>
    formatDistanceToNow(date, {
      includeSeconds: true,
      addSuffix: true,
    }),
} as const

type TimestampFormat = keyof typeof timestampFormats

interface Timestamp {
  timestamp: string
  format: TimestampFormat
  date: Date
  full: string
  formatted: string
}

function parseTimestamp(timestamp: string, format: TimestampFormat): Timestamp | null {
  const parsed = parseInt(timestamp.trim())
  if (Number.isNaN(parsed)) {
    return null
  }

  const date = new Date(parsed * 1000)

  let formatted = ''
  if (timestampFormats[format]) {
    formatted = timestampFormats[format](date)
  }

  return {
    timestamp,
    format,
    date,
    full: timestampFormats.F(date),
    formatted,
  }
}

const discordRules: Rules = {
  newline: defaultRules.newline,
  paragraph: defaultRules.paragraph,
  escape: {
    ...defaultRules.escape,
    match(source, state, prev) {
      return state.allowEscape !== false ? defaultRules.escape.match(source, state, prev) : null
    },
  },
  blockQuote: {
    ...defaultRules.blockQuote,
    requiredFirstCharacters: [' ', '>'],
    match(source, state) {
      if (state.inQuote || state.nested) {
        return null
      }

      if (state.prevCapture === null) {
        return BLOCKQUOTE.exec(source)
      }

      return LINES.test(state.prevCapture[0]) ? BLOCKQUOTE.exec(source) : null
    },
    parse(capture, parse, state) {
      const matched = capture[0]
      const isMultiline = !!BLOCKQUOTE_MULTILINE.exec(matched)
      const cleaned = matched.replace(isMultiline ? BLOCKQUOTE_MULTILINE : BLOCKQUOTE_MULTILINE_REPLACE, '')

      const inQuote = state.inQuote || false
      const inline = state.inline || false

      state.inQuote = true
      if (!isMultiline) {
        state.inline = true
      }

      state.inQuote = inQuote
      state.inline = inline

      const nested = parse(cleaned, state)
      if (nested.length === 0) {
        nested.push({
          type: 'text',
          content: ' ',
        })
      }

      return {
        content: nested,
        type: 'blockQuote',
      }
    },
  },
  link: defaultRules.link,
  autolink: defaultRules.autolink,
  url: defaultRules.url,
  strong: defaultRules.strong,
  em: defaultRules.em,
  u: defaultRules.u,
  br: defaultRules.br,
  text: {
    ...defaultRules.text,
    match: anyScopeRegex(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/),
  },
  inlineCode: defaultRules.inlineCode,
  codeBlock: {
    ...defaultRules.codeBlock,
    requiredFirstCharacters: ['`'],
    match: (source) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(source),
    parse(capture, parse, state) {
      return {
        lang: capture[1] || '',
        content: capture[2] || '',
        inQuote: state.inQuote || false,
      }
    },
  },
  roleMention: {
    order: defaultRules.text.order,
    requiredFirstCharacters: ['<'],
    match: (source) => /^<@&(\d+)>/.exec(source),
    parse(capture, parse, state) {
      const [mention, id] = capture
      const resolve: ResolveRoleFn = state.resolve?.role || defaultRoleResolver
      const role = resolve(id)

      let rgba = null
      if (role?.color && role.color !== '#b9bbbe') {
        rgba = hexToRgb(role.color)
      }

      return {
        type: 'mention',
        id,
        context: 'role',
        info: role,
        color: rgba,
        content: [
          {
            type: 'text',
            content: `${role ? role.name : 'role'}`,
          },
        ],
      }
    },
    vue: null,
    html: null,
  },
  channelMention: {
    order: defaultRules.text.order,
    requiredFirstCharacters: ['<'],
    match: (source) => /^<#(\d+)>/.exec(source),
    parse(capture, parse, state) {
      const [mention, id] = capture

      const resolve: ResolveChannelFn = state.resolve?.channel || defaultChannelResolver
      const channel = resolve(id)

      return {
        type: 'mention',
        id,
        context: 'channel',
        info: channel,
        content: [
          {
            type: 'text',
            content: `${channel ? channel.name : 'channel'}`,
          },
        ],
      }
    },
    vue: null,
    html: null,
  },
  mention: {
    ...defaultRules.text,
    match: (source) => /^<@!?(\d+)>|^(@(?:everyone|here))/.exec(source),
    parse(capture, parse, state) {
      const [mention, id, _everyone] = capture
      const everyone = _everyone ? _everyone.substring(1) : null

      if (everyone) {
        return {
          type: 'mention',
          context: everyone,
          content: [
            {
              type: 'text',
              content: `${everyone}`,
            },
          ],
        }
      }

      const resolve: ResolveUserFn = state.resolve?.user || defaultUserResolver
      const user = resolve(id)

      let rgba = null
      if (user?.color && user.color !== '#b9bbbe') {
        rgba = hexToRgb(user.color)
      }

      return {
        type: 'mention',
        id,
        context: 'user',
        info: user,
        color: rgba,
        content: [
          {
            type: 'text',
            content: `${user ? user.name : 'user'}`,
          },
        ],
      }
    },
    vue: function (node, output, state) {
      let tag: string | Component = 'span'
      if (state.components?.mention || state.tags?.mention) {
        tag = state.components?.mention || state.tags?.mention!
      } else if (node.context === 'here' && (state.components?.hereMention || state.tags?.hereMention)) {
        tag = state.components?.hereMention || state.tags?.hereMention!
      } else if (node.context === 'everyone' && (state.components?.everyoneMention || state.tags?.everyoneMention)) {
        tag = state.components?.everyoneMention || state.tags?.everyoneMention!
      } else if (node.context === 'user' && (state.components?.userMention || state.tags?.userMention)) {
        tag = state.components?.userMention || state.tags?.userMention!
      } else if (node.context === 'channel' && (state.components?.channelMention || state.tags?.channelMention)) {
        tag = state.components?.channelMention || state.tags?.channelMention!
      } else if (node.context === 'role' && (state.components?.roleMention || state.tags?.roleMention)) {
        tag = state.components?.roleMention || state.tags?.roleMention!
      }

      return h(
        tag,
        typeof tag === 'string'
          ? {
              dataId: node.id,
              style: node.color
                ? `background-color:rgba(${node.color.r},${node.color.g},${node.color.b},0.1);color:rgba(${node.color.r},${node.color.g},${node.color.b})`
                : null,
            }
          : {
              id: node.id,
              context: node.context,
              color: node.color,
              info: node.info,
            },
        () => output(node.content, state),
      )
    },
    html: function (node, output, state) {
      let tag = 'span'
      if (state.tags?.mention) {
        tag = state.tags?.mention
      } else if (node.context === 'here' && state.tags?.hereMention) {
        tag = state.tags?.hereMention
      } else if (node.context === 'everyone' && state.tags?.everyoneMention) {
        tag = state.tags?.everyoneMention
      } else if (node.context === 'user' && state.tags?.userMention) {
        tag = state.tags?.userMention
      } else if (node.context === 'channel' && state.tags?.channelMention) {
        tag = state.tags?.channelMention
      } else if (node.context === 'role' && state.tags?.roleMention) {
        tag = state.tags?.roleMention
      }

      return htmlTag(tag, output(node.content, state), {
        dataId: node.id,
        class: `mention ${node.context}`,
        style: node.color
          ? `background-color:rgba(${node.color.r},${node.color.g},${node.color.b},0.1);color:rgba(${node.color.r},${node.color.g},${node.color.b})`
          : null,
      })
    },
  },
  emote: {
    order: defaultRules.text.order,
    match(source, state) {
      if (state.allowEmote === false) {
        return null
      }

      return EMOTE_REGEX.exec(source)
    },
    parse: (capture) => {
      const [emote] = capture

      return EMOTES[emote]
        ? {
            type: 'emoji',
            custom: false,
            animated: false,
            name: EMOTES[emote],
            emoji: null,
            content: emote,
          }
        : {
            type: 'text',
            content: emote,
          }
    },
    vue: null,
    html: null,
  },
  emoticon: {
    order: defaultRules.text.order,
    requiredFirstCharacters: ['\xaf'],
    match: (source) => /^(¯\\_\(ツ\)_\/¯)/.exec(source),
    parse: (capture) => ({
      type: 'text',
      content: capture[1],
    }),
    vue: null,
    html: null,
  },
  customEmoji: {
    order: defaultRules.text.order,
    match: (source) => /^<(a?):(\w+):(\d{5,32})>/.exec(source),
    parse(capture, parse, state) {
      const [matched, _animated, name, id] = capture
      const animated = _animated === 'a'

      const resolve: ResolveCustomEmojiFn = state.resolve?.customEmoji || defaultCustomEmojiResolver
      const emoji = resolve(id, name, animated)

      return {
        type: 'emoji',
        custom: true,
        emoji: null,
        content: matched,
        ...emoji,
      }
    },
    vue: null,
    html: null,
  },
  emoji: {
    order: defaultRules.text.order,
    requiredFirstCharacters: [':'],
    match: (source) => /^:([^\s:]+?(?:::skin-tone-\d)?):/.exec(source),
    parse(capture, parse, state) {
      const [match, name] = capture

      const resolve: ResolveEmojiFn = state.resolve?.emoji || defaultEmojiResolver
      const emoji = resolve(name)

      return emoji
        ? {
            type: 'emoji',
            custom: false,
            animated: false,
            name: name,
            emoji: emoji,
            content: match,
          }
        : {
            type: 'text',
            content: match,
          }
    },
    vue: function (node, output, state) {
      if (state.components?.emoji) {
        return h(state.components.emoji, { id: node.id, name: node.name, custom: node.custom, animated: node.animated, content: node.content })
      }

      if (node.custom) {
        return h(state.tags?.customEmoji || 'img', { 'data-id': node.id, 'data-emoji': node.name, class: `emoji-custom`, src: node.url, alt: `:${node.name}:` })
      }

      return h(
        state.tags?.emoji || 'span',
        { 'data-id': node.id, 'data-emoji': node.name, class: `emoji`, alt: `:${node.name}:` },
        node.content ? node.content : `:${node.name}:`,
      )
    },
    html: function (node, output, state) {
      if (node.custom) {
        return htmlTag(state.tags?.customEmoji || 'img', '', {
          'data-id': node.id,
          'data-emoji': node.name,
          class: `emoji-custom`,
          src: node.url,
          alt: `:${node.name}:`,
        })
      }

      return htmlTag(state.tags?.emoji || 'span', '', {
        'data-id': node.id,
        'data-emoji': node.name,
        class: `emoji`,
        alt: node.content ? node.content : `:${node.name}:`,
      })
    },
  },
  timestamp: {
    order: defaultRules.text.order - 1,
    match: (source) => /^<t:(-?\d{1,17})(?::(t|T|d|D|f|F|R))?>/.exec(source),
    parse(capture, parse, state) {
      const [matched, time, fn] = capture

      let timestamp: Timestamp | null = null
      try {
        timestamp = parseTimestamp(time, fn as TimestampFormat)
      } catch (e) {
        console.error(e)
      }

      return !timestamp
        ? {
            type: 'text',
            content: matched,
          }
        : {
            type: 'timestamp',
            ...timestamp,
          }
    },
    vue: function (node, output, state) {
      return state.components?.timestamp
        ? h(state.components.timestamp, {
            timestamp: node.timestamp,
            format: node.format,
            date: node.date,
            full: node.full,
            formatted: node.formatted,
          })
        : h(state.tags?.timestamp || 'span', { class: 'timestamp', 'aria-label': node.full }, node.formatted)
    },
    html: function (node, output, state) {
      return htmlTag(state.tags?.timestamp || 'span', node.formatted, { class: 'timestamp' })
    },
  },
  strike: {
    order: defaultRules.u.order,
    requiredFirstCharacters: ['~'],
    match: inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
    parse: defaultRules.u.parse,
    vue: function (node, output, state) {
      return h(state.components?.strikethrough || state.tags?.strikethrough || 's', output(node.content, state))
    },
    html: function (node, output, state) {
      return htmlTag(state.tags?.strikethrough || 's', output(node.content, state))
    },
  },
  spoiler: {
    order: defaultRules.text.order,
    requiredFirstCharacters: ['|'],
    match: inlineRegex(/^\|\|([\s\S]+?)\|\|/),
    parse(capture, parse, state) {
      const [match, content] = capture
      return {
        type: 'spoiler',
        content: parse(content, state),
      }
    },
    vue: function (node, output, state) {
      return h(state.components?.spoiler || state.tags?.spoiler || 'span', { class: 'spoiler' }, output(node.content, state))
    },
    html: function (node, output, state) {
      return htmlTag(state.tags?.spoiler || 'span', output(node.content, state), { class: 'spoiler' })
    },
  },
  subtext: {
    order: defaultRules.heading.order,
    requiredFirstCharacters: ['-'],
    match(source, state, prev) {
      if (state.allowSubtext === false) {
        return null
      }

      if (prev == null || prev === '' || prev.match(/\n$/) != null) {
        return anyScopeRegex(/^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/)(source, state, prev)
      }

      return null
    },
    parse: function (capture, parse, state) {
      return {
        type: 'subtext',
        content: parseInline(parse, capture[1].trim(), state),
      }
    },
    vue: function (node, output, state) {
      return h(state.components?.subtext || state.tags?.subtext || 'small', output(node.content, state))
    },
    html: function (node, output, state) {
      return htmlTag(state.tags?.subtext || 'small', output(node.content, state))
    },
  },
  heading: {
    ...defaultRules.heading,
    requiredFirstCharacters: [' ', '#'],
    match(source, state, prev) {
      if (state.allowHeading === false) {
        return null
      }

      if (prev == null || prev === '' || prev.match(/\n$/) != null) {
        return anyScopeRegex(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(source, state, prev)
      }

      return null
    },
  },
  list: {
    ...defaultRules.list,
    requiredFirstCharacters: ' *-0123456789'.split(''),
    match: function (source, state) {
      if (state.allowList === false || state._listLevel >= 11) {
        return null
      }

      const prevCaptureStr = state.prevCapture == null ? '' : state.prevCapture[0]
      const isStartOfLineCapture = LIST_LOOKBEHIND_R.exec(prevCaptureStr)

      return !isStartOfLineCapture || LIST_WHITESPACE.test(isStartOfLineCapture[0]) ? null : LIST_R.exec(source)
    },
    parse: function (capture, parse, state) {
      const bullet = capture[2]
      const ordered = bullet.length > 1
      const start = ordered ? Math.min(1e9, Math.max(1, +bullet)) : undefined
      // @ts-expect-error - TS2322 - Type 'RegExpMatchArray | null' is not assignable to type 'string[]'.
      const items: Array<string> = capture[0].replace(LIST_BLOCK_END_R, '\n').match(LIST_ITEM_R)

      // We know this will match here, because of how the regexes are
      // defined

      let lastItemWasAParagraph = false
      const itemContent = items.map(function (item: string, i: number) {
        // We need to see how far indented this item is:
        const prefixCapture = LIST_ITEM_PREFIX_R.exec(item)
        const space = prefixCapture ? prefixCapture[0].length : 0
        // And then we construct a regex to "unindent" the subsequent
        // lines of the items by that amount:
        const spaceRegex = new RegExp('^ {1,' + space + '}', 'gm')

        // Before processing the item, we need a couple things
        const content = item
          // remove indents on trailing lines:
          .replace(spaceRegex, '')
          // remove the bullet:
          .replace(LIST_ITEM_PREFIX_R, '')

        // I'm not sur4 why this is necessary again?

        // Handling "loose" lists, like:
        //
        //  * this is wrapped in a paragraph
        //
        //  * as is this
        //
        //  * as is this
        const isLastItem = i === items.length - 1
        const containsBlocks = content.indexOf('\n\n') !== -1

        // Any element in a list is a block if it contains multiple
        // newlines. The last element in the list can also be a block
        // if the previous item in the list was a block (this is
        // because non-last items in the list can end with \n\n, but
        // the last item can't, so we just "inherit" this property
        // from our previous element).
        const thisItemIsAParagraph = containsBlocks || (isLastItem && lastItemWasAParagraph)
        lastItemWasAParagraph = thisItemIsAParagraph

        // backup our state for restoration afterwards. We're going to
        // want to set state._list to true, and state.inline depending
        // on our list's looseness.
        const oldStateInline = state.inline
        const oldStateList = state._list
        const oldStateListLevel = state._listLevel
        state._list = true
        state._listLevel = (oldStateListLevel ? oldStateListLevel : 0) + 1

        // Parse inline if we're in a tight list, or block if we're in
        // a loose list.
        let adjustedContent
        if (thisItemIsAParagraph) {
          state.inline = false
          adjustedContent = content.replace(LIST_ITEM_END_R, '\n\n')
        } else {
          state.inline = true
          adjustedContent = content.replace(LIST_ITEM_END_R, '')
        }

        const result = parse(adjustedContent, {
          ...state,
          allowHeading: false,
        }).map((node) => ('text' === node.type && null != node.content && (node.content = node.content.replace(/\n+\s*$/, '')), node))

        // Restore our state before returning
        state.inline = oldStateInline
        state._list = oldStateList
        state._listLevel = oldStateListLevel

        return result
      })

      return {
        ordered: ordered,
        start: start,
        items: itemContent,
      }
    },
  },
}

const defaultRawParse = parserFor(discordRules)

const defaultBlockParse = function (source: string, state?: State | null): Array<SingleASTNode> {
  state = state || {}
  state.inline = false
  return defaultRawParse(source, state)
}

const defaultInlineParse = function (source: string, state?: State | null): Array<SingleASTNode> {
  state = state || {}
  state.inline = true
  return defaultRawParse(source, state)
}

const defaultImplicitParse = function (source: string, state?: State | null): Array<SingleASTNode> {
  const isBlock = BLOCK_END_R.test(source)
  state = state || {}
  state.inline = !isBlock
  return defaultRawParse(source, state)
}

const defaultVueOutput: VueOutput = outputFor(discordRules, 'vue')
const defaultHtmlOutput: HtmlOutput = outputFor(discordRules, 'html')

const markdownToVue = function (source: string, state?: State | null): VNode {
  return defaultVueOutput(defaultBlockParse(source, state), state)
}

const markdownToHtml = function (source: string, state?: State | null): string {
  return defaultHtmlOutput(defaultBlockParse(source, state), state)
}

type Exports = {
  readonly discordRules: Rules
  readonly markdownToVue: (source: string, state?: State | null | undefined) => VNode
  readonly markdownToHtml: (source: string, state?: State | null | undefined) => string
  readonly defaultRawParse: (source: string, state?: State | null | undefined) => Array<SingleASTNode>
  readonly defaultBlockParse: (source: string, state?: State | null | undefined) => Array<SingleASTNode>
  readonly defaultInlineParse: (source: string, state?: State | null | undefined) => Array<SingleASTNode>
  readonly defaultImplicitParse: (source: string, state?: State | null | undefined) => Array<SingleASTNode>
  readonly defaultVueOutput: VueOutput
  readonly defaultHtmlOutput: HtmlOutput
}

const SimpleMarkdown: Exports = {
  discordRules: discordRules,
  markdownToVue,
  markdownToHtml,
  defaultRawParse,
  defaultBlockParse,
  defaultInlineParse,
  defaultImplicitParse,
  defaultVueOutput,
  defaultHtmlOutput,
}

export default SimpleMarkdown

export {
  discordRules,
  markdownToVue,
  markdownToHtml,
  defaultRawParse,
  defaultBlockParse,
  defaultInlineParse,
  defaultImplicitParse,
  defaultVueOutput,
  defaultHtmlOutput,
}
