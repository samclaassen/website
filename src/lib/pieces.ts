import { PIECES } from "@/data/pieces";
import type { Category, MaterialFamily, Piece, Tier } from "./piece-types";
import { CHECK_ORDER } from "./piece-types";

export { PIECES };

export const CATEGORIES: Category[] = ["hearth", "kitchen", "hardware"];
export const TIERS: Tier[] = ["accessible", "mid", "premium"];

export function getPiece(slug: string) {
  return PIECES.find((p) => p.slug === slug);
}

export function piecesIn(category: Category) {
  return PIECES.filter((p) => p.category === category);
}

/** Material families in use, in a stable display order. */
export const MATERIAL_FAMILIES: MaterialFamily[] = (
  [
    "cast-iron",
    "enameled-cast-iron",
    "soapstone",
    "carbon-steel",
    "forged",
    "copper",
    "brass",
    "bronze",
    "hardwood",
    "other",
  ] as MaterialFamily[]
).filter((f) => PIECES.some((p) => p.materialFamily === f));

export function verifiedCount(p: Piece) {
  return CHECK_ORDER.filter((k) => p.checks[k].status === "pass").length;
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

/** Featured pieces for the home page: one per category. */
export const FEATURED_IDS = ["H18", "K3", "W15"];
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
