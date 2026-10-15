import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { COLLECTIONS } from "@/lib/collections";
import { STYLES, ELEMENTS } from "@/lib/details";

const linkClass = "text-[14px] text-white/60 hover:text-white transition-colors";
const headClass = "text-[13px] tracking-[0.15em] uppercase text-white/40 mb-6";

export function Footer() {
  return (
    <footer className="bg-stone text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-20">
          {/* Brand */}
          <div className="md:col-span-3">
            <Link href="/" className="group">
              <span className="font-serif text-2xl font-semibold text-white">{SITE_NAME}</span>
            </Link>
            <p className="mt-6 text-[14px] leading-[1.8] text-white/50 max-w-sm">
              A searchable archive of architectural details, and custom woodwork made to order. Based in Colorado.
            </p>
            <ul className="mt-8 space-y-3">
              <li><Link href="/search" className={linkClass}>Search the archive</Link></li>
              <li><Link href="/custom" className={linkClass}>Custom work and pricing</Link></li>
              <li><Link href="/request" className={linkClass}>Start a request</Link></li>
              <li><Link href="/colorado" className={linkClass}>Colorado</Link></li>
              <li><Link href="/colorado/custom-cabinet-cost" className={linkClass}>Custom cabinet cost in Colorado</Link></li>
              <li><Link href="/about" className={linkClass}>About</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className={headClass}>Styles</p>
            <ul className="space-y-3">
              {STYLES.map((s) => (
                <li key={s.slug}><Link href={`/styles/${s.slug}`} className={linkClass}>{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className={headClass}>Elements</p>
            <ul className="space-y-3">
              {ELEMENTS.filter((e) => e.custom_status === "orderable").map((e) => (
                <li key={e.slug}><Link href={`/elements/${e.slug}`} className={linkClass}>{e.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className={headClass}>Hardware by era</p>
            <ul className="space-y-3">
              {COLLECTIONS.map((col) => (
                <li key={col.slug}><Link href={`/collections/${col.slug}`} className={linkClass}>{col.era}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] text-white/30">© {new Date().getFullYear()} {SITE_NAME}</p>
          <p className="text-[12px] text-white/30">
            Images courtesy of the museums and archives credited on each page.
          </p>
        </div>
      </div>
    </footer>
  );
}
