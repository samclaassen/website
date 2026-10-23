import { CARE_GUIDES } from "@/data/guides";
import type { CareGuide, GuideBlock } from "@/data/guides/types";
import { PIECES } from "@/data/pieces";
import type { Piece } from "./piece-types";

export { CARE_GUIDES };
export type { CareGuide };

/** Guides shown on the home page, in order. */
export const HOME_GUIDE_SLUGS = ["cast-iron", "brass-and-bronze", "wood", "copper"];

export function getGuide(slug: string) {
  return CARE_GUIDES.find((g) => g.slug === slug);
}

export function homeGuides() {
  return HOME_GUIDE_SLUGS.map((s) => getGuide(s)).filter((g): g is CareGuide => Boolean(g));
}

export function guideApplies(g: CareGuide, p: Piece) {
  if (!g.families.includes(p.materialFamily)) return false;
  if (g.kinds && !g.kinds.includes(p.kind)) return false;
  if (g.excludeKinds && g.excludeKinds.includes(p.kind)) return false;
  return true;
}

/** Pieces a guide applies to, in collection order. */
export function piecesFor(g: CareGuide) {
  return PIECES.filter((p) => guideApplies(g, p));
}

/** Guides that apply to a piece, in display order; the first is its care guide. */
export function guidesFor(p: Piece) {
  return CARE_GUIDES.filter((g) => guideApplies(g, p));
}

export function guideFor(p: Piece) {
  return guidesFor(p)[0];
}

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** "[label](href)" -> "label", for structured data and plain-text endpoints. */
export function stripLinks(text: string) {
  return text.replace(LINK, "$1");
}

function blockText(b: GuideBlock) {
  return b.type === "list" ? b.items.join(" ") : b.text;
}

/** Everything a guide says, as plain text. */
export function guidePlainText(g: CareGuide) {
  const parts: string[] = [g.title, g.question, g.answer];
  for (const s of g.sections) {
    parts.push(s.heading, ...s.blocks.map(blockText));
  }
  if (g.howTo) parts.push(g.howTo.name, g.howTo.description, ...g.howTo.steps.map((s) => `${s.name}. ${s.text}`));
  if (g.mistakes) parts.push(...g.mistakes);
  parts.push(...g.faqs.map((f) => `${f.question} ${f.answer}`));
  return stripLinks(parts.join("\n"));
}

export function guideWordCount(g: CareGuide) {
  return guidePlainText(g).split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(g: CareGuide) {
  return Math.max(1, Math.round(guideWordCount(g) / 220));
}

/** The guide as Markdown, for /llms-full.txt. */
export function guideMarkdown(g: CareGuide, siteUrl: string) {
  const lines: string[] = [];
  lines.push(`## ${g.title}`, "", `URL: ${siteUrl}/care/${g.slug}`, `Updated: ${g.updated}`, "", `**${g.question}**`, "", stripLinks(g.answer), "");
  for (const s of g.sections) {
    lines.push(`### ${s.heading}`, "");
    for (const b of s.blocks) {
      if (b.type === "h3") lines.push(`**${stripLinks(b.text)}**`, "");
      else if (b.type === "list") lines.push(...b.items.map((i) => `- ${stripLinks(i)}`), "");
      else lines.push(stripLinks(b.text), "");
    }
  }
  if (g.howTo) {
    lines.push(`### ${g.howTo.name}`, "", stripLinks(g.howTo.description), "");
    if (g.howTo.supplies?.length) lines.push(`Supplies: ${g.howTo.supplies.join("; ")}`);
    if (g.howTo.tools?.length) lines.push(`Tools: ${g.howTo.tools.join("; ")}`);
    if (g.howTo.supplies?.length || g.howTo.tools?.length) lines.push("");
    lines.push(...g.howTo.steps.map((s, i) => `${i + 1}. ${s.name}. ${stripLinks(s.text)}`), "");
  }
  if (g.mistakes?.length) lines.push("### What not to do", "", ...g.mistakes.map((m) => `- ${m}`), "");
  lines.push("### Questions", "");
  for (const f of g.faqs) lines.push(`Q: ${f.question}`, `A: ${stripLinks(f.answer)}`, "");
  if (g.sources?.length) {
    lines.push("### Sources", "", ...g.sources.map((s) => `- ${s.name}: ${s.url}${s.note ? ` (${s.note})` : ""}`), "");
  }
  return lines.join("\n");
}
