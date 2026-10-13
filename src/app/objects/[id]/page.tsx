import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OBJECTS, getObject, displayDate } from "@/lib/objects";
import { getCollection } from "@/lib/collections";
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ObjectCard } from "@/components/archive/ObjectCard";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return OBJECTS.map((object) => ({ id: object.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const object = getObject(id);
  if (!object) return {};
  return generatePageMetadata({ title: object.title, description: object.note, path: `/objects/${id}` });
}

export default async function ObjectPage({ params }: PageProps) {
  const { id } = await params;
  const object = getObject(id);
  if (!object) notFound();
  const collection = getCollection(object.era)!;
  const related = OBJECTS.filter((entry) => entry.era === object.era && entry.id !== id).slice(0, 3);

  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: collection.era, href: `/collections/${collection.slug}` }, { name: object.title, href: `/objects/${id}` }])} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: collection.era, href: `/collections/${collection.slug}` }, { label: object.title }]} />
    <article className="shell object-detail">
      <div>
        {object.image ? <figure><a href={object.image.originalUrl} target="_blank" rel="noopener noreferrer" className="detail-image" aria-label={`Open full-resolution photograph of ${object.title}`}><Image src={object.image.src} alt={object.image.alt} fill priority sizes="(max-width: 800px) 100vw, 55vw" className="object-contain p-5" /></a><figcaption className="detail-caption">{object.image.credit} · <a href={object.image.licenseUrl} target="_blank" rel="noopener noreferrer">{object.image.license}</a><br /><a href={object.image.originalUrl} target="_blank" rel="noopener noreferrer">Open full-resolution photograph ↗</a></figcaption></figure> : <div className="source-image-note"><p className="eyebrow">Photographs at the source</p><h2 className="font-serif text-4xl">See the actual piece.<br />Not a lookalike.</h2><p>This seller’s image reuse permission has not been confirmed. We link to the original photographs rather than using a stock substitute or an AI-generated image.</p><a href={object.sourceUrl} target="_blank" rel="noopener noreferrer" className="cta-button">View seller’s photographs ↗</a></div>}
      </div>
      <div className="object-detail-copy"><p className="eyebrow">{object.kind === "museum" ? "Museum reference · Not for sale" : "External seller listing"} / {object.type}</p><h1 className="font-serif">{object.title}</h1><p className="object-selection-note">{object.note}</p>
        <dl className="object-facts"><div><dt>Maker / designer</dt><dd>{object.creator}</dd></div><div><dt>Date</dt><dd>{object.date}</dd></div><div><dt>Material</dt><dd>{object.medium}</dd></div><div><dt>Filed under</dt><dd><Link href={`/collections/${collection.slug}`}>{collection.era} ↗</Link></dd></div><div><dt>Source</dt><dd><a href={object.sourceUrl} target="_blank" rel="noopener noreferrer">{object.source} ↗</a></dd></div>{object.price && <div><dt>Shortlist price</dt><dd>{object.price}{object.price.startsWith("$") ? " USD" : ""}<span className="block text-xs mt-1">Recorded {displayDate(object.priceDate!)}; not a live quote</span></dd></div>}</dl>
        <a href={object.sourceUrl} target="_blank" rel="noopener noreferrer" className="cta-button">{object.kind === "museum" ? "Read the museum record" : "Check the seller listing"} <span aria-hidden="true">↗</span></a>
        <p className="record-caveat">Source checked {displayDate(object.checkedOn)}. {object.kind === "museum" ? "The object belongs to the museum collection and is shown for reference. Style grouping and selection notes are ours." : "Attributions, dates and condition are supplied by the seller, not authenticated by Legacy Homeware. Availability and price can change. Confirm dimensions, provenance, restoration and electrical safety before purchasing."}</p>
        {object.image && <p className="record-caveat"><a href={object.image.evidenceUrl} target="_blank" rel="noopener noreferrer">View object-level image rights evidence ↗</a></p>}
      </div>
    </article>
    {related.length > 0 && <section className="shell related-objects"><div className="section-heading"><h2 className="font-serif text-4xl">In conversation with</h2><Link href={`/collections/${collection.slug}`} className="text-link">More {collection.era} ↗</Link></div><div className="object-grid">{related.map((entry) => <ObjectCard key={entry.id} object={entry} />)}</div></section>}
  </>;
}
