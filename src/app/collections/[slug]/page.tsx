import {
  generatePageMetadata,
  webPageJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  COLLECTIONS,
  getCollection,
  getAllCollectionSlugs,
} from "@/lib/collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return getAllCollectionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};

  return generatePageMetadata({
    title: `${collection.era} — Decorative Hardware of the ${collection.period} Period`,
    description: collection.description,
    path: `/collections/${collection.slug}`,
    keywords: collection.searchTerms,
  });
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const faqs = [
    {
      question: `What is ${collection.era} style hardware?`,
      answer: collection.longDescription,
    },
    {
      question: `What materials are used in ${collection.era} hardware?`,
      answer: `${collection.era} hardware is typically available in ${collection.materials.join(", ")}. Each piece is cast in solid metal for lasting durability.`,
    },
    {
      question: `What home styles match ${collection.era} hardware?`,
      answer: `${collection.era} hardware is designed for ${collection.homeStyles.join(", ")} homes. This style originated in the ${collection.period} period.`,
    },
  ];

  const currentIndex = COLLECTIONS.findIndex((c) => c.slug === slug);
  const prevCollection =
    currentIndex > 0 ? COLLECTIONS[currentIndex - 1] : null;
  const nextCollection =
    currentIndex < COLLECTIONS.length - 1
      ? COLLECTIONS[currentIndex + 1]
      : null;

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: `${collection.era} Hardware`,
          description: collection.description,
          path: `/collections/${collection.slug}`,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Eras", href: "/collections" },
          {
            name: collection.era,
            href: `/collections/${collection.slug}`,
          },
        ])}
      />

      {/* Hero — era image with editorial overlay */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={collection.image}
          alt={`${collection.era} decorative hardware — ${collection.period}`}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-brand-dark/10" />
        <div className="relative z-10 w-full px-6 pb-10">
          <div className="mx-auto max-w-5xl">
            <Breadcrumbs
              items={[
                { name: "Eras", href: "/collections" },
                {
                  name: collection.era,
                  href: `/collections/${collection.slug}`,
                },
              ]}
            />
            <div className="mt-4">
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-gold">
                {collection.period}
              </p>
              <h1 className="mt-2 font-serif text-4xl font-semibold text-brand-cream sm:text-5xl lg:text-6xl">
                {collection.era}
              </h1>
              <p className="mt-2 text-brand-cream/50 italic">
                {collection.name} Collection — &ldquo;{collection.tagline}
                &rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial description */}
      <section className="px-6 py-16 bg-brand-cream">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg text-brand-muted leading-relaxed">
            {collection.longDescription}
          </p>
        </div>
      </section>

      {/* Defining characteristics — horizontal strip */}
      <section className="px-6 py-12 bg-white border-y border-brand-dark/5">
        <div className="mx-auto max-w-5xl grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold">
              Materials
            </h3>
            <ul className="mt-3 space-y-1.5">
              {collection.materials.map((m) => (
                <li key={m} className="text-sm text-brand-dark">
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold">
              Defining Motifs
            </h3>
            <ul className="mt-3 space-y-1.5">
              {collection.motifs.map((m) => (
                <li key={m} className="text-sm text-brand-dark">
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold">
              Found In
            </h3>
            <ul className="mt-3 space-y-1.5">
              {collection.homeStyles.map((s) => (
                <li key={s} className="text-sm text-brand-dark">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Curated pieces gallery */}
      <section className="px-6 py-16 bg-brand-cream">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-brand-muted">
              Curated Pieces
            </h2>
            <p className="mt-1 font-serif text-2xl font-semibold text-brand-dark sm:text-3xl">
              {collection.pieces.length} representative works
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {collection.pieces.map((piece) => (
              <div
                key={piece.id}
                className="group rounded-sm overflow-hidden bg-white border border-brand-dark/5"
              >
                {/* Piece image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={`${piece.name} — ${piece.material}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm">
                      {piece.type}
                    </span>
                  </div>
                </div>

                {/* Piece details */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl font-semibold text-brand-dark leading-snug">
                      {piece.name}
                    </h3>
                    <span className="text-xs text-brand-muted whitespace-nowrap">
                      {piece.year}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-brand-gold font-medium tracking-wide">
                    {piece.material}
                  </p>
                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                    {piece.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (AEO) */}
      <section className="px-6 py-16 bg-white border-t border-brand-dark/5">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-brand-muted mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-brand-dark/5 pb-8 last:border-0"
              >
                <h3 className="font-semibold text-brand-dark">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Era navigation */}
      <section className="bg-brand-dark">
        <div className="grid sm:grid-cols-2">
          {prevCollection ? (
            <Link
              href={`/collections/${prevCollection.slug}`}
              className="group relative flex items-center justify-center p-12 sm:p-16 overflow-hidden border-r border-brand-cream/5"
            >
              <Image
                src={prevCollection.image}
                alt=""
                fill
                className="object-cover opacity-15 transition-opacity group-hover:opacity-25"
                aria-hidden="true"
              />
              <div className="relative z-10 text-center">
                <p className="text-[10px] tracking-[0.25em] uppercase text-brand-cream/40">
                  ← Previous Era
                </p>
                <p className="mt-2 font-serif text-xl font-semibold text-brand-cream transition-colors group-hover:text-brand-gold">
                  {prevCollection.era}
                </p>
              </div>
            </Link>
          ) : (
            <Link
              href="/collections"
              className="group flex items-center justify-center p-12 sm:p-16 border-r border-brand-cream/5"
            >
              <div className="text-center">
                <p className="text-[10px] tracking-[0.25em] uppercase text-brand-cream/40">
                  ←
                </p>
                <p className="mt-2 font-serif text-xl font-semibold text-brand-cream transition-colors group-hover:text-brand-gold">
                  All Eras
                </p>
              </div>
            </Link>
          )}

          {nextCollection ? (
            <Link
              href={`/collections/${nextCollection.slug}`}
              className="group relative flex items-center justify-center p-12 sm:p-16 overflow-hidden"
            >
              <Image
                src={nextCollection.image}
                alt=""
                fill
                className="object-cover opacity-15 transition-opacity group-hover:opacity-25"
                aria-hidden="true"
              />
              <div className="relative z-10 text-center">
                <p className="text-[10px] tracking-[0.25em] uppercase text-brand-cream/40">
                  Next Era →
                </p>
                <p className="mt-2 font-serif text-xl font-semibold text-brand-cream transition-colors group-hover:text-brand-gold">
                  {nextCollection.era}
                </p>
              </div>
            </Link>
          ) : (
            <Link
              href="/collections"
              className="group flex items-center justify-center p-12 sm:p-16"
            >
              <div className="text-center">
                <p className="text-[10px] tracking-[0.25em] uppercase text-brand-cream/40">
                  →
                </p>
                <p className="mt-2 font-serif text-xl font-semibold text-brand-cream transition-colors group-hover:text-brand-gold">
                  All Eras
                </p>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
