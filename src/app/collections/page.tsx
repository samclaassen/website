import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { COLLECTIONS } from "@/lib/collections";
import Link from "next/link";
import Image from "next/image";

export const metadata = generatePageMetadata({
  title: "Collections",
  description:
    "Explore Legacy Homeware's seven decorative hardware collections — each inspired by a distinct architectural era, from Arts & Crafts to Art Deco.",
  path: "/collections",
  keywords: [
    "decorative hardware",
    "home hardware collections",
    "switch plates",
    "outlet covers",
    "doorknobs",
    "architectural hardware",
  ],
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

      {/* Hero header */}
      <section className="bg-brand-dark text-brand-cream py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={[{ name: "Collections", href: "/collections" }]} />
          <div className="mt-8 text-center">
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-brand-gold">
              Seven Styles, Centuries of Craft
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Our Collections
            </h1>
            <p className="mt-6 text-lg text-brand-cream/60 leading-relaxed max-w-2xl mx-auto">
              Every collection is rooted in a real architectural era — the same
              eras that shaped the homes people live in today. Find the style
              that belongs in yours.
            </p>
          </div>
        </div>
      </section>

      {/* Collections — alternating image/text rows */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl">
          {COLLECTIONS.map((collection, index) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group block border-b border-brand-dark/5 last:border-b-0"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:w-1/2 overflow-hidden">
                  {collection.image ? (
                    <Image
                      src={collection.image}
                      alt={`${collection.name} collection — ${collection.era} decorative hardware by Legacy Homeware`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-muted/30 to-brand-dark flex items-center justify-center">
                      <span className="font-serif text-4xl text-brand-cream/20">
                        {collection.era}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:w-1/2 lg:px-16 lg:py-20">
                  <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-gold">
                    {collection.era} · {collection.period}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-dark transition-colors group-hover:text-brand-gold sm:text-4xl">
                    {collection.name}
                  </h2>
                  <p className="mt-2 text-sm italic text-brand-muted">
                    &ldquo;{collection.tagline}&rdquo;
                  </p>
                  <p className="mt-6 text-brand-muted leading-relaxed">
                    {collection.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {collection.materials.map((material) => (
                      <span
                        key={material}
                        className="rounded-full border border-brand-dark/10 px-3 py-1 text-xs text-brand-muted"
                      >
                        {material}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {collection.homeStyles.slice(0, 3).map((style) => (
                      <span
                        key={style}
                        className="rounded-full bg-brand-warm px-3 py-1 text-xs text-brand-muted"
                      >
                        {style}
                      </span>
                    ))}
                  </div>

                  <p className="mt-8 text-sm font-medium tracking-widest uppercase text-brand-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Explore Collection →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
