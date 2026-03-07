import { chromium, type Browser, type Page } from 'playwright';
import { mkdir, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { annotateScreenshot } from './annotator.js';
import type { Annotation, ResolvedAnnotation, TutorialConfig, TutorialStep } from './types.js';

export interface StepResult {
  step: TutorialStep;
  index: number;
  screenshotPath: string | null;
}

/**
 * Execute a single tutorial step on the page.
 */
async function executeStep(page: Page, step: TutorialStep): Promise<void> {
  switch (step.action) {
    case 'goto':
      await page.goto(step.url!, { waitUntil: 'networkidle' });
      break;

    case 'click':
      await page.locator(step.selector!).click();
      break;

    case 'fill':
      await page.locator(step.selector!).fill(step.value ?? '');
      break;

    case 'select':
      await page.locator(step.selector!).selectOption(step.value ?? '');
      break;

    case 'hover':
      await page.locator(step.selector!).hover();
      break;

    case 'key':
      await page.keyboard.press(step.key!);
      break;

    case 'scroll':
      await page.evaluate(
        ({ x, y }) => window.scrollBy(x ?? 0, y ?? 0),
        step.scroll ?? { x: 0, y: 0 }
      );
      break;

    case 'wait':
      await page.waitForTimeout(step.duration ?? 1000);
      break;

    case 'screenshot':
      // No action needed; screenshot is taken after every step by default
      break;
  }

  // Wait for a specific element if configured
  if (step.waitFor) {
    await page.locator(step.waitFor).waitFor({ state: 'visible', timeout: 10000 });
  }
}

/**
 * Resolve annotations that use a CSS selector by looking up the element's
 * bounding box on the page. The deviceScaleFactor is needed because
 * screenshot pixel coordinates are scaled by it.
 */
async function resolveAnnotations(
  page: Page,
  annotations: Annotation[],
  scaleFactor: number
): Promise<ResolvedAnnotation[]> {
  const resolved: ResolvedAnnotation[] = [];

  for (const ann of annotations) {
    if (ann.selector) {
      const box = await page.locator(ann.selector).first().boundingBox();
      if (!box) {
        console.warn(`    Warning: selector "${ann.selector}" not found, skipping annotation`);
        continue;
      }

      const padding = ann.padding ?? 8;
      // Scale coordinates to match screenshot pixel space
      const cx = (box.x + box.width / 2) * scaleFactor;
      const cy = (box.y + box.height / 2) * scaleFactor;
      const w = (box.width + padding * 2) * scaleFactor;
      const h = (box.height + padding * 2) * scaleFactor;

      resolved.push({
        ...ann,
        x: ann.x ?? cx,
        y: ann.y ?? cy,
        width: ann.width ?? w,
        height: ann.height ?? h,
      });
    } else {
      // Manual coordinates — must have x and y
      resolved.push(ann as ResolvedAnnotation);
    }
  }

  return resolved;
}

/**
 * Take a screenshot of the page with optional clip and annotations.
 */
async function takeScreenshot(
  page: Page,
  step: TutorialStep,
  outputPath: string,
  scaleFactor: number
): Promise<void> {
  await mkdir(dirname(outputPath), { recursive: true });

  // Small delay for animations to settle
  await page.waitForTimeout(500);

  let buffer = await page.screenshot({
    type: 'png',
    fullPage: false,
    clip: step.clip,
  });

  if (step.annotations?.length) {
    const resolved = await resolveAnnotations(page, step.annotations, scaleFactor);
    buffer = await annotateScreenshot(buffer, resolved);
  }

  await writeFile(outputPath, buffer);
}

/**
 * Run the full tutorial, executing each step and capturing screenshots.
 */
export async function runTutorial(config: TutorialConfig): Promise<StepResult[]> {
  const screenshotDir = config.screenshotDir ?? 'images';
  const outputScreenshotDir = join(config.outputDir, screenshotDir);
  await mkdir(outputScreenshotDir, { recursive: true });

  const scaleFactor = 2;
  const browser: Browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: config.viewport ?? { width: 1280, height: 800 },
    deviceScaleFactor: scaleFactor, // Retina quality screenshots
  });

  // Set cookies if provided (bypass login)
  if (config.cookies?.length) {
    await context.addCookies(config.cookies);
  }

  const page = await context.newPage();

  // Set local storage if provided
  if (config.localStorage) {
    await page.goto(config.baseUrl, { waitUntil: 'networkidle' });
    await page.evaluate((storage) => {
      for (const [key, value] of Object.entries(storage)) {
        localStorage.setItem(key, value);
      }
    }, config.localStorage);
  }

  // Run auth steps if configured
  if (config.auth) {
    await page.goto(config.auth.loginUrl, { waitUntil: 'networkidle' });
    for (const authStep of config.auth.steps) {
      await executeStep(page, authStep);
    }
  }

  const results: StepResult[] = [];

  for (let i = 0; i < config.steps.length; i++) {
    const step = config.steps[i];
    const shouldScreenshot = step.screenshot !== false;
    const stepNum = String(i + 1).padStart(2, '0');
    const screenshotFilename = `step-${stepNum}.png`;
    const screenshotPath = join(outputScreenshotDir, screenshotFilename);
    const relativeScreenshotPath = `${screenshotDir}/${screenshotFilename}`;

    console.log(`  Step ${i + 1}/${config.steps.length}: ${step.title}`);

    await executeStep(page, step);

    if (shouldScreenshot) {
      await takeScreenshot(page, step, screenshotPath, scaleFactor);
    }

    results.push({
      step,
      index: i,
      screenshotPath: shouldScreenshot ? relativeScreenshotPath : null,
    });
  }

  await browser.close();
  return results;
}
