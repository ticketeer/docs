export interface Annotation {
  /** Type of annotation to draw on the screenshot */
  type: 'circle' | 'rectangle' | 'arrow';
  /**
   * CSS selector to annotate. When provided, x/y/width/height are
   * auto-resolved from the element's bounding box on the page.
   */
  selector?: string;
  /** Padding around the element when using selector (default: 8) */
  padding?: number;
  /** X position (pixels or percentage string like "50%"). Optional when selector is set. */
  x?: number | string;
  /** Y position (pixels or percentage string like "50%"). Optional when selector is set. */
  y?: number | string;
  /** Width for rectangles, diameter for circles */
  width?: number;
  /** Height for rectangles */
  height?: number;
  /** Color of the annotation (default: red) */
  color?: string;
  /** Stroke width (default: 3) */
  strokeWidth?: number;
  /** Optional label text near the annotation */
  label?: string;
}

/** Annotation with x/y guaranteed present (after selector lookup) */
export interface ResolvedAnnotation extends Annotation {
  x: number | string;
  y: number | string;
}

export interface TutorialStep {
  /** Human-readable title for this step */
  title: string;
  /** Description shown below the screenshot */
  description: string;
  /** Action to perform */
  action: 'goto' | 'click' | 'fill' | 'select' | 'hover' | 'wait' | 'screenshot' | 'scroll' | 'key';
  /** URL for goto actions */
  url?: string;
  /** CSS selector for click/fill/select/hover actions */
  selector?: string;
  /** Value for fill/select actions */
  value?: string;
  /** Key for key actions (e.g. "Enter", "Tab") */
  key?: string;
  /** Milliseconds for wait actions */
  duration?: number;
  /** Scroll direction and amount */
  scroll?: { x?: number; y?: number };
  /** Whether to take a screenshot after this step (default: true) */
  screenshot?: boolean;
  /** Wait for this selector to appear before taking screenshot */
  waitFor?: string;
  /** Annotations to draw on the screenshot */
  annotations?: Annotation[];
  /** Clip area for the screenshot (crop) */
  clip?: { x: number; y: number; width: number; height: number };
}

export interface TutorialConfig {
  /** Tutorial title */
  title: string;
  /** Tutorial description/introduction */
  description: string;
  /** Base URL of the app */
  baseUrl: string;
  /** Viewport dimensions */
  viewport?: { width: number; height: number };
  /** Output directory for the generated tutorial */
  outputDir: string;
  /** Directory for screenshots relative to outputDir */
  screenshotDir?: string;
  /** Authentication config (if the app requires login) */
  auth?: {
    /** URL to navigate to for login */
    loginUrl: string;
    /** Steps to perform for authentication */
    steps: TutorialStep[];
  };
  /** Cookie values to set before running (bypass login) */
  cookies?: Array<{
    name: string;
    value: string;
    domain: string;
    path?: string;
  }>;
  /** Local storage values to set */
  localStorage?: Record<string, string>;
  /** The tutorial steps */
  steps: TutorialStep[];
}
