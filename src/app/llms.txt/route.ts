import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import { CATEGORIES, PIECES, fullName, piecesIn, verifiedSummary } from "@/lib/pieces";
import { CATEGORY_LABEL, CHECK_LABEL, CHECK_ORDER } from "@/lib/piece-types";
import { PRICE_CHECKED } from "@/data/pieces";
import { DISQUALIFIERS } from "@/components/pieces/StandardList";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_TAGLINE} ${SITE_DESCRIPTION}`,
    "",
    "Legacy Homeware is an editorial guide, not a store. It links to makers and retailers; some links are affiliate links, and pieces are included whether or not they pay a commission.",
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
    `- [Heirlooms under $100](${SITE_URL}/gifts)`,
    `- [Makers](${SITE_URL}/makers)`,
    `- [About](${SITE_URL}/about)`,
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
