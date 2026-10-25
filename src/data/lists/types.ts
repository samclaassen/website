import type { MaterialFamily } from "@/lib/piece-types";

/**
 * Ranked "buy it for life" lists and gift guides.
 *
 * Each page answers one question: the short answer first, then the picks, a comparison,
 * what to look for, and questions. Text may contain inline links written as [label](/path)
 * or [label](https://...); see components/guides/Inline.tsx.
 *
 * Writing rules:
 * - Piece facts (material, maker, where it's made, warranty, price, the five tests) are
 *   rendered from src/data/pieces.ts. Copy here adds only the editorial judgement and
 *   widely known facts about the material or form. No invented specs: no weights,
 *   dimensions or cooking results we haven't checked.
 * - Any fact the copy repeats (a price, a warranty) must match the piece data. When a
 *   piece changes, its verdict changes with it.
 * - Ranks: within a section, a piece that verifies more of the five tests always ranks
 *   higher (src/lib/lists.ts enforces this). Among equals, the order here is the editorial
 *   order, and each pick's verdict says why it sits where it does.
 * - We haven't tested these pieces side by side. Every ranked page says so.
 */

export type ProseBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "h3"; text: string };

export interface ProseSection {
  /** Anchor id. */
  id: string;
  heading: string;
  blocks: ProseBlock[];
}

export interface ListPick {
  /** Piece id from src/data/pieces.ts, e.g. "K1". */
  id: string;
  /** Short role label, e.g. "The one to buy first", "For the tea drinker". */
  label: string;
  /** 1–3 sentences: why it's here and why it sits where it does. Inline links allowed. */
  verdict: string;
  /** Completes "Choose it if …". Optional. */
  chooseIf?: string;
}

export interface ListSection {
  id: string;
  heading: string;
  intro?: string;
  picks: ListPick[];
}

/** Piece fields a comparison can show, rendered from the piece data. */
export type ComparisonField = "price" | "material" | "madeIn" | "warranty" | "standard";

export type Comparison =
  | {
      /** Pieces as columns, for a head-to-head of two to four pieces. */
      kind: "versus";
      id: string;
      heading: string;
      intro: string;
      ids: string[];
      fields: ComparisonField[];
      /** Editorial rows, one value per piece, shown after the data rows. */
      rows: { label: string; values: string[] }[];
      verdict: string;
    }
  | {
      /** Pieces as rows, for scanning a whole list. */
      kind: "pieces";
      id: string;
      heading: string;
      intro: string;
      ids: string[];
      fields: ComparisonField[];
      verdict?: string;
    }
  | {
      /** A written table, e.g. makers at a glance. Cells may contain inline links. */
      kind: "table";
      id: string;
      heading: string;
      intro: string;
      columns: string[];
      rows: string[][];
      note?: string;
    };

export interface Faq {
  question: string;
  answer: string;
}

export interface PieceListPage {
  /** URL segment under /buy-it-for-life or /gifts. */
  slug: string;
  /** "bifl" pages are ranked; gift guides are not. */
  type: "bifl" | "gift";
  /** H1 and the Article headline. */
  title: string;
  /** The <title>, without the site name, when it should differ from the H1. */
  metaTitle?: string;
  /** Short title for cards, menus and the home page, e.g. "Cast-iron skillets". */
  shortTitle: string;
  kicker: string;
  /** Meta description, under 160 characters. */
  description: string;
  /** The question the page answers, in the words someone would ask it. */
  question: string;
  /** The direct answer, 50–80 words, shown first and used as the summary everywhere else. */
  answer: string;
  /** Page-specific note for "How we ranked" (bifl) or "How we chose" (gift). */
  method: string;
  sections: ListSection[];
  comparison?: Comparison;
  /** What to look for, after the list. */
  guide: ProseSection[];
  faqs: Faq[];
  /** Care guide slugs to point to. */
  care: string[];
  /** Library image id (src/data/image-library.ts). The motif panel is used otherwise. */
  image?: string;
  motif: MaterialFamily;
  /**
   * Gift guides by budget: listed USD price bounds (min inclusive, max exclusive). Picks
   * outside the band are dropped at build time with a warning. GBP-priced picks are only
   * allowed where `allowGbp` is set, and are labelled as UK prices.
   */
  budget?: { min?: number; max?: number };
  allowGbp?: boolean;
  /** ISO dates. */
  published: string;
  updated: string;
}
