import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryImage } from "@/components/details/EntryImage";
import { STYLES, entriesForStyle, coverEntry } from "@/lib/details";

export const metadata = generatePageMetadata({
  title: "Architectural Styles",
  description:
    "Explore twelve architectural styles, from Tudor and Georgian to Arts & Crafts, Art Deco, mid-century and mountain modern, through real examples of cabinetry, paneling, mantels, doors and built-ins.",
  path: "/styles",
});

export default function StylesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Styles", href: "/styles" }])} />
      <JsonLd data={itemListJsonLd("Architectural styles", STYLES.map((s) => ({ name: s.name, path: `/styles/${s.slug}` })))} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Styles" }]} />

      <section className="px-6 lg:px-10 pt-8 pb-16">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">Explore by style</p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.1] text-stone max-w-2xl mb-6">
            Twelve architectural styles, told through their details
          </h1>
          <p className="text-base leading-[1.8] text-muted max-w-2xl">
            Each style page explains how to recognize the style and gathers real historical examples of its
            cabinetry, paneling, mantels, doors and built-ins. Every example can be the starting point for a custom piece.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {STYLES.map((s) => {
            const list = entriesForStyle(s.slug);
            const cover = coverEntry(list);
            return (
              <Link key={s.slug} href={`/styles/${s.slug}`} className="group">
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
                <p className="text-[12px] text-muted mb-1">{s.era}</p>
                <h2 className="font-serif text-2xl font-semibold text-stone group-hover:text-muted transition-colors">{s.name}</h2>
                <p className="mt-2 text-[14px] leading-[1.7] text-muted">{s.summary}</p>
                <p className="mt-3 text-[12px] tracking-[0.08em] uppercase text-bark">{list.length} examples</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
