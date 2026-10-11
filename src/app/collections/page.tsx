import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { COLLECTIONS } from "@/lib/collections";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Collections",
  description:
    "Explore Legacy Homeware's seven decorative hardware collections — each inspired by a distinct architectural era, from Arts & Crafts to Art Deco.",
  path: "/collections",
  keywords: ["decorative hardware", "home hardware collections", "switch plates", "outlet covers", "doorknobs", "architectural hardware"],
});

export default function CollectionsPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: "Collections",
          description:
            "Explore Legacy Homeware's seven decorative hardware collections — each inspired by a distinct architectural era.",
          path: "/collections",
        })}
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumbs items={[{ name: "Collections", href: "/collections" }]} />

        <header className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-gold">
            Seven Styles, Centuries of Craft
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-brand-dark sm:text-5xl">
            Our Collections
          </h1>
          <p className="mt-6 text-brand-muted leading-relaxed">
            Every collection is rooted in a real architectural era — the same eras that
            shaped the homes people live in today. Find the style that belongs in yours.
          </p>
        </header>

        <div className="mt-16 space-y-8">
          {COLLECTIONS.map((collection, index) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group block rounded-sm border border-brand-dark/10 bg-brand-cream hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-xs font-medium tracking-widest uppercase text-brand-gold">
                      {collection.era} · {collection.period}
                    </p>
                    <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-dark group-hover:text-brand-gold transition-colors">
                      {collection.name}
                    </h2>
                    <p className="mt-1 text-sm italic text-brand-muted">
                      &ldquo;{collection.tagline}&rdquo;
                    </p>
                    <p className="mt-4 text-brand-muted leading-relaxed max-w-2xl">
                      {collection.description}
                    </p>
                  </div>
                  <span className="text-sm font-medium tracking-wide uppercase text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity self-center">
                    Explore →
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {collection.materials.map((material) => (
                    <span
                      key={material}
                      className="rounded-full border border-brand-dark/10 px-3 py-1 text-xs text-brand-muted"
                    >
                      {material}
                    </span>
                  ))}
                  {collection.homeStyles.slice(0, 3).map((style) => (
                    <span
                      key={style}
                      className="rounded-full bg-brand-warm px-3 py-1 text-xs text-brand-muted"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
