import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArchiveExplorer } from "@/components/archive/ArchiveExplorer";
import { COLLECTIONS } from "@/lib/collections";
import { OBJECTS } from "@/lib/objects";

export const metadata = generatePageMetadata({ title: SITE_NAME, description: SITE_DESCRIPTION, path: "/" });

export default function HomePage() {
  const featured = OBJECTS.find((object) => object.id === "cma-93149")!;

  return (
    <>
      <JsonLd data={webPageJsonLd({ title: SITE_NAME, description: SITE_DESCRIPTION, path: "/" })} />
      <section className="curation-hero shell">
        <div className="hero-copy">
          <p className="eyebrow">An independent collection of remarkable objects</p>
          <h1>Light, form,<br />and the details<br /><em>that last.</em></h1>
          <p className="hero-description">A considered index of lighting, hardware and decorative objects. Real pieces. Named makers. A source behind every selection.</p>
          <Link href="#archive" className="cta-button">Explore the index <span aria-hidden="true">↓</span></Link>
          <p className="hero-meta">{OBJECTS.length} sourced records <span aria-hidden="true">/</span> {COLLECTIONS.length} eras, styles & traditions</p>
        </div>
        <figure className="hero-object">
          <Link href={`/objects/${featured.id}`} className="hero-object-image" aria-label={`Explore ${featured.title}`}>
            <Image src={featured.image!.src} alt={featured.image!.alt} fill priority sizes="(max-width: 800px) 100vw, 52vw" className="object-contain p-6 sm:p-10" />
          </Link>
          <figcaption><div><span className="eyebrow">In focus / Art Nouveau</span><Link href={`/objects/${featured.id}`} className="font-serif text-2xl">{featured.title} <span aria-hidden="true">↗</span></Link><span>Tiffany Studios · {featured.date}</span></div><span className="image-credit">Cleveland Museum of Art<br />CC0 · Museum reference, not for sale</span></figcaption>
        </figure>
      </section>
      <nav className="era-strip" aria-label="Browse by era and style"><div className="shell"><span className="eyebrow">Find your thread</span>{COLLECTIONS.map((collection) => <Link key={collection.slug} href={`/collections/${collection.slug}`}>{collection.era} <span aria-hidden="true">↗</span></Link>)}</div></nav>
      <ArchiveExplorer objects={OBJECTS} />
      <section className="curation-note shell"><p className="eyebrow">The principle</p><h2 className="font-serif">An object is only as interesting<br />as the story we can actually tell.</h2><p>We distinguish documented history from dealer attribution, period originals from re-editions, and inspiration from something you can buy.</p><Link href="/about" className="text-link">How we curate <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
