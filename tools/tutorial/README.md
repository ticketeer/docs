# Tutorial Generator

Automated tutorial generator for Ticketeer. Uses Playwright to navigate the app, take annotated screenshots, and produce Markdown tutorials.

## Setup

```bash
cd docs/tools/tutorial
pnpm install
npx playwright install chromium
```

## Usage

### Generate a tutorial from a YAML definition

```bash
pnpm generate --tutorial tutorials/getting-started.yaml
```

### Dry run (validate without browser)

```bash
pnpm generate --tutorial tutorials/getting-started.yaml --dry-run
```

## Writing Tutorial Definitions

Tutorials are defined in YAML files. See `tutorials/getting-started.yaml` for a full example.

### Structure

```yaml
title: My Tutorial
description: What this tutorial covers.
baseUrl: http://localhost:8000
viewport: { width: 1280, height: 800 }
outputDir: ../../src/tutorials/my-tutorial
screenshotDir: images

# Optional: set cookies to bypass login
cookies:
  - name: ticketeer_session
    value: ${TICKETEER_SESSION_COOKIE}
    domain: localhost

steps:
  - title: Step name
    description: Explain what happens here.
    action: goto | click | fill | select | hover | wait | screenshot | scroll | key
    url: http://...          # for goto
    selector: "#my-button"   # for click/fill/select/hover
    value: "text"            # for fill/select
    key: "Enter"             # for key
    duration: 1000           # for wait (ms)
    scroll: { y: 500 }      # for scroll
    waitFor: ".loaded"       # wait for element before screenshot
    screenshot: true         # set false to skip screenshot
    clip: { x: 0, y: 0, width: 800, height: 600 }  # crop area
    annotations:             # draw on screenshot
      - type: circle | rectangle | arrow
        x: 100          # pixels or "50%"
        y: 200
        width: 60
        color: "#FF3B30"
        label: "Click here"
```

### Actions

| Action       | Required Fields | Description                    |
| ------------ | --------------- | ------------------------------ |
| `goto`       | `url`           | Navigate to a URL              |
| `click`      | `selector`      | Click an element               |
| `fill`       | `selector`      | Type into an input             |
| `select`     | `selector`      | Select a dropdown option       |
| `hover`      | `selector`      | Hover over an element          |
| `key`        | `key`           | Press a keyboard key           |
| `wait`       | `duration`      | Wait for milliseconds          |
| `scroll`     | `scroll`        | Scroll the page                |
| `screenshot` | _(none)_        | Just take a screenshot         |

### Annotations

Annotations are drawn on screenshots to highlight UI elements:

- **circle** - Draw a circle around an element
- **rectangle** - Draw a box around an area
- **arrow** - Draw an arrow pointing to an element

Positions can be in pixels (`100`) or percentages (`"50%"`).

### Environment Variables

Use `${VAR_NAME}` in YAML values to reference environment variables. Useful for session cookies and secrets.

## Output

Each tutorial generates:
- `index.md` - Markdown file with VitePress frontmatter
- `images/` - Directory with annotated screenshots (step-01.png, step-02.png, ...)

The Markdown is compatible with VitePress and can be placed directly in the docs `src/` directory.

## Programmatic Usage

```ts
import { runTutorial, writeMarkdown } from './src/index.js';

const config = { /* TutorialConfig */ };
const results = await runTutorial(config);
await writeMarkdown(config, results);
```
