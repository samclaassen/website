import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { COLLECTIONS } from "@/lib/collections";

export function Footer() {
  return (
    <footer className="border-t border-brand-warm bg-brand-dark text-brand-cream/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl font-semibold text-brand-cream">
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm text-brand-cream/60 max-w-xs">
              {SITE_TAGLINE}. Decorative home hardware cast in solid metal, inspired by the great architectural eras.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-gold">
              Collections
            </h3>
            <ul className="mt-4 space-y-2">
              {COLLECTIONS.map((col) => (
                <li key={col.slug}>
                  <Link
                    href={`/collections/${col.slug}`}
                    className="text-sm text-brand-cream/60 hover:text-brand-cream transition-colors"
                  >
                    {col.name} — {col.era}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-gold">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-brand-cream/60 hover:text-brand-cream transition-colors">
                  About &amp; Mission
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm text-brand-cream/60 hover:text-brand-cream transition-colors">
                  All Collections
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-cream/10 pt-6 text-center text-xs text-brand-cream/40">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
