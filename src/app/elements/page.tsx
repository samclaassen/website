import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryImage } from "@/components/details/EntryImage";
import { ELEMENTS, coverEntry, entriesForElement } from "@/lib/details";
import { fromPrice, pricingFor } from "@/lib/pricing";

export const metadata = generatePageMetadata({
  title: "Architectural Elements: Cabinets, Mantels, Paneling, Doors and More",
  description:
    "Browse custom cabinetry, built-ins, mantels, range hoods, wall paneling, interior doors, trim and more, with historical examples and published price ranges.",
  path: "/elements",
});

export default function ElementsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Elements", href: "/elements" }])} />
      <JsonLd data={itemListJsonLd("Architectural elements", ELEMENTS.map((e) => ({ name: e.name, path: `/elements/${e.slug}` })))} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Elements" }]} />

      <section className="px-6 lg:px-10 pt-8 pb-16">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">Explore by element</p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.1] text-stone max-w-2xl mb-6">
            The parts of a house we make to order
          </h1>
          <p className="text-base leading-[1.8] text-muted max-w-2xl">
            Cabinetry, built-ins, paneling, mantels, hoods, doors, trim and ornament, each with historical examples across
            every style and a published price range for a custom version.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {ELEMENTS.map((el) => {
            const list = entriesForElement(el.slug);
            const cover = coverEntry(list);
            const from = fromPrice(el.slug);
            return (
              <Link key={el.slug} href={`/elements/${el.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark mb-5">
                  {cover && (
                    <EntryImage
                      image={cover.image}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <h2 className="font-serif text-2xl font-semibold text-stone group-hover:text-muted transition-colors">{el.name}</h2>
                <p className="mt-2 text-[13px] text-muted">
                  {list.length} examples
                  {from ? ` · custom from ${from} ${pricingFor(el.slug)?.unit.split(",")[0]}` : " · reference only"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
