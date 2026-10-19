import Link from "next/link";
import { breadcrumbJsonLd, generatePageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { makers } from "@/lib/pieces";
import { CATEGORY_LABEL } from "@/lib/piece-types";

export const metadata = generatePageMetadata({
  title: "Makers",
  description: "The foundries, forges, coppersmiths and hardware makers behind the Wave 1 pieces on Legacy Homeware.",
  path: "/makers",
});

export default function MakersPage() {
  const list = makers();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Makers", href: "/makers" }])} />
      <PageHeader kicker="Makers" title="Who makes them">
        <p>
          The {list.length} makers behind our Wave 1 pieces. Full maker profiles, with how they work and which of
          their pieces qualify, are coming soon.
        </p>
      </PageHeader>
      <div className="wrap max-w-[920px] pb-24">
        <ul className="border-t border-line">
          {list.map((m) => (
            <li key={m.slug} id={m.slug} className="grid gap-3 sm:grid-cols-[260px_1fr] py-6 border-b border-line scroll-mt-8">
              <div>
                <h2 className="display text-[24px] leading-tight">{m.name}</h2>
                {m.base && <p className="lab mt-1">{m.base}</p>}
              </div>
              <ul className="space-y-1.5 text-[17px]">
                {m.pieces.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/pieces/${p.slug}`} className="link-underline">{p.name}</Link>
                    <span className="text-caption text-[15px]"> · {CATEGORY_LABEL[p.category]}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
