import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { STYLES } from "@/lib/details";
import { ELEMENT_GROUPS, groupHref } from "@/data/elementGroups";
import { ARTICLES } from "@/data/journal";

const linkClass = "text-[14px] text-white/65 hover:text-white transition-colors";
const headClass = "text-[11px] tracking-[0.18em] uppercase text-white/40 mb-5";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12 py-20">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="font-serif text-[28px] font-medium text-white">{SITE_NAME}</Link>
            <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-white/40">The Architectural Design Library</p>
            <p className="mt-6 text-[14px] leading-[1.8] text-white/55 max-w-sm">
              A growing reference library of architectural styles and the doors, cabinetry, paneling and woodwork that define them.
              Every entry is a documented example, credited to the museum, archive or photographer it comes from.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className={headClass}>Styles</p>
            <ul className="space-y-2.5">
              {STYLES.map((s) => (
                <li key={s.slug}><Link href={`/styles/${s.slug}`} className={linkClass}>{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className={headClass}>Elements</p>
            <ul className="space-y-2.5">
              {ELEMENT_GROUPS.map((g) => (
                <li key={g.slug}><Link href={groupHref(g)} className={linkClass}>{g.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className={headClass}>Library</p>
            <ul className="space-y-2.5">
              <li><Link href="/library" className={linkClass}>Design Library</Link></li>
              <li><Link href="/journal" className={linkClass}>Journal</Link></li>
              {ARTICLES.slice(0, 3).map((a) => (
                <li key={a.slug}><Link href={`/journal/${a.slug}`} className={linkClass}>{a.shortTitle ?? a.title}</Link></li>
              ))}
              <li><Link href="/colorado" className={linkClass}>Colorado architecture</Link></li>
              <li><Link href="/collections" className={linkClass}>Hardware &amp; lighting concepts</Link></li>
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/about#contact" className={linkClass}>Contact</Link></li>
              <li><Link href="/about#image-credits" className={linkClass}>Image credits &amp; rights</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[12px] text-white/35">© {new Date().getFullYear()} {SITE_NAME}</p>
          <p className="text-[12px] text-white/35">
            Photographs are credited on each entry to the museums, archives and photographers who made them.
          </p>
        </div>
      </div>
    </footer>
  );
}
