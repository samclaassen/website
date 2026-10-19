import Link from "next/link";
import { breadcrumbJsonLd, generatePageMetadata, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { PieceList } from "@/components/pieces/PieceCard";
import { fullName, underHundred } from "@/lib/pieces";
import { PRICE_CHECKED_DISPLAY } from "@/data/pieces";

export const metadata = generatePageMetadata({
  title: "Heirlooms under $100",
  description: "Gift ideas under $100 that pass the Heirloom Standard: forged iron for the hearth and the door, bronze and brass hooks, hardwood for the table.",
  path: "/gifts",
});

export default function GiftsPage() {
  const list = underHundred();
  return (
    <>
      <JsonLd
        data={itemListJsonLd(
          "Heirlooms under $100",
          list.map((p) => ({ name: fullName(p), path: `/pieces/${p.slug}` })),
        )}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Gifts", href: "/gifts" }])} />
      <PageHeader kicker="Gift guide" title="Heirlooms under $100">
        <p>
          {list.length} pieces from our Wave 1 list with a starting price under $100, as listed on{" "}
          {PRICE_CHECKED_DISPLAY}. More guides by occasion and budget are coming.
        </p>
      </PageHeader>
      <div className="wrap pb-24">
        <ul className="mb-14 flex flex-wrap justify-center gap-x-8 gap-y-2 lab">
          {list.map((p) => (
            <li key={p.slug}>
              <Link href={`/pieces/${p.slug}`} className="hover:text-terracotta">
                {p.name} · <span className="text-umber">{p.price}</span>
              </Link>
            </li>
          ))}
        </ul>
        <PieceList pieces={list} />
      </div>
    </>
  );
}
