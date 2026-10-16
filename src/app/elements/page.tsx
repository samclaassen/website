import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryImage } from "@/components/details/EntryImage";
import { ELEMENTS, coverEntry, entriesForElement, getElement, getEntry, isCatalogPlate, photoEntries } from "@/lib/details";
import { ELEMENT_GROUPS, groupHref } from "@/data/elementGroups";

export const metadata = generatePageMetadata({
  title: "Architectural Elements: Doors, Cabinetry, Paneling, Fireplaces and Ornament",
  description:
    "Browse the architectural library by object: interior doors, cabinetry and built-ins, wall paneling, fireplaces, stairs and trim, ornament and hardware, with documented examples in every style.",
  path: "/elements",
});

export default function ElementsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Architectural Elements", href: "/elements" }])} />
      <JsonLd data={itemListJsonLd("Architectural elements", ELEMENTS.map((e) => ({ name: e.name, path: `/elements/${e.slug}` })))} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Architectural Elements" }]} />

      <section className="px-5 sm:px-8 lg:px-12 pt-6 pb-16">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Architectural elements</p>
            <h1 className="font-serif text-[clamp(2.6rem,5vw,4.25rem)] font-normal leading-[1.04] tracking-[-0.015em] text-stone">
              Every detail has a history
            </h1>
          </div>
          <p className="lg:col-span-5 lg:pt-12 text-[17px] leading-[1.75] text-muted">
            Browse by the object itself: how doors, cabinetry, paneling, fireplaces, stairs and ornament were designed in each tradition, and how
            those designs compare across styles.
          </p>
        </div>
      </section>

      <div className="px-5 sm:px-8 lg:px-12 pb-28">
        <div className="mx-auto max-w-[1440px] space-y-24">
          {ELEMENT_GROUPS.map((g) => {
            const cover = getEntry(g.cover);
            const count = g.elements.reduce((n, el) => n + entriesForElement(el).length, 0);
            return (
              <section key={g.slug} id={g.slug} className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-border pt-12">
                <Link href={groupHref(g)} className="group lg:col-span-4 block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark mb-5">
                    {cover && <EntryImage image={cover.image} fill sizes="(max-width: 1024px) 100vw, 33vw" className="img-quiet object-cover" />}
                  </div>
                </Link>
                <div className="lg:col-span-8">
                  <h2 className="font-serif text-[clamp(2rem,3.4vw,2.9rem)] font-normal leading-[1.08] text-stone mb-3">{g.name}</h2>
                  <p className="text-[16px] leading-[1.7] text-muted mb-2 max-w-2xl">{g.description}</p>
                  <p className="text-[13px] text-light mb-8">{count} documented examples</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {g.elements
                      .map((el) => ({ el: getElement(el)!, list: entriesForElement(el) }))
                      .filter((x) => x.el && x.list.length > 0)
                      .map(({ el, list }) => {
                        const c = photoEntries(list).find((e) => e.image.local) ?? coverEntry(list);
                        return (
                          <Link key={el.slug} href={`/elements/${el.slug}`} className="group block">
                            <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark mb-3">
                              {c && (
                                <EntryImage
                                  image={c.image}
                                  fill
                                  sizes="(max-width: 768px) 50vw, 22vw"
                                  className={`img-quiet ${isCatalogPlate(c) ? "object-contain p-3" : "object-cover"}`}
                                />
                              )}
                            </div>
                            <h3 className="font-serif text-[20px] leading-[1.2] text-stone">{el.name}</h3>
                            <p className="mt-1 text-[12.5px] text-light">{list.length} examples</p>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
