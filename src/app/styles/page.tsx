import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryImage } from "@/components/details/EntryImage";
import { STYLES, coverEntry, entriesForStyle, getEntry, isCatalogPlate } from "@/lib/details";
import { STYLE_META } from "@/data/styleMeta";

export const metadata = generatePageMetadata({
  title: "Architectural Styles: A Visual Directory",
  description:
    "A visual directory of architectural styles and regional traditions, from Alpine Chalet and English Country to Arts & Crafts, Georgian, Art Nouveau and Art Deco, explored through their woodwork.",
  path: "/styles",
});

export default function StylesPage() {
  const cards = STYLES.map((s) => {
    const meta = STYLE_META[s.slug];
    const list = entriesForStyle(s.slug);
    return { s, meta, count: list.length, cover: (meta && getEntry(meta.cover)) || coverEntry(list) };
  });
  const flagships = cards.filter((c) => c.meta?.flagship);
  const rest = cards.filter((c) => !c.meta?.flagship);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Styles", href: "/styles" }])} />
      <JsonLd data={itemListJsonLd("Architectural styles", STYLES.map((s) => ({ name: s.name, path: `/styles/${s.slug}` })))} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Styles" }]} />

      <section className="px-5 sm:px-8 lg:px-12 pt-6 pb-16">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Explore styles</p>
            <h1 className="font-serif text-[clamp(2.6rem,5vw,4.25rem)] font-normal leading-[1.04] tracking-[-0.015em] text-stone">
              Architectural traditions, told through their details
            </h1>
          </div>
          <p className="lg:col-span-5 lg:pt-12 text-[17px] leading-[1.75] text-muted">
            Some of these are historical periods, some are regional building traditions, and several overlap. Each guide explains how to recognize
            the style and gathers documented examples of its doors, paneling, cabinetry, fireplaces and ornament.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-16">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[12px] tracking-[0.16em] uppercase text-light mb-6">Featured collections</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flagships.map(({ s, meta, count, cover }) => (
              <Link key={s.slug} href={`/styles/${s.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark mb-5">
                  {cover && (
                    <EntryImage
                      image={cover.image}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`img-quiet ${isCatalogPlate(cover) ? "object-contain p-5" : "object-cover"}`}
                    />
                  )}
                </div>
                <p className="text-[12px] tracking-[0.12em] uppercase text-light mb-2">{meta?.context}</p>
                <h2 className="font-serif text-[32px] font-normal leading-[1.1] text-stone mb-2">{s.name}</h2>
                <p className="text-[15px] leading-[1.65] text-muted">{meta?.tagline}</p>
                <p className="mt-2 text-[13px] text-light">{count} documented details</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-28">
        <div className="mx-auto max-w-[1440px] border-t border-border pt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {rest.map(({ s, meta, count, cover }) => (
              <Link key={s.slug} href={`/styles/${s.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark mb-5">
                  {cover && (
                    <EntryImage
                      image={cover.image}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`img-quiet ${isCatalogPlate(cover) ? "object-contain p-5" : "object-cover"}`}
                    />
                  )}
                </div>
                <p className="text-[12px] tracking-[0.12em] uppercase text-light mb-2">{meta?.context ?? s.era}</p>
                <h2 className="font-serif text-[26px] font-normal leading-[1.15] text-stone mb-2">{s.name}</h2>
                <p className="text-[14.5px] leading-[1.65] text-muted">{meta?.tagline ?? s.summary}</p>
                <p className="mt-2 text-[13px] text-light">{count} documented details</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
