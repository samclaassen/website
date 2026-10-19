import { Suspense } from "react";
import { generatePageMetadata, itemListJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { BrowserView, PieceBrowser } from "@/components/pieces/PieceBrowser";
import { CATEGORIES, MATERIAL_FAMILIES, PIECES, TIERS, browseOrder, fullName } from "@/lib/pieces";

export const metadata = generatePageMetadata({
  title: "Pieces",
  description: `All ${PIECES.length} Wave 1 pieces for the hearth, the door and the table: forged-iron andirons and latches, solid brass and bronze hardware, stoves, hardwood and copper. Filter by category, price band and material.`,
  path: "/pieces",
});

export default function PiecesPage() {
  const ordered = browseOrder();
  const props = { pieces: ordered, categories: CATEGORIES, tiers: TIERS, materials: MATERIAL_FAMILIES };
  return (
    <div className="wrap pb-24">
      <JsonLd
        data={itemListJsonLd(
          "Legacy Homeware pieces",
          ordered.map((p) => ({ name: fullName(p), path: `/pieces/${p.slug}` })),
        )}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Pieces", href: "/pieces" }])} />
      <header className="text-center py-16 sm:py-20">
        <p className="lab">The collection · Wave 1</p>
        <h1 className="display font-light text-[46px] sm:text-[60px] leading-[1.05] mt-4">Pieces</h1>
        <p className="mt-5 max-w-[620px] mx-auto text-[19px] text-caption">
          {PIECES.length} new pieces for the hearth, the door and the table, each checked against the Heirloom
          Standard. Prices live on the piece pages.
        </p>
      </header>
      <Suspense fallback={<BrowserView {...props} filters={{ category: "", tier: "", material: "", q: "" }} />}>
        <PieceBrowser {...props} />
      </Suspense>
    </div>
  );
}
