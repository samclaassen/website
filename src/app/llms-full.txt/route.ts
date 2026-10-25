import { AFFILIATE_DISCLOSURE, SITE_DESCRIPTION, SITE_DISAMBIGUATION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import { CATEGORIES, fullName, piecesIn } from "@/lib/pieces";
import { CATEGORY_LABEL, CHECK_LABEL, CHECK_ORDER, TIER_LABEL, TIER_RANGE } from "@/lib/piece-types";
import { PRICE_CHECKED } from "@/data/pieces";
import { CARE_GUIDES, guideMarkdown, stripLinks } from "@/lib/guides";
import { DISQUALIFIERS, STANDARD_TESTS } from "@/components/pieces/StandardList";
import { BIFL_LISTS, BIFL_PATH, GIFTS_PATH, GIFT_GUIDES, listMarkdown } from "@/lib/lists";
import { BIFL_HUB, GIFT_HUB } from "@/data/lists/hubs";

export const dynamic = "force-static";

const STATUS = { pass: "Passes", partial: "Partial", unverified: "Not yet verified" } as const;

/**
 * /llms-full.txt: the whole site as one plain-text document, for answer engines and
 * anyone who wants the full text without the markup. Mirrors what the pages say.
 */
export function GET() {
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_TAGLINE} ${SITE_DESCRIPTION}`,
    "",
    `Site: ${SITE_URL}`,
    `Short index: ${SITE_URL}/llms.txt`,
    "",
    "Legacy Homeware is an editorial guide to new home items made the way they used to be, for the hearth, the door and the table. It is not a store: every piece links to its maker or a retailer. " + AFFILIATE_DISCLOSURE,
    "",
    SITE_DISAMBIGUATION,
    "",
    "Earlier versions of this site were built around period lighting and architectural hardware collections and an archive of architectural details. Those pages are gone and redirect to the current site.",
    "",
    "# The Heirloom Standard",
    "",
    `${SITE_URL}/standard`,
    "",
    "A piece qualifies only if it passes all five tests:",
    "",
    ...CHECK_ORDER.map((k, i) => `${i + 1}. ${CHECK_LABEL[k]}: ${STANDARD_TESTS[k]}`),
    "",
    "Automatic disqualifiers:",
    ...DISQUALIFIERS.map((d) => `- ${d}`),
    "",
    "How we evaluate: we start from the maker's own product page (materials, construction, warranty, where it is made), record the price as listed and the date we checked it, and show the five tests on each piece page with a one-line reason for each. \"Not yet verified\" means a fact has not been confirmed from the maker yet, not that the piece fails. \"Partial\" means a fact is confirmed but falls short (for example a 1–5 year or finish-only warranty).",
    "",
    "# Care & Keeping",
    "",
    `${SITE_URL}/care`,
    "",
    "Guides to the materials behind every piece: the short answer first, then the method, what not to do, and questions. Guides describe materials in general; for a specific piece, the maker's own instructions come first.",
    "",
    ...CARE_GUIDES.map((g) => guideMarkdown(g, SITE_URL)),
    "# Buy it for life",
    "",
    `${SITE_URL}${BIFL_PATH}`,
    "",
    `**${BIFL_HUB.question}** ${stripLinks(BIFL_HUB.answer)}`,
    "",
    "Every list is ranked the same way: first by the Heirloom Standard (a confirmed pass counts fully, a partial counts for half, and an unconfirmed test counts for nothing until confirmed), then by the strength of the maker's guarantee, then by editorial judgement explained in each entry. The pieces have not been tested side by side; facts come from the makers' own published pages.",
    "",
    ...BIFL_LISTS.map((l) => listMarkdown(l, SITE_URL)),
    "# Heirloom gift guides",
    "",
    `${SITE_URL}${GIFTS_PATH}`,
    "",
    `**${GIFT_HUB.question}** ${stripLinks(GIFT_HUB.answer)}`,
    "",
    ...GIFT_GUIDES.map((l) => listMarkdown(l, SITE_URL)),
    `# Pieces (prices as listed on ${PRICE_CHECKED}; check the retailer for current prices)`,
    "",
    `${SITE_URL}/pieces`,
    "",
  ];

  for (const c of CATEGORIES) {
    lines.push(`## ${CATEGORY_LABEL[c]}`, "");
    for (const p of piecesIn(c)) {
      lines.push(
        `### ${fullName(p)}`,
        "",
        `URL: ${SITE_URL}/pieces/${p.slug}`,
        `Maker: ${p.maker}${p.makerBase ? ` (${p.makerBase})` : ""}`,
        `Material: ${p.material}`,
        `Category: ${CATEGORY_LABEL[p.category]}`,
        `Price: ${p.price} at ${p.retailer} (as listed on ${PRICE_CHECKED})${p.priceNote ? `. ${p.priceNote}` : ""}`,
        `Price band: ${TIER_LABEL[p.tier]} (${TIER_RANGE[p.tier]})`,
        `Made in: ${p.madeIn ?? "Not yet verified"}`,
        `Warranty: ${p.warranty ?? "Not yet verified"}`,
        `Buy: ${p.productUrl}`,
        "",
        p.whyHeirloom,
        "",
        "Heirloom Standard:",
        ...CHECK_ORDER.map((k) => `- ${CHECK_LABEL[k]}: ${STATUS[p.checks[k].status]}. ${p.checks[k].reason}`),
        ...(p.worthKnowing ? ["", `Worth knowing: ${p.worthKnowing}`] : []),
        "",
      );
    }
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
