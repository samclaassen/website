import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  getCollection,
  getAllCollectionSlugs,
  type Collection,
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

      {/* Hero — full bleed image with overlay text */}
      <section className="relative min-h-[75vh] flex items-end">
        <Image
          src={collection.image}
          alt={`${collection.era} decorative hardware collection`}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 px-8 lg:px-10 xl:px-16 pb-16 lg:pb-24 w-full">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/60">
              {collection.period}
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] text-white">
              {collection.era}
            </h1>
          </div>
        </div>
      </section>

      {/* Era description — wide editorial intro */}
      <section className="px-8 lg:px-10 xl:px-16 py-20 border-b border-brand-dark/10">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-[1.9] text-brand-dark">
              {collection.description}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-muted mb-4">
              Materials
            </p>
            {collection.materials.map((m) => (
              <p key={m} className="text-[14px] text-brand-dark leading-relaxed">
                {m}
              </p>
            ))}
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-muted mb-4">
              Period
            </p>
            <p className="text-[14px] text-brand-dark">
              {collection.period}
            </p>

            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-muted mb-4 mt-8">
              Pieces
            </p>
            <p className="text-[14px] text-brand-dark">
              {collection.pieces.length} curated
            </p>
          </div>
        </div>
      </section>

      {/* Pieces — editorial alternating layouts */}
      <section className="px-8 lg:px-10 xl:px-16 py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-muted mb-20">
            The collection
          </p>

          <div className="space-y-32">
            {collection.pieces.map((piece, i) => {
              const isEven = i % 2 === 0;
              const pieceImage = piece.image ?? collection.image;

              return (
                <article
                  key={piece.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Image */}
                  <div
                    className={`lg:col-span-7 relative aspect-[4/3] overflow-hidden ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={pieceImage}
                      alt={`${piece.name} — ${piece.type} in ${piece.material}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>

                  {/* Text */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven
                        ? "lg:order-2 lg:pl-8"
                        : "lg:order-1 lg:pr-8"
                    }`}
                  >
                    <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-muted">
                      {piece.type} · {piece.year}
                    </p>

                    <h2 className="mt-4 font-serif text-3xl font-semibold text-brand-dark lg:text-4xl">
                      {piece.name}
                    </h2>

                    <p className="mt-6 text-[15px] leading-[1.8] text-brand-muted">
                      {piece.description}
                    </p>

                    <div className="mt-8 flex items-center gap-6">
                      <span className="text-[13px] text-brand-dark">
                        {piece.material}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next era — editorial transition */}
      <section className="border-t border-brand-dark/10">
        <Link
          href={`/collections/${nextCol.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]"
        >
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-muted">
              Next era
            </p>
            <h3 className="mt-4 font-serif text-4xl font-semibold text-brand-dark group-hover:text-brand-muted transition-colors lg:text-5xl">
              {nextCol.era}
            </h3>
            <p className="mt-4 text-[15px] text-brand-muted">
              {nextCol.period}
            </p>
          </div>
          <div className="relative min-h-[40vh]">
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
