import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { COLLECTIONS } from "@/lib/collections";
import Link from "next/link";
import Image from "next/image";

export const metadata = generatePageMetadata({
  title: "Eras — Decorative Hardware Through History",
  description:
    "Explore seven architectural eras that defined decorative home hardware — from Colonial restraint to Art Nouveau extravagance. Each era tells a story through the hardware it left behind.",
  path: "/collections",
  keywords: [
    "decorative hardware history",
    "architectural hardware eras",
    "hardware design styles",
    "ornamental hardware",
  ],
});

export default function CollectionsPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: "Eras — Decorative Hardware Through History",
          description:
            "Seven architectural eras that defined decorative home hardware design.",
          path: "/collections",
        })}
      />

      {/* Header */}
      <section className="px-6 pt-12 pb-8">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs items={[{ name: "Eras", href: "/collections" }]} />
          <div className="mt-6">
            <h1 className="font-serif text-4xl font-semibold text-brand-dark sm:text-5xl">
              Eras
            </h1>
            <p className="mt-4 text-lg text-brand-muted leading-relaxed max-w-2xl">
              Seven architectural movements that shaped the hardware in our
              homes. Each era brought a distinct philosophy to the craft of
              making the functional beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline grid — visual, editorial */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          {/* Era cards — stacked full-width with image + editorial text */}
          <div className="space-y-px bg-brand-dark/5">
            {COLLECTIONS.map((collection, index) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group block bg-brand-cream hover:bg-white transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[280px]">
                  {/* Image — fixed proportion */}
                  <div
                    className={`relative aspect-[16/9] lg:aspect-auto overflow-hidden ${
                      index % 2 === 0
                        ? "lg:col-span-5 lg:order-1"
                        : "lg:col-span-5 lg:order-2"
                    }`}
                  >
                    <Image
                      src={collection.image}
                      alt={`${collection.era} decorative hardware`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>

                  {/* Text */}
                  <div
                    className={`flex flex-col justify-center px-8 py-10 lg:px-14 lg:py-16 ${
                      index % 2 === 0
                        ? "lg:col-span-7 lg:order-2"
                        : "lg:col-span-7 lg:order-1"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold">
                        {collection.period}
                      </span>
                      <span className="text-brand-dark/10">—</span>
                      <span className="text-xs text-brand-muted">
                        {collection.pieces.length} pieces
                      </span>
                    </div>

                    <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-dark group-hover:text-brand-gold transition-colors sm:text-4xl">
                      {collection.era}
                    </h2>

                    <p className="mt-1 text-sm italic text-brand-muted">
                      {collection.name} Collection
                    </p>

                    <p className="mt-4 text-brand-muted leading-relaxed max-w-lg">
                      {collection.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {collection.materials.map((m) => (
                        <span
                          key={m}
                          className="text-xs text-brand-muted/70 border border-brand-dark/8 rounded-full px-3 py-1"
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 text-xs font-medium tracking-[0.2em] uppercase text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore this era →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
