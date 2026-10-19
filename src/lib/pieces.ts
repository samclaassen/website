import { PIECES } from "@/data/pieces";
import type { Category, MaterialFamily, Piece, Tier } from "./piece-types";
import { CHECK_ORDER } from "./piece-types";

export { PIECES };

/** Display order: the hearth and the door lead, the kitchen follows. */
export const CATEGORIES: Category[] = ["hearth", "hardware", "kitchen"];
export const TIERS: Tier[] = ["accessible", "mid", "premium"];

/**
 * Default order for the full collection: categories interleaved (hearth, door, kitchen, ...) so
 * the list reads as the whole house rather than one room at a time. Within a category the
 * shortlist order is kept, except that a few pieces lead their category: the kitchen opens
 * with wood and copper for the table rather than a skillet.
 */
const BROWSE_LEADS = ["K20", "K15", "K8"];
export function browseOrder(pieces: Piece[] = PIECES): Piece[] {
  const lead = (p: Piece) => {
    const i = BROWSE_LEADS.indexOf(p.id);
    return i === -1 ? BROWSE_LEADS.length : i;
  };
  const queues = CATEGORIES.map((c) =>
    pieces.filter((p) => p.category === c).sort((a, b) => lead(a) - lead(b)),
  );
  const out: Piece[] = [];
  for (let i = 0; out.length < pieces.length; i++) {
    for (const q of queues) if (q[i]) out.push(q[i]);
    if (queues.every((q) => i >= q.length)) break;
  }
  return out;
}

export function getPiece(slug: string) {
  return PIECES.find((p) => p.slug === slug);
}

export function piecesIn(category: Category) {
  return PIECES.filter((p) => p.category === category);
}

/** Material families in use, in a stable display order (hearth and door materials first). */
export const MATERIAL_FAMILIES: MaterialFamily[] = (
  [
    "forged",
    "brass",
    "bronze",
    "soapstone",
    "cast-iron",
    "enameled-cast-iron",
    "carbon-steel",
    "copper",
    "hardwood",
    "other",
  ] as MaterialFamily[]
).filter((f) => PIECES.some((p) => p.materialFamily === f));

export function verifiedCount(p: Piece) {
  return CHECK_ORDER.filter((k) => p.checks[k].status === "pass").length;
}

/** Tests that are verified but fall short (shown as "Partial"). */
export function partialCount(p: Piece) {
  return CHECK_ORDER.filter((k) => p.checks[k].status === "partial").length;
}

/** "4 of 5 verified" or "4 of 5 verified · 1 partial". */
export function verifiedSummary(p: Piece, suffix = "verified") {
  const partial = partialCount(p);
  return `${verifiedCount(p)} of 5 ${suffix}${partial ? ` · ${partial} partial` : ""}`;
}

/** Up to three passing tests, in priority order, for the badge row. */
export function badgesFor(p: Piece) {
  const priority = ["solid", "repair", "maker", "ages", "design"] as const;
  return priority
    .map((k) => p.checks[k])
    .filter((c) => c.status === "pass" && c.badge)
    .slice(0, 3)
    .map((c) => c.badge as string);
}

export function related(p: Piece, n = 3) {
  const sameCat = PIECES.filter((x) => x.slug !== p.slug && x.category === p.category);
  const sameFamily = sameCat.filter((x) => x.materialFamily === p.materialFamily);
  const rest = sameCat.filter((x) => x.materialFamily !== p.materialFamily);
  return [...sameFamily, ...rest].slice(0, n);
}

/**
 * Featured pieces for the home page: one per category, in category order (hearth, door, table).
 * Ring Andirons (Ponderosa Forge), Round Door Knocker (Rocky Mountain Hardware),
 * Walnut End-Grain Block (John Boos).
 */
export const FEATURED_IDS = ["H20", "W16", "K20"];
export function featured() {
  return FEATURED_IDS.map((id) => PIECES.find((p) => p.id === id)!).filter(Boolean);
}

export interface Maker {
  name: string;
  slug: string;
  base?: string;
  pieces: Piece[];
}

export function makers(): Maker[] {
  const map = new Map<string, Maker>();
  for (const p of PIECES) {
    const name = p.maker;
    const m = map.get(name) ?? { name, slug: slug(name), base: p.makerBase, pieces: [] };
    if (!m.base && p.makerBase) m.base = p.makerBase;
    m.pieces.push(p);
    map.set(name, m);
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function slug(s: string) {
  return s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ø/gi, "o")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Parse a display price into a number and currency for structured data.
 * Returns null when the price can't be read reliably.
 */
export function parsePrice(display: string):
  | { currency: "USD" | "GBP"; low: number; high?: number; open: boolean }
  | null {
  const currency = display.includes("£") ? "GBP" : display.includes("$") ? "USD" : null;
  if (!currency) return null;
  const nums = [...display.matchAll(/[\d,]+(?:\.\d+)?/g)].map((m) => Number(m[0].replace(/,/g, "")));
  if (!nums.length || nums.some(Number.isNaN)) return null;
  const open = display.includes("+") || /from/i.test(display);
  return { currency, low: nums[0], high: nums[1], open };
}

/** Under-$100 gift list, USD prices only, from the listed (lowest) price. */
export function underHundred() {
  return PIECES.filter((p) => {
    const pr = parsePrice(p.price);
    return pr && pr.currency === "USD" && pr.low < 100;
  }).sort((a, b) => parsePrice(a.price)!.low - parsePrice(b.price)!.low);
}

/** "Maker Name" without repeating words ("AGA" + "AGA Classic 100" -> "AGA Classic 100"). */
export function fullName(p: Piece) {
  const maker = p.maker.replace(/\s*\(.*\)/, "");
  const m = maker.split(" ");
  const n = p.name.split(" ");
  let k = Math.min(m.length, n.length);
  while (k > 0 && m.slice(-k).join(" ").toLowerCase() !== n.slice(0, k).join(" ").toLowerCase()) k--;
  return [...m, ...n.slice(k)].join(" ");
}
