import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LibraryClient } from "@/components/library/LibraryClient";
import { ELEMENTS, ENTRIES, STYLES, allTags, isCatalogPlate, photoEntries } from "@/lib/details";
import { buildLibraryItems } from "@/lib/searchIndex";

export const metadata = generatePageMetadata({
  title: "Design Library: Architectural Details by Style, Element and Material",
  description: `Browse ${ENTRIES.length} documented architectural details, from carved Alpine Stuben and Tudor linenfold to Shaker cupboards and Art Deco doors. Filter by style, element, material and motif.`,
  path: "/library",
});

export default function LibraryPage() {
  const items = buildLibraryItems();
  // Lead with photographs, interleaving elements so the first screen shows doors, rooms,
  // paneling, mantels and cabinetry together; period catalog plates follow.
  const photos = photoEntries(ENTRIES).filter((e) => !isCatalogPlate(e));
  const queues = new Map<string, typeof photos>();
  for (const e of photos) queues.set(e.element, [...(queues.get(e.element) ?? []), e]);
  const PRIORITY = ["interior-doors", "wall-paneling-wainscoting", "fireplace-mantels", "built-ins-bookcases", "kitchen-cabinets", "trim-moulding", "corbels-brackets-ornament", "cabinet-doors-fronts"];
  const keys = [...PRIORITY.filter((k) => queues.has(k)), ...[...queues.keys()].filter((k) => !PRIORITY.includes(k))];
  const mixed: typeof photos = [];
  while (mixed.length < photos.length) for (const k of keys) { const q = queues.get(k)!; if (q.length) mixed.push(q.shift()!); }
  const ordered = [...mixed, ...ENTRIES.filter((e) => isCatalogPlate(e))];
  const order = new Map(ordered.map((e, i) => [e.slug, i]));
  items.sort((a, b) => (order.get(a.slug) ?? 0) - (order.get(b.slug) ?? 0));
  const used = (kind: "style" | "element") => new Set(ENTRIES.map((e) => e[kind]));
  const styles = STYLES.filter((s) => used("style").has(s.slug)).map((s) => ({ slug: s.slug, name: s.name }));
  const elements = ELEMENTS.filter((e) => used("element").has(e.slug)).map((e) => ({ slug: e.slug, name: e.name }));
  const materials = allTags("materials").filter((t) => t.count >= 2);
  const motifs = allTags("motifs").filter((t) => t.count >= 2);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Design Library", href: "/library" }])} />
      <JsonLd
        data={itemListJsonLd(
          "Legacy Homeware Design Library",
          items.slice(0, 50).map((i) => ({ name: i.title, path: `/library/${i.slug}` })),
        )}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Design Library" }]} />
      <section className="px-5 sm:px-8 lg:px-12 pt-6 pb-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-5">The Design Library</p>
              <h1 className="font-serif text-[clamp(2.6rem,5vw,4.25rem)] font-normal leading-[1.04] tracking-[-0.015em] text-stone">
                {ENTRIES.length} documented architectural details
              </h1>
            </div>
            <p className="lg:col-span-5 lg:pt-12 text-[17px] leading-[1.75] text-muted">
              Doors, paneling, cabinetry, mantels, stairs and ornament from museums, archives, historic houses and period
              catalogs. Each entry is classified by style, element, material and motif, and credited to its source.
            </p>
          </div>
          <LibraryClient items={items} styles={styles} elements={elements} materials={materials} motifs={motifs} />
        </div>
      </section>
    </>
  );
}
