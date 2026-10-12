import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { COLLECTIONS } from "@/lib/collections";

export function Footer() {
  return (
    <footer className="border-t border-brand-dark/10 bg-brand-dark text-white">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-10 xl:px-16">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="group">
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-white">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-6 text-base leading-[1.8] text-white/50 max-w-sm">
              A visual study of ornamental home hardware across seven
              architectural eras. Documenting the craft traditions that built
              beautiful homes.
            </p>
          </div>

          {/* Eras */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/40 mb-6">
              Eras
            </p>
            <ul className="space-y-3">
              {COLLECTIONS.map((col) => (
                <li key={col.slug}>
                  <Link
                    href={`/collections/${col.slug}`}
                    className="text-[14px] text-white/60 hover:text-white transition-colors"
                  >
                    {col.era}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/40 mb-6">
              Navigate
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/collections"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  All eras
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] text-white/30">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-[12px] text-white/30">
            Handmade hardware, historically grounded.
          </p>
        </div>
      </div>
    </footer>
  );
}
