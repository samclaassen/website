import type { MaterialFamily, PieceKind } from "@/lib/piece-types";

/**
 * Care & Keeping guides.
 *
 * Each guide answers one question about one material, in this order on the page:
 * the short answer first, then the full explanation, a step-by-step method, what not
 * to do, questions, and sources. Text may contain inline links written as
 * [label](/path) or [label](https://...); see components/guides/Inline.tsx.
 *
 * Writing rules:
 * - The answer is 50–80 words and could stand alone as a reply to the question.
 * - No claims about a specific piece that are not on its piece page. Guides are about
 *   materials; piece facts live in src/data/pieces.ts.
 * - Sources are only pages we have actually opened and checked. Prefer the maker's own
 *   care instructions and public bodies over blogs.
 */

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "h3"; text: string };

export interface GuideSection {
  /** Anchor id, e.g. "seasoning". */
  id: string;
  heading: string;
  blocks: GuideBlock[];
}

export interface GuideStep {
  name: string;
  text: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideSource {
  name: string;
  url: string;
  note?: string;
}

export interface GuideHowTo {
  name: string;
  description: string;
  /** ISO 8601 duration, e.g. "PT1H". */
  totalTime?: string;
  supplies?: string[];
  tools?: string[];
  steps: GuideStep[];
}

export interface CareGuide {
  slug: string;
  title: string;
  /** The question the page answers, in the words someone would ask it. */
  question: string;
  /** Short label, e.g. "Cast iron & carbon steel". */
  kicker: string;
  /** Meta description, under 160 characters. */
  description: string;
  /** The direct answer, shown first on the page and used as the summary everywhere else. */
  answer: string;
  /** Pieces this guide applies to: material families, optionally narrowed by kind. */
  families: MaterialFamily[];
  kinds?: PieceKind[];
  excludeKinds?: PieceKind[];
  /** Material motif for the illustrated panel when there is no photo. */
  motif: MaterialFamily;
  /** Library image id (src/data/image-library.ts). Optional; the motif panel is used otherwise. */
  image?: string;
  /** ISO dates. */
  published: string;
  updated: string;
  sections: GuideSection[];
  howTo?: GuideHowTo;
  mistakes?: string[];
  faqs: GuideFaq[];
  sources?: GuideSource[];
}

export const p = (text: string): GuideBlock => ({ type: "p", text });
export const list = (items: string[]): GuideBlock => ({ type: "list", items });
export const h3 = (text: string): GuideBlock => ({ type: "h3", text });
