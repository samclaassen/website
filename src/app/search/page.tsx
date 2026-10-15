import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SearchClient } from "@/components/search/SearchClient";
import { ELEMENTS, ENTRIES, STYLES } from "@/lib/details";

export const metadata = generatePageMetadata({
  title: "Search Architectural Details",
  description:
    "Search 200 historical architectural details by style, element, motif, wood and tier, from Shaker cupboards and Victorian mantels to Art Deco doors and Colorado lodges.",
  path: "/search",
});

export default function SearchPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Search", href: "/search" }])} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <section className="px-6 lg:px-10 pt-8 pb-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">The archive</p>
          <h1 className="font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] font-semibold leading-[1.1] text-stone mb-4">
            Search {ENTRIES.length} architectural details
          </h1>
          <p className="text-base leading-[1.8] text-muted max-w-2xl mb-10">
            Real examples from museums, archives and period catalogs. Filter by style, element and tier, or search for a
            motif, a wood, a maker or a place.
          </p>
          <SearchClient
            styles={STYLES.map((s) => ({ slug: s.slug, name: s.name }))}
            elements={ELEMENTS.map((e) => ({ slug: e.slug, name: e.name }))}
          />
        </div>
      </section>
    </>
  );
}
