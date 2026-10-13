import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { COLLECTIONS } from "@/lib/collections";

export function Footer() {
  return <footer className="site-footer"><div className="shell"><div className="footer-grid"><div><Link href="/" className="font-serif text-3xl">{SITE_NAME}</Link><p>A considered index of lighting, hardware and decorative objects. Independently curated, with a source behind every selection.</p><Link href="/about#method" className="text-link">Our curation policy ↗</Link></div><nav aria-label="Footer eras"><span className="eyebrow">Eras, styles & traditions</span><ul>{COLLECTIONS.map((collection) => <li key={collection.slug}><Link href={`/collections/${collection.slug}`}>{collection.era}</Link></li>)}</ul></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {SITE_NAME}</span><span>Museum references are not for sale. Seller availability may change.</span></div></div></footer>;
}
