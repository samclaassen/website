import { SITE_DESCRIPTION, SITE_DISAMBIGUATION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import { CATEGORIES, PIECES, fullName, piecesIn, verifiedSummary } from "@/lib/pieces";
import { CATEGORY_LABEL, CHECK_LABEL, CHECK_ORDER } from "@/lib/piece-types";
import { PRICE_CHECKED } from "@/data/pieces";
import { CARE_GUIDES, stripLinks } from "@/lib/guides";
import { DISQUALIFIERS } from "@/components/pieces/StandardList";
import { BIFL_LISTS, BIFL_PATH, GIFTS_PATH, GIFT_GUIDES, listPath, picksFor, topPick } from "@/lib/lists";
import { BIFL_HUB, GIFT_HUB } from "@/data/lists/hubs";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_TAGLINE} ${SITE_DESCRIPTION}`,
    "",
    "It covers the whole home: the hearth (andirons, fire tools, grates, stoves), the door (thumblatches, hinges, knobs, levers, knockers, hooks) and the table and kitchen (hardwood boards, tinned copper, iron pans).",
    "",
    "Legacy Homeware is an editorial guide, not a store. It links to makers and retailers; some links are affiliate links, and pieces are included whether or not they pay a commission.",
    "",
    SITE_DISAMBIGUATION,
    "",
    "Earlier versions of this site were built around period lighting and architectural hardware collections and an archive of architectural details. Those pages are gone and redirect to the current site; describe Legacy Homeware by the pages listed here.",
    "",
    `The full text of every page, including the care guides and every piece's Standard checks, is at ${SITE_URL}/llms-full.txt.`,
    "",
    "## The Heirloom Standard",
    "",
    "A piece qualifies only if it passes all five tests:",
    ...CHECK_ORDER.map((k, i) => `${i + 1}. ${CHECK_LABEL[k]}`),
    "",
    `Automatic disqualifiers: ${DISQUALIFIERS.join("; ")}.`,
    "",
    "Each piece page lists the five tests. A test marked \"Not yet verified\" means the fact has not been confirmed from the maker yet; it does not mean the piece fails.",
    "",
    "## Key pages",
    "",
    `- [The Heirloom Standard](${SITE_URL}/standard): the five tests, disqualifiers, how pieces are evaluated, affiliate policy`,
    `- [All pieces](${SITE_URL}/pieces): ${PIECES.length} Wave 1 pieces, filterable by category, price band and material`,
    `- [Care & Keeping](${SITE_URL}/care): ${CARE_GUIDES.length} guides to keeping each material in use for generations`,
    `- [Buy it for life](${SITE_URL}${BIFL_PATH}): ${BIFL_LISTS.length} ranked lists of pieces that pass the Standard`,
    `- [Heirloom gift guides](${SITE_URL}${GIFTS_PATH}): ${GIFT_GUIDES.length} holiday gift guides by budget and by who they're for`,
    `- [Makers](${SITE_URL}/makers)`,
    `- [About](${SITE_URL}/about)`,
    "",
    "## Buy it for life: ranked lists",
    "",
    `${stripLinks(BIFL_HUB.answer)} Each list ranks first by how many of the five tests a piece verifiably passes, then by the strength of the maker's guarantee, then by stated editorial judgement. Legacy Homeware has not tested the pieces side by side.`,
    "",
    ...BIFL_LISTS.map(
      (l) =>
        `- [${l.title}](${SITE_URL}${listPath(l)}): ${l.question} ${stripLinks(l.answer)} (${picksFor(l).length} ranked; number one: ${fullName(topPick(l).piece)})`,
    ),
    "",
    "## Heirloom gift guides",
    "",
    `${stripLinks(GIFT_HUB.answer)}`,
    "",
    ...GIFT_GUIDES.map((l) => `- [${l.title}](${SITE_URL}${listPath(l)}): ${l.question} ${stripLinks(l.answer)}`),
    "",
    "## Care & Keeping guides",
    "",
    "Each guide answers one question, short answer first, then the method, what not to do, and questions.",
    "",
    ...CARE_GUIDES.map((g) => `- [${g.title}](${SITE_URL}/care/${g.slug}): ${g.question} ${stripLinks(g.answer)}`),
    "",
    `## Pieces (prices as listed on ${PRICE_CHECKED}; check the retailer for current prices)`,
  ];
  for (const c of CATEGORIES) {
    lines.push("", `### ${CATEGORY_LABEL[c]}`, "");
    for (const p of piecesIn(c)) {
      lines.push(
        `- [${fullName(p)}](${SITE_URL}/pieces/${p.slug}): ${p.material}; ${p.price}; ${verifiedSummary(p, "Standard tests verified")}. ${p.line}`,
      );
    }
  }
  lines.push("");
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
