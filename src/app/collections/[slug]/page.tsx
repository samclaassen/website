import Link from "next/link";
import { notFound } from "next/navigation";
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ArchiveExplorer } from "@/components/archive/ArchiveExplorer";
import { COLLECTIONS, getCollection, getAllCollectionSlugs } from "@/lib/collections";
import { OBJECTS } from "@/lib/objects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCollectionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return generatePageMetadata({ title: `${collection.era} — curated objects`, description: collection.description, path: `/collections/${slug}` });
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const next = COLLECTIONS[(COLLECTIONS.findIndex((entry) => entry.slug === slug) + 1) % COLLECTIONS.length];
  const objects = OBJECTS.filter((object) => object.era === slug);

  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Eras & styles", href: "/collections" }, { name: collection.era, href: `/collections/${slug}` }])} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Eras & styles", href: "/collections" }, { label: collection.era }]} />
    <header className="shell era-intro"><div><p className="eyebrow">{collection.period}</p><h1 className="font-serif">{collection.era}</h1></div><div><p>{collection.description}</p><p className="era-count">{objects.length} sourced records · Editorial grouping</p></div></header>
    <ArchiveExplorer objects={objects} fixedEra={slug} />
    <div className="shell next-era"><span className="eyebrow">Keep exploring</span><Link href={`/collections/${next.slug}`} className="font-serif text-4xl">{next.era} <span aria-hidden="true">→</span></Link><Link href="/collections" className="text-link">All eras & styles</Link></div>
  </>;
}
