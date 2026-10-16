/**
 * Journal articles. Researched editorial guides live as JSON in src/data/journal/
 * and render through /journal/[slug]. Articles with `custom: true` have their own
 * route file (for tables or other bespoke layouts) and only contribute metadata here.
 */
import fs from "node:fs";
import path from "node:path";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "figure"; entry: string; caption: string }
  | { type: "list"; items: string[] }
  | { type: "dl"; items: { term: string; def: string }[] };

export interface Article {
  slug: string;
  title: string;
  shortTitle?: string;
  seoTitle: string;
  description: string;
  dek: string;
  heroEntry: string;
  styles: string[];
  elements: string[];
  body: ArticleBlock[];
  sources: { label: string; url: string }[];
  published: string;
  reviewed: string;
  kicker: string;
  custom?: boolean;
}

/** Editorial order and display labels; any researched JSON article present is included. */
const ORDER: Record<string, { shortTitle: string; kicker: string }> = {
  "alpine-chalet-interiors": { shortTitle: "What defines an Alpine chalet interior?", kicker: "Style guide" },
  "traditional-interior-door-styles": { shortTitle: "Traditional interior door styles", kicker: "Visual guide" },
  "wainscoting-vs-wall-paneling": { shortTitle: "Wainscoting vs. wall paneling", kicker: "Explainer" },
};

function loadJsonArticles(): Article[] {
  const dir = path.join(process.cwd(), "src/data/journal");
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".json")) : [];
  const list = files.map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as Article);
  const keys = Object.keys(ORDER);
  return list
    .map((a) => ({ ...a, ...(ORDER[a.slug] ?? { kicker: "Guide" }), published: a.published ?? "2026-10-16", reviewed: a.reviewed ?? "2026-10-16" }))
    .sort((a, b) => (keys.indexOf(a.slug) + 1 || 99) - (keys.indexOf(b.slug) + 1 || 99));
}

const JSON_ARTICLES = loadJsonArticles();

const CUSTOM_ARTICLES: Article[] = [
  {
    slug: "custom-cabinet-cost-colorado",
    title: "How much do custom cabinets cost in Colorado?",
    shortTitle: "Custom cabinet cost in Colorado",
    seoTitle: "Custom Cabinet Cost in Colorado (2026 Guide)",
    description:
      "Custom kitchen cabinets in Colorado typically cost about $500 to $1,200 per linear foot installed. Published Denver benchmarks, what changes the price, and how Colorado's dry climate affects cabinetry.",
    dek: "Published Denver and Colorado benchmarks, what drives the price, and what the dry climate means for solid-wood cabinetry.",
    heroEntry: "dining-room-built-ins-molly-brown-house-denver",
    styles: ["denver-square", "victorian"],
    elements: ["kitchen-cabinets", "built-ins-bookcases"],
    body: [],
    sources: [],
    published: "2026-10-15",
    reviewed: "2026-10-16",
    kicker: "Colorado guide",
    custom: true,
  },
];

export const ARTICLES: Article[] = [...JSON_ARTICLES, ...CUSTOM_ARTICLES];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
export function articlesForStyle(style: string) {
  return ARTICLES.filter((a) => a.styles.includes(style));
}
export function articlesForElement(element: string) {
  return ARTICLES.filter((a) => a.elements.includes(element));
}
