import { writeFile } from 'fs/promises';
import { join } from 'path';
import type { TutorialConfig } from './types.js';
import type { StepResult } from './runner.js';

/**
 * Generate a Markdown tutorial from the step results.
 */
export function generateMarkdown(
  config: TutorialConfig,
  results: StepResult[]
): string {
  const lines: string[] = [];

  // Frontmatter (for VitePress compatibility)
  lines.push('---');
  lines.push(`title: "${config.title}"`);
  lines.push(`description: "${config.description}"`);
  lines.push('---');
  lines.push('');

  // Title and description
  lines.push(`# ${config.title}`);
  lines.push('');
  lines.push(config.description);
  lines.push('');

  // Table of contents
  lines.push('## Steps');
  lines.push('');
  for (const result of results) {
    const num = result.index + 1;
    const anchor = result.step.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    lines.push(`${num}. [${result.step.title}](#step-${num}-${anchor})`);
  }
  lines.push('');
  lines.push('---');
  lines.push('');

  // Each step
  for (const result of results) {
    const num = result.index + 1;
    const anchor = result.step.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    lines.push(`### Step ${num}: ${result.step.title} {#step-${num}-${anchor}}`);
    lines.push('');
    lines.push(result.step.description);
    lines.push('');

    if (result.screenshotPath) {
      lines.push(`![Step ${num}: ${result.step.title}](./${result.screenshotPath})`);
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  // Footer
  lines.push(
    `> *This tutorial was auto-generated on ${new Date().toISOString().split('T')[0]}.*`
  );
  lines.push('');

  return lines.join('\n');
}

/**
 * Write the generated Markdown to the output directory.
 */
export async function writeMarkdown(
  config: TutorialConfig,
  results: StepResult[]
): Promise<string> {
  const markdown = generateMarkdown(config, results);
  const outputPath = join(config.outputDir, 'index.md');
  await writeFile(outputPath, markdown, 'utf-8');
  return outputPath;
}
