import { generatePageMetadata, webPageJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { COLLECTIONS, getCollection, getAllCollectionSlugs } from "@/lib/collections";
import { SITE_NAME } from "@/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getAllCollectionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
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

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
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

  // Find adjacent collections for navigation
  const currentIndex = COLLECTIONS.findIndex((c) => c.slug === slug);
  const prevCollection = currentIndex > 0 ? COLLECTIONS[currentIndex - 1] : null;
  const nextCollection = currentIndex < COLLECTIONS.length - 1 ? COLLECTIONS[currentIndex + 1] : null;

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
          { name: collection.name, href: `/collections/${collection.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="bg-brand-dark text-brand-cream py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "Collections", href: "/collections" },
              { name: collection.name, href: `/collections/${collection.slug}` },
            ]}
          />
          <div className="mt-8">
            <p className="text-sm font-medium tracking-widest uppercase text-brand-gold">
              {collection.era} · {collection.period}
            </p>
            <h1 className="mt-3 font-serif text-5xl font-semibold sm:text-6xl">
              {collection.name}
            </h1>
            <p className="mt-2 text-xl italic text-brand-cream/60">
              &ldquo;{collection.tagline}&rdquo;
            </p>
            <p className="mt-6 text-lg leading-relaxed text-brand-cream/70 max-w-2xl">
              {collection.description}
            </p>
          </div>
        </div>
      </section>

      {/* About this style */}
      <section className="py-16 px-6 bg-brand-cream">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold text-brand-dark">
            About {collection.era} Hardware
          </h2>
          <p className="mt-6 text-brand-muted leading-relaxed text-lg">
            {collection.longDescription}
          </p>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-16 px-6 bg-brand-warm">
        <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-3">
          {/* Materials */}
          <div className="rounded-sm border border-brand-dark/10 bg-brand-cream p-6">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-gold">
              Materials &amp; Finishes
            </h3>
            <ul className="mt-4 space-y-2">
              {collection.materials.map((m) => (
                <li key={m} className="text-brand-muted">{m}</li>
              ))}
            </ul>
          </div>

          {/* Motifs */}
          <div className="rounded-sm border border-brand-dark/10 bg-brand-cream p-6">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-gold">
              Design Motifs
            </h3>
            <ul className="mt-4 space-y-2">
              {collection.motifs.map((m) => (
                <li key={m} className="text-brand-muted">{m}</li>
              ))}
            </ul>
          </div>

          {/* Home Styles */}
          <div className="rounded-sm border border-brand-dark/10 bg-brand-cream p-6">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-gold">
              Ideal For
            </h3>
            <ul className="mt-4 space-y-2">
              {collection.homeStyles.map((s) => (
                <li key={s} className="text-brand-muted">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section (AEO) */}
      <section className="py-16 px-6 bg-brand-cream">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold text-brand-dark">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-brand-dark">{faq.question}</h3>
                <p className="mt-2 text-brand-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Navigation */}
      <section className="py-12 px-6 border-t border-brand-dark/10 bg-brand-warm">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          {prevCollection ? (
            <Link
              href={`/collections/${prevCollection.slug}`}
              className="group text-left"
            >
              <p className="text-xs tracking-widest uppercase text-brand-muted">&larr; Previous</p>
              <p className="mt-1 font-serif text-lg text-brand-dark group-hover:text-brand-gold transition-colors">
                {prevCollection.name}
              </p>
            </Link>
          ) : <div />}
          <Link
            href="/collections"
            className="text-sm font-medium tracking-wide uppercase text-brand-gold hover:text-brand-dark transition-colors"
          >
            All Collections
          </Link>
          {nextCollection ? (
            <Link
              href={`/collections/${nextCollection.slug}`}
              className="group text-right"
            >
              <p className="text-xs tracking-widest uppercase text-brand-muted">Next &rarr;</p>
              <p className="mt-1 font-serif text-lg text-brand-dark group-hover:text-brand-gold transition-colors">
                {nextCollection.name}
              </p>
            </Link>
          ) : <div />}
        </div>
      </section>
    </>
  );
}
