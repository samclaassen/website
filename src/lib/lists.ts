import { ALL_LISTS, BIFL_LISTS, GIFT_GUIDES } from "@/data/lists";
import type { Comparison, ComparisonField, ListPick, ListSection, PieceListPage, ProseBlock } from "@/data/lists/types";
import { PRICE_CHECKED } from "@/data/pieces";
import type { Piece } from "./piece-types";
import { CHECK_LABEL, CHECK_ORDER } from "./piece-types";
import { PIECES, fullName, parsePrice, verifiedCount, verifiedSummary } from "./pieces";
import { stripLinks } from "./guides";

export { ALL_LISTS, BIFL_LISTS, GIFT_GUIDES };
export type { PieceListPage };

export const BIFL_PATH = "/buy-it-for-life";
export const GIFTS_PATH = "/gifts";

/** A gift must verify at least this many of the five tests. */
export const GIFT_FLOOR = 4;

export function listPath(list: Pick<PieceListPage, "type" | "slug">) {
  return `${list.type === "bifl" ? BIFL_PATH : GIFTS_PATH}/${list.slug}`;
}

export function getList(type: PieceListPage["type"], slug: string) {
  return ALL_LISTS.find((l) => l.type === type && l.slug === slug);
}

/**
 * The Heirloom Standard as a number, for ranking: a verified pass counts 2, a partial
 * (verified but short, e.g. a 5-year warranty) counts 1, and a test we haven't confirmed
 * counts 0 until we have.
 */
export function standardScore(p: Piece) {
  return CHECK_ORDER.reduce((sum, k) => {
    const s = p.checks[k].status;
    return sum + (s === "pass" ? 2 : s === "partial" ? 1 : 0);
  }, 0);
}

const BY_ID = new Map(PIECES.map((p) => [p.id, p]));

function pieceById(id: string, where: string) {
  const p = BY_ID.get(id);
  if (!p) throw new Error(`Unknown piece id "${id}" in ${where} (src/data/lists).`);
  return p;
}

/** Why a piece can't appear on a list, or null if it can. */
function ineligible(list: PieceListPage, p: Piece): string | null {
  if (list.type === "gift" && verifiedCount(p) < GIFT_FLOOR) {
    return `it verifies ${verifiedCount(p)} of 5 tests; gift guides need ${GIFT_FLOOR}`;
  }
  const price = parsePrice(p.price);
  if (price?.currency === "GBP" && list.budget && !list.allowGbp) return "it has a UK price in a USD budget guide";
  if (list.budget && price?.currency === "USD") {
    const { min, max } = list.budget;
    if (min !== undefined && price.low < min) return `its listed price (${p.price}) is under $${min}`;
    if (max !== undefined && price.low >= max) return `its listed price (${p.price}) is $${max} or more`;
  }
  return null;
}

export interface ResolvedPick extends ListPick {
  piece: Piece;
  /** Position on the page, from 1, across all sections. */
  rank: number;
}

export interface ResolvedSection extends Omit<ListSection, "picks"> {
  picks: ResolvedPick[];
}

const resolved = new Map<string, ResolvedSection[]>();

/**
 * The page's sections with their pieces. Ranked lists are sorted within each section by the
 * Standard score (a stable sort, so the editorial order holds among equals). Pieces that
 * don't qualify for a guide are dropped with a build-time warning rather than shown.
 */
export function sectionsFor(list: PieceListPage): ResolvedSection[] {
  const key = listPath(list);
  const cached = resolved.get(key);
  if (cached) return cached;

  const seen = new Set<string>();
  let rank = 0;
  const sections = list.sections
    .map((s) => {
      const picks = s.picks
        .map((pick, order) => {
          if (seen.has(pick.id)) throw new Error(`Piece ${pick.id} appears twice in ${key} (src/data/lists).`);
          seen.add(pick.id);
          return { pick, order, piece: pieceById(pick.id, key) };
        })
        .filter(({ piece }) => {
          const why = ineligible(list, piece);
          if (why) console.warn(`[lists] Left ${piece.id} (${piece.name}) out of ${key}: ${why}.`);
          return !why;
        })
        .sort((a, b) => (list.type === "bifl" ? standardScore(b.piece) - standardScore(a.piece) : 0) || a.order - b.order)
        .map(({ pick, piece }) => ({ ...pick, piece, rank: ++rank }));
      return { ...s, picks };
    })
    .filter((s) => s.picks.length > 0);

  resolved.set(key, sections);
  return sections;
}

export function picksFor(list: PieceListPage) {
  return sectionsFor(list).flatMap((s) => s.picks);
}

export function topPick(list: PieceListPage) {
  return picksFor(list)[0];
}

/** "from $29.90" for a list's cheapest USD pick, for cards. */
export function fromPrice(list: PieceListPage) {
  const usd = picksFor(list)
    .map((pk) => ({ display: pk.piece.price, price: parsePrice(pk.piece.price) }))
    .filter((x) => x.price?.currency === "USD")
    .sort((a, b) => a.price!.low - b.price!.low);
  if (!usd.length) return null;
  return usd[0].display.replace(/^from\s+/i, "").replace(/\+$/, "");
}

/** Lists a piece appears on, with its position, in list order. */
export function listsFor(p: Piece) {
  return ALL_LISTS.flatMap((list) => {
    const pick = picksFor(list).find((pk) => pk.piece.id === p.id);
    return pick ? [{ list, rank: pick.rank }] : [];
  });
}

/** Ranked lists that point to a care guide. */
export function listsForGuide(slug: string) {
  return BIFL_LISTS.filter((l) => l.care.includes(slug));
}

export const FIELD_LABEL: Record<ComparisonField, string> = {
  price: "Price",
  material: "Material",
  madeIn: "Made in",
  warranty: "Warranty",
  standard: "Heirloom Standard",
};

export const NOT_VERIFIED = "Not yet verified";

export function fieldValue(p: Piece, field: ComparisonField) {
  switch (field) {
    case "price":
      return p.price;
    case "material":
      return p.material;
    case "madeIn":
      return p.madeIn ?? NOT_VERIFIED;
    case "warranty":
      return p.warranty ?? NOT_VERIFIED;
    case "standard":
      return verifiedSummary(p);
  }
}

export function comparisonPieces(c: Comparison) {
  return c.kind === "table" ? [] : c.ids.map((id) => pieceById(id, `comparison "${c.id}"`));
}

function blockText(b: ProseBlock) {
  return b.type === "list" ? b.items.join(" ") : b.text;
}

/** Everything a list page says, as plain text (for word counts). */
export function listPlainText(list: PieceListPage) {
  const parts: string[] = [list.title, list.question, list.answer, list.method];
  for (const s of sectionsFor(list)) {
    parts.push(s.heading, s.intro ?? "");
    for (const pk of s.picks) parts.push(pk.label, fullName(pk.piece), pk.verdict, pk.chooseIf ?? "");
  }
  if (list.comparison) {
    const c = list.comparison;
    parts.push(c.heading, c.intro);
    if (c.kind === "versus") parts.push(...c.rows.flatMap((r) => [r.label, ...r.values]), c.verdict);
    if (c.kind === "table") parts.push(...c.columns, ...c.rows.flat(), c.note ?? "");
    if (c.kind === "pieces" && c.verdict) parts.push(c.verdict);
  }
  for (const g of list.guide) parts.push(g.heading, ...g.blocks.map(blockText));
  parts.push(...list.faqs.map((f) => `${f.question} ${f.answer}`));
  return stripLinks(parts.join("\n"));
}

export function listWordCount(list: PieceListPage) {
  return listPlainText(list).split(/\s+/).filter(Boolean).length;
}

const STATUS = { pass: "Passes", partial: "Partial", unverified: "Not yet verified" } as const;

/** The list as Markdown, for /llms-full.txt. */
export function listMarkdown(list: PieceListPage, siteUrl: string) {
  const ranked = list.type === "bifl";
  const lines: string[] = [
    `## ${list.title}`,
    "",
    `URL: ${siteUrl}${listPath(list)}`,
    `Updated: ${list.updated}. Prices as listed on ${PRICE_CHECKED}; check the retailer for current prices.`,
    "",
    `**${list.question}**`,
    "",
    stripLinks(list.answer),
    "",
    `${ranked ? "How we ranked" : "How we chose"}: ${stripLinks(list.method)}`,
    "",
  ];
  for (const s of sectionsFor(list)) {
    lines.push(`### ${s.heading}`, "");
    if (s.intro) lines.push(stripLinks(s.intro), "");
    for (const pk of s.picks) {
      const p = pk.piece;
      lines.push(
        `${ranked ? `${pk.rank}. ` : "- "}${fullName(p)} (${pk.label}): ${stripLinks(pk.verdict)}`,
        `   Material: ${p.material}. Made in: ${p.madeIn ?? NOT_VERIFIED}. Warranty: ${p.warranty ?? NOT_VERIFIED}. Price: ${p.price} at ${p.retailer}. Standard: ${verifiedSummary(p)}${
          CHECK_ORDER.some((k) => p.checks[k].status !== "pass")
            ? ` (${CHECK_ORDER.filter((k) => p.checks[k].status !== "pass")
                .map((k) => `${CHECK_LABEL[k]}: ${STATUS[p.checks[k].status]}`)
                .join("; ")})`
            : ""
        }.${p.worthKnowing ? ` Worth knowing: ${p.worthKnowing}` : ""}`,
        `   ${siteUrl}/pieces/${p.slug}`,
      );
    }
    lines.push("");
  }
  const c = list.comparison;
  if (c) {
    lines.push(`### ${c.heading}`, "", stripLinks(c.intro), "");
    if (c.kind === "table") {
      lines.push(`| ${c.columns.join(" | ")} |`, `| ${c.columns.map(() => "---").join(" | ")} |`);
      for (const r of c.rows) lines.push(`| ${r.map(stripLinks).join(" | ")} |`);
      if (c.note) lines.push("", stripLinks(c.note));
    } else {
      const ps = comparisonPieces(c);
      if (c.kind === "versus") {
        lines.push(`| | ${ps.map(fullName).join(" | ")} |`, `| --- | ${ps.map(() => "---").join(" | ")} |`);
        for (const f of c.fields) lines.push(`| ${FIELD_LABEL[f]} | ${ps.map((p) => fieldValue(p, f)).join(" | ")} |`);
        for (const r of c.rows) lines.push(`| ${r.label} | ${r.values.map(stripLinks).join(" | ")} |`);
      } else {
        lines.push(`| Piece | ${c.fields.map((f) => FIELD_LABEL[f]).join(" | ")} |`, `| --- | ${c.fields.map(() => "---").join(" | ")} |`);
        for (const p of ps) lines.push(`| ${fullName(p)} | ${c.fields.map((f) => fieldValue(p, f)).join(" | ")} |`);
      }
      if ("verdict" in c && c.verdict) lines.push("", stripLinks(c.verdict));
    }
    lines.push("");
  }
  for (const g of list.guide) {
    lines.push(`### ${g.heading}`, "");
    for (const b of g.blocks) {
      if (b.type === "h3") lines.push(`**${stripLinks(b.text)}**`, "");
      else if (b.type === "list") lines.push(...b.items.map((i) => `- ${stripLinks(i)}`), "");
      else lines.push(stripLinks(b.text), "");
    }
  }
  lines.push("### Questions", "");
  for (const f of list.faqs) lines.push(`Q: ${f.question}`, `A: ${stripLinks(f.answer)}`, "");
  return lines.join("\n");
}
