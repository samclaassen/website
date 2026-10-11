import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";
import { COLLECTIONS } from "@/lib/collections";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo-dark.png"
                alt="Legacy Homeware"
                width={36}
                height={36}
                className="rounded-sm"
              />
              <span className="font-serif text-lg font-semibold text-brand-cream">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-4 text-sm text-brand-cream/40 max-w-xs leading-relaxed">
              The visual archive of decorative hardware — a curated study of
              ornamental craft across seven architectural eras.
            </p>
          </div>

          {/* Eras */}
          <div>
            <h3 className="text-[10px] font-medium tracking-[0.25em] uppercase text-brand-gold">
              Eras
            </h3>
            <ul className="mt-4 space-y-2">
              {COLLECTIONS.map((col) => (
                <li key={col.slug}>
                  <Link
                    href={`/collections/${col.slug}`}
                    className="text-sm text-brand-cream/40 hover:text-brand-cream transition-colors"
                  >
                    {col.era}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Browse */}
          <div>
            <h3 className="text-[10px] font-medium tracking-[0.25em] uppercase text-brand-gold">
              Browse
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-brand-cream/40 hover:text-brand-cream transition-colors"
                >
                  Full Archive
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-sm text-brand-cream/40 hover:text-brand-cream transition-colors"
                >
                  All Eras
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-brand-cream/40 hover:text-brand-cream transition-colors"
                >
                  About & Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-medium tracking-[0.25em] uppercase text-brand-gold">
              Legacy Homeware
            </h3>
            <p className="mt-4 text-sm text-brand-cream/40 leading-relaxed">
              Decorative home hardware cast in solid metal — inspired by the
              great architectural eras.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-brand-cream/10 pt-6 text-center text-xs text-brand-cream/25">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
