import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import { COLLECTIONS } from "@/lib/collections";
import { OBJECTS } from "@/lib/objects";

export const metadata = generatePageMetadata({ title: "Eras & styles", description: "Explore documented lighting, hardware and decorative objects by era, style and making tradition. An independent, source-led curation.", path: "/collections" });

export default function CollectionsPage() {
  return (
    <div className="shell page-section">
      <header className="page-intro"><p className="eyebrow">Ways of looking</p><h1 className="font-serif">Eras, styles<br /><em>& traditions.</em></h1><p>Design rarely fits inside a single date range. These are paths through the index—not rigid classifications. Later revivals and re-editions keep their actual dates.</p></header>
      <div className="era-directory">
        {COLLECTIONS.map((collection, index) => {
          const objects = OBJECTS.filter((object) => object.era === collection.slug);
          const reference = objects.find((object) => object.image);
          return <article key={collection.slug} className="era-directory-row"><span className="index-number">{String(index + 1).padStart(2, "0")}</span><div><p className="eyebrow">{collection.period}</p><h2 className="font-serif text-3xl sm:text-4xl"><Link href={`/collections/${collection.slug}`}>{collection.era} <span aria-hidden="true">↗</span></Link></h2><p className="era-description">{collection.description}</p><p className="text-sm text-muted">{objects.length} records · {objects.filter((object) => object.image).length} open-access photographs</p></div>{reference?.image ? <Link href={`/objects/${reference.id}`} className="era-reference"><div className="relative h-44"><Image src={reference.image.src} alt={reference.image.alt} fill className="object-contain" sizes="220px" /></div><span>{reference.title} · {reference.source}</span></Link> : <div className="era-no-image"><span className="eyebrow">From the dealers</span><p>Real listings, with photographs on the source site.</p><Link href={`/collections/${collection.slug}`} className="text-link">Explore the selection ↗</Link></div>}</article>;
        })}
      </div>
    </div>
  );
}
