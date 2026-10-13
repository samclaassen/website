import Image from "next/image";
import Link from "next/link";
import type { CuratedObject } from "@/lib/objects";
import { getCollection } from "@/lib/collections";

export function ObjectCard({ object, priority = false }: { object: CuratedObject; priority?: boolean }) {
  return (
    <article className="object-card">
      {object.image && (
        <Link href={`/objects/${object.id}`} className="object-image" aria-label={`Explore ${object.title}`}>
          <Image src={object.image.src} alt={object.image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" className="object-contain p-5" priority={priority} />
        </Link>
      )}
      <div className="object-card-copy">
        <p className="eyebrow">{getCollection(object.era)?.era} <span aria-hidden="true">/</span> {object.type}</p>
        <h3 className="font-serif text-2xl leading-tight"><Link href={`/objects/${object.id}`}>{object.title}</Link></h3>
        <p className="text-sm text-muted mt-3">{object.creator}</p>
        <p className="text-sm text-muted mt-1">{object.date}</p>
        <div className="card-source">
          <span>{object.kind === "museum" ? "Museum reference · Not for sale" : "Seller listing"}</span>
          <Link href={`/objects/${object.id}`} aria-label={`View record for ${object.title}`}>View record <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </article>
  );
}
