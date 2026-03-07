import sharp from 'sharp';
import type { ResolvedAnnotation } from './types.js';

/**
 * Resolve a position value that can be a number (pixels) or a string percentage.
 */
function resolvePosition(value: number | string, dimension: number): number {
  if (typeof value === 'string' && value.endsWith('%')) {
    return Math.round((parseFloat(value) / 100) * dimension);
  }
  return Number(value);
}

/**
 * Generate an SVG overlay with annotations drawn on it.
 */
function buildAnnotationSvg(
  annotations: ResolvedAnnotation[],
  imageWidth: number,
  imageHeight: number
): string {
  const elements: string[] = [];

  for (const ann of annotations) {
    const color = ann.color ?? '#FF0000';
    const strokeWidth = ann.strokeWidth ?? 3;
    const x = resolvePosition(ann.x!, imageWidth);
    const y = resolvePosition(ann.y!, imageHeight);

    switch (ann.type) {
      case 'circle': {
        const r = (ann.width ?? 40) / 2;
        elements.push(
          `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${color}" stroke-width="${strokeWidth}" />`
        );
        break;
      }
      case 'rectangle': {
        const w = ann.width ?? 100;
        const h = ann.height ?? 60;
        elements.push(
          `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" fill="none" stroke="${color}" stroke-width="${strokeWidth}" rx="4" />`
        );
        break;
      }
      case 'arrow': {
        // Draw an arrow pointing down-left toward (x, y)
        const len = ann.width ?? 60;
        const fromX = x + len * 0.7;
        const fromY = y - len * 0.7;
        elements.push(
          `<defs><marker id="arrowhead-${x}-${y}" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="${color}" /></marker></defs>`,
          `<line x1="${fromX}" y1="${fromY}" x2="${x}" y2="${y}" stroke="${color}" stroke-width="${strokeWidth}" marker-end="url(#arrowhead-${x}-${y})" />`
        );
        break;
      }
    }

    // Add label if present
    if (ann.label) {
      const labelX = ann.type === 'arrow' ? x + (ann.width ?? 60) * 0.7 : x;
      const labelY = y - ((ann.height ?? ann.width ?? 40) / 2 + 8);
      elements.push(
        `<text x="${labelX}" y="${labelY}" fill="${color}" font-size="14" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">${escapeXml(ann.label)}</text>`
      );
    }
  }

  return `<svg width="${imageWidth}" height="${imageHeight}" xmlns="http://www.w3.org/2000/svg">${elements.join('\n')}</svg>`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Annotate a screenshot buffer with the given annotations.
 * Returns the annotated image as a PNG buffer.
 */
export async function annotateScreenshot(
  screenshotBuffer: Buffer,
  annotations: ResolvedAnnotation[]
): Promise<Buffer> {
  if (!annotations.length) return screenshotBuffer;

  const image = sharp(screenshotBuffer);
  const metadata = await image.metadata();
  const width = metadata.width!;
  const height = metadata.height!;

  const svgOverlay = buildAnnotationSvg(annotations, width, height);

  return image
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      },
    ])
    .png()
    .toBuffer();
}
