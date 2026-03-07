import { readFile } from 'fs/promises';
import { resolve, dirname } from 'path';
import { parse as parseYaml } from 'yaml';
import { runTutorial } from './runner.js';
import { writeMarkdown } from './markdown.js';
import type { TutorialConfig } from './types.js';

function parseArgs(): { tutorialPath: string; dryRun: boolean } {
  const args = process.argv.slice(2);
  let tutorialPath = '';
  let dryRun = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--tutorial' || args[i] === '-t') {
      tutorialPath = args[++i];
    } else if (args[i] === '--dry-run') {
      dryRun = true;
    } else if (!args[i].startsWith('-')) {
      tutorialPath = args[i];
    }
  }

  if (!tutorialPath) {
    console.error('Usage: tutorial-generator --tutorial <path-to-tutorial.yaml> [--dry-run]');
    console.error('');
    console.error('Options:');
    console.error('  --tutorial, -t  Path to a YAML tutorial definition');
    console.error('  --dry-run       Parse and validate without running the browser');
    process.exit(1);
  }

  return { tutorialPath, dryRun };
}

function resolveEnvVars(obj: unknown): unknown {
  if (typeof obj === 'string') {
    return obj.replace(/\$\{(\w+)\}/g, (_, name) => process.env[name] ?? '');
  }
  if (Array.isArray(obj)) {
    return obj.map(resolveEnvVars);
  }
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, resolveEnvVars(v)])
    );
  }
  return obj;
}

async function main() {
  const { tutorialPath, dryRun } = parseArgs();

  const absolutePath = resolve(process.cwd(), tutorialPath);
  const tutorialDir = dirname(absolutePath);

  console.log(`Loading tutorial: ${absolutePath}`);

  const raw = await readFile(absolutePath, 'utf-8');
  const parsed = parseYaml(raw) as TutorialConfig;
  const config = resolveEnvVars(parsed) as TutorialConfig;

  // Resolve outputDir relative to the tutorial file
  if (!config.outputDir.startsWith('/')) {
    config.outputDir = resolve(tutorialDir, config.outputDir);
  }

  console.log(`Title: ${config.title}`);
  console.log(`Steps: ${config.steps.length}`);
  console.log(`Output: ${config.outputDir}`);
  console.log('');

  if (dryRun) {
    console.log('Dry run - validating steps:');
    for (let i = 0; i < config.steps.length; i++) {
      const step = config.steps[i];
      const hasRequired =
        step.action === 'goto' ? !!step.url :
        ['click', 'fill', 'select', 'hover'].includes(step.action) ? !!step.selector :
        step.action === 'key' ? !!step.key :
        true;
      const status = hasRequired ? 'OK' : 'MISSING REQUIRED FIELD';
      console.log(`  ${i + 1}. [${step.action}] ${step.title} - ${status}`);
    }
    return;
  }

  console.log('Running tutorial...');
  const results = await runTutorial(config);

  console.log('');
  console.log('Generating Markdown...');
  const outputPath = await writeMarkdown(config, results);

  console.log('');
  console.log(`Tutorial generated successfully!`);
  console.log(`  Markdown: ${outputPath}`);
  console.log(`  Screenshots: ${config.outputDir}/${config.screenshotDir ?? 'images'}/`);
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
