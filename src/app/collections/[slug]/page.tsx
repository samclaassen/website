import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  getCollection,
  getAllCollectionSlugs,
} from "@/lib/collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { COLLECTIONS } from "@/lib/collections";

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return getAllCollectionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};

  return generatePageMetadata({
    title: `${collection.era} Hardware — Legacy Homeware`,
    description: collection.description,
    path: `/collections/${slug}`,
  });
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const colIndex = COLLECTIONS.findIndex((c) => c.slug === slug);
  const nextCol = COLLECTIONS[(colIndex + 1) % COLLECTIONS.length];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Eras", href: "/collections" },
          { name: collection.era, href: `/collections/${slug}` },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Eras", href: "/collections" },
          { label: collection.era },
        ]}
      />

      {/* Hero — full bleed with overlay, like Aesop hero */}
      <section className="relative min-h-[65vh] flex items-end">
        <Image
          src={collection.image}
          alt={`${collection.era} decorative hardware collection`}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 px-6 lg:px-10 pb-16 w-full max-w-[1400px] mx-auto">
          <p className="text-[13px] tracking-[0.15em] uppercase text-white/60 mb-3">
            {collection.period}
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.05] text-white">
            {collection.era}
          </h1>
        </div>
      </section>

      {/* Era details — split layout */}
      <section className="bg-cream px-6 lg:px-10 py-16">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <p className="text-base leading-[1.9] text-stone">
              {collection.description}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">
              Materials
            </p>
            {collection.materials.map((m) => (
              <p key={m} className="text-sm text-stone leading-relaxed">
                {m}
              </p>
            ))}
          </div>

          <div className="lg:col-span-2">
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">
              Pieces
            </p>
            <p className="text-sm text-stone">
              {collection.pieces.length} curated
            </p>
          </div>
        </div>
      </section>

      {/* Pieces — alternating layout */}
      <section className="bg-cream border-t border-border px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-16">
            The collection
          </p>

          <div className="space-y-24">
            {collection.pieces.map((piece, i) => {
              const isEven = i % 2 === 0;
              const pieceImage = piece.image ?? collection.image;

              return (
                <article
                  key={piece.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={pieceImage}
                      alt={`${piece.name} — ${piece.type} in ${piece.material}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text */}
                  <div
                    className={`${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <p className="text-[13px] text-muted mb-3">
                      {piece.type} · {piece.year}
                    </p>

                    <h2 className="font-serif text-3xl font-semibold text-stone mb-5">
                      {piece.name}
                    </h2>

                    <p className="text-base leading-[1.8] text-muted mb-6">
                      {piece.description}
                    </p>

                    <p className="text-sm text-stone">
                      {piece.material}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next era — Aesop-style transition */}
      <section className="bg-stone">
        <Link
          href={`/collections/${nextCol.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2 min-h-[45vh]"
        >
          <div className="flex flex-col justify-center px-6 lg:px-16 py-16">
            <p className="text-[13px] tracking-[0.15em] uppercase text-white/50 mb-4">
              Next era
            </p>
            <h3 className="font-serif text-3xl font-semibold text-white group-hover:text-white/80 transition-colors lg:text-4xl mb-3">
              {nextCol.era}
            </h3>
            <p className="text-sm text-white/50">
              {nextCol.period} · {nextCol.pieces.length} pieces
            </p>

            <div className="mt-8">
              <span className="cta-button cta-button-light">
                Explore era
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
          <div className="relative min-h-[300px]">
            <Image
              src={nextCol.image}
              alt={nextCol.era}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Link>
      </section>
    </>
  );
}
