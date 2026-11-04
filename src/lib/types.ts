/**
 * Content model for jottitstudio.
 *
 * These types are deliberately CMS-agnostic. They map 1:1 to document
 * schemas you would define in Sanity, Contentful, Payload or Storyblok.
 * Swap the data source in `src/lib/cms.ts` without touching components.
 */

export type ServiceSlug =
  | "branding-identity"
  | "social-media-content"
  | "performance-marketing"
  | "video-photography"
  | "website-development";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Service {
  slug: ServiceSlug;
  index: string;
  title: string;
  shortTitle: string;
  /** One-line summary used in lists */
  summary: string;
  /** Direct customer benefit statement for business owners */
  benefit: string;
  /** Opening paragraph on the detail page */
  intro: string;
  /** What problem this service solves for a business */
  why: string;
  deliverables: string[];
  approach: { title: string; body: string }[];
  /** Questions a client would typically ask */
  faqs: { q: string; a: string }[];
  accent: "turmeric" | "maroon" | "leaf" | "terracotta" | "ink";
  motif: "kolam" | "steps" | "leaf" | "frame" | "grid";
}

export type ProjectStatus = "concept" | "client";

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  /** "concept" projects are self-initiated studies, never presented as client work */
  status: ProjectStatus;
  year: string;
  sector: string;
  services: ServiceSlug[];
  tagline: string;
  summary: string;
  /** Concise creative challenge shown on portfolio cards */
  challenge: string;
  /** Concise strategic & creative approach shown on portfolio cards */
  approachSummary: string;
  /** Concise intended outcome shown on portfolio cards */
  intendedOutcome: string;
  cover: ImageAsset;
  gallery: ImageAsset[];
  palette: string[];
  brief: string;
  sections: ProjectSection[];
  /** Explicitly what the concept explores. No invented metrics. */
  outcomes: string[];
  credits: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  isPlaceholder: boolean;
}
