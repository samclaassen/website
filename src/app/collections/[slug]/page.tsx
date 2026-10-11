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
    title: `${collection.name} Collection — ${collection.era} Hardware`,
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
      question: `What materials are used in the ${collection.name} collection?`,
      answer: `The ${collection.name} collection is available in ${collection.materials.join(", ")}. Each piece is cast in solid metal for lasting durability.`,
    },
    {
      question: `What home styles match the ${collection.name} collection?`,
      answer: `The ${collection.name} collection is designed for ${collection.homeStyles.join(", ")} homes. The ${collection.era} style originated in the ${collection.period} period.`,
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
          title: `${collection.name} Collection`,
          description: collection.description,
          path: `/collections/${collection.slug}`,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Collections", href: "/collections" },
          {
            name: collection.name,
            href: `/collections/${collection.slug}`,
          },
        ])}
      />

      {/* Hero with collection image */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {collection.image ? (
          <Image
            src={collection.image}
            alt={`${collection.name} collection — ${collection.era} decorative hardware by Legacy Homeware`}
            fill
            className="object-cover"
            priority
            quality={90}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-muted/40 to-brand-dark" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-brand-dark/20" />

        <div className="relative z-10 w-full px-6 pb-12 pt-32">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { name: "Collections", href: "/collections" },
                {
                  name: collection.name,
                  href: `/collections/${collection.slug}`,
                },
              ]}
            />
            <div className="mt-6">
              <p className="text-sm font-medium tracking-[0.25em] uppercase text-brand-gold">
                {collection.era} · {collection.period}
              </p>
              <h1 className="mt-3 font-serif text-5xl font-semibold text-brand-cream sm:text-6xl lg:text-7xl">
                {collection.name}
              </h1>
              <p className="mt-3 text-xl italic text-brand-cream/60">
                &ldquo;{collection.tagline}&rdquo;
              </p>
              <p className="mt-6 text-lg leading-relaxed text-brand-cream/70 max-w-2xl">
                {collection.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About this style */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-brand-gold">
            The History
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-dark sm:text-4xl">
            About {collection.era} Hardware
          </h2>
          <p className="mt-8 text-lg text-brand-muted leading-relaxed">
            {collection.longDescription}
          </p>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-20 px-6 bg-brand-warm">
        <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-3">
          {/* Materials */}
          <div className="bg-brand-cream p-8 rounded-sm">
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold">
              Materials &amp; Finishes
            </h3>
            <ul className="mt-6 space-y-3">
              {collection.materials.map((m) => (
                <li
                  key={m}
                  className="text-brand-dark font-medium border-b border-brand-dark/5 pb-3 last:border-0 last:pb-0"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Motifs */}
          <div className="bg-brand-cream p-8 rounded-sm">
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold">
              Design Motifs
            </h3>
            <ul className="mt-6 space-y-3">
              {collection.motifs.map((m) => (
                <li
                  key={m}
                  className="text-brand-dark font-medium border-b border-brand-dark/5 pb-3 last:border-0 last:pb-0"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Home Styles */}
          <div className="bg-brand-cream p-8 rounded-sm">
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold">
              Ideal For
            </h3>
            <ul className="mt-6 space-y-3">
              {collection.homeStyles.map((s) => (
                <li
                  key={s}
                  className="text-brand-dark font-medium border-b border-brand-dark/5 pb-3 last:border-0 last:pb-0"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section (AEO) */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-brand-gold">
            Common Questions
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-brand-dark sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-10">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-brand-dark/5 pb-10 last:border-0">
                <h3 className="font-semibold text-lg text-brand-dark">
                  {faq.question}
                </h3>
                <p className="mt-3 text-brand-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Navigation */}
      <section className="bg-brand-dark">
        <div className="grid sm:grid-cols-2">
          {prevCollection ? (
            <Link
              href={`/collections/${prevCollection.slug}`}
              className="group relative flex items-center justify-center p-12 sm:p-16 overflow-hidden border-r border-brand-cream/5"
            >
              {prevCollection.image && (
                <Image
                  src={prevCollection.image}
                  alt=""
                  fill
                  className="object-cover opacity-20 transition-opacity group-hover:opacity-30"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 text-center">
                <p className="text-xs tracking-[0.25em] uppercase text-brand-cream/40">
                  ← Previous Collection
                </p>
                <p className="mt-2 font-serif text-2xl font-semibold text-brand-cream transition-colors group-hover:text-brand-gold">
                  {prevCollection.name}
                </p>
                <p className="mt-1 text-sm text-brand-cream/40">
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
                <p className="text-xs tracking-[0.25em] uppercase text-brand-cream/40">
                  ←
                </p>
                <p className="mt-2 font-serif text-2xl font-semibold text-brand-cream transition-colors group-hover:text-brand-gold">
                  All Collections
                </p>
              </div>
            </Link>
          )}

          {nextCollection ? (
            <Link
              href={`/collections/${nextCollection.slug}`}
              className="group relative flex items-center justify-center p-12 sm:p-16 overflow-hidden"
            >
              {nextCollection.image && (
                <Image
                  src={nextCollection.image}
                  alt=""
                  fill
                  className="object-cover opacity-20 transition-opacity group-hover:opacity-30"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 text-center">
                <p className="text-xs tracking-[0.25em] uppercase text-brand-cream/40">
                  Next Collection →
                </p>
                <p className="mt-2 font-serif text-2xl font-semibold text-brand-cream transition-colors group-hover:text-brand-gold">
                  {nextCollection.name}
                </p>
                <p className="mt-1 text-sm text-brand-cream/40">
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
                <p className="text-xs tracking-[0.25em] uppercase text-brand-cream/40">
                  →
                </p>
                <p className="mt-2 font-serif text-2xl font-semibold text-brand-cream transition-colors group-hover:text-brand-gold">
                  All Collections
                </p>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
